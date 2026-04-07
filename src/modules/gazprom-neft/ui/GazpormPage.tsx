import { Hero } from "@/common/Hero";
import { ProjectInfo } from "@/common/ProjectInfo";
import { useTheme } from "@/shared/lib/ThemeContext";
import { useEffect } from "react";
import { GAZPROM_NEFT_ASSETS } from "../assets";
import { ProjectPagination } from "@/common/ProjectPagination";

export const GazpromPage = () => {
  const { toggleTheme } = useTheme();

  useEffect(() => {
    toggleTheme();

    return () => {
      toggleTheme();
    };
  }, [toggleTheme]);
  return (
    <main className="text-xl overflow-x-hidden flex flex-col gap-16">
      <Hero
        developmentTerm="01.10.2024–05.12.2024"
        innerClassName="bg-[#FF6C4A] relative"
        title="Сайт дизайн-команды Газпром-нефти"
        buttonClassName="z-[2]"
        description="Разработка сайта для команды дизайнеров, работающих в компании «Газпром-нефть»"
      >
        <>
          <div className=" max-w-[800px]  mx-auto rounded-[28px] md:rounded-[40px] pb-10">
            <img
              src={GAZPROM_NEFT_ASSETS.notebookHero}
              alt="Главный экран проекта Скрепка"
              className="mx-auto w-full translate-y-16"
              fetchPriority="high"
            />
            <img
              src={GAZPROM_NEFT_ASSETS.lightning}
              className="absolute hidden md:block left-[17%] top-[25%]"
              alt="Логотип BIOCAD"
            />
            <img
              src={GAZPROM_NEFT_ASSETS.logoIcon}
              className="absolute right-10  hidden md:block bottom-10"
              alt="Логотип BIOCAD"
            />
            <img
              src={GAZPROM_NEFT_ASSETS.designTeam}
              className="absolute right-[15%]  hidden md:block -bottom-32"
              alt="Логотип BIOCAD"
            />
          </div>
        </>
      </Hero>
      <section>
        <video src="/video.mp4" autoPlay loop muted />
      </section>
      <ProjectInfo
        unsigned
        about={[
          "Обзор дизайн-процесса и методов работы команды",
          "Демонстрация дизайн-системы и её ключевых особенностей.",
          "Презентация предоставляемых услуг и готовых решений.",
          "Знакомство с командой.",
          "Привлечение новых заказчиков внутри компании.",
        ]}
        problem={
          "Разработать лендинг, который представит команду, её услуги, реализованные проекты и дизайн-систему. Он должен повысить узнаваемость внутри компании и за её пределами, подчеркнув профессионализм, ориентированность на инновации и разнообразие проектов."
        }
        solution={[
          "Провести конкурентный анализ",
          "Определить ЦА, выделить сегменты",
          "Собрать и проанализировать референсы",
          "Разработать прототип",
          "Создать классный продающий дизайн",
          "Презентовать решение команде",
        ]}
      />
      <section className="relative bg-[#8D4668] flex items-center justify-center py-20">
        <img src={GAZPROM_NEFT_ASSETS.photo} className="z-[1]" />
        <img
          src={GAZPROM_NEFT_ASSETS.lightning}
          className="absolute left-[30%] top-[6%] z-[1]"
        />
        <img
          src={GAZPROM_NEFT_ASSETS.skotch}
          className="absolute left-[26%] bottom-[11%]"
        />
        <img
          src={GAZPROM_NEFT_ASSETS.skotch}
          className="absolute right-[26%] top-[11%] "
        />
      </section>
      <section className="px-[30px] flex flex-col gap-4">
        <span className="text-[rgba(0,0,0,0.34)] dark:text-white/30">
          О команде
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[83%] gap-10">
          <p>
            Команда дизайнеров «Газпром нефти» разрабатывает инновационные
            решения для различных систем, охватывая широкий спектр задач — от
            поддержки археологических исследований и технологий бурения до
            создания корпоративных порталов и высокотехнологичных сервисов
            внутри компании.
          </p>
          <p>
            Помимо этого, команда занимается развитием открытой дизайн-системы
            Consta, которая представляет собой комплексный набор инструментов и
            стандартов для создания удобных интерфейсов.
          </p>
        </div>
      </section>
      <section>
        <img src={GAZPROM_NEFT_ASSETS.mission} />
      </section>
      <section>
        <img src={GAZPROM_NEFT_ASSETS.process} />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={GAZPROM_NEFT_ASSETS.cases} />
        <div className="bg-[#FF6C4A] flex items-center justify-center">
          <img src={GAZPROM_NEFT_ASSETS.notebook} />
        </div>
      </section>
      <section className="px-[30px]">
        <span className="text-white/30">Сегменты</span>
        <video
          className="overflow-hidden h-[750px] w-full object-cover"
          src="/cats.mp4"
          autoPlay
          loop
          muted
        />
      </section>
      <section>
        <img src={GAZPROM_NEFT_ASSETS.notebook2} />
      </section>
      <section>
        <img src={GAZPROM_NEFT_ASSETS.notebook3} />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:min-h-[700px]">
        <div className="bg-[#FF6C4A] flex items-center justify-center">
          <img src={GAZPROM_NEFT_ASSETS.notebook4} />
        </div>
        <div className="bg-[#8A4569] flex items-center justify-center">
          <img src={GAZPROM_NEFT_ASSETS.notebook5} />
        </div>
      </section>
      <section className="bg-[#176DEA] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <img src={GAZPROM_NEFT_ASSETS.monitorXDR} className="scale-90" />
        <img
          src={GAZPROM_NEFT_ASSETS.macStudio}
          className="scale-110 translate-y-10 translate-x-40"
        />
        <div className="md:p-16 p-8 col-span-2 bg-[#FF6545] flex flex-col gap-4 items-center">
          <span className="text-[40px] leading-10">
            ПРОЕКТ ПОЛУЧИЛ 2 МЕСТО В РАМКАХ КОНКУРСА ЯНГ ДИЗАЙН
          </span>
          <span className="text-[#F6F6F663]">среди 30 участников</span>
        </div>
      </section>
      <section>
        <ProjectPagination
          prevLink="/projects/skrepka"
          nextLink="/projects/polka"
        />
      </section>
    </main>
  );
};
