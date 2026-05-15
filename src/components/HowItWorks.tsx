import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CalendarCheck, Video, FlaskConical, Pill, FileText, MessageSquare, ShieldCheck, CreditCard, ArrowRight, ArrowLeft, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  { id: 0, num: '01', Icon: Search, color: '#0093a1', label: 'Discover', title: 'Find the Right Care', desc: 'Search verified doctors by specialty, language & location with real-time availability and ratings.', tags: ['Doctor Search', 'Live Availability', 'Filter by Language'], emoji: '🔍' },
  { id: 1, num: '02', Icon: MessageSquare, color: '#2563eb', label: 'AI Companion', title: 'Clinical AI Guidance', desc: 'Speak in your language. Get medical-grade health guidance and smart referrals — not general AI, but a clinical-first companion.', tags: ['Native Language', 'Evidence-Based', 'Smart Referrals'], emoji: '🤖' },
  { id: 2, num: '03', Icon: CalendarCheck, color: '#7c3aed', label: 'Book', title: 'Book Instantly', desc: 'One-tap booking for clinic visits or video consultations. Real-time slot updates — zero double-bookings.', tags: ['One-Tap Booking', 'Real-Time Slots', 'Calendar Sync'], emoji: '📅' },
  { id: 3, num: '04', Icon: Video, color: '#059669', label: 'Consult', title: 'Get Treated', desc: 'HD video consultations or in-clinic visits with verified specialists. Digital prescriptions delivered instantly.', tags: ['HD Video', 'In-Clinic', 'Instant Prescription'], emoji: '🩺' },
  { id: 4, num: '05', Icon: FlaskConical, color: '#d97706', label: 'Lab Tests', title: 'Tests at Home', desc: 'NABL-certified home sample collection. Reports auto-linked to your health profile and shareable instantly.', tags: ['Home Collection', 'NABL Certified', 'Digital Reports'], emoji: '🧪' },
  { id: 5, num: '06', Icon: Pill, color: '#dc2626', label: 'Medicines', title: 'Medicines Delivered', desc: 'Order prescription medicines and get them at your door in under 2 hours. Smart dose reminders included.', tags: ['2-Hour Delivery', 'Auto-Reminders', 'Prescription Linked'], emoji: '💊' },
  { id: 6, num: '07', Icon: CreditCard, color: '#0891b2', label: 'Insurance', title: 'Cashless Claims', desc: 'Check live coverage, find cashless hospitals, and file insurance claims digitally — all inside Ayura.', tags: ['Coverage Check', 'Cashless Hospitals', 'Digital Claims'], emoji: '🛡️' },
  { id: 7, num: '08', Icon: ShieldCheck, color: '#7c3aed', label: 'ABHA', title: 'Digital Health ID', desc: 'Your government-linked ABHA health identity. Every record, prescription and report — unified and shareable.', tags: ['14-Digit Health ID', 'ABDM Verified', 'Instant QR Share'], emoji: '🪪' },
  { id: 8, num: '09', Icon: FileText, color: '#64748b', label: 'Records', title: 'Complete Health Locker', desc: 'All visits, prescriptions, lab reports secured in your ABHA health locker — available forever, anywhere.', tags: ['Full History', 'ABHA Locker', 'Shareable'], emoji: '📋' },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [progress, setProgress] = useState(0);

  const go = useCallback((idx: number) => {
    setDir(idx > active ? 1 : -1);
    setActive(idx);
    setProgress(0);
  }, [active]);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          const next = (active + 1) % steps.length;
          setDir(1);
          setActive(next);
          return 0;
        }
        return p + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [active]);

  const s = steps[active];

  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works"
      style={{ background: 'linear-gradient(160deg, #0a0f1e 0%, #0f172a 50%, #0a1628 100%)' }}>

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: `${s.color}25` }} />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] bg-violet-900/20" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 font-bold tracking-widest uppercase text-xs mb-4 border px-5 py-2 rounded-full"
            style={{ color: s.color, borderColor: `${s.color}40`, background: `${s.color}12` }}>
            <Sparkles className="w-3 h-3" /> Your Healthcare Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">
            From Search to{' '}
            <motion.span key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(to right, ${s.color}, #fff)` }}>
              Recovery
            </motion.span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-sans">9 steps. One intelligent app. Your entire health journey covered.</p>
        </motion.div>

        {/* ── Step Path ── */}
        <div className="relative mb-12">
          {/* Connecting line base */}
          <div className="absolute top-[22px] left-0 right-0 h-[2px] bg-white/5 mx-8 z-0" />
          {/* Filled progress line */}
          <motion.div className="absolute top-[22px] left-8 h-[2px] z-0"
            animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ background: `linear-gradient(to right, #0093a1, ${s.color})` }} />

          <div className="flex justify-between relative z-10">
            {steps.map((step, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <button key={i} onClick={() => go(i)} className="flex flex-col items-center gap-2 group">
                  <div className="relative">
                    {isActive && (
                      <motion.div className="absolute inset-0 rounded-full"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ background: step.color }} />
                    )}
                    <motion.div
                      animate={{ scale: isActive ? 1.25 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-11 h-11 rounded-full flex items-center justify-center border-2 relative z-10"
                      style={{
                        background: isActive ? step.color : isPast ? `${step.color}30` : 'rgba(255,255,255,0.05)',
                        borderColor: isActive ? step.color : isPast ? `${step.color}60` : 'rgba(255,255,255,0.1)',
                      }}>
                      {isPast
                        ? <CheckCircle className="w-4 h-4 text-white" />
                        : <step.Icon className="w-4 h-4" style={{ color: isActive ? '#fff' : isPast ? step.color : '#475569' }} strokeWidth={2} />}
                    </motion.div>
                    {/* Progress ring for active */}
                    {isActive && (
                      <svg className="absolute inset-0 -rotate-90 w-11 h-11" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                        <motion.circle cx="22" cy="22" r="20" fill="none" strokeWidth="2"
                          stroke={step.color} strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 20}`}
                          strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`} />
                      </svg>
                    )}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider hidden sm:block"
                    style={{ color: isActive ? step.color : '#334155' }}>{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main Content Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, x: dir * 60, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -dir * 60, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-6 rounded-3xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>

            {/* Left: Info */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${s.color}30, ${s.color}15)`, border: `1px solid ${s.color}40` }}>
                  <s.Icon className="w-6 h-6" style={{ color: s.color }} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase" style={{ color: s.color }}>Step {s.num}</p>
                  <p className="text-xs text-slate-500 font-semibold">{s.label}</p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-4 leading-tight">{s.title}</h3>
              <p className="text-slate-400 font-sans leading-relaxed mb-6">{s.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ color: s.color, border: `1px solid ${s.color}40`, background: `${s.color}12` }}>{tag}</span>
                ))}
              </div>

              {/* Nav controls */}
              <div className="flex items-center gap-3">
                <button onClick={() => go((active - 1 + steps.length) % steps.length)}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button onClick={() => go((active + 1) % steps.length)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }}>
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Visual panel */}
            <div className="relative flex items-center justify-center p-8 overflow-hidden min-h-[320px]"
              style={{ background: `linear-gradient(135deg, ${s.color}10, transparent 60%)`, borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
              {/* Big emoji / icon backdrop */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                className="flex flex-col items-center gap-6 w-full">

                {/* Large step emoji */}
                <motion.div animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-7xl select-none">{s.emoji}</motion.div>

                {/* Step indicator grid */}
                <div className="grid grid-cols-3 gap-2 w-full max-w-[260px]">
                  {steps.map((st, i) => (
                    <motion.div key={i}
                      animate={{ opacity: i === active ? 1 : 0.2, scale: i === active ? 1.08 : 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => go(i)}
                      className="flex flex-col items-center gap-1 p-2 rounded-xl cursor-pointer transition-all"
                      style={{ background: i === active ? `${st.color}20` : 'rgba(255,255,255,0.03)', border: `1px solid ${i === active ? st.color + '50' : 'rgba(255,255,255,0.05)'}` }}>
                      <st.Icon className="w-4 h-4" style={{ color: i === active ? st.color : '#475569' }} strokeWidth={2} />
                      <span className="text-[8px] font-bold text-center leading-none" style={{ color: i === active ? st.color : '#334155' }}>{st.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Step number big display */}
                <div className="text-[80px] font-black leading-none select-none pointer-events-none absolute right-6 bottom-4 opacity-5"
                  style={{ color: s.color }}>{s.num}</div>
              </motion.div>

              {/* Ambient glow pulse */}
              <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full blur-[80px] pointer-events-none"
                style={{ background: s.color }} />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Step counter */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="text-slate-600 text-sm font-semibold">{s.num} / 09</span>
          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <button key={i} onClick={() => go(i)}
                className="rounded-full transition-all duration-300"
                style={{ width: i === active ? 24 : 6, height: 6, background: i === active ? s.color : 'rgba(255,255,255,0.15)' }} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#early-access"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-xl group"
            style={{ background: `linear-gradient(135deg, ${s.color}, #0f172a)`, boxShadow: `0 20px 40px ${s.color}30` }}>
            Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
