import { NextResponse } from "next/server";

const DEMO: Record<string, { count: number; avg: number }> = {
  "1": { count: 14, avg: 7.4 },
  "2": { count: 14, avg: 6.8 },
  "3": { count: 14, avg: 7.1 },
  "4": { count: 14, avg: 7.6 },
  "5": { count: 14, avg: 8.2 },
};

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return NextResponse.json(DEMO);
  }

  try {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    const res = await fetch(
      `${url}/rest/v1/val_outcomes?select=domain_id,score&date=gte.${threeMonthsAgo.toISOString().slice(0, 10)}`,
      {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return NextResponse.json(DEMO);
    }

    const rows: { domain_id: number; score: number }[] = await res.json();

    const byDomain: Record<string, { count: number; avg: number }> = {};
    for (const row of rows) {
      const k = String(row.domain_id);
      if (!byDomain[k]) byDomain[k] = { count: 0, avg: 0 };
      const d = byDomain[k];
      d.avg = (d.avg * d.count + Number(row.score)) / (d.count + 1);
      d.count += 1;
    }

    return NextResponse.json(Object.keys(byDomain).length ? byDomain : DEMO);
  } catch {
    return NextResponse.json(DEMO);
  }
}
