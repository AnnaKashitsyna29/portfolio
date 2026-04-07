import { Link, useParams } from 'react-router-dom'

export function ProjectStubPage() {
  const { slug } = useParams()
  const projectName = slug ? slug.replaceAll('-', ' ') : 'project'

  return (
    <main className="text-xl flex min-h-screen items-center justify-center bg-page px-6">
      <div className="max-w-xl rounded-[36px] bg-white p-8 text-center shadow-card md:p-12">
        <p className="text-sm uppercase tracking-[0.18em] text-black/45">В разработке</p>
        <h1 className="mt-4 text-3xl font-semibold capitalize md:text-5xl">{projectName}</h1>
        <p className="mt-4 text-base text-black/70 md:text-lg">
          Эту страницу реализуем следующим шагом. Карточка уже подключена к маршруту.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:brightness-105"
        >
          Назад на главную
        </Link>
      </div>
    </main>
  )
}
