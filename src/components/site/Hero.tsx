import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const techs = [
  { label: "Node.js", top: "18%", left: "8%", delay: "0s" },
  { label: "Express", top: "30%", left: "84%", delay: "1.1s" },
  { label: "Python", top: "62%", left: "5%", delay: "2s" },
  { label: "N8N", top: "72%", left: "80%", delay: "0.6s" },
  { label: "UiPath", top: "12%", left: "68%", delay: "1.6s" },
  { label: "APIs", top: "82%", left: "30%", delay: "2.4s" },
  { label: "Automação", top: "44%", left: "90%", delay: "0.3s" },
  { label: "IA", top: "55%", left: "16%", delay: "1.8s" },
];

export function Hero() {
  const { t } = useI18n();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden grid-bg"
    >
      {/* aurora background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.06] blur-[120px]" />
        <div
          className="aurora absolute left-1/4 top-1/3 h-[40vmax] w-[40vmax] rounded-full bg-foreground/[0.04] blur-[100px]"
          style={{ animationDirection: "reverse" }}
        />
      </div>

      {/* floating tech chips */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {techs.map((tech) => (
          <div
            key={tech.label}
            className="float-soft absolute"
            style={{
              top: tech.top,
              left: tech.left,
              animationDelay: tech.delay,
              transform: `translateY(${offset * 0.08}px)`,
            }}
          >
            <span className="glass rounded-full px-4 py-2 text-xs font-medium text-muted-foreground shadow-soft">
              {tech.label}
            </span>
          </div>
        ))}
      </div>

      <div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        style={{ transform: `translateY(${offset * 0.18}px)`, opacity: Math.max(0, 1 - offset / 600) }}
      >
        <p className="fade-in-up mb-6 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          {t("hero.welcome")}
        </p>
        <h1
          className="fade-in-up text-balance text-6xl font-bold leading-[0.95] sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          {t("hero.name")}
        </h1>
        <p
          className="fade-in-up mt-6 text-lg text-muted-foreground sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          {t("hero.role")}
        </p>

        {/* mobile tech chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:hidden">
          {techs.map((tech) => (
            <span
              key={tech.label}
              className="glass rounded-full px-3 py-1.5 text-xs text-muted-foreground"
            >
              {tech.label}
            </span>
          ))}
        </div>

        <div
          className="fade-in-up mt-10 flex justify-center"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("building")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover-lift group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            {t("hero.cta")}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5">
          <span className="scroll-cue h-1.5 w-1.5 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
