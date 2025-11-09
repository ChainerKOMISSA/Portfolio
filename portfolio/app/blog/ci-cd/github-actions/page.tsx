import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

export default function BlogPage() {
  return (
    <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Link
        href="/blog/ci-cd"
        className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"
      >
        <IoIosArrowRoundBack />
      </Link>

      <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
        <header className="w-full px-4 md:px-8 py-6">
          <h1 className="text-5xl font-bold text-slate-500 text-center">
            Créer ton premier pipeline CI/CD avec GitHub Actions
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
                
                {/* INTRODUCTION */}
                <section id="intro">
                  <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                  <p className="text-gray-300">
                    GitHub Actions est un service d&apos;intégration et de déploiement continu
                    directement intégré à GitHub. Il te permet d&apos;automatiser les tests,
                    le linting, le déploiement et bien plus encore, à chaque push ou pull request.
                    <br/><br/>
                    Dans ce tutoriel, tu vas apprendre à :
                    <ul className="list-disc list-inside mt-2">
                      <li>Créer un workflow GitHub Actions</li>
                      <li>Configurer un pipeline de test automatisé</li>
                      <li>Exécuter ce pipeline à chaque push sur ton dépôt</li>
                    </ul>
                    <br/>
                    📸 <em>(Image suggérée : capture d’écran ou schéma du logo GitHub Actions avec un pipeline simple)</em>
                  </p>
                </section>

                {/* PREREQUIS */}
                <section id="prerequis">
                  <h2 className="text-2xl font-bold mb-4 text-white">2. Prérequis</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Un compte GitHub</li>
                    <li>Un dépôt contenant ton projet (ex : Node.js, React, Python...)</li>
                    <li>Un fichier <code className="text-blue-400">package.json</code> (si c’est un projet Node.js)</li>
                    <li>Git installé sur ta machine</li>
                  </ul>
                </section>

                {/* CREER LE PIPELINE */}
                <section id="pipeline">
                  <h2 className="text-2xl font-bold mb-4 text-white">3. Créer ton premier pipeline</h2>
                  <p className="text-gray-300 mb-3">
                    Un pipeline GitHub Actions est défini dans un fichier YAML à placer dans le dossier : {" "}
                    <code className="text-blue-400">
                      .github/workflows/ci.yml
                    </code>
                  </p>
                  <p className="text-gray-300 mt-3">
                    Crée ce fichier et ajoute le contenu suivant :
                  </p>
                  <CodeBlock
                    language="yaml"
                    code={`name: CI - Tests automatiques

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Cloner le dépôt
        uses: actions/checkout@v3

      - name: Configurer Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Installer les dépendances
        run: npm install

      - name: Lancer les tests
        run: npm test`}
                  />
                  <p className="text-gray-300 mt-3">
                    Ce workflow s’exécute automatiquement à chaque push ou pull request sur la branche
                    <code className="text-blue-400"> main</code>. Il installe Node.js, tes dépendances,
                    puis exécute les tests.
                    <br/><br/>
                    📸 <em>(Image suggérée : schéma illustrant le pipeline : push → install → test → résultat)</em>
                  </p>
                </section>

                {/* VERIFIER LE PIPELINE */}
                <section id="execution">
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Lancer et vérifier ton workflow</h2>
                  <p className="text-gray-300">
                    Une fois ton fichier <code>.yml</code> poussé sur GitHub :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                    <li>Va sur ton dépôt GitHub</li>
                    <li>Ouvre l&apos;onglet <strong>Actions</strong></li>
                    <li>Tu verras ton pipeline s&apos;exécuter automatiquement</li>
                  </ul>
                  <br/>
                  <p className="text-gray-300">
                    Si tout se passe bien, tu verras une coche verte ✅ indiquant que le pipeline a réussi.
                    En cas d&apos;erreur, tu peux consulter les logs pour déboguer.
                    <br/><br/>
                    📸 <em>(Image suggérée : capture d&apos;écran de la page Actions avec un workflow en cours)</em>
                  </p>
                </section>

                {/* ASTUCES */}
                <section id="tips">
                  <h2 className="text-2xl font-bold mb-4 text-white">5. Astuces et bonnes pratiques</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Nommer clairement chaque étape de ton workflow.</li>
                    <li>Utiliser des <code className="text-blue-400">actions</code> officielles (checkout, setup-node, etc.).</li>
                    <li>Limiter le déclenchement du pipeline à certaines branches si nécessaire.</li>
                    <li>Configurer un badge dans ton README pour afficher le statut du pipeline.</li>
                  </ul>
                  <CodeBlock
                    language="markdown"
                    code={`![CI](https://github.com/<ton-user>/<ton-repo>/actions/workflows/ci.yml/badge.svg)`}
                  />
                </section>

                {/* CONCLUSION */}
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-4 text-white">6. Conclusion</h2>
                  <p className="text-gray-300 mb-6">
                    Félicitations! Tu viens de créer ton premier pipeline CI/CD avec GitHub Actions !
                    <br/><br/>
                    Tu as automatisé l&apos;installation, les tests et les vérifications de ton code.
                    Dans le prochain tutoriel, nous irons plus loin avec le déploiement automatique
                    sur des plateformes comme Firebase ou Vercel.
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

          <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
            <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="#intro" className="hover:text-white">1. Introduction</Link>
              <Link href="#prerequis" className="hover:text-white">2. Prérequis</Link>
              <Link href="#pipeline" className="hover:text-white">3. Créer ton pipeline</Link>
              <Link href="#execution" className="hover:text-white">4. Vérifier ton workflow</Link>
              <Link href="#tips" className="hover:text-white">5. Astuces</Link>
              <Link href="#conclusion" className="hover:text-white">6. Conclusion</Link>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}