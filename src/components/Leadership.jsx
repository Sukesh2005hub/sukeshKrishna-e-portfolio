import { leadershipList } from '../data/portfolioData';

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 last:mb-0 w-full">
      {/* Glowing Red Dot on the Timeline Line */}
      <div className="absolute top-6 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_#ff2a2a] border-2 border-black z-20" />

      {/* Alternating Layout: Even on Left, Odd on Right */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-full md:w-[45%] ml-10 md:ml-0 md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:scale-[1.02] transition-all duration-300">
              {item.badge && (
                <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest font-bold mb-3">
                  {item.badge}
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white hover:text-red-400 transition-colors mb-1">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-red-400 text-xs tracking-wider mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        <>
          <div className="hidden md:block md:w-[45%]" />
          <div
            data-aos="fade-left"
            className="w-full md:w-[45%] ml-10 md:ml-0 md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:scale-[1.02] transition-all duration-300">
              {item.badge && (
                <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest font-bold mb-3">
                  {item.badge}
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white hover:text-red-400 transition-colors mb-1">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-red-400 text-xs tracking-wider mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Leadership() {
  if (!leadershipList || leadershipList.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top Edge Torn-Paper SVG Divider */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 rotate-180 -translate-y-[1px] fill-[#ff2a2a] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest mb-4">
            Activities
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4 tracking-tight">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Campus contributions, community initiatives, and collaborative leadership endeavors.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 left-4 md:left-1/2 -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-6">
            {leadershipList.map((item, index) => (
              <LeadershipItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;

