export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-gray-400 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold text-lg">
            St John Bosco <span className="text-[#D4A017]">2e Learning &amp; Family Hub</span>
          </p>
          <p className="text-sm mt-1">
            Sutherland Shire · Southern Sydney · Catholic · K&ndash;6
          </p>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>Founded in the Catholic tradition.</p>
          <p>A hub for every child. A home for every family.</p>
          <p className="mt-2 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} St John Bosco 2e Hub. Concept in development.
          </p>
        </div>
      </div>
    </footer>
  );
}
