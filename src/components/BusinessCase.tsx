export default function BusinessCase() {
  return (
    <section id="business" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">
          Business Case
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          Clear gap, disciplined launch.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10 text-lg">
          The Shire has no dedicated 2e primary hub. Existing options are mainstream gifted
          programs, special schools that under-challenge cognition, or a patchwork of tutors
          and therapy. Valdocco fills that white space with a credibility-first, not
          scale-first, model.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-[#F5F0E8] rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-[#1B2A4A] mb-2 text-base">Demand thesis</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Shire-wide 5–14 cohort in the tens of thousands.</li>
              <li>Even a small share of "bright but not thriving" fills a 60-student hub.</li>
              <li>Parents already spending on fragmented, uncoordinated supports.</li>
            </ul>
          </div>
          <div className="bg-[#F5F0E8] rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-[#1B2A4A] mb-2 text-base">Competitive map</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Newman schools: mainstream with gifted streams, not 2e-integrated.</li>
              <li>St Lucy's / SSPs: disability-first, not strength-first.</li>
              <li>No K–6 hub uniting advanced learning and disability-informed design.</li>
            </ul>
          </div>
          <div className="bg-[#F5F0E8] rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-[#1B2A4A] mb-2 text-base">Investment logic</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Start small — prove outcomes and waitlist before scaling.</li>
              <li>Secure not-for-profit status and SRS + disability funding.</li>
              <li>Expand capacity and sites only when economics and reputation are proven.</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm text-center">
          <div className="border border-[#1D7A6B] rounded-xl p-4">
            <p className="text-2xl font-bold text-[#1D7A6B]">60</p>
            <p className="text-gray-600 mt-1">founding student target</p>
          </div>
          <div className="border border-[#1D7A6B] rounded-xl p-4">
            <p className="text-2xl font-bold text-[#1D7A6B]">~$3M</p>
            <p className="text-gray-600 mt-1">viable annual operating cost</p>
          </div>
          <div className="border border-[#1D7A6B] rounded-xl p-4">
            <p className="text-2xl font-bold text-[#1D7A6B]">150+</p>
            <p className="text-gray-600 mt-1">qualified enquiries before open</p>
          </div>
        </div>
      </div>
    </section>
  );
}
