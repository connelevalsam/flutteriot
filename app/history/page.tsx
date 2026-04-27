import Image from "next/image";

const timelineYears = [
  {
    year: "2024",
    title: "First edition launch",
    flyer: "/img/year_one_flyer.PNG",
    description:
      "Our first FlutterIoT conference introduced the vision for Flutter + IoT across Africa, bringing builders, students, and partners together for a practical launch.",
    events: [
      {
        title: "Launch flyer released",
        type: "Flyer",
        description:
          "The first conference flyer set the tone for IoT innovation and community collaboration.",
      },
      {
        title: "Community kickoff",
        type: "Workshop",
        description:
          "Early workshop sessions invited local developers to build simple sensor dashboards and mobile interfaces.",
        img: "/img/year_two_host.jpeg",
        link: "https://x.com/flutterxiot",
      },
    ],
  },
  {
    year: "2025",
    title: "Second year momentum",
    flyer: "/img/year_two_flyer.jpeg",
    description:
      "Year two expanded the program with more demo showcases, speaker panels, and live IoT integration sessions for the Flutter community.",
    events: [
      {
        title: "Featured speaker sessions",
        type: "Talks",
        description:
          "Speakers shared real-world use cases of Flutter-powered IoT solutions in agriculture, healthcare, and energy.",
        img: "/img/year_two_speaker1.jpeg",
      },
      {
        title: "Live prototype demos",
        type: "Demo",
        description:
          "Interactive exhibits showed how Flutter dashboards can control devices and visualize sensor data in real time.",
        img: "/img/year_two_img1.jpeg",
      },
      {
        title: "Community celebration",
        type: "Community",
        description:
          "A closing showcase highlighted partnerships, local talent, and the possibilities of connected innovation.",
        img: "/img/year_two_img3.jpeg",
      },
    ],
  },
];

const galleryImages = [
  {
    src: "/img/year_two_host.jpeg",
    alt: "FlutterIoT host on stage",
    featured: true,
  },
  {
    src: "/img/year_two_img1.jpeg",
    alt: "Workshop session at FlutterIoT",
  },
  {
    src: "/img/year_two_img2.jpeg",
    alt: "Attendee working on a project",
  },
  {
    src: "/img/year_two_img3.jpeg",
    alt: "Panel discussion at the event",
    featured: true,
  },
  {
    src: "/img/year_two_img4.jpeg",
    alt: "FlutterIoT networking moment",
  },
  {
    src: "/img/year_two_speaker2.jpeg",
    alt: "Speaker presentation at FlutterIoT",
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased dark:bg-[#050508] dark:text-slate-100">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <section className="space-y-6 pb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Our timeline</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            How FlutterIoT grew year by year
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            A timeline of what we’ve done so far: from the first flyer and launch to live demos, workshops, and the community momentum that followed.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Back to home
            </a>
            <a
              href="https://x.com/flutterxiot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              Follow @flutterxiot
            </a>
          </div>
        </section>

        <section className="space-y-12">
          {timelineYears.map((entry) => (
            <div
              key={entry.year}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.7fr] lg:items-start">
                <div className="space-y-6">
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <Image
                      src={entry.flyer}
                      alt={`${entry.year} flyer`}
                      width={700}
                      height={460}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Year {entry.year}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
                      {entry.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {entry.description}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-5 top-0 h-full w-px bg-slate-300 dark:bg-slate-700" />
                  <div className="space-y-8 pl-12">
                    {entry.events.map((event) => (
                      <div key={event.title} className="relative">
                        <span className="absolute left-[-0.625rem] top-4 inline-flex h-5 w-5 rounded-full bg-sky-500 ring-4 ring-slate-50 dark:ring-slate-950" />
                        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{event.type}</p>
                          <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
                            {event.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                            {event.description}
                          </p>
                          {event.link ? (
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-400"
                            >
                              View more
                            </a>
                          ) : null}
                          {event.img ? (
                            <div className="mt-5 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
                              <Image
                                src={event.img}
                                alt={event.title}
                                width={900}
                                height={520}
                                className="h-56 w-full object-cover"
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-8 py-10">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Visual highlights</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
                Gallery from the last two years
              </h2>
              <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                A responsive image grid that puts some pictures in larger feature cells and others in supporting positions.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
                    image.featured ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
