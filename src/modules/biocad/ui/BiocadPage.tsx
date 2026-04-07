import { ProjectPagination } from "@/common/ProjectPagination";
import { Hero } from "../../../common/Hero";
import { ProjectInfo } from "../../../common/ProjectInfo";
import { BIOCAD_ASSETS } from "../assets";
import "./BiocadPage.css";

export const BiocadPage = () => {
  return (
    <main className="text-xl overflow-x-hidden text-[#101418] bg-white flex flex-col gap-16">
      <Hero
        developmentTerm="25.09.2025–01.12.2025"
        innerClassName="gradient relative"
        title="Редизайн сайта компании BIOCAD"
        buttonClassName="z-[2]"
        description="Обновление цифрового образа одной из ведущих биотехнологических компаний"
      >
        <>
          <div className=" max-w-[800px]  mx-auto rounded-[28px] md:rounded-[40px] pb-10">
            <img
              src={BIOCAD_ASSETS.notebookHero}
              alt="Главный экран проекта Скрепка"
              className="mx-auto w-full translate-y-16"
              fetchPriority="high"
            />
            <img
              src={BIOCAD_ASSETS.mapHeroStart}
              className="absolute left-0 top-0 hidden md:block h-full z-[0]"
              alt="Логотип BIOCAD"
            />
            <img
              src={BIOCAD_ASSETS.mapHeroEnd}
              className="absolute right-0 top-0 hidden md:block h-full z-[0] mix-blend-screen scale-125 translate-y-20"
              alt="Логотип BIOCAD"
            />
          </div>
        </>
      </Hero>
      <ProjectInfo
        about={
          "BIOCAD — российская биотехнологическая компания, занимающаяся разработкой и производством лекарственных препаратов для лечения онкологических, аутоиммунных и других тяжёлых заболеваний. Компания ведёт полный цикл разработки — от научных исследований до выпуска готовых лекарств"
        }
        problem={
          "Переосмыслить цифровой образ BIOCAD. Создать сайт, который вдохновит, упростит доступ к информации и подчеркнёт биотехнологическое лидерство компании"
        }
        solution={
          "Мобильное приложение с понятным и поддерживающим визуальным образом, которое помогает учителям и детям с инвалидностью эффективнее взаимодействовать в учебном процессе."
        }
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:min-h-[700px]">
        <div className="bg-[#E9E9E9] flex items-center justify-center">
          <img src={BIOCAD_ASSETS.notebook1} />
        </div>
        <div className="bg-gradient-to-b from-[#93A7AB] to-[#C0D1D0] flex items-center justify-center">
          <img src={BIOCAD_ASSETS.phoneAndHand} />
        </div>
      </section>
      <section className="bg-[#E9EFEF] flex items-center justify-center pb-10">
        <img src={BIOCAD_ASSETS.notebook2} />
      </section>
      <section className="flex flex-col gap-5 p-[30px]">
        <span className="text-[rgba(0,0,0,0.34)]">Гипотезы</span>
        <span>
          Чтобы определить, как усилить восприятие бренда BIOCAD и повысить
          доверие аудитории, были сформулированы и проверенны несколько ключевых
          гипотез.
        </span>
        <div className="flex flex-col gap-2 md:max-w-[50%]">
          <span>01</span>
          <span>
            Если показать реальные истории пациентов с фото и видео, то доверие
            к BIOCAD повысится
          </span>
          <span>Цель:</span>
          <span>
            Проверить, повышает ли контент доверие и эмоциональную вовлечённость
          </span>
        </div>
        <div className="flex flex-col gap-2 md:max-w-[50%]">
          <span>02</span>
          <span>
            Если визуально подчеркнуть технологичность и инновации, молодая
            аудитория и партнёры будут ассоциировать компанию с передовой
            наукой.
          </span>
          <span>Цель:</span>
          <span>
            Проверить, воспринимается ли компания как инновационная и
            современная
          </span>
        </div>
        <div className="flex flex-col gap-2 md:max-w-[50%]">
          <span>03</span>
          <span>
            Если добавить информацию о международных коллаборациях и
            публикациях, доверие партнёров и пациентов к BIOCAD возрастёт.
          </span>
          <span>Цель:</span>
          <span>
            Проверить, повышает ли прозрачность и показ глобального
            сотрудничества доверие партнёров и пациентов
          </span>
        </div>
      </section>
      <section className="gradient p-12 py-20">
        <img src={BIOCAD_ASSETS.mockup} />
      </section>
      <section className="flex flex-col bg-[#E9EFEF] pb-20">
        <div className="p-[30px] flex flex-col gap-4">
          <span className="text-[rgba(0,0,0,0.34)]">Выводы исследования</span>
          <div className="flex flex-col gap-8">
            <span>
              Исследование показало, что пользователи мгновенно считывают
              визуальный язык сайтов и делают выводы о компании по форме, цвету
              и стилю. Абстрактная наука воспринимается холодной, а старомодные
              образы лабораторий, пробирок и врачей в халатах вызывают
              ассоциации с бюрократией.
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <span>
                Другое дело современные, минималистичные и структурированные
                сайты воспринимаются как технологичные и вызывают доверие,
                особенно если они визуально лёгкие и читаемые.
              </span>
              <span>
                На основе исследования конкурентов ключевым инсайтом стало то,
                что низкое знание бренда сочетается с правильным считыванием
                научных визуальных кодов: пользователи понимают, что это
                компания в области генетики и биотехнологий, но воспринимают её
                как отстранённую.
              </span>
              <span>
                Добавление контента с реальными историями пациентов и информации
                о международных коллаборациях и публикациях значительно повышает
                доверие и ощущение профессионализма.
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 pt-10">
          <img src={BIOCAD_ASSETS.notebook3} />
          <img src={BIOCAD_ASSETS.notebook4} />
        </div>
      </section>
      <section>
        <img src={BIOCAD_ASSETS.cover} />
      </section>
      <section className="columns-3 gap-5 p-[30px]">
        <span className="text-[rgba(0,0,0,0.34)]">Суть</span>
        <p className="pt-4">
          Визуальный язык BIOCAD строится на светлой современной палитре с
          преобладанием чистых белых оттенков и мягко перетекающих зелёно-жёлтых
          градиентов. Каждый градиент состоит из множества переливающихся
          оттенков, создавая ощущение непрерывного движения. В нашей концепции
          градиент становится ключевой метафорой жизни: всё живое находится в
          постоянном развитии и движении, как миллионы процессов внутри
          организма — дыхание, циркуляция, деление клеток, обмен энергии.
        </p>
        <p className="pt-4">
          Зелено-желтые оттенки не случайны, они отражают энергию и жизненную
          силу. Градиент реагирует на движения мыши пользователя, меняясь и
          перетекая в ответ на его действия. Так мы показываем, что жизнь, наука
          и компания — это единая взаимосвязанная система, где каждый человек
          становится естественной его частью. Помимо градиентов на сайте
          используется точечный паттерн, который подчёркивает технологичность и
          структуру науки. Он показывает, что каждый маленький элемент имеет
          значение, а их взаимодействие создаёт целостную систему.
        </p>
        <p className="pt-4">
          Мы сознательно избегаем пугающих образов — шприцов, клеток опухолей
          или стерильной лаборатории. Вместо этого используем метафоричные и
          вдохновляющие образы, например, нить ДНК, выстраивающуюся из точек, а
          также фотографии людей — учёных, врачей и пациентов. Через них наука
          становится понятной и близкой, а тон коммуникации остаётся уверенным,
          но тёплым
        </p>
      </section>
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:min-h-[700px]">
        <div className="bg-[#E9EFEF] flex items-center justify-center">
          <img src={BIOCAD_ASSETS.macbookAir} />
        </div>
        <div className="gradient flex items-center justify-center">
          <img src={BIOCAD_ASSETS.iMac} />
        </div>
        <img
          src={BIOCAD_ASSETS.gen}
          className="absolute top-4 left-[25%] h-full"
        />
      </section>
      <section>
        <img src={BIOCAD_ASSETS.phoneAndHand2} />
      </section>
      <section className="flex flex-col gap-4 p-[30px]">
        <span className="text-[rgba(0,0,0,0.34)]">Что было добавлено?</span>
        <span>
          Добавлены истории реальных пациентов в формате видео, чтобы показать,
          как Биокад помогает и улучшает жизни. Переработана структуру главной
          страницы.
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <span>
            Ключевые фактоиды выведены на главный экран крупным шрифтом, делая
            информацию доступной и легко воспринимаемой.
            <br /> Визуализирован пайплайн разработки препаратов, показывая
            прозрачность и логическую последовательность процессов.
          </span>
          <span>
            Разработана дружелюбная и минималистичная графика — иконки и
            инфографика, которые поддерживают чистый и понятный интерфейс.
            Создана тёмная тема в рамках эко-режима, чтобы пользователи могли
            комфортно взаимодействовать с сайтом в любое время суток.
          </span>
          <span>
            Создана визуальная метафора и концепция, которая может лечь в основу
            будущего цифрового позиционирования бренда на рынке.
          </span>
        </div>
      </section>
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:min-h-[700px]">
        <div className="bg-[#E9EFEF] flex items-center justify-center">
          <img src={BIOCAD_ASSETS.notebook5} />
        </div>
        <div className="flex items-center justify-center bg-[#212121]">
          <img src={BIOCAD_ASSETS.notebook6} />
        </div>
      </section>
      <section className="bg-[#E9EFEF] flex items-center justify-center px-4 py-20">
        <img src={BIOCAD_ASSETS.notebook7} />
      </section>
      <section className="py-28 flex justify-center text-[32px] underline font-helveticaLightOblique font-light italic ">
        <a href="https://www.figma.com/design/Oy7xVf0oA4ltPlB8A4udud/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE?node-id=1-2&t=O7AGEzUmLWFPY7S0-1">
          Ссылка на проект в FIGMA
        </a>
      </section>
      <section>
        <ProjectPagination
          prevLink="/projects/bazar"
          nextLink="/projects/skrepka"
        />
      </section>
    </main>
  );
};
