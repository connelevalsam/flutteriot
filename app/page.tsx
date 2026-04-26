const sections = [
  {
    title: "Convergence",
    subtitle: "Flutter + IoT as one unified force",
    text: "Flutter acts as the unifying glue, merging diverse IoT hardware and compelling user interfaces into a single, cohesive development experience. It breaks down silos between embedded systems and front-end development.",
  },
  {
    title: "Empowerment",
    subtitle: "Enabling developers to build smarter solutions",
    text: "A single Dart codebase and familiar Flutter tooling lowers the barrier to entry for IoT innovation, empowering a broader range of developers to solve real-world problems across Africa.",
  },
  {
    title: "Solutions",
    subtitle: "Seamless, intelligent, connected",
    text: "Flutter creates end-to-end IoT experiences with fluid data visualization, offline-first operation, and reliable connectivity across devices and network conditions.",
  },
  {
    title: "Impact",
    subtitle: "Transforming communities and driving sustainable innovation",
    text: "From agriculture to healthcare, energy to water management, Flutter-powered IoT solutions unlock locally relevant, affordable innovation and resilience.",
  },
  {
    title: "Scope",
    subtitle: "Across Africa",
    text: "Flutter’s performance, offline capabilities, and single-codebase efficiency make it uniquely suited to Africa’s varied infrastructure and device landscape.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),transparent_45%),linear-gradient(180deg,#ffffff_0%,#dbeafe_30%,#e2e8f0_100%)] text-slate-950 antialiased dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_40%),linear-gradient(180deg,#020617_0%,#0f172a_35%,#111827_100%)] dark:text-slate-100">
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-10 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-6 border-b border-slate-200 pb-8 dark:border-slate-800 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-600">FlutterIoT Summit 2026</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Emergence of codes
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              A one-page convergence of Flutter, IoT, and African innovation. Explore how a unified codebase unlocks connected solutions for people, communities, and resilient systems.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:max-w-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Next edition</p>
              <p className="mt-2 text-2xl font-semibold">July 2026</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Theme</p>
              <p className="mt-2 text-xl font-semibold">Emergence of codes</p>
            </div>
            <a
              href="https://x.com/flutterxiot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              Follow @flutterxiot
            </a>
          </div>
        </header>

        <section className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-600">Why FlutterIoT?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">A continental story of convergence, empowerment, and impact.</h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                Discover why Flutter is the ideal bridge between performant embedded systems and expressive interfaces, especially in environments where connectivity, hardware diversity, and local innovation matter most.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Connectivity</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Build coherent end-to-end experiences with MQTT, WebSockets, BLE, and cloud services from a shared Flutter-led codebase.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Intelligence</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Turn sensor data into action with dashboards, ML-enabled inference, and adaptive interfaces tuned for real-time operations.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Performance</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Deliver responsive, native-class experiences on budget smartphones, Linux gateways, and embedded displays without duplicate UI work.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Resilience</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Design for offline-first workflows, intermittent network connections, and distributed deployments across urban and remote communities.
                </p>
              </article>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-600">Agenda highlights</p>
            <ul className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                <strong className="block text-base">Showcase</strong>
                Connected Flutter dashboards, embedded device demos, and real-world African IoT case studies.
              </li>
              <li className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                <strong className="block text-base">Workshops</strong>
                Hands-on sessions for building sensor apps, gateway dashboards, and edge-to-cloud Flutter pipelines.
              </li>
              <li className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                <strong className="block text-base">Community</strong>
                Practical talks on sustainable innovation, local talent growth, and building for accessibility across Africa.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-10 py-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Core pillars</p>
            <h2 className="text-3xl font-semibold tracking-tight">Why this matters for Africa</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-900/20 dark:text-sky-300">
                  <span className="text-lg font-bold">{section.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{section.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">{section.subtitle}</span> {section.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Impact stories</p>
              <h2 className="text-3xl font-semibold tracking-tight">From agriculture to healthcare, code is the common thread.</h2>
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                FlutterIoT is an invitation for developers, makers, startups, and community leaders to shape IoT solutions that are affordable, resilient, and deeply relevant to local needs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Agriculture</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Remote soil and weather monitoring, yield prediction, and smarter irrigation.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Healthcare</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Vital monitoring, cold chain tracking, and connected care dashboards.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Energy</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Smart metering, microgrid monitoring, and efficient off-grid systems.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Water</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Leak detection, quality sensing, and reservoir management.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p>FlutterIoT Conference · July 2026 · Theme: Emergence of codes</p>
          <p className="mt-2">Stay connected: <a href="https://x.com/flutterxiot" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-950 underline decoration-sky-400 decoration-2 dark:text-slate-100">@flutterxiot</a></p>
        </footer>
      </main>
    </div>
  );
}
