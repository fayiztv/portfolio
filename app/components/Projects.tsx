import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demo?: string;
  github?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Multi-Tenant E-commerce SaaS",
    description:
      "A production-ready multi-tenant e-commerce SaaS platform that enables businesses to launch and manage their own online stores from a single reusable codebase. Built with React, Firebase, and a scalable architecture, it includes store customization, product and category management, image uploads, inventory tracking, WhatsApp ordering, and responsive admin and customer dashboards.",
    image: "/projects/banner.png",
    demo: "https://demo-store-in.vercel.app/",
    github: "https://github.com/fayiztv/your-store",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card - extends over image */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                        isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Content */}
                <div
                  className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-fit"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg border border-purple-500 text-purple-300 hover:bg-purple-500/10 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
