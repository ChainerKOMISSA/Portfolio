import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";
import Image from "next/image";

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
            {/* DECORATIONS */}
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
                    le linting, le déploiement et plus encore, à chaque push ou pull request.
                  </p>

                  <p className="text-gray-300 mt-4">Dans ce tutoriel, tu vas apprendre à :</p>

                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li>Créer un workflow GitHub Actions</li>
                    <li>Configurer un pipeline de test automatisé</li>
                    <li>Exécuter ce pipeline à chaque push sur ton dépôt</li>
                  </ul>
                </section>

                {/* PREREQUIS */}
                <section id="prerequis">
                  <h2 className="text-2xl font-bold mb-4 text-white">2. Prérequis</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Un compte GitHub</li>
                    <li>Un dépôt contenant ton projet (Node.js, React, Python…)</li>
                    <li>
                      Un fichier <code className="text-blue-400">package.json</code>{" "}
                      (pour les projets Node.js)
                    </li>
                    <li>Git installé sur ta machine</li>
                  </ul>
                </section>

                {/* PIPELINE */}
                <section id="pipeline">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    3. Créer ton premier pipeline
                  </h2>

                  <p className="text-gray-300 mb-3">
                    Un pipeline GitHub Actions est défini dans un fichier YAML.  
                    <br />Crée un répertoire :
                    <code className="text-blue-400"> .github/workflows/ </code>
                    à la racine de ton dépôt.  
                    Ensuite, crée un fichier{" "}
                    <code className="text-blue-400">ci.yml</code>.
                  </p>

                  <p className="text-gray-300 mt-3">Ajoute ce contenu :</p>

                  <CodeBlock
                    language="yaml"
                    code={`name: learn-github-actions
run-name: \${{ github.actor }} is learning GitHub Actions
on: [push]

jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g bats
      - run: bats -v`}
                  />

                  <p className="text-gray-300 mt-3">
                    Fais ensuite un commit et un push pour envoyer ces modifications.  
                    Le workflow s&apos;exécutera automatiquement à chaque push sur la branche
                    <code className="text-blue-400"> main</code>.
                  </p>
                </section>

                {/* EXECUTION */}
                <section id="execution">
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Lancer et vérifier ton workflow</h2>

                  <p className="text-gray-300">
                    Une fois ton fichier <code>.yml</code> poussé :
                  </p>

                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                    <li>Va sur ton dépôt GitHub</li>
                    <li>Ouvre l&apos;onglet <strong>Actions</strong></li>
                    <div className="relative w-full h-28 rounded-lg overflow-hidden">
                    <Image
                      src="/actions-4.png"
                      alt="GitHub Actions"
                      fill
                      className="object-contain"
                    />
                  </div>
                    <li>Ton pipeline apparaîtra et s&apos;exécutera automatiquement</li>
                    <div className="relative w-full h-24 rounded-lg overflow-hidden">
                    <Image
                      src="/actions-2.png"
                      alt="GitHub Actions"
                      fill
                      className="object-contain"
                    />
                  </div>
                  </ul>

                  <p className="text-gray-300 mt-4">
                    Si tout est bon, une coche verte apparaîtra.  
                    <div className="relative w-full h-28 rounded-lg overflow-hidden">
                    <Image
                      src="/actions-1.png"
                      alt="GitHub Actions"
                      fill
                      className="object-contain"
                    />
                  </div>
                    En cas d&apos;erreur, tu peux consulter les logs pour identifier le problème.
                    <div className="relative w-full h-28 rounded-lg overflow-hidden">
                    <Image
                      src="/actions-3.png"
                      alt="GitHub Actions"
                      fill
                      className="object-contain"
                    />
                  </div>
                  </p>
                </section>

                <section id="understanding">
  <h2 className="text-2xl font-bold mb-4 text-white">
    5. Comprendre le fichier workflow
  </h2>

  <p className="text-gray-300 mb-4">
    Pour mieux comprendre comment fonctionne la syntaxe YAML dans un fichier
    GitHub Actions, analysons chaque ligne de l&apos;exemple présenté
    précédemment. Cela t&apos;aidera à savoir exactement ce que fait ton workflow
    et comment l&apos;adapter.
  </p>

  <ul className="list-disc list-inside text-gray-300 space-y-4">

    <li>
      <code className="text-blue-400">name: learn-github-actions</code><br />
      <span className="text-gray-400">
        (Optionnel). Nom du workflow tel qu&apos;il apparaît dans l&apos;onglet
        <strong> Actions </strong> du dépôt GitHub.  
        Si cette ligne est absente, GitHub utilisera par défaut le nom du fichier.
      </span>
    </li>

    <li>
      <code className="text-blue-400">{"run-name: ${{ github.actor }} is learning GitHub Actions"}</code><br />
      <span className="text-gray-400">
        (Optionnel). Nom donné à chaque exécution (run) du workflow.
        Ici, on utilise une expression qui récupère l&apos;utilisateur ayant
        déclenché le workflow.  
        Cela permet d&apos;afficher par exemple : “Essi is learning GitHub Actions”.
      </span>
    </li>

    <li>
      <code className="text-blue-400">on: [push]</code><br />
      <span className="text-gray-400">
        Déclencheur du workflow.  
        Ici, le pipeline se lance à chaque <strong>push</strong> sur n&apos;importe
        quelle branche.  
        Il existe d&apos;autres déclencheurs (branches spécifiques, tags, chemins, etc.).
      </span>
    </li>

    <li>
      <code className="text-blue-400">jobs:</code><br />
      <span className="text-gray-400">
        Regroupe tous les jobs du workflow.  
        Un workflow peut contenir un ou plusieurs jobs, exécutés en parallèle ou en séquence.
      </span>
    </li>

    <li>
      <code className="text-blue-400">check-bats-version:</code><br />
      <span className="text-gray-400">
        Nom du job.  
        Tout ce qui est indenté dessous correspond aux étapes et propriétés de ce job.
      </span>
    </li>

    <li>
      <code className="text-blue-400">runs-on: ubuntu-latest</code><br />
      <span className="text-gray-400">
        Spécifie la machine utilisée pour exécuter le job.  
        Ici : un runner Ubuntu fraîchement préparé par GitHub.  
        D&apos;autres runners existent (Windows, macOS, self-hosted…).
      </span>
    </li>

    <li>
      <code className="text-blue-400">steps:</code><br />
      <span className="text-gray-400">
        Liste des étapes exécutées par le job.  
        Chaque élément de cette liste est une action ou une commande shell.
      </span>
    </li>

    <li>
      <code className="text-blue-400">- uses: actions/checkout@v5</code><br />
      <span className="text-gray-400">
        Télécharge (checkout) ton dépôt sur la machine du runner.
        C&apos;est nécessaire si tu veux accéder à ton code dans les étapes suivantes.
      </span>
    </li>

    <li>
      <code className="text-blue-400">- uses: actions/setup-node@v4</code><br />
      <span className="text-gray-400">
        Installe Node.js sur la machine.  
        La clé <code>with:</code> permet de préciser la version souhaitée. Dans notre cas : {" "}
        <code className="text-blue-400">{"node-version: '20'"}</code>
      </span> 
    </li>

    <li>
      <code className="text-blue-400">- run: npm install -g bats</code><br />
      <span className="text-gray-400">
        Exécute une commande shell sur la machine.  
        Ici : installation globale du paquet <strong>bats</strong>, un outil de test.
      </span>
    </li>

    <li>
      <code className="text-blue-400">- run: bats -v</code><br />
      <span className="text-gray-400">
        Exécute la commande <strong>bats -v</strong> pour afficher la version du logiciel.
        Cela sert de vérification finale.
      </span>
    </li>
  </ul>
