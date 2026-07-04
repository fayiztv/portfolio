import Image from "next/image";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-2xl max-w-6xl mx-auto">
            I&apos;m currently seeking a <span className="text-purple-400">developer role</span><br/> <span className="text-sm">where I can contribute my MERN stack skills to building high-quality, production-ready applications.</span>
          </p>
        </div>
        <Image 
          src="/assets/icon-banner.png"
          alt="Skills"
          width={800}
          height={800}
          className="object-cover mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
}

