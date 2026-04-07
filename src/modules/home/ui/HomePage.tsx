import { useEffect } from "react";
import { PROJECT_CARDS } from "../model/projects";
import { AboutMe } from "./AboutMe";
import { EyesLogo } from "./EyesLogo";
import { ProjectCard } from "./ProjectCard";
import { useScrollContext } from "../../../common/context/ScrollContext";

const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/anna216" },
  { label: "Dprofile", href: "https://dprofile.ru/annjik" },
  { label: "Telegram", href: "https://t.me/RomashkaK5" },
];

export function HomePage() {
  const { saveScroll, scrollPosition } = useScrollContext();

  useEffect(() => {
    if (scrollPosition > 0) {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);
      });
    }
  }, [scrollPosition]);

  const handleAnchorClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="text-xl overflow-x-hidden bg-page">
      <section className="px-5 pb-12 pt-9 md:px-8">
        <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col">
          <div className="flex flex-wrap items-center gap-5 text-sm text-black/65 underline decoration-1 underline-offset-4 md:text-lg">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="relative mt-24">
            <h1 className="max-w-[1096px] text-[34px] font-bold leading-[1.22] tracking-[-0.03em] md:text-[64px] md:leading-[1.28]">
              Привет, я <span className="text-accentStrong">Анна Кашицына</span>
              , продуктовый дизайнер. Проектирую интерфейсы, соединяя
              креативность, эмоции и заботу о пользователях.
            </h1>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-7 pt-20 text-sm md:flex-row md:items-center md:justify-between md:pt-14 md:text-lg">
            <EyesLogo className="scale-90 md:scale-100" />
            <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-3">
              <div className="flex gap-7">
                <a
                  className="font-medium transition hover:text-accent"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick("about");
                  }}
                >
                  Обо мне
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick("projects");
                  }}
                  className="font-semibold transition hover:text-accent"
                >
                  Проекты
                </a>
              </div>
              <a
                href="mailto:kasitsynaanna.cats@gmail.com"
                className="font-medium transition hover:text-accent"
              >
                kasitsynaanna.cats@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutMe />

      <section id="projects" className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 flex items-end justify-between md:mb-10">
            <h2 className="text-3xl font-semibold leading-tight md:text-[54px]">
              Проекты
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {PROJECT_CARDS.map((card) => (
              <ProjectCard key={card.slug} card={card} onClick={() => saveScroll()} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