</section>


                {/* ASTUCES */}
                <section id="tips">
                  <h2 className="text-2xl font-bold mb-4 text-white">6. Astuces et bonnes pratiques</h2>

                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Nommer clairement chaque étape du workflow.</li>
                    <li>Utiliser des <code className="text-blue-400">actions</code> officielles.</li>
                    <li>Limiter le déclenchement à certaines branches.</li>
                    <li>Ajouter un badge dans ton README.</li>
                  </ul>

                  <CodeBlock
                    language="markdown"
                    code={`![CI](https://github.com/<ton-user>/<ton-repo>/actions/workflows/ci.yml/badge.svg)`}
                  />
                </section>

                {/* CONCLUSION */}
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-4 text-white">7. Conclusion</h2>

                  <p className="text-gray-300 mb-6">
                    Félicitations ! Tu viens de créer ton premier pipeline CI/CD. Pour aller plus loin avec Github Actions, je te 
                    conseille de consulter <a href="https://docs.github.com/en/actions/tutorials" className="text-blue-400">la documentation officielle</a>.
                    Dans le prochain tutoriel, on verra le déploiement automatique sur Gitlab.
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
              <Link href="#prerequis" className="hover:text-white">2. Prérequis</Link>
              <Link href="#pipeline" className="hover:text-white">3. Pipeline</Link>
              <Link href="#execution" className="hover:text-white">4. Workflow</Link>
              <Link href="#understanding" className="hover:text-white">5. Comprendre le fichier workflow</Link>
              <Link href="#tips" className="hover:text-white">6. Astuces</Link>
              <Link href="#conclusion" className="hover:text-white">7. Conclusion</Link>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}
