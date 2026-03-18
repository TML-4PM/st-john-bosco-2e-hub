const problems = [
  {
    icon: '🧠',
    title: 'Invisible in mainstream',
    body: 'A seven-year-old who reads like a twenty-year-old but melts down like a four-year-old is usually treated as a behaviour problem — or ignored entirely.',
  },
  {
    icon: '🔀',
    title: 'Fragmented system',
    body: 'Gifted settings under-handle disability. Special settings under-challenge brilliance. Families spend thousands stitching together tutors, therapists and part-time school.',
  },
  {
    icon: '💔',
    title: 'Families carrying it alone',
    body: 'Parents grieve in both directions — their child\'s pain and isolation, and the unrealised potential they can see clearly but no system will hold.',
  },
  {
    icon: '🏄',
    title: 'The Shire has no answer',
    body: 'No dedicated 2e primary hub exists in the Sutherland Shire or NSW — only mainstream schools with gifted add-ons, and disability schools that under-pitch cognition.',
  },
];

export default function WhyNow() {
  return (
    <section id="why" className="py-20 px-4 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1D7A6B] font-semibold tracking-widest uppercase text-sm mb-2">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
          Twice-exceptional kids are falling through every gap.
        </h2>
        <p className="text-gray-600 max-w-2xl mb-12 text-lg">
          NSW policy recognises 2e learners — high-potential students with disability — but provision lags far behind. The Shire\'s 2e families currently have nowhere to go.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-[#1B2A4A] text-lg mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
