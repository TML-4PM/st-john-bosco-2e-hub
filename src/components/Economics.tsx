const rows = [
  { item: 'Students', value: '~60 K–6', note: '6 classes × ~10' },
  { item: 'Total FTE', value: '~23–24', note: 'Intensive hub model' },
  { item: 'Staff salary cost', value: '≈ $2.5m / year', note: 'NSW band assumptions' },
  { item: 'Non-salary (20%)', value: '≈ $0.5m / year', note: 'Facilities, ICT, PD, insurance' },
  { item: 'Total recurrent', value: '≈ $3.0m / year', note: '~$50k per student' },
  { item: 'Site size', value: '~0.6 – 1.0 ha', note: 'Special/small school scale' },
  { item: 'Capital band', value: '$10 – 20m (plan $12–15m)', note: 'New/refurb incl. pool, mini supermarket, labs' },
  { item: 'Recurrent funding stack', value: 'SRS + disability loadings + Catholic programs + moderate fees + philanthropy', note: 'NSW/CSNSW frameworks' },
];

export default function Economics() {
  return (
    <section id="economics" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">Economics</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          Order-of-magnitude numbers.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10 text-lg">
          Viable at 60 students with disciplined staffing. Capital funded through grants, diocesan investment and tech/philanthropy co-investment.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-[#1B2A4A] text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Item</th>
                <th className="px-4 py-3 text-left font-semibold">Number</th>
                <th className="px-4 py-3 text-left font-semibold">Note</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.item} className={i % 2 === 0 ? 'bg-[#F5F0E8]' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-[#1B2A4A]">{r.item}</td>
                  <td className="px-4 py-3 font-mono font-semibold text-[#1D7A6B]">{r.value}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
