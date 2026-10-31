import { softSkillsList } from '../data/portfolioData';

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-between hover:scale-[1.03] hover:border-red-200 hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        {/* Emoji Icon Container */}
        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-2xl group-hover:bg-red-50 group-hover:border-red-200 group-hover:scale-110 transition-all duration-300 mb-4 select-none">
          {skill.icon}
        </div>

        {/* Skill Name */}
        <h3 className="text-base font-black uppercase text-gray-900 tracking-wide mb-2 group-hover:text-[#ff2a2a] transition-colors">
          {skill.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-xs md:text-sm text-gray-500 leading-relaxed mt-2">
        {skill.desc}
      </p>
    </div>
  );
}

function SoftSkills() {
  if (!softSkillsList || softSkillsList.length === 0) {
    return null;
  }

  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      {/* Top Edge Torn-Paper SVG Divider */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 rotate-180 -translate-y-[1px] fill-[#0a0a0a] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest font-bold mb-4">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 mb-4 tracking-tight">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Interpersonal strengths and methodologies that drive productive team dynamics and engineering success.
          </p>
        </div>

        {/* Soft Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
