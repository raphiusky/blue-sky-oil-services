import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, ShieldCheck, Wrench, Gauge, Database, LineChart, Droplets, Waves, Mail, Phone, MapPin, Rocket } from 'lucide-react'

export default function App() {
  const [openFAQ, setOpenFAQ] = useState(0)
  const logoSrc = '/Logo Blue Sky oil services.png' // replace with your final logo in /public

  const metrics = [
    { label: 'NPT reduction', value: '15–25%' },
    { label: 'OPEX savings', value: '8–12%' },
    { label: 'Fewer well control incidents', value: 'up to 30%' },
  ]

  const services = [
    { icon: <Gauge className='w-6 h-6' />, title: 'Well Engineering & Drilling Optimization', desc: 'Hydraulic modeling, window design, ROP optimization, and sensitivity to reduce time and risk without compromising integrity.' },
    { icon: <Droplets className='w-6 h-6' />, title: 'Fluids Management & Engineering', desc: 'HPHT and reactive formations: customized formulations, QA/QC, solids control strategy, and environmental compliance.' },
    { icon: <ShieldCheck className='w-6 h-6' />, title: 'Well Control & MPD Consulting', desc: 'Kick detection, dynamic pressure control, procedures, and readiness drills aligned with API/IADC best practices.' },
    { icon: <Database className='w-6 h-6' />, title: 'Digital Integration & Predictive Simulation', desc: 'Real-time workflows, surge/swab, ECD, hole cleaning, displacement, LOT/FIT, casing tests, and MPD scenarios.' },
    { icon: <Wrench className='w-6 h-6' />, title: 'Technical Training & Mentorship', desc: 'Hands-on training using live data and realistic scenarios: hydraulics, well control, cementing, MPD, and operational leadership.' },
    { icon: <Waves className='w-6 h-6' />, title: 'Regulatory & Environmental', desc: 'BSEE/EPA/OSHA alignment, spill prevention, waste minimization, and auditable performance KPIs.' },
  ]

  const faqs = [
    { q: 'What problems does Blue Sky solve?', a: 'We reduce uncertainty and risk in drilling by combining predictive engineering, real-time monitoring, and disciplined operations management.' },
    { q: 'Do you work with MPD?', a: 'Yes. We integrate MPD scenarios into planning and execution: hydraulics, operating windows, kick tolerance, and procedures.' },
    { q: 'Where is Blue Sky based?', a: 'Headquarters in Austin, Texas, with operations across the U.S. Gulf region.' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100'>
      {/* NAV */}
      <header className='sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10'>
        <div className='mx-auto max-w-7xl px-4 py-3 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <img src={logoSrc} alt='Blue Sky Oil Services' className='h-16 w-auto md:h-20 rounded-xl object-contain drop-shadow-md' />
            <span className='font-semibold tracking-wide'>Blue Sky Oil Services Consultancy</span>
          </div>
          <nav className='hidden md:flex items-center gap-6 text-sm text-slate-300'>
            <a href='#services' className='hover:text-white'>Services</a>
            <a href='#impact' className='hover:text-white'>Impact</a>
            <a href='#cases' className='hover:text-white'>Case studies</a>
            <a href='#about' className='hover:text-white'>About</a>
            <a href='#contact' className='hover:text-white'>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className='relative overflow-hidden'>
        <div className='mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center'>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
              Predictive engineering for safer, faster, lower‑impact drilling — Blue Sky Oil Services
            </h1>
            <p className='mt-5 text-slate-300 text-lg'>
              Headquartered in Austin, Texas. We integrate well engineering, fluids, and MPD to cut NPT, optimize OPEX, and raise safety baselines—onshore or offshore.
            </p>
            <div className='mt-7 flex flex-wrap items-center gap-3'>
              <a href='#contact' className='px-5 py-3 rounded-2xl bg-sky-500/90 hover:bg-sky-400 transition shadow'>
                Request a consultation
              </a>
              <a href='#services' className='px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/5 transition'>
                Explore services
              </a>
            </div>
            <div className='mt-6 flex flex-wrap gap-6 text-sm text-slate-400'>
              <span className='inline-flex items-center gap-2'><ShieldCheck className='w-4 h-4'/> API / IADC aligned</span>
              <span className='inline-flex items-center gap-2'><TrendingUp className='w-4 h-4'/> Results-focused KPIs</span>
              <span className='inline-flex items-center gap-2'><LineChart className='w-4 h-4'/> Real-time workflows</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className='relative rounded-3xl p-1 bg-gradient-to-tr from-sky-500/40 to-indigo-500/40'>
              <div className='rounded-3xl p-6 bg-slate-950/70 border border-white/10'>
                <div className='grid grid-cols-3 gap-4'>
                  {metrics.map((m, i) => (
                    <div key={i} className='rounded-2xl p-4 bg-white/5 border border-white/10'>
                      <div className='text-2xl font-bold'>{m.value}</div>
                      <div className='text-xs text-slate-400'>{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className='mt-6 rounded-2xl p-4 bg-white/5 border border-white/10 text-sm text-slate-300'>
                  Real outcomes from deepwater and complex wells: less NPT, cleaner displacements, safer operations.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id='services' className='mx-auto max-w-7xl px-4 py-16'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Services</h2>
        <p className='mt-2 text-slate-300 max-w-3xl'>End-to-end support—from planning to execution—integrating hydraulics, fluids, and pressure control with digital, real-time supervision.</p>
        <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((s, i) => (
            <div key={i} className='rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition'>
              <div className='flex items-center gap-3 text-sky-300'>{s.icon}<span className='font-medium text-slate-100'>{s.title}</span></div>
              <p className='mt-3 text-sm text-slate-300'>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASES */}
      <section id='cases' className='mx-auto max-w-7xl px-4 py-16'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Selected case studies</h2>
        <div className='mt-8 grid md:grid-cols-3 gap-6'>
          <div className='rounded-2xl p-5 border border-white/10 bg-white/5'>
            <div className='text-sm text-sky-300 font-medium'>Petrobras — Santos Basin</div>
            <div className='mt-1 font-semibold'>Nitrogen bullheading for completion integrity</div>
            <p className='mt-2 text-sm text-slate-300'>Field-calibrated compressibility modeling and live pressure management executed safely within limits—validated by formal client commendation.</p>
          </div>
          <div className='rounded-2xl p-5 border border-white/10 bg-white/5'>
            <div className='text-sm text-sky-300 font-medium'>Pemex — Southern Onshore Asset</div>
            <div className='mt-1 font-semibold'>Simulation-driven displacement methodology</div>
            <p className='mt-2 text-sm text-slate-300'>400+ scenarios in a curated repository; losses cut from 150 m³ to 13 m³; standardized analyses across shifts; contract expansion on results.</p>
          </div>
          <div className='rounded-2xl p-5 border border-white/10 bg-white/5'>
            <div className='text-sm text-sky-300 font-medium'>CGC — Austral Basin</div>
            <div className='mt-1 font-semibold'>Recovery of exploratory campaign</div>
            <p className='mt-2 text-sm text-slate-300'>Custom KLA-HIB program, real-time hydraulics, and loss remediation enabling safe TD and flawless casing/cementing with material savings.</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id='impact' className='mx-auto max-w-7xl px-4 py-16'>
        <div className='rounded-3xl border border-white/10 bg-gradient-to-br from-sky-600/10 to-indigo-600/10 p-8'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Measurable impact</h2>
          <div className='mt-6 grid md:grid-cols-3 gap-6'>
            {metrics.map((m, i) => (
              <div key={i} className='rounded-2xl p-6 bg-white/5 border border-white/10'>
                <div className='text-3xl font-bold'>{m.value}</div>
                <div className='text-sm text-slate-300'>{m.label}</div>
              </div>
            ))}
          </div>
          <p className='mt-6 text-sm text-slate-300'>KPIs audited through real-time dashboards, post-well reports, and client commendations.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id='about' className='mx-auto max-w-7xl px-4 py-16'>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h2 className='text-2xl md:text-3xl font-semibold'>About Blue Sky Oil Services</h2>
            <p className='mt-3 text-slate-300'>Blue Sky Oil Services brings nearly two decades of international experience across Brazil, Mexico, and Argentina. We combine fluids engineering, drilling optimization, and MPD to deliver safer, cleaner, and more efficient wells.</p>
            <ul className='mt-4 space-y-2 text-slate-300 text-sm'>
              <li className='flex items-start gap-2'><Rocket className='w-4 h-4 mt-0.5 text-sky-300'/> Austin (TX) headquarters with planned presence in the Gulf Coast region.</li>
              <li className='flex items-start gap-2'><LineChart className='w-4 h-4 mt-0.5 text-sky-300'/> Digital-first workflows integrating simulations and live data.</li>
              <li className='flex items-start gap-2'><ShieldCheck className='w-4 h-4 mt-0.5 text-sky-300'/> API/IADC-aligned procedures and environmental stewardship.</li>
            </ul>
          </div>
          <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
            <h3 className='font-semibold'>Trusted by operators & service companies</h3>
            <p className='mt-2 text-sm text-slate-300'>Experience collaborating with Petrobras, Pemex, Halliburton, Schlumberger/MI SWACO, and SafeKick teams on complex wells and interventions.</p>
            <div className='mt-4 grid grid-cols-2 gap-3 text-xs text-slate-400'>
              <div className='rounded-xl p-3 bg-slate-900/60 border border-white/10'>Deepwater kick control & integrity</div>
              <div className='rounded-xl p-3 bg-slate-900/60 border border-white/10'>Nitrogen bullheading methodology</div>
              <div className='rounded-xl p-3 bg-slate-900/60 border border-white/10'>Displacement & hole cleaning models</div>
              <div className='rounded-xl p-3 bg-slate-900/60 border border-white/10'>MPD planning & execution support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='mx-auto max-w-7xl px-4 py-16'>
        <h2 className='text-2xl md:text-3xl font-semibold'>FAQ</h2>
        <div className='mt-6 space-y-3'>
          {faqs.map((f, i) => (
            <div key={i} className='rounded-2xl border border-white/10 bg-white/5'>
              <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className='w-full flex items-center justify-between p-4'>
                <span className='font-medium'>{f.q}</span>
                <span className='text-slate-400'>{openFAQ === i ? '–' : '+'}</span>
              </button>
              {openFAQ === i && (
                <div className='px-4 pb-4 text-sm text-slate-300'>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id='contact' className='mx-auto max-w-7xl px-4 pb-24'>
        <div className='rounded-3xl border border-white/10 bg-white/5 p-8'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Contact</h2>
          <p className='mt-2 text-slate-300'>Tell us about your wells and objectives. We’ll propose a focused plan with KPIs and milestones.</p>
          <div className='mt-6 flex flex-wrap gap-6 text-sm text-slate-300'>
            <span className='inline-flex items-center gap-2'><Mail className='w-4 h-4'/> contact@bluesky-oilservices.com</span>
            <span className='inline-flex items-center gap-2'><MapPin className='w-4 h-4'/> Austin, Texas, USA</span>
          </div>
        </div>
      </section>

      <footer className='border-t border-white/10'>
        <div className='mx-auto max-w-7xl px-4 py-8 text-sm text-slate-400 flex items-center justify-between'>
          <span>© {new Date().getFullYear()} Blue Sky Oil Services Consultancy</span>
          <a href='#' className='hover:text-white'>Privacy</a>
        </div>
      </footer>
    </div>
  )
}
