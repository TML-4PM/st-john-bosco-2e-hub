export default function Hero() {
  return (
    <section className="bg-[#1B2A4A] text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#D4A017] font-semibold tracking-widest uppercase text-sm mb-4">
          Sutherland Shire · Southern Sydney
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          St John Bosco<br />
          <span className="text-[#1D7A6B]">2e Learning &amp; Family Hub</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Southern Sydney&apos;s first Catholic K&ndash;6 learning and family hub purpose-built
          for twice-exceptional and high-potential neurodiverse children
          &mdash; and the families who walk beside them.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#model"
            className="bg-[#1D7A6B] hover:bg-[#15614f] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            See the Model
          </a>
          <a
            href="#journeys"
            className="border border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-[#1B2A4A] px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Read the Journeys
          </a>
        </div>
        <p className="mt-10 text-gray-400 text-sm italic">
          Open 6am – 10pm · Personalised learning windows · Family-first design
        </p>
      </div>
    </section>
  );
}
