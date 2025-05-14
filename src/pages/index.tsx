import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadVanta = async () => {
      try {
        await loadScript("/scripts/three.r134.min.js");
        await loadScript("/scripts/vanta.net.min.js");

        if (!vantaEffect && window.VANTA?.NET) {
          const effect = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xff5000,
            backgroundColor: 0x1c1f21,
            points: 20.0,
            maxDistance: 26.0,
            spacing: 20.0,
            showDots: false,
          });
          setVantaEffect(effect);
        }
      } catch (error) {
        console.error("Vanta load error:", error);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative text-orange-500 font-sans">
      {/* Vanta Background (behind everything) */}
      <div ref={vantaRef} className="fixed inset-0 -z-10 w-full h-full" />

      {/* Sidebar */}
      <aside className="fixed top-50 left-0 h-75 w-48 bg-black-800/60 backdrop-blur-md px-6 py-10 rounded-r-2xl flex flex-col justify-center items-center gap-6 text-lg z-10">
        <a href="#home" className="text-[#FF5000] hover:underline">
          home
        </a>
        <a href="#about" className="text-[#FF5000] hover:underline">
          about
        </a>
        <a href="#projects" className="text-[#FF5000] hover:underline">
          projects
        </a>
        <a href="#contact" className="text-[#FF5000] hover:underline">
          contact
        </a>
      </aside>

      {/* Main Content */}
      <main className=" px-10 space-y-48">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              win cutrer
            </h1>
            <h2 className="text-3xl md:text-4xl mt-4 text-[#FF5000]">
              fullstack developer
            </h2>
          </div>
        </section>

        <section
          id="about"
          className="ml-48 min-h-screen flex items-center justify-start"
        >
          <div className="max-w-3xl text-left text-white text-lg leading-relaxed">
            <h2 className="text-4xl font-semibold">about</h2>
            <p className="mt-4 text-white">
              I'm Win Cutrer — a technical support and solutions professional
              actively transitioning into a fullstack software engineering role.
              With nearly a decade of experience in the tech industry, I’ve
              built a reputation for solving complex problems, translating
              between technical and non-technical teams, and advocating for user
              needs with empathy and clarity.
            </p>
            <br />
            <p>
              While supporting customers and collaborating closely with product
              and engineering teams, I found myself increasingly drawn to
              building the solutions myself — not just escalating bugs, but
              understanding how the systems work under the hood. That curiosity
              led me to dive deep into fullstack development, where I’ve been
              learning JavaScript, TypeScript, React, Node.js, and modern
              backend architecture through project-based work.
            </p>
            <br />
            <p>
              What sets me apart is the combination of real-world technical
              experience, strong communication skills, and a relentless drive to
              learn. I don’t just want to write code — I want to build tools
              that are intuitive, helpful, and genuinely improve the user
              experience.
            </p>
            <p>
              I'm now looking for a team where I can grow as a software
              engineer, contribute from day one, and continue sharpening my
              skills in a collaborative, fast-moving environment.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-end"
        >
          <div className="max-w-3xl text-white text-lg leading-relaxed space-y-8">
            <h2 className="text-4xl font-semibold text-left">projects</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white text-left">
                  Weather App
                </h3>
                <p className="mt-2 text-left">
                  A clean, responsive app that fetches live weather data from an
                  external API. Built with React, styled with Tailwind, and
                  deployed on Vercel. I implemented error handling, location
                  search, and dynamic theming based on weather conditions.
                </p>
                <p className="mt-1 text-left">
                  <a
                    href="https://github.com/your-username/weather-app"
                    className="underline hover:text-[#FF5000]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                  {" | "}
                  <a
                    href="https://your-weather-app.vercel.app"
                    className="underline hover:text-[#FF5000]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </p>
              </div>

              <br />

              <div>
                <h3 className="text-2xl font-bold text-white text-left">
                  Wine Pairing App
                </h3>
                <p className="mt-2 text-left">
                  A fullstack app that helps users find wine pairings based on
                  the food they’re eating. Built with Next.js and integrated
                  with a pairing API. It features server-side rendering and
                  clean UX. I’m currently expanding it with user authentication
                  and favorites.
                </p>
                <p className="mt-1 text-left">
                  <a
                    href="https://github.com/your-username/wine-app"
                    className="underline hover:text-[#FF5000]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="ml-48 min-h-screen flex items-center justify-start"
        >
          <div className="max-w-3xl text-left text-white text-lg leading-relaxed space-y-6">
            <h2 className="text-4xl font-semibold">contact</h2>
            <p>
              I'm currently open to full-time software engineering
              opportunities. If you're hiring or think I'd be a good fit for
              your team, I'd love to hear from you.
            </p>
            <p>
              The best way to reach me is by email at{" "}
              <a
                href="mailto:email-here"
                className="underline text-[#FF5000] hover:text-white"
              >
                email here
              </a>
              <br />
              You can also connect with me on <span> </span>
              <a
                href="https://www.linkedin.com/in/profile/"
                className="underline text-[#FF5000] hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
