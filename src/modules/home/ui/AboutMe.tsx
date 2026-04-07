import { useMemo, useState } from "react";
import { ABOUT_TABS, type AboutTabId } from "../model/about-tabs";

function PushPinIcon() {
  return (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M53.9213 21.2865L49.4401 36.5716C51.5562 38.4532 54.0389 42.1823 53.0368 48.9794C52.9677 49.4566 52.7964 49.9133 52.5347 50.3182C52.2729 50.7231 51.9267 51.0668 51.5199 51.3256C51.4497 51.3638 51.3814 51.401 51.3112 51.4392C50.923 51.6507 50.4968 51.7836 50.0571 51.8302C49.6175 51.8769 49.1729 51.8365 48.7489 51.7112L34.9782 47.6411L31.394 59.8065C31.2677 60.2347 30.9765 60.5951 30.5844 60.8086C30.1923 61.022 29.7315 61.071 29.3033 60.9447C28.8751 60.8184 28.5146 60.5271 28.3012 60.135C28.0877 59.7429 28.0388 59.2821 28.1651 58.8539L31.7578 46.6911L17.9806 42.6268C17.5276 42.4929 17.1078 42.265 16.7487 41.9581C16.3895 41.6511 16.099 41.272 15.8961 40.8453C15.6932 40.4187 15.5825 39.9541 15.571 39.4818C15.5596 39.0095 15.6477 38.5401 15.8297 38.1041C18.4624 31.7601 23.3612 30.0581 25.664 29.6041L30.1552 14.2801C30.2801 13.8563 30.4874 13.4612 30.7651 13.1174C31.0428 12.7736 31.3855 12.488 31.7736 12.2767C32.1618 12.0654 32.5877 11.9326 33.0272 11.8859C33.4666 11.8393 33.9109 11.8796 34.3348 12.0047L51.6451 17.1097C52.5006 17.362 53.221 17.9437 53.6478 18.7269C54.0747 19.5101 54.173 20.4308 53.9213 21.2865Z"
        fill="#F1C1F9"
      />
    </svg>
  );
}

export function AboutMe() {
  const [activeTab, setActiveTab] = useState<AboutTabId>("about");

  const activeContent = useMemo(
    () => ABOUT_TABS.find((tab) => tab.id === activeTab) ?? ABOUT_TABS[0],
    [activeTab]
  );

  return (
    <section id="about" className="px-5 pb-16 pt-6 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-[472px_minmax(0,762px)] md:items-start md:justify-between">
        <div className="relative mx-auto w-full max-w-[472px]">
          <div
            className={`${activeContent.imageRotationClass} overflow-hidden transition-transform duration-300 `}
          >
            <img
              src={activeContent.image}
              alt={activeContent.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute left-1/2 top-[-60px] -translate-x-1/2 text-4xl md:text-5xl">
            <PushPinIcon />
          </span>
        </div>

        <div>
          <div
            className="flex items-center gap-8 text-sm md:text-lg"
            role="tablist"
            aria-label="Обо мне"
          >
            {ABOUT_TABS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  id={`about-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`about-panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={
                    isActive
                      ? "font-semibold text-accent underline decoration-1 underline-offset-4"
                      : "text-black/90 transition hover:text-black"
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            id={`about-panel-${activeContent.id}`}
            role="tabpanel"
            aria-labelledby={`about-tab-${activeContent.id}`}
            className="mt-6 space-y-7 text-base leading-[1.3] md:mt-7 md:text-xl"
          >
            {activeContent.sections.map((section, index) => (
              <article key={`${activeContent.id}-${index}`}>
                {section.title ? (
                  <h3 className="mb-2 text-base font-semibold leading-[1.3] md:text-xl">
                    {section.title}
                  </h3>
                ) : null}

                {section.type === "paragraphs" ? (
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                ) : (
                  <ol className="list-decimal space-y-0.5 pl-6 marker:font-medium">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
