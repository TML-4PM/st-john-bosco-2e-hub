export default function Enrolment() {
  return (
    <section id="enrolment" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">
          Enrolment Engine
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          Bright but struggling. Not just bright.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10 text-lg">
          Valdocco is for families whose child is clearly capable and clearly not fitting
          mainstream — even with gifted or support programs.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
          <div>
            <div className="mb-6">
              <h3 className="font-bold text-base mb-2 text-[#1B2A4A]">Who Valdocco is for</h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#1D7A6B] font-bold">✓</span> Children ahead in some areas, struggling in others.</li>
                <li className="flex gap-2"><span className="text-[#1D7A6B] font-bold">✓</span> Families juggling tutors, therapy and school with limited progress.</li>
                <li className="flex gap-2"><span className="text-[#1D7A6B] font-bold">✓</span> Students nudged toward behaviour or SSP pathways despite clear upside.</li>
                <li className="flex gap-2"><span className="text-[#1D7A6B] font-bold">✓</span> Diagnosed or suspected 2e: ASD, ADHD, LD with concurrent strengths.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-2 text-[#1B2A4A]">Who it is not for</h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Children thriving in mainstream or standard gifted settings.</li>
                <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Situations needing intensive clinical or hospital-school provision.</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-base mb-3 text-[#1B2A4A]">Founding intake sequence</h3>
            <ol className="list-none space-y-4">
              {[
                ["01", "Enquiry", "Short form — core concern, key strengths, reports optional."],
                ["02", "Fit call", "20 min with founding staff to explore fit honestly."],
                ["03", "Info session", "Tour, Q&A, meet the team."],
                ["04", "Child visit", "Half-day visit, transition plan drafted."],
                ["05", "Offer", "Conditional offer only where the model can genuinely help."],
              ].map(([n, h, t]) => (
                <li key={n} className="flex gap-3">
                  <span className="bg-[#1D7A6B] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                  <div>
                    <p className="font-semibold text-[#1B2A4A]">{h}</p>
                    <p className="text-gray-600">{t}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
