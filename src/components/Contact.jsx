import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    if (!form) return;

    const firstName = form.querySelector('#firstName')?.value?.trim() || '';
    const lastName = form.querySelector('#lastName')?.value?.trim() || '';
    const email = form.querySelector('#email')?.value?.trim() || '';
    const message = form.querySelector('#message')?.value?.trim() || '';

    if (!firstName || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const isConfigured = Boolean(
      emailjsConfig?.serviceId &&
        emailjsConfig?.templateId &&
        emailjsConfig?.publicKey &&
        emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
        emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
        emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    );

    if (!isConfigured) {
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim();
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`;
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`,
        '_blank'
      );
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        emailjsConfig.publicKey
      );
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Giant Parallax Typography */}
      <motion.div
        style={{ y }}
        className="absolute pointer-events-none z-0 inset-0 flex items-start justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          CONTACT
        </div>
      </motion.div>

      {/* Foreground Red Card Aligned Right */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto relative z-10 rounded-tl-3xl shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/20">
          <span className="text-white/80 font-mono text-xs uppercase tracking-[0.2em] font-bold">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300"
            >
              DM on Instagram
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Two-Column Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Personal Inputs */}
            <div className="flex flex-col space-y-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                required
                placeholder="First Name *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email Address *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Right Column: Message Box */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="w-full h-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[140px]"
              />
            </div>
          </div>

          {/* Bottom Area: Consent, Disclaimers, and Submit */}
          <div className="flex flex-col space-y-4 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <label className="flex items-center space-x-3 text-xs text-white/80 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                required
                className="rounded border-white/40 text-black focus:ring-0 cursor-pointer"
              />
              <span>
                I consent to having this website store my submitted information so they can respond to my inquiry.
              </span>
            </label>

            {/* Response Time Disclaimer */}
            <p className="text-xs text-white/70 leading-relaxed">
              Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
            </p>

            {/* Urgent Direct Email */}
            <p className="text-xs text-white/80">
              Need an urgent response? Email me directly at{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline font-bold hover:text-black transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
            </p>

            {/* Submit Button */}
            <div className="pt-4">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-3.5 rounded-full bg-white/20 border border-white/30 text-white/60 font-semibold text-sm flex items-center space-x-2 cursor-wait"
                >
                  <svg
                    className="animate-spin w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-sm shadow-md"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-red-950 border border-white/30 text-white font-semibold text-sm hover:bg-red-900 transition-colors cursor-pointer"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group px-8 py-3.5 rounded-full bg-transparent border border-white text-white font-semibold text-sm flex items-center space-x-2 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 cursor-pointer shadow-md"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 stroke-current fill-none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

