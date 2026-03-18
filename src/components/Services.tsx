const rows = [
  { service: 'Classroom teacher', j1: true, j2: true, j3: true, j4: true, j5: true },
  { service: 'Learning coach / ESO', j1: true, j2: true, j3: true, j4: true, j5: true },
  { service: 'Psychologist / wellbeing', j1: true, j2: true, j3: true, j4: true, j5: true },
  { service: 'OT / Allied health / Pool', j1: true, j2: false, j3: true, j4: false, j5: true },
  { service: 'Speech / Communication', j1: true, j2: true, j3: true, j4: true, j5: true },
  { service: 'Tech & Innovation lead', j1: true, j2: true, j3: true, j4: true, j5: true },
  { service: 'Family & Pastoral coordinator', j1: true, j2: true, j3: true, j4: true, j5: true },
  { service: 'Mini supermarket', j1: false, j2: true, j3: false, j4: true, j5: false },
  { service: 'Community supermarket block', j1: false, j2: true, j3: false, j4: false, j5: false },
  { service: 'Arts & movement specialist', j1: false, j2: false, j3: true, j4: false, j5: true },
  { service: 'Community life-skills specialist', j1: true, j2: true, j3: true, j4: true, j5: true },
  { service: 'Parent programs / adult classes', j1: true, j2: true, j3: true, j4: true, j5: true },
  { service: 'Early-years / sibling programs', j1: false, j2: false, j3: false, j4: false, j5: true },
];

const heads = ['Service / Role / Space', '🔭 Scientist', '🛒 Retail', '🎵 Musician', '📈 Analyst', '🐾 Complex'];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">Services Touched</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          One hub. Five children. Every service in play.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10 text-lg">
          This table shows which services and roles each of the five children touches during a typical week &mdash;
          and why the richer staffing model is not a cost, but the product.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-[#1B2A4A] text-white">
              <tr>
                {heads.map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.service} className={i % 2 === 0 ? 'bg-[#F5F0E8]' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-[#1B2A4A]">{r.service}</td>
                  {[r.j1, r.j2, r.j3, r.j4, r.j5].map((v, idx) => (
                    <td key={idx} className="px-4 py-3 text-center">
                      {v ? (
                        <span className="text-[#1D7A6B] font-bold text-lg">✓</span>
                      ) : (
                        <span className="text-gray-300">–</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
