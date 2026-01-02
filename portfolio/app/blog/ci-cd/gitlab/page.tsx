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
            CI/CD avec GitLab
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
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    1. Introduction
                  </h2>

                  <p className="text-gray-300">
                    Poursuivant notre série sur l&apos;Intégration et le
                    Déploiement Continus (CI/CD), nous explorons
                    aujourd&apos;hui un acteur majeur : <strong>GitLab</strong>{" "}
                    et son système intégré <strong>GitLab CI/CD</strong>. Cette
                    plateforme offre une solution à la fois puissante et
                    flexible pour automatiser l&apos;intégralité de votre flux
                    de développement, de la phase de test et de build
                    jusqu&apos;au déploiement.
                    <br />
                    <br />
                    Grâce à <strong>GitLab CI/CD</strong>, il est possible de
                    détecter rapidement les bogues, garantir que le code déployé
                    en production est conforme aux normes de codage établies et
                    réduire le temps entre l&apos;écriture du code et sa mise en
                    production.
                  </p>

                  <p className="text-gray-300 mt-4 font-semibold">
                    Dans ce troisième tutoriel, vous allez découvrir :
                  </p>

                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>Les concepts essentiels</li>
                    <li>Des exemples pratiques</li>
                    <li>
                      Comment utiliser les variables CI/CD pour sécuriser des
                      déploiements.
                    </li>
                    <li>
                      Quelques conseils pour diagnostiquer et optimiser des
                      pipelines.
                    </li>
                  </ul>
                </section>

                <section id="prerequis">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    2. Prérequis
                  </h2>

                  <p className="text-gray-300 font-semibold mb-2">
                    Pour suivre ce guide, tu auras besoin de :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Un compte GitLab et un dépôt actif.</li>
                    <li>
                      Un projet compilable hébergé dans ce dépôt. (Pour
                      l&apos;exemple, j&apos;ai utilisé un code statique HTML,
                      CSS, JS)
                    </li>
                    <li>Git installé localement.</li>
                    <li>
                      Assures-toi que ta branche principale est nommée{" "}
                      <code className="text-blue-400">main</code> (ou{" "}
                      <code className="text-blue-400">master</code>).
                    </li>
                  </ul>

                  <p className="text-gray-300 mt-4">
                    ℹ️ Si tu n&apos;as pas encore de projet sur Gitlab, tu peux
                    en créer un :{" "}
                    <a
                      href="https://gitlab.com"
                      className="text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://gitlab.com
                    </a>
                    <br />
                    <br />
                    Nous utiliserons la structure de mon projet statique HTML
                    suivante comme référence :
                  </p>
                  <pre className="bg-neutral-900 p-3 rounded text-sm text-gray-300 overflow-x-auto">
                    {`/ (racine du dépôt)
├─ index.html
├─ style.css
├─ script.js
├─ package.json (pour l'exemple avancé)
└─ assets/
   └─ logo.png`}
                  </pre>
                </section>

                {/* 3. PIPELINE DE BASE */}

                <section id="pipeline">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    3. Pipeline minimal : déployer avec un seul job <code>pages</code>
                  </h2>

                  <p className="text-gray-300 mb-3">
                    Dans cette première approche, nous allons volontairement faire
                    <strong> le pipeline le plus simple possible</strong>.
                    <br /><br />
                    L’objectif est de comprendre le mécanisme de déploiement de
                    <strong> GitLab Pages</strong>, sans se préoccuper pour l’instant des tests
                    ou de la construction du projet.
                  </p>

                  <p className="text-gray-300 mb-3">
                    Pour un déploiement statique via GitLab Pages, un seul job est requis :
                    <strong> il doit obligatoirement s’appeler </strong>
                    <code className="text-blue-400">pages</code>.
                    <br />
                    Ce nom permet à GitLab de détecter automatiquement le job chargé de publier
                    le contenu du dossier{" "}
                    <code className="text-blue-400">public/</code> en tant que site web.
                  </p>

                  <p className="text-gray-300 mb-3">
                    Comme avec GitHub Actions, GitLab CI/CD repose sur un fichier YAML.
                    <br />
                    À la racine de votre projet, créez un fichier{" "}
                    <code className="text-blue-400">.gitlab-ci.yml</code> contenant le code
                    suivant :
                  </p>

                  <CodeBlock
                      language="yaml"
                      code={`pages:
  stage: deploy
  script:
    - mkdir -p public
    - echo "Mon premier site GitLab Pages" > public/index.html
  artifacts:
    paths:
      - public
  only:
    - main`}
                  />

                  <div className="text-gray-300 mt-4 space-y-3">
                    <p>
                      <strong>Que fait ce pipeline ?</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        Le job <code>pages</code> s’exécute uniquement sur la branche{" "}
                        <code className="text-blue-400">main</code>.
                      </li>
                      <li>
                        Il génère un dossier{" "}
                        <code className="text-blue-400">public/</code>, requis par GitLab Pages.
                      </li>
                      <li>
                        Les fichiers contenus dans ce dossier sont publiés automatiquement.
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-300 mt-3">
                    Une fois le pipeline exécuté avec succès, GitLab publie automatiquement le
                    contenu du dossier{" "}
                    <code className="text-blue-400">public/</code> via <strong>GitLab Pages</strong>.
                  </p>

                  <p className="text-gray-300 mt-2">
                    Pour accéder à votre site :
                  </p>

                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>
                      Rendez-vous dans votre projet GitLab
                    </li>
                    <li>
                      Allez dans <strong>Deploy → Pages</strong>
                    </li>
                    <li>
                      Cliquez sur l’URL fournie par GitLab
                    </li>
                  </ul>

                  <p className="text-gray-300 mt-3">
                    L’URL suit généralement le format : {""}
                    <code className="text-blue-400">
                      https://&lt;username&gt;.gitlab.io/&lt;nom-du-projet&gt;/
                    </code>
                  </p>

                  <p className="text-gray-300 mt-2 italic">
                    La première publication peut prendre quelques secondes après la fin du pipeline.
                  </p>

                  <p className="text-gray-300 mt-5">
                    Lorsque tout est correctement configuré, le pipeline apparaît avec un statut
                    <strong> réussi </strong> dans l’onglet{" "}
                    <strong>Build → Pipelines</strong>.
                  </p>

                  <p className="text-gray-300 mt-2">
                    L’exemple ci-dessous montre un pipeline minimal composé uniquement du job{" "}
                    <code className="text-blue-400">pages</code>, exécuté avec succès.
                  </p>
                  <div className="relative w-full h-96 rounded-lg overflow-hidden">
                    <Image
                        src="/gitlab-ci.png"
                        alt="Exemple de pipeline réussi"
                        fill
                        className="object-contain"
                    />
                  </div>
                </section>

                <section id="pipeline2">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    4. Pipeline avec plusieurs jobs
                  </h2>

                  <p className="text-gray-300 mb-3">
                    Maintenant que le mécanisme de base de GitLab Pages est compris,
                    observons un pipeline composé de plusieurs jobs.
                    <br /><br />
                     <strong>⚠️Attention</strong> : Ce pipeline n’est pas destiné au déploiement Pages.
                    Ll sert uniquement à comprendre le fonctionnement interne de GitLab CI/CD.
                  </p>

                  <CodeBlock
                    language="yaml"
                    code={`
build-job:
  stage: build
  script:
    - echo "Hello, $GITLAB_USER_LOGIN!"

test-job1:
  stage: test
  script:
    - echo "This job tests something"

test-job2:
  stage: test
  script:
    - echo "This job tests something, but takes more time than test-job1."
    - echo "After the echo commands complete, it runs the sleep command for 20 seconds"
    - echo "which simulates a test that runs 20 seconds longer than test-job1"
    - sleep 20

deploy-prod:
  stage: deploy
  script:
    - echo "This job deploys something from the $CI_COMMIT_BRANCH branch."
  environment: production`}
                  />

                  <div className="text-gray-300 mt-3 space-y-4">
                    <p>
                      Cet exemple illustre un pipeline <strong>GitLab CI/CD</strong> composé de
                      plusieurs tâches exécutées de manière séquentielle.
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-200 mb-2">
                        Tâches définies dans le pipeline
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <strong>build-job</strong> : étape de construction du projet
                        </li>
                        <li>
                          <strong>test-job1</strong> : premier ensemble de tests automatisés
                        </li>
                        <li>
                          <strong>test-job2</strong> : second ensemble de tests
                        </li>
                        <li>
                          <strong>deploy-prod</strong> : déploiement de l’application en
                          production
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-200 mb-2">
                        Affichage dans l’interface GitLab
                      </h4>
                      <p>
                        Les messages définis via les commandes <code className="text-blue-400">echo</code> sont affichés
                        directement dans l’interface utilisateur de GitLab lors de la consultation
                        de chaque tâche, ce qui permet de suivre facilement le déroulement du
                        pipeline.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-200 mb-2">
                        Variables prédéfinies utilisées
                      </h4>
                      <p>
                        Lors de l’exécution des tâches, GitLab renseigne automatiquement certaines
                        variables d’environnement, notamment :
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <code className="text-blue-400">$GITLAB_USER_LOGIN</code> : identifie l’utilisateur ayant déclenché
                          le pipeline
                        </li>
                        <li>
                          <code className="text-blue-400">$CI_COMMIT_BRANCH</code> : indique la branche Git sur laquelle le
                          pipeline est exécuté
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-300 mt-3">
                    Ce type de pipeline est utile pour apprendre à :
                    <strong> organiser des jobs</strong>,
                    <strong> comprendre les stages</strong> et
                    <strong> exploiter les variables prédéfinies</strong>,
                    avant de passer à un vrai pipeline de production.
                  </p>

                </section>

                {/* 4. EXEMPLE AVANCÉ MULTI-STAGE */}
                <section id="advanced">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    5. Pipeline avancé : build, test et déploiement avec GitLab Pages
                  </h2>

                  <p className="text-gray-300 mb-3">
                    Ce pipeline représente un <strong>cas proche d’un projet réel</strong>.
                    Il combine une organisation claire des étapes et un déploiement automatique
                    sur <strong>GitLab Pages</strong> grâce au job{" "}
                    <code className="text-blue-400">pages</code>.
                  </p>

                  <p className="text-gray-300 mb-3">
                    L’objectif d’un pipeline multi-stage est de <strong>séparer les responsabilités</strong> :
                    le code est d’abord construit, ensuite testé, puis déployé uniquement si
                    toutes les étapes précédentes ont réussi.
                  </p>

                  <p className="text-gray-300 font-semibold mb-4">
                    Ordre d’exécution :
                    <code className="text-blue-400 ml-2">build</code> →
                    <code className="text-blue-400 ml-1">test</code> →
                    <code className="text-blue-400 ml-1">deploy</code>
                  </p>

                  <CodeBlock
                      language="yaml"
                      code={`# Image Docker utilisée pour tous les jobs
image: node:18-alpine

# Définition des étapes du pipeline
stages:
  - build   # Installation des dépendances et compilation
  - test    # Exécution des tests automatisés
  - deploy  # Déploiement sur GitLab Pages

# Cache partagé entre les jobs pour accélérer les exécutions
cache:
  paths:
    - node_modules/

# Job build : installation et compilation
install:
  stage: build
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/

# Job test : tests unitaires
unit_tests:
  stage: test
  script:
    - npm test
  dependencies:
    - install

# Job deploy : publication via GitLab Pages
pages:
  stage: deploy
  script:
    - mkdir -p public
    - cp -r dist/* public/
  artifacts:
    paths:
      - public
  only:
    - main`}
                  />

                  <div className="text-gray-300 mt-4 space-y-3">
                    <p className="font-semibold">Points clés à retenir</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <code className="text-blue-400">image</code> définit l’environnement
                        d’exécution commun à tous les jobs.
                      </li>
                      <li>
                        Le <code className="text-blue-400">cache</code> permet de réutiliser
                        <code className="text-blue-400 ml-1">node_modules/</code> et de réduire
                        le temps d’exécution du pipeline.
                      </li>
                      <li>
                        Les <code className="text-blue-400">artifacts</code> transmettent le
                        résultat du build (<code className="text-blue-400">dist/</code>)
                        entre les stages.
                      </li>
                      <li>
                        Le job <code className="text-blue-400">pages</code> est le seul chargé
                        du déploiement et publie le contenu du dossier
                        <code className="text-blue-400 ml-1">public/</code>.
                      </li>
                    </ul>
                  </div>
                </section>


                {/* 6. VARIABLES CI ET SECRETS */}
                <section id="variables">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    6. Variables CI et gestion sécurisée des secrets
                  </h2>

                  <p className="text-gray-300 mb-3">
                    Dans un pipeline CI/CD, il est <strong>impératif</strong> de ne jamais exposer
                    des informations sensibles (tokens, clés API, mots de passe) dans le code
                    source ou dans le fichier{" "}
                    <code className="text-blue-400">.gitlab-ci.yml</code>.
                  </p>

                  <p className="text-gray-300 mb-3">
                    GitLab fournit un mécanisme sécurisé via l&apos;onglet{" "}
                    <strong className="text-blue-400">Settings → CI/CD → Variables</strong>.
                    Les valeurs définies dans cette interface sont injectées automatiquement
                    comme <strong>variables d’environnement</strong> dans vos jobs.
                  </p>

                  <p className="text-gray-300 mb-4 italic">
                    Exemple : une variable nommée{" "}
                    <code className="text-blue-400">MY_API_TOKEN</code> pourra être utilisée
                    directement dans vos scripts.
                  </p>

                  <p className="text-gray-300 font-semibold mb-2">
                    Bonnes pratiques lors de la configuration :
                  </p>

                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong>Protected</strong> : restreint l’utilisation de la variable aux
                      branches protégées (comme{" "}
                      <code className="text-blue-400">main</code>).
                    </li>
                    <li>
                      <strong>Masked</strong> : masque la valeur dans les logs du pipeline.
                      <br />
                      👉 À activer systématiquement pour les secrets.
                    </li>
                  </ul>

                  <p className="text-gray-300 mt-4">
                    Exemple d’utilisation d’une variable secrète dans un job :
                  </p>

                  <CodeBlock
                      language="yaml"
                      code={`deploy_to_external:
  stage: deploy
  script:
    - curl -X POST -H "Authorization: Bearer $MY_API_TOKEN" https://api.external.com/deploy
    - echo "Déploiement déclenché"
  only:
    - main`}
                  />
                </section>

                {/* 7. DÉPANNAGE & BONNES PRATIQUES */}
                <section id="debug">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    7. Dépannage et bonnes pratiques CI/CD
                  </h2>

                  <p className="text-gray-300 mb-3">
                    Lors de la mise en place de pipelines, certains problèmes reviennent
                    fréquemment. Voici les plus courants et comment les résoudre.
                  </p>

                  <ul className="list-disc list-inside text-gray-300 space-y-3">
                    <li>
                      <strong>Le pipeline ne démarre pas</strong>
                      <p className="mt-1">
                        Vérifiez que le fichier{" "}
                        <code className="text-blue-400">.gitlab-ci.yml</code> est bien à la racine
                        du dépôt et que les règles d’exécution (
                        <code className="text-blue-400">only</code> ou{" "}
                        <code className="text-blue-400">rules</code>) correspondent à la branche
                        ou au type de commit.
                      </p>
                    </li>

                    <li>
                      <strong>Erreur 404 sur GitLab Pages</strong>
                      <p className="mt-1">
                        Le job <code className="text-blue-400">pages</code> doit impérativement
                        produire un dossier{" "}
                        <code className="text-blue-400">public/</code> contenant un fichier{" "}
                        <code className="text-blue-400">index.html</code>.
                      </p>
                    </li>

                    <li>
                      <strong>Commande introuvable</strong>
                      <p className="mt-1">
                        Le runner s’exécute dans une image Docker. Assurez-vous que l’image
                        utilisée contient les outils nécessaires (ex.{" "}
                        <code className="text-blue-400">node</code>,{" "}
                        <code className="text-blue-400">python</code>) ou installez-les dans le
                        script.
                      </p>
                    </li>
                  </ul>

                  <p className="text-gray-300 font-semibold mt-6 mb-2">
                    Bonnes pratiques générales :
                  </p>

                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Consultez toujours les <strong>logs du job</strong> pour identifier
                      précisément l’erreur.
                    </li>
                    <li>
                      Gardez des <strong>jobs simples et atomiques</strong> (une responsabilité
                      par job).
                    </li>
                    <li>
                      Préférez <code className="text-blue-400">rules</code> à{" "}
                      <code className="text-blue-400">only</code> pour un contrôle plus précis et
                      moderne.
                    </li>
                  </ul>
                </section>

                {/* 8. CONCLUSION */}
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    8. Conclusion
                  </h2>

                  <p className="text-gray-300 mb-4">
                    Vous disposez désormais des bases essentielles pour concevoir des pipelines
                    CI/CD efficaces avec GitLab : du déploiement statique via GitLab Pages à des
                    pipelines multi-stage robustes, sécurisés et maintenables.
                  </p>

                  <p className="text-gray-300 mb-3 font-semibold">
                    Pour aller plus loin vous pouvez :
                  </p>

                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Ajouter des analyses de sécurité (SAST, Dependency Scanning).
                    </li>
                    <li>
                      Étendre ces pipelines vers des plateformes cloud ou Kubernetes.
                    </li>
                    <li>
                      Améliorer la visibilité avec des badges, des logs structurés et une
                      documentation enrichie.
                    </li>
                  </ul>

                  <div className="flex gap-3 mt-5">
                    <Link
                        href="/blog/ci-cd"
                        className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                    >
                      ← Retour à la série
                    </Link>

                    <Link
                        href="/blog"
                        className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                    >
                      ← Retour au blog
                    </Link>
                  </div>
                </section>

              </div>
            </div>
          </div>

          {/* SIDEBAR - MISE À JOUR DU SOMMAIRE */}
          <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
            <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="#intro" className="hover:text-white">
                1. Introduction
              </Link>
              <Link href="#prerequis" className="hover:text-white">
                2. Prérequis
              </Link>
              <Link href="#pipeline" className="hover:text-white">
                3. Pipeline minimal
              </Link>
              <Link href="#pipeline2" className="hover:text-white">
                4. Pipeline avec plusieurs jobs
              </Link>
              <Link href="#advanced" className="hover:text-white">
                5. Pipeline avancé
              </Link>
              <Link href="#variables" className="hover:text-white">
                6. Variables & Secrets
              </Link>
              <Link href="#debug" className="hover:text-white">
                7. Dépannage & Astuces
              </Link>
              <Link href="#conclusion" className="hover:text-white">
                8. Conclusion
              </Link>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}
