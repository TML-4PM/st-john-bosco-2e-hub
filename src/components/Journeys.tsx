const journeys = [
  {
    emoji: '🔭',
    name: 'Early-morning scientist',
    age: 'Age 8 · ASD/ADHD',
    window: '6am – 12pm',
    summary:
      'Arrives at 6am for a quiet sensory start, then swimming/science in the heated pool, then two hours of deep Mars-habitat project work. Home by midday; family uses telehealth OT in the evening from home.',
    services: ['Learning coach', 'Heated pool', 'Teacher (project)', 'Psychologist (group)', 'Tech lead (AI research tools)', 'Family coordinator'],
    outcomes: 'Regulated and intellectually fed instead of melting down. Parents\'s work schedule is intact. Passion for science accelerates into real project work.',
  },
  {
    emoji: '🛒',
    name: 'Retail & life-skills learner',
    age: 'Age 11 · Autism, sensory',
    window: '10am – 8pm',
    summary:
      'Morning in the on-site mini supermarket (pricing, scanning, customer role-play). Lunch. Walks to local Woolworths with life-skills specialist — shopping for hub meals AND home list. Parent attends NDIS counselling session on-site while child is supported.',
    services: ['Teacher (numeracy)', 'Life-skills specialist', 'Speech pathologist', 'Learning coach', 'Mini supermarket', 'Community supermarket block', 'Family coordinator (NDIS)'],
    outcomes: 'Moving toward real supported employment. Family\'s NDIS plan is better managed. Independence in community settings grows week by week.',
  },
  {
    emoji: '🎵',
    name: 'Late-day musician',
    age: 'Age 9 · Anxiety, gifted',
    window: '1pm – 7pm',
    summary:
      'Soft start at 1pm in the music/arts room. Small-group literacy and numeracy 1–3pm. AI music composition block in innovation lab. On-site karate and piano — both counted as core curriculum. Parent picks up at 7pm after a day\'s work.',
    services: ['Teacher (literacy/numeracy)', 'Arts & movement specialist', 'Tech lead (AI music tools)', 'Psychologist (anxiety)', 'OT (movement plan)', 'Community life-skills specialist'],
    outcomes: 'Composing with AI tools and preparing for a real performance. Anxiety managed within learning day. Parents no longer miss work for school drop-offs.',
  },
  {
    emoji: '📈',
    name: '11-year-old market analyst',
    age: 'Age 11 · ASD, anxiety',
    window: '7am – 3:30pm',
    summary:
      'Arrives at 7am to check ASX open with tech lead. Core maths/writing anchored to his "market diary". Psychologist group on risk and anxiety. Once a week: parents bring real business data — under teacher supervision he creates visualisations they actually use. He\'s already talking to the Big Four.',
    services: ['Learning coach', 'Teacher (maths/literacy)', 'Psychologist (group + 1:1)', 'Tech lead (data tools)', 'Mini supermarket (business modelling)', 'Family coordinator (business/child boundaries)'],
    outcomes: 'Ethically contributing to family business. Parents stop fighting about "too much screens/markets." Advancing in ways mainstream school never allowed.',
  },
  {
    emoji: '🐾',
    name: 'Complex-needs 6-year-old',
    age: 'Age 6 · Multiple disabilities, medical needs',
    window: '6:30am – 2pm',
    summary:
      'Early arrival with parent; siblings go to sibling early-years space. Gentle OT-designed literacy block. Health check-in with allied health lead. Hydrotherapy in pool. Short rest. Parent attends Centrelink/NDIS help session on-site. Family returns some evenings for community dinner.',
    services: ['Learning coach (all day)', 'OT/Allied health lead', 'Teacher (adapted)', 'Speech pathologist', 'Family coordinator (daily triage)', 'Sibling program', 'Hydro pool', 'Community life-skills specialist'],
    outcomes: 'Consistent attendance — first time ever. Parent\'s admin load drops significantly. Siblings included and not sidelined. Hospital and school finally pulling in the same direction.',
  },
];

export default function Journeys() {
  return (
    <section id="journeys" className="py-20 px-4 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">Five Journeys</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          Real children. Real families. Real days.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-12 text-lg">
          Every child has a personalised &ldquo;prime time&rdquo; for learning inside the 6am–10pm window.
          These journeys show the breadth of who this hub is built for.
        </p>
        <div className="space-y-8">
          {journeys.map((j) => (
            <div key={j.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#1B2A4A] text-white px-6 py-4 flex flex-wrap items-center gap-4">
                <span className="text-4xl">{j.emoji}</span>
                <div>
                  <h3 className="font-bold text-xl">{j.name}</h3>
                  <p className="text-gray-300 text-sm">{j.age} &nbsp;·&nbsp; Learning window: {j.window}</p>
                </div>
              </div>
              <div className="px-6 py-5 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <p className="text-gray-700 text-sm leading-relaxed">{j.summary}</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1D7A6B] text-sm uppercase tracking-wide mb-2">Services Touched</p>
                  <ul className="space-y-1">
                    {j.services.map((s) => (
                      <li key={s} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-[#D4A017]">&bull;</span>{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#F5F0E8] rounded-xl p-4">
                  <p className="font-semibold text-[#E8634A] text-sm uppercase tracking-wide mb-2">Outcomes</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{j.outcomes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
