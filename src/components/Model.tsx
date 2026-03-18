const hubs = [
  {
    colour: 'bg-[#1D7A6B]',
    icon: '📚',
    title: 'Learning Hub',
    items: [
      '6 multi-age classes × ~10 students (K–6)',
      'Dual differentiation: extension AND scaffolds in the same plan',
      'Flexible grouping by readiness and interest, not just age',
      'Personalised learning windows inside 6am–10pm operating day',
    ],
  },
  {
    colour: 'bg-[#1B2A4A]',
    icon: '👨‍👩‍👧',
    title: 'Family Hub',
    items: [
      'Early-years and sibling programs during the day',
      'Parent lounge, co-working Wi-Fi, crèche',
      'Evening adult programs: NDIS, financial counselling, skills classes',
      'Family & pastoral coordinator for daily triage and advocacy',
    ],
  },
  {
    colour: 'bg-[#D4A017]',
    icon: '🤖',
    title: 'Tech & Innovation Hub',
    items: [
      'AI assistive tools, communication tech, wearables embedded in daily routines',
      'Smart-home and telehealth setups in real family life',
      'University and industry partners co-designing products with families',
      'R&D platform with pathways to disability and aged-care markets',
    ],
  },
  {
    colour: 'bg-[#E8634A]',
    icon: '🛒',
    title: 'Life-Skills & Community Hub',
    items: [
      'On-site mini supermarket for daily money, social and sensory practice',
      'Weekly community supermarket blocks and travel training',
      'Arts, movement, gardening, maker spaces as core curriculum',
      'Structured employment pathways with local partners',
    ],
  },
];

export default function Model() {
  return (
    <section id="model" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">The Model</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          Four interlocking hubs. One ecosystem.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-12 text-lg">
          Open 6am–10pm, the hub bends around the child and family&apos;s real day — not the other way around.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {hubs.map((h) => (
            <div key={h.title} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className={`${h.colour} text-white px-6 py-4 flex items-center gap-3`}>
                <span className="text-3xl">{h.icon}</span>
                <h3 className="font-bold text-xl">{h.title}</h3>
              </div>
              <ul className="bg-[#F5F0E8] px-6 py-4 space-y-2">
                {h.items.map((item) => (
                  <li key={item} className="flex gap-2 text-gray-700">
                    <span className="text-[#1D7A6B] font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
