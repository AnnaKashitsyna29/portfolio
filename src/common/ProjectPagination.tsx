import { useNavigate } from "react-router-dom";

export const ProjectPagination = ({
  nextLink,
  prevLink,
  className,
}: {
  nextLink: string;
  prevLink: string;
  className?: string;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex gap-[30px] justify-center pb-12 px-7 ${className || ""}`}
    >
      <button
        className="border border-black/60 dark:border-white/70 px-[10px] py-1 rounded-[30px]"
        onClick={() => navigate(prevLink)}
      >
        Предыдущий кейс
      </button>
      <button
        className="border border-black/60 dark:border-white/70 px-[10px] py-1 rounded-[30px]"
        onClick={() => navigate(nextLink)}
      >
        Следующий кейс
      </button>
    </div>
  );
};
