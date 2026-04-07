import classNames from "classnames";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type HeroProps = {
  developmentTerm: string;
  title: string;
  description: string;
  children: ReactNode;
  wrapperClassName?: string;
  innerClassName?: string;
  buttonClassName?: string;
};

export function Hero({
  developmentTerm,
  title,
  description,
  children,
  wrapperClassName,
  innerClassName,
  buttonClassName,
}: HeroProps) {
  const wrapperClassNames = [
    "flex flex-col gap-16 pb-32 shadow-[inset_0px_-130px_354px_rgba(255,255,255,1)] dark:shadow-none",
    wrapperClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const innerClassNames = ["px-8 pt-8", innerClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={wrapperClassNames}>
      <div className={innerClassNames}>
        <div className="mb-5 flex items-center justify-between gap-3 md:mb-8">
          <Link
            to="/#projects"
            className={classNames([
              "inline-flex items-center rounded-full border-2 border-black border-solid border-xl px-4 py-2 text-xl font-medium text-black transition hover:-translate-y-0.5",
              buttonClassName,
            ])}
          >
            На главную
          </Link>
        </div>

        {children}
      </div>
      <div className="px-8 grid grid-cols-2">
        <div className="mt-8 pb-8 md:mt-10 md:pb-10">
          <h1 className="max-w-[860px] text-3xl font-semibold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-black/30 dark:text-white/30 md:text-base max-w-[70%]">
            {description}
          </p>
        </div>
        <div className="self-center justify-self-end flex flex-col gap-5">
          <div className="flex flex-col justify-end items-end">
            <span className="text-lg">Сроки разработки</span>
            <span className="text-lg text-black/30 dark:text-white/30 ">
              {developmentTerm}
            </span>
          </div>
          <div className="flex flex-col justify-end items-end">
            <span className="text-lg">Роль</span>
            <span className="text-lg text-black/30 dark:text-white/30 ">
              UX/UI дизайнер
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
