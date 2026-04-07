import classNames from "classnames";

type ProjectInfoProps = {
  about: string[] | string;
  problem: string[] | string;
  solution: string[] | string;
  unsigned?: boolean;
};

export function ProjectInfo({
  about,
  problem,
  solution,
  unsigned,
}: ProjectInfoProps) {
  const isString = typeof problem === "string";

  return (
    <section className="px-8">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <span className="text-black/30 dark:text-white/30 text-xl">
            О проекте
          </span>
          {typeof about === "string" ? (
            <p className="text-xl">{about}</p>
          ) : (
            <ol
              className={classNames(
                "text-xl pl-5",
                unsigned ? "list-disc" : "list-decimal",
              )}
            >
              {about.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-black/30 dark:text-white/30 text-xl">
            Проблема
          </span>
          {isString ? (
            <p className="text-xl">{problem}</p>
          ) : (
            <ol
              className={classNames(
                "text-xl pl-5",
                unsigned ? "list-disc" : "list-decimal",
              )}
            >
              {problem.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-black/30 dark:text-white/30 text-xl">
            Решение
          </span>
          {typeof solution === "string" ? (
            <p className="text-xl">{solution}</p>
          ) : (
            <ol
              className={classNames(
                "text-xl pl-5",
                unsigned ? "list-disc" : "list-decimal",
              )}
            >
              {solution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
