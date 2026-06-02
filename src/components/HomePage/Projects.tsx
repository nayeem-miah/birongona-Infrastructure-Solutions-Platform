'use client';

import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'DATACENTER CO-1',
      description: 'Complete physical integration for Financial Bank Corp.',
      image: '/project_datacenter.png',
      link: '#contact',
    },
    {
      title: 'FIBER OPTIC WAN',
      description: 'Multicentral WAN expansion for logistics conglomerate.',
      image: '/project_fiber.png',
      link: '#contact',
    },
    {
      title: 'VIDEO SURVEILLANCE',
      description: 'AI-integrated security monitoring for National Airport.',
      image: '/project_cctv.png',
      link: '#contact',
    },
  ];

  return (
    <section id="projects" className="relative bg-[#040812] py-8 sm:py-10 md:py-12 text-white border-t border-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Flagship Projects.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d1527]/20 transition-all duration-300 hover:border-white/15"
            >
              {/* Aspect Ratio Box for Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content Panel */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed min-h-[40px]">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.05]">
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-xs font-bold text-[#00DF89] hover:underline gap-1"
                  >
                    View Project Case Study
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
