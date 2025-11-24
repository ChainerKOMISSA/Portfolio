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
                    ℹ️ Si tu n&apos;as pas encore de projet sur Gitab, tu peux
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
                    3. Pipeline minimal
                  </h2>

                  <p className="text-gray-300 mb-3">
                    ℹ️Notre déploiement sera fait sur GitLab Pages. <br />
                    <br />
                    Pour un déploiement statique simple nous avons besoin
                    d&apos;un seul Job <strong>
                      obligatoirement
                    </strong> nommé <code className="text-blue-400">pages</code>
                    . Ce nom permettra à GitLab de détecter le pour publier le
                    contenu du dossier{" "}
                    <code className="text-blue-400">public/</code> en tant que
                    site web.
                  </p>
                  <p className="text-gray-300 mb-3">
                    Comme avec Github Actions, Gitlab CI/CD requiert un fichier
                    YAML contenant presque les mêmes instructions. <br />A la
                    racine du projet, crée donc un fichier{" "}
                    <code className="text-blue-400">.gitlab-ci.yml</code>. Dans
                    ce fichier recopies le code suivant :
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

                  <p className="text-gray-300 mt-3">
                    Cet exemple présente quatre tâches : build-job, test-job1,
                    test-job2 et deploy-prod. Les commentaires des commandes
                    echo s&apos;affichent dans l&apos;interface utilisateur lors de la
                    consultation des tâches. Les valeurs des variables
                    prédéfinies $GITLAB_USER_LOGIN et $CI_COMMIT_BRANCH sont
                    renseignées lors de l&apos;exécution des tâches.
                  </p>

                  <p className="text-gray-300 mt-3">
                    Dès que vous poussez ce fichier vers votre dépôt, GitLab
                    détectera et lancera automatiquement le pipeline sur les
                    pushs vers <code className="text-blue-400">main</code>. Si
                    le job <code className="text-blue-400">pages</code> réussit,
                    votre site sera disponible via l&apos;URL GitLab Pages de
                    votre projet.
                  </p>
                </section>

                {/* 4. EXEMPLE AVANCÉ MULTI-STAGE */}
                <section id="advanced">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    4. Exemple avancé : Pipeline multi-stage (build, test,
                    deploy)
                  </h2>

                  <p className="text-gray-300">
                    Pour les projets utilisant des outils modernes (Node.js,
                    tests unitaires, compilation de code), un pipeline
                    multi-stage est essentiel. Il sépare clairement les
                    responsabilités, garantissant que le code est testé avant
                    d&apos;être déployé.
                  </p>
                  <p className="text-gray-300 font-semibold mt-2 mb-3">
                    Ce pipeline suit l&apos;ordre :{" "}
                    <code className="text-blue-400">build</code> →
                    <code className="text-blue-400">test</code> →
                    <code className="text-blue-400">deploy</code>.
                  </p>

                  <CodeBlock
                    language="yaml"
                    code={`# Utilise une image Docker avec Node.js préinstallé
image: node:18-alpine

# Définition de l'ordre des étapes (stages)
stages:
  - build # Préparation (installation des dépendances, compilation)
  - test  # Exécution des tests unitaires
  - deploy # Déploiement réel

# Mise en cache : les chemins spécifiés sont conservés entre les runs
cache:
  paths:
    - node_modules/ # Accélère l'étape 'install'

# Job 1 : Installation et compilation (Stage 'build')
install:
  stage: build
  script:
    - npm ci  # Installation propre des dépendances
    - npm run build # Exécute la compilation (ex: Next.js, Webpack)
  # Les artifacts transmettent les fichiers de sortie (ex: dossier 'dist/')
  artifacts:
    paths:
      - dist/ # Assurez-vous que ce chemin correspond à votre build
      
# Job 2 : Tests unitaires (Stage 'test')
unit_tests:
  stage: test
  script:
    - npm test # Exécute vos tests (Jest, Mocha, etc.)
  # Dépendance : ce job a besoin des artifacts du job 'install'
  dependencies:
    - install
      
# Job 3 : Déploiement (Stage 'deploy')
pages:
  stage: deploy
  script:
    - mkdir -p public
    # Copie les fichiers compilés de 'dist/' vers le dossier 'public/'
    - cp -r dist/* public/
    # Copie les assets non-compilés
    - cp -r assets/ public/
  artifacts:
    paths:
      - public
  only:
    - main`}
                  />

                  <p className="text-gray-300 mt-3">
                    **Concepts Clés dans cet exemple :**
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      <li>
                        **`image`** : Définit l&apos;environnement
                        d&apos;exécution (ici Node.js 18 sur Alpine).
                      </li>
                      <li>
                        **`cache`** : Optimise la vitesse en réutilisant le
                        dossier{" "}
                        <code className="text-blue-400">node_modules/</code>{" "}
                        entre les exécutions.
                      </li>
                      <li>
                        **`artifacts`** : La sortie du job{" "}
                        <code className="text-blue-400">install</code> (le
                        dossier <code className="text-blue-400">dist/</code>)
                        est stockée pour être utilisée comme entrée par le job{" "}
                        <code className="text-blue-400">pages</code>.
                      </li>
                      <li>
                        **`dependencies`** : Force explicitement le job{" "}
                        <code className="text-blue-400">unit_tests</code> à
                        attendre et utiliser la sortie du job{" "}
                        <code className="text-blue-400">install</code>.
                      </li>
                    </ul>
                  </p>
                </section>

                {/* 5. VARIABLES CI ET SECRETS (Ancienne Section 5) */}
                <section id="variables">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    5. Gestion Sécurisée : Variables CI et Secrets
                  </h2>

                  <p className="text-gray-300">
                    Il est **crucial** de ne jamais stocker de secrets (tokens,
                    clés API, mots de passe) directement dans{" "}
                    <code className="text-blue-400">.gitlab-ci.yml</code> ou
                    dans votre code source. GitLab fournit une interface
                    sécurisée pour cela : **Settings → CI/CD → Variables**.
                  </p>

                  <p className="text-gray-300 mt-2">
                    Les variables configurées dans l&apos;interface deviennent
                    des variables d&apos;environnement dans les jobs de votre
                    pipeline (par exemple,{" "}
                    <code className="text-blue-400">$MY_API_TOKEN</code>).
                  </p>

                  <p className="text-gray-300 mt-4 font-semibold">
                    Points clés lors de la configuration de variables :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>
                      **Protected** : Limite l&apos;accès à cette variable aux
                      branches protégées (comme{" "}
                      <code className="text-blue-400">main</code>).
                    </li>
                    <li>
                      **Masked** : Masque la valeur dans les logs du pipeline,
                      empêchant ainsi sa fuite accidentelle. **À utiliser
                      systématiquement pour les secrets.**
                    </li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Exemple d&apos;utilisation dans votre fichier{" "}
                    <code className="text-blue-400">.gitlab-ci.yml</code> :
                  </p>

                  <CodeBlock
                    language="yaml"
                    code={`deploy_to_external:
  stage: deploy
  script:
    # La variable MY_API_TOKEN est injectée automatiquement
    - curl -X POST -H "Authorization: Bearer $MY_API_TOKEN" https://api.external.com/deploy
    - echo "Déploiement initié." 
  only:
    - main`}
                  />
                </section>

                {/* 6. DÉPANNAGE & BONNES PRATIQUES (Ancienne Section 6/9) */}
                <section id="debug">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    6. Dépannage et Bonnes Pratiques
                  </h2>

                  <p className="text-gray-300 font-semibold mb-2">
                    Diagnostics courants :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      **Pipeline ne démarre pas :**
                      <p className="mt-1">
                        Vérifiez que le fichier{" "}
                        <code className="text-blue-400">.gitlab-ci.yml</code>{" "}
                        est à la racine du dépôt et que les conditions{" "}
                        <code className="text-blue-400">only:</code> /{" "}
                        <code className="text-blue-400">rules:</code>
                        correspondent à votre *commit* (branche, tag, etc.).
                      </p>
                    </li>
                    <li>
                      **404 sur GitLab Pages :**
                      <p className="mt-1">
                        Le dossier{" "}
                        <code className="text-blue-400">public/</code> doit
                        impérativement être créé par le job{" "}
                        <code className="text-blue-400">pages</code> et contenir
                        un <code className="text-blue-400">index.html</code>.
                        Assurez-vous que le chemin de l&apos;artifact est
                        correctement défini sur{" "}
                        <code className="text-blue-400">public</code>.
                      </p>
                    </li>
                    <li>
                      **Commandes non trouvées :**
                      <p className="mt-1">
                        Le runner utilise une image Docker (défini par{" "}
                        <code className="text-blue-400">image:</code>). Si vous
                        avez besoin de commandes spécifiques (ex:{" "}
                        <code className="text-blue-400">npm</code>,{" "}
                        <code className="text-blue-400">python</code>), changez
                        d&apos;image (ex:{" "}
                        <code className="text-blue-400">node:20</code>) ou
                        installez-les dans le script via{" "}
                        <code className="text-blue-400">apt-get</code> ou{" "}
                        <code className="text-blue-400">apk add</code>.
                      </p>
                    </li>
                  </ul>

                  <p className="text-gray-300 font-semibold mt-6 mb-2">
                    Astuces et Bonnes Pratiques :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      **Logs du Job :** Le meilleur outil de dépannage est la
                      *Trace* du job. Cliquez sur un job en échec pour voir sa
                      sortie complète et identifier la ligne de commande qui a
                      échoué.
                    </li>
                    <li>
                      **Atomicité des Jobs :** Gardez les jobs simples et axés
                      sur une seule responsabilité (un job = build, un autre =
                      test).
                    </li>
                    <li>
                      **Utiliser `rules:` :** Pour un contrôle plus fin et plus
                      moderne des conditions d&apos;exécution des jobs, préférez{" "}
                      <code className="text-blue-400">rules:</code> à
                      l&apos;ancien <code className="text-blue-400">only:</code>
                      .
                    </li>
                  </ul>
                </section>

                {/* 7. CONCLUSION & RESSOURCES (Ancienne Section 10) */}
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    7. Conclusion et Prochaines Étapes
                  </h2>

                  <p className="text-gray-300 mb-4">
                    Vous avez maintenant toutes les bases pour configurer et
                    gérer des pipelines CI/CD robustes sur GitLab, du
                    déploiement statique simple à une chaîne d&apos;intégration
                    complète (build, test, deploy) avec une gestion sécurisée de
                    vos variables.
                  </p>

                  <p className="text-gray-300 mb-6 font-semibold">
                    Pour aller plus loin, vous pourriez :
                  </p>

                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      **Intégrer des scans de sécurité** : Ajouter des jobs de
                      Static Application Security Testing (SAST) ou de détection
                      de dépendances vulnérables.
                    </li>
                    <li>
                      **Déploiement avancé** : Adapter les exemples pour
                      déployer sur des plateformes comme AWS, Azure, ou
                      Kubernetes en utilisant des images Docker dédiées.
                    </li>
                    <li>
                      **Améliorer la documentation** : Ajouter des images et des
                      captures d&apos;écran des interfaces Pipelines, Jobs et
                      Pages de GitLab.
                    </li>
                  </ul>

                  <div className="flex gap-3 mt-4">
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
                2. Prérequis & Structure
              </Link>
              <Link href="#pipeline" className="hover:text-white">
                3. Pipeline minimal
              </Link>
              <Link href="#advanced" className="hover:text-white">
                4. Pipeline avancé
              </Link>
              <Link href="#variables" className="hover:text-white">
                5. Variables & Secrets
              </Link>
              <Link href="#debug" className="hover:text-white">
                6. Dépannage & Astuces
              </Link>
              <Link href="#conclusion" className="hover:text-white">
                7. Conclusion
              </Link>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}
