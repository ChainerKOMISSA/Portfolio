import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";
import Image from "next/image";

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
            {/* Effet décoratif */}
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
                {/* INTRODUCTION */}
                <section id="intro">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    1. Introduction
                  </h2>
                  <p className="text-gray-300">
                    Dans le monde du développement moderne, il ne suffit plus
                    d&apos;écrire du bon code : il faut aussi pouvoir le tester,
                    le livrer et le déployer rapidement, sans erreurs humaines.
                    C&apos;est là qu&apos;interviennent les pratiques de{" "}
                    <span className="text-blue-400">CI/CD</span> : Intégration
                    Continue et Déploiement Continu.
                    <br />
                    <br />
                    Le CI/CD permet d&apos;automatiser tout le cycle de vie
                    d&apos;une application :
                    <strong> du commit au déploiement</strong>. Chaque
                    modification du code est automatiquement testée, validée et
                    éventuellement déployée en production.
                    <br />
                    <br />
                    Voici un aperçu général d&apos;un pipeline CI/CD typique :
                  </p>

                  <div className="flex justify-center my-6">
                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                      <Image
                        src="/images/cicd-overview.png"
                        alt="Schéma du processus CI/CD"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-gray-300">
                    Sans CI/CD, les équipes doivent souvent effectuer les tests
                    et déploiements manuellement, ce qui multiplie les risques
                    d&apos;erreurs, de régressions et de pertes de temps.
                  </p>
                </section>

                {/* CONCEPTS CLÉS */}
                <section id="concepts">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    2. Concepts clés du CI/CD
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Avant de passer à la pratique, prenons le temps de
                    comprendre les concepts fondamentaux :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-4">
                    <li>
                      <strong>Intégration Continue (CI)</strong> : chaque fois
                      qu&apos;un développeur pousse du code, le système lance
                      automatiquement des tests, une compilation ou une analyse
                      de code. Cela permet de détecter les erreurs le plus tôt
                      possible.
                    </li>
                    <li>
                      <strong>Déploiement Continu (CD)</strong> : une fois que
                      le code est validé, il est automatiquement déployé sur un
                      serveur ou un environnement de test, voire en production.
                    </li>
                    <li>
                      <strong>Pipeline</strong> : une suite d&apos;étapes
                      (build, test, deploy) qui s&apos;exécutent dans un ordre
                      défini pour automatiser ton workflow.
                    </li>
                    <li>
                      <strong>Jobs & Steps</strong> : les jobs sont les blocs
                      principaux du pipeline, et chaque job contient plusieurs
                      étapes (“steps”) qui exécutent des commandes.
                    </li>
                    <li>
                      <strong>Runners</strong> : ce sont les serveurs qui
                      exécutent réellement les jobs. GitHub, GitLab ou Jenkins
                      utilisent des runners hébergés ou auto-gérés.
                    </li>
                    <li>
                      <strong>Artifacts & Cache</strong> : les fichiers générés
                      (comme un build) ou mis en cache pour accélérer les
                      exécutions futures.
                    </li>
                  </ul>

                  <div className="flex justify-center my-6">
                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                      <Image
                        src="/cicd-pipeline-concept.png"
                        alt="Illustration d'un pipeline CI/CD"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </section>

                <section id="pipeline">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    3. Exemple complet de pipeline CI/CD
                  </h2>
                  <p className="text-gray-300">
                    Voici un exemple simple d&apos;un pipeline CI pour un projet
                    Node.js utilisant{" "}
                    <span className="text-blue-400 font-semibold">
                      GitHub Actions
                    </span>
                    . Ce fichier YAML, placé dans{" "}
                    <code className="text-blue-400">
                      .github/workflows/ci.yml
                    </code>
                    , exécute des tests à chaque push sur la branche{" "}
                    <code className="text-blue-400">main</code> :
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
      - name: Récupérer le code
        uses: actions/checkout@v3 

      - name: Installer Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Installer les dépendances
        run: npm install

      - name: Lancer les tests
        run: npm test`}
                  />

                  <p className="text-gray-300 mt-4">
                    💡 <strong>Comment ça marche :</strong>
                    <br />
                    À chaque push ou pull request, GitHub exécute ce pipeline
                    dans une machine virtuelle Ubuntu : il télécharge le code,
                    installe Node.js, récupère les dépendances et lance les
                    tests.
                    <br />
                    <br />
                    Tu peux personnaliser ces étapes pour un projet{" "}
                    <code>Python</code>, <code>Angular</code> ou{" "}
                    <code>React</code>.
                  </p>
                </section>

                {/* OUTILS */}
                <section id="outils">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    4. Les principaux outils CI/CD
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Il existe plusieurs solutions de CI/CD, chacune adaptée à
                    différents besoins :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-3">
                    <li>
                      <strong>GitHub Actions</strong>: Intégré à GitHub, parfait
                      pour les projets open source.
                    </li>
                    <li>
                      <strong>GitLab CI/CD</strong>: Très puissant, idéal pour
                      les équipes DevOps.
                    </li>
                    <li>
                      <strong>Jenkins</strong>: Open-source et hautement
                      personnalisable, mais nécessite un serveur dédié.
                    </li>
                    <li>
                      <strong>Bitbucket Pipelines</strong>: Facile à intégrer
                      avec les projets hébergés sur Bitbucket.
                    </li>
                    <li>
                      <strong>AWS CodePipeline</strong>: Solution cloud native
                      AWS pour les applications hébergées sur Amazon.
                    </li>
                  </ul>
                </section>

                {/* BONNES PRATIQUES */}
                <section id="pratiques">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    5. Bonnes pratiques CI/CD
                  </h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Toujours exécuter les tests avant tout déploiement.</li>
                    <li>
                      Séparer les jobs <strong>build</strong>,{" "}
                      <strong>test</strong> et <strong>deploy</strong>.
                    </li>
                    <li>Utiliser le cache pour accélérer les builds.</li>
                    <li>
                      Ne jamais stocker les secrets dans le code, mais dans des
                      variables d&apos;environnement.
                    </li>
                    <li>Nommer clairement les workflows et les jobs.</li>
                    <li>
                      Mettre en place des tests unitaires et d&poa;intégration
                      automatisés.
                    </li>
                  </ul>
                </section>

                {/* CONCLUSION */}
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    6. Conclusion
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Le CI/CD n&apos;est pas juste une automatisation :
                    c&apos;est une philosophie de développement centrée sur la
                    qualité et la rapidité.
                    <br />
                    <br />
                    Dans les prochains tutoriels, nous mettrons en pratique ces
                    concepts avec
                    <span className="text-blue-400 font-semibold">
                      {" "}
                      GitHub Actions, GitLab CI/CD
                    </span>{" "}
                    et
                    <span className="text-blue-400 font-semibold">
                      {" "}
                      Jenkins
                    </span>
                    , pour créer des pipelines réels et déployer automatiquement
                    des applications.
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
              <Link href="#intro" className="hover:text-white">
                1. Introduction
              </Link>
              <Link href="#concepts" className="hover:text-white">
                2. Concepts clés
              </Link>
              <Link href="#pipeline" className="hover:text-white">
                3. Exemple pipeline
              </Link>
              <Link href="#outils" className="hover:text-white">
                4. Outils CI/CD
              </Link>
              <Link href="#pratiques" className="hover:text-white">
                5. Bonnes pratiques
              </Link>
              <Link href="#conclusion" className="hover:text-white">
                6. Conclusion
              </Link>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}
