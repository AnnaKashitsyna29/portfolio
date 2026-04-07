import { ProjectPagination } from "@/common/ProjectPagination";
import { Hero } from "../../../common/Hero";
import { ProjectInfo } from "../../../common/ProjectInfo";
import { BAZAR_ASSETS } from "../assets";

export const BazarPage = () => {
  return (
    <main className="text-xl overflow-x-hidden text-[#101418] bg-white flex flex-col gap-16">
      <Hero
        developmentTerm="20.10.2025–18.01.2026"
        innerClassName="bg-[#FF6545] px-0"
        buttonClassName="ml-[30px] mb-[150px] text-white border-white"
        title="Городской сервис «Базар»"
        description="Городской сервис для экономии и удобства: в коллаборация с рынком Сыктывкара"
      >
        <>
          <div className="relative grid translate-x-[-140px] gap-4 grid-flow-col pb-20 overflow-x-visible overflow-y-visible">
            <img
              src={BAZAR_ASSETS.heroPhone}
              alt="Главный экран проекта Скрепка"
              className="absolute left-[40%] top-[-50%]"
              fetchPriority="high"
            />
            <img
              src={BAZAR_ASSETS.babushka2_4}
              alt=""
              className="min-w-[280px]"
              aria-hidden
            />
            <img
              src={BAZAR_ASSETS.babushka2_2}
              alt=""
              className="min-w-[280px]"
              aria-hidden
            />
            <img
              src={BAZAR_ASSETS.babushka2_7}
              alt=""
              className="min-w-[280px]"
              aria-hidden
            />
            <img
              src={BAZAR_ASSETS.babushka2_3}
              alt=""
              className="min-w-[280px]"
              aria-hidden
            />
            <img
              src={BAZAR_ASSETS.babushka2_5}
              alt=""
              className="min-w-[280px]"
              aria-hidden
            />
            <img
              src={BAZAR_ASSETS.babushka2_6}
              alt=""
              className="min-w-[280px]"
              aria-hidden
            />
          </div>
        </>
      </Hero>
      <ProjectInfo
        about={
          "Мобильное приложение — цифровой городской рынок, объединяющий покупателей и продавцов с возможностью поиска, покупки и продажи товаров и услуг, онлайн-оплаты, доставки и общения внутри платформы."
        }
        problem={
          "Экономические трудности, с которыми сталкиваются жители, приводят к снижению уровня жизни и ограничивают их участие в культурной и общественной жизни города, а недостаточный интерес со стороны жителей других регионов усугубляет ситуацию, приводя к низкому уровню туризма."
        }
        solution={
          "Разработать мобильное приложение, представляющее собой цифровой аналог городского рынка, объединяющее туристов и местный бизнес в единой экосистеме."
        }
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:min-h-[700px]">
        <div className="bg-[#E9E9E9] flex items-center justify-center">
          <img src={BAZAR_ASSETS.backet} />
        </div>
        <div className="bg-[#FF6545] flex items-center justify-center">
          <img src={BAZAR_ASSETS.handAndIphone16Pro} />
        </div>
      </section>
      <section className="bg-[#E9E9E9] p-20 flex justify-center">
        <img src={BAZAR_ASSETS.mockup} />
      </section>
      <section className="px-[30px] flex flex-col gap-4">
        <span className="text-[rgba(0, 0, 0, 0.34)]">Целевая аудитория</span>
        <span>
          Общеобразовательные школы, не имеющие специальных образовательных
          программ или средств для коммуникации с учащимися с особыми
          образовательными потребностями
        </span>
        <ul className="list-disc pl-5">
          <li>Глухие дети</li>
          <li>Слабослышащие дети</li>
          <li>Слабовидящие дети</li>
          <li>Дети с тяжёлыми нарушениями речи (ТНР)</li>
          <li>Дети с нарушениями опорно-двигательного аппарата (ОДА)</li>
          <li>Дети с задержкой психического развития (ЗПР)</li>
          <li>Дети с расстройствами аутистического спектра (РАС)</li>
          <li>Дети с умственной отсталостью (интеллектуальными нарушениями)</li>
        </ul>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:min-h-[700px]">
        <div className="bg-[#E9E9E9] flex items-center justify-center">
          <img src={BAZAR_ASSETS.cards} />
        </div>
        <div className="bg-gradient-to-b from-[#93A7AB] to-[#C0D1D0] flex items-center justify-center">
          <img src={BAZAR_ASSETS.handAndPhone2} />
        </div>
      </section>
      <section>
        <img src={BAZAR_ASSETS.cover} />
      </section>
      <section className="bg-[#E9E9E9] p-[30px] flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(0,0,0,0.34)]">Концепция</span>
          <span>
            «Базар» переосмысливает традиционный рынок в цифровой среде,
            превращая его в удобный и доступный сервис для всех категорий
            пользователей. Приложение сочетает в себе функции маркетплейса,
            социальной платформы и инструмента городской активности.
            Пользователи не только совершают покупки, но и вовлекаются в жизнь
            города через задания, мероприятия и благотворительные инициативы.
          </span>
        </div>
        <img src={BAZAR_ASSETS.mockup2} className="p-8" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:min-h-[700px]">
        <div className="bg-[#E9E9E9] flex items-center justify-center">
          <img src={BAZAR_ASSETS.mockup3} />
        </div>
        <div className="bg-[#E9E9E9] flex items-center justify-center">
          <div className="relative">
            <img src={BAZAR_ASSETS.bag} />
            <img
              src={BAZAR_ASSETS.oil}
              className="absolute right-[-30px] bottom-[-50px]"
            />
          </div>
        </div>
      </section>
      <section className="p-[30px] flex flex-col gap-4">
        <span className="text-[rgba(0,0,0,0.34)]">Гипотеза</span>
        <div className="flex flex-col">
          <span>
            Если создать мобильное приложение как цифровой аналог городского
            рынка с элементами геймификации и социальной вовлеченности, это
            позволит одновременно:
          </span>
          <span>— поддержать локальный бизнес</span>
          <span>— повысить экономическую активность</span>
          <span>— привлечь туристов</span>
          <span>— вовлечь жителей в культурную жизнь города</span>
        </div>
      </section>
      <section className="bg-[#E9E9E9] p-20 flex justify-center">
        <img src={BAZAR_ASSETS.mockup4} />
      </section>
      <section className="p-[30px] flex flex-col gap-4">
        <span className="text-[rgba(0,0,0,0.34)]">Уникальные функции</span>
        <div className="flex flex-row w-[70%] gap-4 md:gap-9">
          <div className="flex flex-col">
            <span>
              Проект выходит за рамки классического маркетплейса за счет
              социально-геймификационных механик:
            </span>
            <span>— внутренняя цифровая валюта за выполнение заданий</span>
            <span>
              — игровые активности, направленные на изучение города и помощь
              другим
            </span>
            <span>
              — встроенные благотворительные механики и онлайн-волонтерство
            </span>
          </div>
          <div className="flex flex-col">
            <span>— календарь помощи и «подписка на помощь»</span>
            <span>— интеграция с культурными и городскими инициативами</span>
            <span>— поддержка локального языка (коми)</span>
            <span>— режим для слабовидящих пользователей</span>
            <span>— офлайн-связка с городским рынком</span>
            <span>
              Также реализованы базовые функции маркетплейса: каталог, поиск,
              чат, оплата, доставка, рейтинги и личные кабинеты.
            </span>
          </div>
        </div>
      </section>
      <section>
        <img src={BAZAR_ASSETS.handAndPhone3} />
      </section>
      <section className="p-[30px] flex flex-col gap-4">
        <span className="text-[rgba(0,0,0,0.34)]">Что было сделано?</span>
        <span>
          Создана единая цифровая экосистема, которая:
          <br />— упрощает доступ к локальным товарам и услугам
          <br />— поддерживает предпринимателей
          <br />— стимулирует социальную активность
          <br />— формирует интерес к городу через интерактивный опыт
        </span>
        <span>
          Проект формирует устойчивую связь между экономикой, культурой и
          сообществом города. Он не только упрощает покупки, но и создает новую
          модель взаимодействия жителей с городской средой.
        </span>
      </section>
      <section>
        <img src={BAZAR_ASSETS.cover2} />
      </section>
      <section className="py-28 flex justify-center text-[32px] underline font-helveticaLightOblique font-light italic ">
        <a href="https://www.figma.com/design/Oy7xVf0oA4ltPlB8A4udud/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE?node-id=1-3&t=O7AGEzUmLWFPY7S0-1">
          Ссылка на проект в FIGMA
        </a>
      </section>
      <section>
        <ProjectPagination
          prevLink="/projects/polka"
          nextLink="/projects/biocad"
        />
      </section>
    </main>
  );
};
