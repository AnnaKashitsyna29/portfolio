import { ProjectPagination } from "@/common/ProjectPagination";
import { Hero } from "../../../common/Hero";
import { ProjectInfo } from "../../../common/ProjectInfo";
import { POLKA_ASSETS } from "../assets";

export const PolkaPage = () => {
  return (
    <main className="text-xl overflow-x-hidden text-[#101418] bg-white flex flex-col gap-16">
      <Hero
        developmentTerm="01.11.2025–20.12.2025"
        innerClassName="bg-[#ECF1F5]"
        title="Благотворительный проект «Скрепка»"
        description="Разработка лендинга и мобильного приложения для благотворительного проекта «Скрепка»"
      >
        <>
          <div className="relative max-w-[800px]  mx-auto rounded-[28px] p-4 md:rounded-[40px] md:p-8 pb-20">
            <img
              src={POLKA_ASSETS.iphone14Pro}
              alt="Главный экран проекта Скрепка"
              className="mx-auto w-full translate-y-20 "
              fetchPriority="high"
            />
            <img
              src={POLKA_ASSETS.tomatoes}
              alt=""
              className="pointer-events-none absolute left-[13%] top-[-100px] hidden md:block "
              aria-hidden
            />
            <img
              src={POLKA_ASSETS.heroMascot}
              alt=""
              className="pointer-events-none absolute left-[30%] top-[-160px] hidden  md:block "
              aria-hidden
            />
            <img
              src={POLKA_ASSETS.products}
              alt=""
              className="pointer-events-none absolute right-[20%] top-[-130px] hidden md:block"
              aria-hidden
            />
            <img
              src={POLKA_ASSETS.coconutOil}
              alt="Логотип Скрепка"
              className="absolute md:right-8 top-[-60px] hidden md:block"
            />
          </div>
        </>
      </Hero>
      <ProjectInfo
        about={
          "POLKA — мобильное приложение для подбора и заказа продуктов, ориентированных на здоровое питание. Сервис помогает пользователям делать осознанный выбор в пользу полезных продуктов и упрощает процесс формирования сбалансированного рациона."
        }
        problem={
          "Современный рынок питания усложнил распознавание по-настоящему полезных продуктов. Термины «здоровое», «натуральное» и «без сахара» утратили точность — они не гарантируют реального качества. Даже у специализированных сервисов встречаются продукты с завышенной калорийностью и составом, не соответствующим принципам правильного питания. Это создаёт иллюзию пользы и мешает людям принимать осознанные решения."
        }
        solution={
          "Создать пространство, где собраны только проверенные и действительно полезные продукты. Каждый товар проходит многоступенчатую проверку: анализируется состав, длина ингредиентного списка и происхождение каждого компонента. Чем короче и понятнее состав, тем выше доверие и место в каталоге."
        }
      />
      <section className="grid grid-cols-2 gap-5 min-h-[700px]">
        <img
          src={POLKA_ASSETS.rectangle7}
          alt="Главный экран проекта Скрепка"
          className="mx-auto w-full "
          fetchPriority="high"
        />
        <div className=" bg-[#ECF1F5]">
          <img
            src={POLKA_ASSETS.appIcon}
            alt="Логотип Скрепка"
            className="self-start justify-self-end"
          />
        </div>
      </section>
      <section>
        <img src={POLKA_ASSETS.group} />
        <div className="flex flex-col gap-4 px-[30px]">
          <span className="text-[rgba(0,0,0,0.34)]">Маскот</span>
          <span>
            Броккоша выступает в роли проводника в мире здорового питания: он
            помогает пользователю ориентироваться в приложении, подсказывает,
            объясняет и сопровождает на ключевых этапах пользовательского пути.
          </span>
          <div>
            <span>Использование маскота решает сразу несколько задач:</span>
            <ul>
              <li>
                — снижает порог входа и упрощает адаптацию новых пользователей
              </li>
              <li>— делает интерфейс менее «сухим» и более человечным</li>
              <li>— повышает вовлеченность и запоминаемость продукта</li>
              <li>
                — усиливает ассоциацию сервиса с темой здоровья и полезных
                привычек
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[rgb(236, 241, 245)] p-[30px]">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[rgba(0,0,0,0.34)]">Концепция</span>
            <span>
              В основе концепции — простота, доступность и прозрачность:
              <br />
              пользователь сразу понимает, что он покупает, и может быстро
              оценить состав, калорийность и пользу продукта. Приложение
              сочетает в себе функции маркетплейса и образовательной платформы:
              помимо покупки, пользователь получает полезный контент,
              рекомендации и сценарии питания.
            </span>
          </div>
          <img className="md:p-10" src={POLKA_ASSETS.mockup} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#ECF1F5]">
            <img
              className="md:translate-y-7 md:translate-x-2"
              src={POLKA_ASSETS.iphone15}
            />
          </div>
          <img src={POLKA_ASSETS.mockupWoman} />
        </div>
      </section>
      <section className="p-[30px] flex flex-col gap-4">
        <span className="text-[#00000057]">Гипотезы</span>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <span>
            Пользователям сложно находить товары в узких категориях (без
            глютена, без сахара, веган), поэтому требуется более явная и удобная
            система фильтрации и навигации.
          </span>
          <span>
            Пользователи ожидают видеть раздел со скидками на первом экране, так
            как это один из ключевых сценариев при выборе сервиса доставки
            продуктов.
          </span>
          <span>
            Пользователи могут не распознавать иконку «избранного» в виде
            флажка, поскольку в большинстве сервисов для этого используется
            привычный символ «сердце».
          </span>
        </div>
      </section>
      <section className="bg-[#ECF1F5] p-10 flex justify-center">
        <img src={POLKA_ASSETS.mockup2} />
      </section>
      <section className="p-[30px] flex flex-col gap-4">
        <span className="text-[rgba(0,0,0,0.34)]">Уникальные функции</span>
        <div className="flex flex-col">
          <span>
            строгая фильтрация и отбор «действительно полезных» продуктов
          </span>
          <span>
            — акцент на составе, КБЖУ и прозрачности информации в карточке
            товара
          </span>
          <span>
            — категории по типам питания (веган, без сахара, без глютена и т.д.)
          </span>
          <span>
            — персонализация через онбординг (цели: похудение, набор массы,
            здоровье)
          </span>
          <span>— подбор рациона и рекомендации</span>
          <span>
            — полезные статьи и образовательный контент внутри приложения
          </span>
          <span>— возможность поиска по штрихкоду</span>
          <span>
            — отсутствие «вредных» альтернатив, провоцирующих импульсивные
            покупки
          </span>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <img
          className="h-full object-cover object-center"
          src={POLKA_ASSETS.mocup3}
        />
        <div className="bg-[#ECF1F5]">
          <img className="justify-self-end" src={POLKA_ASSETS.mascot3} />
        </div>
      </section>
      <section className="bg-[#ECF1F5] p-10 flex justify-center">
        <img src={POLKA_ASSETS.mockup3} />
      </section>
      <section className="py-28 flex justify-center text-[32px] underline font-helveticaLightOblique font-light italic ">
        <a href="https://www.figma.com/design/Oy7xVf0oA4ltPlB8A4udud/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE?node-id=1-5&t=O7AGEzUmLWFPY7S0-1">
          Ссылка на проект в FIGMA
        </a>
      </section>
      <section>
        <ProjectPagination
          prevLink="/projects/gazprom-neft"
          nextLink="/projects/bazar"
        />
      </section>
    </main>
  );
};
