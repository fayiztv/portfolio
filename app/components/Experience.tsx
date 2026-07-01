import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Marlo  - Maritime Fintech App",
    description:
      "A maritime-focused fintech platform that simplifies global payments, expense management, and financial operations for shipping and logistics businesses.",
    icon: "/cards/card-1.png",
    link: "/",
  },
  {
    id: 2,
    title: "Brototype - Travel Package Booking App",
    description:
      "A travel booking application that allows users to explore, compare, and book curated travel packages with a smooth and user-friendly experience.",
    icon: "/cards/card-2.png",
    link: "https://omway.netlify.app/",
  },
  {
    id: 3,
    title: "YourStore - Multi-Tenant E-commerce SaaS",
    description:
      "Founded and built a configurable multi-tenant e-commerce SaaS platform that enables businesses to launch their own online stores with reusable architecture, an admin dashboard, product management, and client-specific deployments.",
    icon: "/cards/card-3.png",
    link: "https://demo-store-in.vercel.app/",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">{card.description}</p>
                {card.id !== 1 && (
                  <Link
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
                  >
                    LEARN MORE →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
