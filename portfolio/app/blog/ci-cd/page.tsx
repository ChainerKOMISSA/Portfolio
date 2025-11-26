import { CardDemo } from "@/app/blog/ui/Card";
import { cicdtutorialsItems } from "@/data";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <Link
          href="/blog"
          className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"
        >
          <IoIosArrowRoundBack />
        </Link>

        <div className="w-full px-4 md:px-8 py-6">
          <h1 className="text-5xl font-bold text-slate-500 text-center">
            Mettre en place du CI/CD
          </h1>
        </div>

        <section id="intro">
          <p className="text-gray-300">
            Dans cette série de tutoriels, tu apprendras à automatiser tes
            processus de développement grâce à l&apos;intégration continue (CI)
            et au déploiement continu (CD). <br /> <br />
            Que tu développes une application front-end, un back-end ou un
            projet complet, le CI/CD te permettra d&apos;optimiser ton flux de
            travail, d&apos;éviter les erreurs manuelles et de déployer plus
            rapidement et en toute confiance. <br /> <br />
            Nous explorerons plusieurs outils modernes comme{" "}
            <span className="text-indigo-400 font-semibold">
              GitHub Actions, GitLab CI/CD, Jenkins, Bitbucket Pipelines,
              Firebase
            </span>{" "}
            et{" "}
            <span className="text-indigo-400 font-semibold">
              AWS CodePipeline
            </span>{" "}
            afin que tu puisses choisir la solution la plus adaptée à ton
            environnement. <br /> <br />
            Ces tutoriels sont également l&apos;occasion pour moi d&apos;apprendre et
            d&apos;expérimenter en direct. Si tu as des suggestions, des idées ou des
            retours à me partager, tu peux me contacter via :{" "}
            <a
              href="/#contact"
              className="text-blue-400 underline"
            >
              ce formulaire
            </a>
            . <br /> <br />
            Chaque tutoriel est conçu pour être pratique, accompagné
            d&apos;exemples concrets, d&apos;images explicatives et de fichiers
            de configuration prêts à copier-coller.
          </p>
        </section>

        <div className="flex flex-row w-full mx-auto mt-4 py-2 gap-4">
          <div className="left w-full p-4 space-y-8 overflow-y-auto">
            {cicdtutorialsItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cicdtutorialsItems.map((item) => (
                  <CardDemo
                    key={item.id}
                    title={item.title}
                    desc={item.desc}
                    img={item.img}
                    date={item.date}
                    category={item.category}
                    technologies={item.technologies}
                    projectLink={item.link}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">Aucun tutoriel disponible.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
