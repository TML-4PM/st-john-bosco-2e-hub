"use client";

import { useEffect, useState } from "react";

type DomainSummary = { count: number; avg: number };
type Summary = Record<string, DomainSummary>;

const DOMAIN_LABELS: Record<string, string> = {
  "1": "Learning",
  "2": "Regulation",
  "3": "Confidence",
  "4": "Participation",
  "5": "Family alignment",
};

function OutcomeSnapshot() {
  const [data, setData] = useState<Summary | null>(null);

  useEffect(() => {
    fetch("/api/outcomes")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data) return null;

  return (
    <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <h3 className="font-bold text-base text-[#1B2A4A] mb-1">
        Early outcome snapshot
      </h3>
      <p className="text-xs text-gray-400 mb-4">
        Illustrative 3-month averages by domain. Live system shows anonymised, aggregated trends only.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead>
            <tr className="bg-[#1B2A4A] text-white">
              <th className="px-3 py-2 text-left font-semibold">Domain</th>
              <th className="px-3 py-2 text-right font-semibold">Avg (0–10)</th>
              <th className="px-3 py-2 text-right font-semibold">
                <span className="relative group cursor-default">
                  Datapoints
                  <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 bottom-full right-0 w-40">
                    Observations recorded across pilot cohort
                  </span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([k, v], i) => (
              <tr key={k} className={i % 2 === 0 ? "bg-[#F5F0E8]" : "bg-white"}>
                <td className="px-3 py-2 font-medium">{DOMAIN_LABELS[k] ?? k}</td>
                <td className="px-3 py-2 text-right font-mono">
                  <span
                    className="inline-block rounded px-2 py-0.5"
                    style={{
                      background: `hsl(${(v.avg / 10) * 120}, 60%, 90%)`,
                      color: "#1B2A4A",
                    }}
                  >
                    {v.avg.toFixed(1)}
                  </span>
                </td>
                <td className="px-3 py-2 text-right font-mono text-gray-500">{v.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function T4HContext() {
  return (
    <section id="t4h" className="py-20 px-4 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">
          Tech 4 Humanity
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          A flagship for human-first technology.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10 text-lg">
          Valdocco is part of the Tech 4 Humanity ecosystem: every intervention aims to
          improve life and leaves a measurable, ethical signal that helps us learn what
          works for whom.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-base mb-2 text-[#1B2A4A]">Shared outcome model</h3>
            <p>
              Learning, regulation, confidence, participation, independence and family
              alignment — tracked consistently across Valdocco, Outcome Ready and Expand Achieve.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-base mb-2 text-[#1B2A4A]">Signals, not guesswork</h3>
            <p>
              Classroom, behaviour and environment signals feed ethical analytics and teacher
              tools — so adjustments are based on what actually helps children, not opinion.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-base mb-2 text-[#1B2A4A]">Evidence and consent</h3>
            <p>
              Every outcome claim is backed by evidence, with parent and student consent
              respected at each step. That discipline underpins R&D credibility and the
              funding story.
            </p>
          </div>
        </div>
        <OutcomeSnapshot />
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            Powered by Tech 4 Humanity · Outcome Ready · Expand Achieve · ConsentX
          </p>
        </div>
      </div>
    </section>
  );
}
