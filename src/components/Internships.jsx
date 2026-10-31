import { internshipsList } from '../data/portfolioData';

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: Duration & Badge */}
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
          <span className="font-mono text-white/40 uppercase text-xs tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono uppercase tracking-widest font-bold">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <div className="mt-5 mb-6">
          <h3 className="text-2xl font-black text-white leading-tight">
            {intern.role}
          </h3>
          <p className="text-sm uppercase tracking-wider text-red-200 font-semibold mt-1">
            {intern.organization}
          </p>
        </div>

        {/* Skills Gained */}
        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-white/60 mb-3">
            Skills Gained:
          </p>
          <ul className="space-y-2">
            {intern.skills.map((skill, i) => (
              <li key={i} className="flex items-start text-sm text-white/90 leading-relaxed">
                <span className="text-white mr-2 select-none">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: Technologies Used */}
      <div className="border-t border-white/10 pt-4 mt-6">
        <p className="text-xs font-mono uppercase tracking-widest text-white/60 mb-2">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-black/40 text-white/80 font-mono text-xs border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Internships() {
  if (!internshipsList || internshipsList.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top Edge Torn-Paper SVG Divider */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 rotate-180 -translate-y-[1px] fill-[#0a0a0a] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      {/* Decorative Star (Bottom-Left) */}
      <svg
        className="absolute bottom-12 left-10 w-10 h-10 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 font-medium max-w-xl mx-auto text-sm md:text-base">
            Professional industry exposure, development milestones, and technical responsibilities.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={index} intern={intern} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internships;
