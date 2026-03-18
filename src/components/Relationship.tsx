const rows = [
  {
    dim: 'School type',
    mainstream: 'Regular primary + gifted add-on (Newman)',
    bosco: 'Whole school designed for 2e from the ground up',
  },
  {
    dim: 'Hours',
    mainstream: '8:30am – 3:00pm standard',
    bosco: '6am – 10pm, personalised windows',
  },
  {
    dim: 'Cohort',
    mainstream: 'All abilities; gifted stream is ~10–15% of school',
    bosco: '100% 2e / high-potential neurodiverse',
  },
  {
    dim: 'Family support',
    mainstream: 'Parent evenings, P&F; external referrals',
    bosco: 'On-site coordinator, crèche, sibling programs, NDIS, adult classes',
  },
  {
    dim: 'Life-skills / employment',
    mainstream: 'Some excursions, community activities',
    bosco: 'Mini supermarket, community blocks, employment pathways built in',
  },
  {
    dim: 'Tech / assistive tech',
    mainstream: 'Standard school devices',
    bosco: 'AI tools, wearables, smart-home, R&D with industry partners',
  },
  {
    dim: 'Who is it for?',
    mainstream: 'Many 2e kids who are managing OK',
    bosco: 'Kids for whom mainstream has already failed or will soon',
  },
];

export default function Relationship() {
  return (
    <section id="relationship" className="py-20 px-4 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">Our Place in the System</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          Not competition. A different approach.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10 text-lg">
          Newman and other gifted programs are mainstream schools with gifted streams.
          St John Bosco is a specialist hub for children who don&apos;t fit mainstream — even with gifted support.
          We are part of the Catholic continuum of provision, not a rival to it.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-[#1B2A4A] text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                <th className="px-4 py-3 text-left font-semibold">Newman / Mainstream Catholic</th>
                <th className="px-4 py-3 text-left font-semibold">St John Bosco 2e Hub</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.dim} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]'}>
                  <td className="px-4 py-3 font-semibold text-[#1B2A4A]">{r.dim}</td>
                  <td className="px-4 py-3 text-gray-600">{r.mainstream}</td>
                  <td className="px-4 py-3 text-[#1D7A6B] font-medium">{r.bosco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 bg-[#1B2A4A] text-white rounded-2xl px-8 py-6">
          <p className="text-lg font-semibold mb-2">
            &ldquo;When Newman isn&apos;t enough, there is now somewhere else in Catholic education for that family to go.&rdquo;
          </p>
          <p className="text-gray-300 text-sm">
            St John Bosco extends the reach of Catholic provision — it does not compete with it.
          </p>
        </div>
      </div>
    </section>
  );
}
