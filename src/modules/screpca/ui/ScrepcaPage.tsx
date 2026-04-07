import { ProjectPagination } from "@/common/ProjectPagination";
import { Hero } from "../../../common/Hero";
import { ProjectInfo } from "../../../common/ProjectInfo";
import { SCREPCA_ASSETS } from "../assets";

export function ScrepcaPage() {
  return (
    <main className="text-xl overflow-x-hidden text-[#101418] bg-white flex flex-col gap-16">
      <Hero
        wrapperClassName="bg-[url(/hero-background.svg)] bg-cover bg-center "
        innerClassName="bg-[#DFEEF7]"
        developmentTerm="01.11.2025–20.12.2025"
        title="Благотворительный проект «Скрепка»"
        description="Разработка лендинга и мобильного приложения для благотворительного проекта «Скрепка»"
      >
        <>
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
        </>
      </Hero>
      <ProjectInfo
        about="«Скрепка» - это инструмент созданный для поддержки педагогов в построении эффективной, гуманной образовательной среды для детей с различными особенностями в здоровье."
        problem={[
          "В России 600–700 тыс. детей с инвалидностью, и большинство из них учатся в обычных школах.",
          "Несмотря на законодательные гарантии, такие дети часто сталкиваются с трудностями в коммуникации, ограниченным участием в школьной жизни, буллингом и чувством изоляции.",
          "Школам не хватает эффективных решений для их полноценной интеграции в образовательную и социальную среду.",
        ]}
        solution="Мобильное приложение с понятным и поддерживающим визуальным образом, которое помогает учителям и детям с инвалидностью эффективнее взаимодействовать в учебном процессе."
      />
      <section className="">
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
          <div className="w-full pt-6 bg-[#DFEEF7] flex justify-center items-center">
            <img
              src={SCREPCA_ASSETS.mockup1}
              alt="Ноутбук с лендингом Скрепка"
              className="translate-x-24"
              loading="lazy"
            />
          </div>
          <div className="w-full bg-[#dce4ec] flex justify-center items-center">
            <img
              src={SCREPCA_ASSETS.mockup2}
              alt="Дополнительный экран лендинга Скрепка"
              className="w-[460px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="">
        <div className="bg-[#E9EFF4] p-3 md:p-20">
          <img
            src={SCREPCA_ASSETS.mobileMockup}
            alt="Мобильные экраны приложения Скрепка"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4 p-8 text-xl">
        <span className="text-black/30">Целевая аудитория</span>
        <p>
          Общеобразовательные школы, не имеющие специальных образовательных
          программ или средств для коммуникации с учащимися с особыми
          образовательными потребностями
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ul className="list-disc pl-5">
            <li>Глухие дети</li>
            <li>Слабослышащие дети</li>
            <li>Слабовидящие дети</li>
            <li>Дети с тяжёлыми нарушениями речи (ТНР)</li>
          </ul>
          <ul className="list-disc">
            <li>Дети с нарушениями опорно-двигательного аппарата (ОДА)</li>
            <li>Дети с задержкой психического развития (ЗПР)</li>
            <li>Дети с расстройствами аутистического спектра (РАС)</li>
            <li>
              Дети с умственной отсталостью (интеллектуальными нарушениями){" "}
            </li>
          </ul>
        </div>
      </section>

      <section className="">
        <div className="">
          <img
            src={SCREPCA_ASSETS.cover}
            alt="Графические элементы бренда Скрепка"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      <section>
        <div>
          <img
            src={SCREPCA_ASSETS.masscot}
            alt="Маскот и экран приложения Скрепка"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-[#E9EFF4]  pt-8">
        <div className="flex flex-col gap-16">
          <div className="px-8 flex flex-col gap-4">
            <span className="text-black/30">Визуальные образы</span>
            <span>
              Для инклюзивного приложения создание маскота важно — он может
              использовать жестовый язык, голосовые подсказки, визуальные
              подсказки и адаптироваться к особенностям восприятия разных
              пользователей, делая обучение, навигацию и взаимодействие с
              приложением проще, понятнее и комфортнее.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1fr]">
            <img
              src={SCREPCA_ASSETS.visual1}
              alt="Лендинг проекта Скрепка и бренд-блоки"
              className="w-full scale-125 translate-x-32 translate-y-16"
              loading="lazy"
            />
            <img
              src={SCREPCA_ASSETS.visual2}
              alt="Лендинг проекта Скрепка и бренд-блоки"
              className="w-full scale-110 translate-x-[-32px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={SCREPCA_ASSETS.photo}
            alt="Фото детей за занятием"
            className="w-full bg-[#dce4ec] p-12"
            loading="lazy"
          />
          <img
            src={SCREPCA_ASSETS.photo2}
            alt="Фото встречи проекта Скрепка"
            className="h-full w-full bg-[#dce4ec] p-12"
            loading="lazy"
          />
        </div>
      </section>

      <section>
        <img
          src={SCREPCA_ASSETS.block}
          alt="Фото встречи проекта Скрепка"
          loading="lazy"
        />
      </section>
      <section>
        <div className="bg-[#d8e4ef] ">
          <img
            src={SCREPCA_ASSETS.visual1}
            alt="Экран с преимуществами приложения"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      <section>
        <div className="bg-[#E9EFF4] py-16 px-24">
          <img
            src={SCREPCA_ASSETS.mobileMockup2}
            alt="Чат и интерфейсы мобильного приложения"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="px-8 flex flex-col gap-4 text-xl">
        <span className="text-black/30">Ключевые ценности проекта</span>
        <ul>
          <li>Индивидуальный подход</li>
          <li>Инклюзивность и равенство</li>
          <li>Воспитания эмпатии</li>
          <li>Научный методический подтекст</li>
          <li>Доступность</li>
        </ul>
      </section>

      <section>
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full h-[700px] bg-[#E9EFF4]"></div>
          <div className="w-full h-[700px] bg-[#E9EFF4]"></div>
          <div className="h-[700px] absolute w-full flex items-center justify-center">
            <img
              src={SCREPCA_ASSETS.mockupLogo}
              alt="Финальный экран кейса Скрепка"
              className="h-full p-16 translate-y-10"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#339FD9] font-[Helvetica] text-white text-3xl italic font-light text-center p-14">
        Проект получил победу в творческой
        <br /> мастерской «Точка»
      </section>
      <section>
        <ProjectPagination
          prevLink="/projects/biocad"
          nextLink="/projects/gazprom-neft"
        />
      </section>
    </main>
  );
}
