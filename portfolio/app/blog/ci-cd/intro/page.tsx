import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

export default function BlogPage() {
  return (
    <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Bouton retour */}
      <Link
        href="/blog/ci-cd"
        className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"
      >
        <IoIosArrowRoundBack />
      </Link>

      <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
        <header className="w-full px-4 md:px-8 py-6">
          <h1 className="text-5xl font-bold text-slate-500 text-center">
            Comprendre le CI/CD : les bases et les concepts clés
          </h1>
        </header>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="relative flex-1 flex flex-col items-center justify-center">
            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
              <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
              <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
              <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="px-4 py-10 md:py-20 w-full">
              <div className="w-full space-y-16">

                <section id="intro">
                  <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                  <p className="text-gray-300">
                    Le <span className="text-blue-400">CI/CD</span> (Intégration Continue / Déploiement Continu) est un ensemble de pratiques et outils qui permettent d&apos;automatiser le build, les tests et le déploiement de tes applications.  
                    <br/><br/>
                    Dans ce tutoriel, tu découvriras les concepts clés du CI/CD, les avantages pour ton workflow, et les outils les plus utilisés comme <span className="text-indigo-400 font-semibold">GitHub Actions, GitLab CI/CD, Jenkins</span> et <span className="text-indigo-400 font-semibold">AWS CodePipeline</span>.  
                    <br/><br/>
                    Ces tutoriels me servent aussi à apprendre et expérimenter. Si tu as des suggestions, idées ou retours, tu peux me contacter via ce lien :{" "}
                    <a href="/#contact" className="text-blue-400 underline">Contact</a>.
                  </p>
                </section>

                <section id="concepts">
                  <h2 className="text-2xl font-bold mb-4 text-white">2. Concepts clés du CI/CD</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong>Intégration Continue (CI)</strong> : automatiser la compilation et les tests à chaque commit pour détecter rapidement les erreurs.</li>
                    <li><strong>Déploiement Continu (CD)</strong> : automatiser le déploiement vers un environnement de test ou de production.</li>
                    <li><strong>Pipeline</strong> : séquence d’étapes automatisées allant du code jusqu’au déploiement.</li>
                    <li><strong>Build</strong> : compilation et préparation de ton application.</li>
                    <li><strong>Tests automatisés</strong> : vérification de ton code avant le déploiement.</li>
                  </ul>
                </section>

                {/* EXEMPLE PIPELINE */}
                <section id="pipeline">
                  <h2 className="text-2xl font-bold mb-4 text-white">3. Exemple simple de pipeline CI/CD</h2>
                  <p className="text-gray-300">
                    Voici un exemple minimaliste d’un pipeline CI pour un projet Node.js avec GitHub Actions :
                  </p>
                  <CodeBlock
                    language="yaml"
                    code={`name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Installer Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test`}
                  />
                  <p className="text-gray-300 mt-2">
                    Ce pipeline s’exécute à chaque push sur la branche <code className="text-blue-400">main</code> et lance les tests automatiquement.
                  </p>
                </section>

                {/* CONCLUSION */}
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Conclusion</h2>
                  <p className="text-gray-300 mb-6">
                    Tu comprends maintenant les bases du CI/CD et l’intérêt des pipelines pour automatiser le build, les tests et le déploiement de tes applications.  
                    Dans les prochains tutoriels, nous verrons la mise en place pratique avec différents outils comme GitHub Actions, GitLab CI/CD ou Jenkins.
                  </p>
                  <Link
                    href="/blog/ci-cd"
                    className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                  >
                    ← Retour à la série
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 ml-2 py-2 rounded-md transition"
                  >
                    ← Retour au blog
                  </Link>
                </section>

              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
            <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="#intro" className="hover:text-white">1. Introduction</Link>
              <Link href="#concepts" className="hover:text-white">2. Concepts clés</Link>
              <Link href="#pipeline" className="hover:text-white">3. Exemple pipeline</Link>
              <Link href="#conclusion" className="hover:text-white">4. Conclusion</Link>
            </nav>
          </aside>

        </div>
      </div>
    </main>
  );
}
