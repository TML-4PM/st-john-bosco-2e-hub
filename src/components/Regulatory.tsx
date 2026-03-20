export default function Regulatory() {
  return (
    <section id="regulatory" className="py-20 px-4 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">
          Regulatory & Funding Path
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          Built to fit NESA and funding reality.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
          <div>
            <h3 className="font-bold text-base mb-3">Registration sequence</h3>
            <ol className="list-none space-y-3">
              {[
                ["01", "Establish not-for-profit entity and founding board."],
                ["02", "Lock educational model, premises plan and governance policy."],
                ["03", "Prepare NESA initial registration submission."],
                ["04", "Document curriculum, policies, child safety, disability access."],
                ["05", "Open with disciplined scope once approvals are in place."],
              ].map(([n, t]) => (
                <li key={n} className="flex gap-3 items-start">
                  <span className="text-[#1D7A6B] font-mono font-bold shrink-0">{n}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-bold text-base mb-3">Funding spine</h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-[#1D7A6B]">→</span> SRS base + disability loadings once eligible.</li>
              <li className="flex gap-2"><span className="text-[#1D7A6B]">→</span> Catholic sector targeted programs where applicable.</li>
              <li className="flex gap-2"><span className="text-[#1D7A6B]">→</span> Specialist day-school fees (not elite, not bargain).</li>
              <li className="flex gap-2"><span className="text-[#1D7A6B]">→</span> CBGA/BGAS capital grants, diocesan support, philanthropy.</li>
              <li className="flex gap-2"><span className="text-[#1D7A6B]">→</span> Impact investment from Tech 4 Humanity ecosystem.</li>
            </ul>
            <div className="mt-6 bg-white rounded-xl p-4 border border-gray-200">
              <p className="text-xs text-gray-500">
                Target viability: ~60 students, ~23–24 FTE, ~$3M/year recurrent. Scale only
                when utilisation, waitlist and reputation are confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
