import { SCREPCA_ASSETS } from "../assets";

export function ScrepcaHeroVisual() {
  return (
    <div className="relative rounded-[28px] p-4 md:rounded-[40px] md:p-8 pb-20">
      <img
        src={SCREPCA_ASSETS.hero}
        alt="Главный экран проекта Скрепка"
        className="mx-auto w-full max-w-[750px] translate-y-20 "
        fetchPriority="high"
      />
      <img
        src={SCREPCA_ASSETS.heroArrow}
        alt=""
        className="pointer-events-none absolute left-[13%] top-[-15px] hidden w-72 md:block "
        aria-hidden
      />
      <img
        src={SCREPCA_ASSETS.book}
        alt=""
        className="pointer-events-none absolute left-[15%] top-1/2 hidden w-72  md:block "
        aria-hidden
      />
      <img
        src={SCREPCA_ASSETS.star}
        alt=""
        className="pointer-events-none absolute right-20 top-[-60px] hidden w-96 md:block"
        aria-hidden
      />
      <img
        src={SCREPCA_ASSETS.heroLogo}
        alt="Логотип Скрепка"
        className="absolute right-4 w-72 md:right-8 bottom-[-40px]"
      />
    </div>
  );
}
