const rows = [
  { role: 'Principal', team: 'Leadership', fte: '1.0' },
  { role: 'Director of Learning & Innovation', team: 'Leadership', fte: '1.0' },
  { role: 'Classroom Teachers (×6)', team: 'Teaching', fte: '6.0' },
  { role: 'Learning Coaches / ESOs (×6)', team: 'Intensive Support', fte: '6.0' },
  { role: 'Psychologist / Neuropsychologist', team: 'Specialists', fte: '1.0' },
  { role: 'Allied Health Lead (OT/Physio)', team: 'Specialists', fte: '1.0' },
  { role: 'Speech & Communication Specialist', team: 'Specialists', fte: '1.0' },
  { role: 'Arts & Movement Specialist', team: 'Specialists', fte: '1.0' },
  { role: 'Community Life-Skills Specialist', team: 'Specialists', fte: '1.0' },
  { role: 'Learning Support Coordinator (NCCD)', team: 'Coordination', fte: '1.0' },
  { role: 'Family & Pastoral Coordinator', team: 'Coordination', fte: '1.0' },
  { role: 'Tech & Innovation Lead', team: 'Coordination', fte: '1.0' },
  { role: 'Admin / Ops (×2)', team: 'Operations', fte: '2.0' },
];

const teamColour: Record<string, string> = {
  Leadership: 'bg-[#1B2A4A] text-white',
  Teaching: 'bg-[#1D7A6B] text-white',
  'Intensive Support': 'bg-[#D4A017] text-[#1B2A4A]',
  Specialists: 'bg-[#E8634A] text-white',
  Coordination: 'bg-[#5B8FA8] text-white',
  Operations: 'bg-gray-400 text-white',
};

export default function FTETable() {
  return (
    <section id="fte" className="py-20 px-4 bg-[#F5F0E8]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">The Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          ~23–24 FTE for 60 students.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10 text-lg">
          Every role is in constant productive use across the five journeys. This is not overhead — it is the model.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-[#1B2A4A] text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Role</th>
                <th className="px-4 py-3 text-left font-semibold">Team</th>
                <th className="px-4 py-3 text-right font-semibold">FTE</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.role} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]'}>
                  <td className="px-4 py-3 font-medium text-[#1B2A4A]">{r.role}</td>
                  <td className="px-4 py-3">
                    <span className={`${teamColour[r.team]} text-xs font-semibold px-2 py-1 rounded-full`}>
                      {r.team}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-[#1D7A6B]">{r.fte}</td>
                </tr>
              ))}
              <tr className="bg-[#1B2A4A] text-white font-bold">
                <td className="px-4 py-3" colSpan={2}>Total FTE</td>
                <td className="px-4 py-3 text-right font-mono">23.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
