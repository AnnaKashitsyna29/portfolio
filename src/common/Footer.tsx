import { EyesLogo } from "../modules/home/ui/EyesLogo";

export function Footer() {
  return (
    <footer className="px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-[30px]">
      <div className="mx-auto max-w-[1320px] border-t border-black/10 dark:border-[#E1E3E9] pt-10 md:pt-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <EyesLogo />
            <p className="mt-4 text-3xl font-bold leading-none md:text-[40px]">
              Anna Kashitsyna
            </p>
          </div>

          <div className="text-left md:text-right">
            <div className="relative mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-black/82 underline decoration-1 underline-offset-4 md:justify-end md:text-lg">
              <a
                href="https://t.me/RomashkaK5"
                target="_blank"
                rel="noreferrer"
                className="relative"
              >
                <div className="absolute left-[-120px] top-[-70px] text-lg font-bold text-accent md:text-xl md:block hidden">
                  Связаться
                </div>
                <svg
                  width="71"
                  height="52"
                  viewBox="0 0 71 52"
                  fill="none"
                  className="absolute left-[0px] top-[-50px] md:block hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.2634 51.8409C67.474 52.0196 67.7895 51.9937 67.9682 51.7832L70.8796 48.3519C71.0582 48.1413 71.0324 47.8258 70.8218 47.6471C70.6112 47.4685 70.2957 47.4944 70.1171 47.7049L67.5292 50.7549L64.4791 48.167C64.2685 47.9884 63.953 48.0142 63.7744 48.2248C63.5957 48.4354 63.6216 48.7509 63.8321 48.9295L67.2634 51.8409ZM0.0869141 1.45969L0.173582 1.95212C10.5171 0.131656 26.277 0.434365 39.9265 7.23225C53.5388 14.0116 65.1027 27.2728 67.0886 51.5005L67.5869 51.4597L68.0852 51.4188C66.0711 26.8465 54.3017 13.2744 40.3723 6.33712C26.4801 -0.581654 10.49 -0.878946 0.000246137 0.967257L0.0869141 1.45969Z"
                    fill="currentColor"
                  />
                </svg>
                Telegram
              </a>
              <a href="mailto:kasitsynaanna.cats@gmail.com">
                Электронная почта
              </a>
              <a href="tel:+79681912343">+79681912343</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
