import Link from "next/link";
import {IoIosArrowDown, IoIosArrowRoundBack} from "react-icons/io";
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
                        Déployer sur AWS avec CodePipeline et CodeBuild
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

                                    <p className="text-gray-300 mb-4">
                                        Dans ce tutoriel, nous allons mettre en place un <strong>pipeline CI/CD complet sur AWS</strong> en utilisant
                                        les services natifs <span className="text-blue-400">AWS CodePipeline</span> et{" "}
                                        <span className="text-blue-400">AWS CodeBuild</span>.
                                    </p>

                                    <p className="text-gray-300 mb-4">
                                        L’objectif est d’<strong>automatiser tout le cycle de vie d’une application</strong> : récupération du code depuis GitHub,
                                        build, tests et déploiement, à chaque nouveau push sur le dépôt.
                                    </p>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">
                                            Ce que tu vas apprendre dans ce guide
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                            <li>Comprendre le rôle et le fonctionnement de <strong>CodePipeline</strong> dans une chaîne CI/CD</li>
                                            <li>Configurer <strong>CodeBuild</strong> pour compiler et tester ton application</li>
                                            <li>Connecter ton dépôt <strong>GitHub</strong> à AWS de manière sécurisée</li>
                                            <li>Mettre en place un déploiement automatique déclenché par les modifications du code</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        À la fin de ce tutoriel, ton application sera <strong>automatiquement testée, buildée et déployée</strong> sur AWS,
                                        sans aucune intervention manuelle.
                                    </p>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4">
                                        <p className="text-blue-200 font-semibold mb-2">Pourquoi utiliser AWS pour le CI/CD ?</p>
                                        <p className="text-gray-300 mb-3">
                                            AWS se distingue des autres solutions par son approche <strong>100% cloud et managée</strong> :
                                        </p>
                                        <ul className="list-none space-y-2 text-gray-300 text-sm ml-4">
                                            <li>• <strong>Zéro maintenance</strong> : contrairement à Jenkins, pas de serveur à gérer</li>
                                            <li>• <strong>Intégration native</strong> : connexion fluide avec tous les services AWS (S3, Lambda, ECS...)</li>
                                            <li>• <strong>Scalabilité automatique</strong> : ton pipeline s&apos;adapte à la charge sans configuration</li>
                                            <li>• <strong>Pay-as-you-go</strong> : tu ne paies que pour ce que tu utilises réellement</li>
                                        </ul>
                                    </div>
                                </section>

                                <section id="prerequisites">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        2. Prérequis et configuration
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Avant de commencer, assure-toi d’avoir tous les éléments nécessaires pour suivre ce tutoriel sans blocage :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                                        <li>
                                            Un compte AWS actif. Tu peux le créer gratuitement (1€)
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 font-semibold ml-1"
                                                href="https://aws.amazon.com/"
                                            >
                                                ici
                                            </a>. Tu peux utiliser la version gratuite pendant 6 mois.
                                        </li>
                                        <li>Un compte GitHub avec un repository contenant ton application</li>
                                        <li>Une application simple (par exemple un projet HTML/CSS/JS ou Node.js)</li>
                                        <li>Connaissance basique de Git et des commandes de push</li>
                                    </ul>

                                        <h3 className="text-lg font-semibold text-white mb-3 mt-4">
                                            Les services AWS que nous allons utiliser
                                        </h3>

                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                            <li>
                                                <strong className="text-blue-400">AWS CodePipeline</strong> : service d’orchestration qui définit les étapes de ton pipeline CI/CD
                                                (source, build, tests, déploiement). Dès qu’un push est détecté dans ton dépôt GitHub,
                                                CodePipeline déclenche automatiquement le flux.
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">AWS CodeBuild</strong> : service de build managé qui exécute les commandes définies
                                                dans un fichier <code className="text-blue-400">buildspec.yml</code>. Il permet d’installer les dépendances,
                                                lancer les tests, générer les artefacts et préparer ton application pour le déploiement.
                                            </li>
                                        </ul>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4">
                                        <p className="text-gray-300 text-sm">
                                            Contrairement à Jenkins, AWS gère l’infrastructure sous-jacente. Tu n’as pas besoin de serveur ou d’agent à maintenir.
                                            Tu bénéficies d’une solution scalable, sécurisée et directement intégrée à l’écosystème AWS.
                                        </p>
                                    </div>
                                </section>

                                <section id="codebuild">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        3. Création du projet AWS CodeBuild
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Nous allons maintenant configurer <span className="text-blue-400">AWS CodeBuild</span>,
                                        le service qui va se charger de <strong>builder et tester automatiquement</strong> notre application.
                                        CodeBuild fonctionne comme un robot qui exécute une série de commandes à chaque fois que ton code change.
                                    </p>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-200 font-semibold mb-2">Qu&apos;est-ce que CodeBuild fait concrètement ?</p>
                                        <p className="text-gray-300 text-sm mb-2">
                                            Imagine que tu développes une application React. À chaque modification, tu dois normalement :
                                        </p>
                                        <ul className="list-none space-y-1 text-gray-300 text-sm ml-4">
                                            <li>1. Installer les dépendances (<code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-300">npm install</code>)</li>
                                            <li>2. Lancer les tests (<code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-300">npm test</code>)</li>
                                            <li>3. Créer la version de production (<code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-300">npm run build</code>)</li>
                                        </ul>
                                        <p className="text-gray-300 text-sm mt-2">
                                            <strong>CodeBuild automatise tout ça !</strong> Il exécute ces commandes dans un environnement propre à chaque fois.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="codebuild1">
                                        Étape 1 : Accéder à CodeBuild
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Connecte-toi à la console AWS (ton compte AWS) puis dans la barre de recherche en haut, tape <strong>&quot;CodeBuild&quot;</strong> et clique sur le service.
                                        Une fois sur la page CodeBuild, clique sur le bouton orange <span className="text-blue-400 font-semibold">Create project</span>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="codebuild2">
                                        Étape 2 : Configuration du projet
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Tu vas maintenant remplir plusieurs champs. Ne t&apos;inquiète pas, je vais t&apos;expliquer chaque section en détail.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h4 className="text-white font-bold mb-2">Project configuration</h4>
                                            <ul className="list-none space-y-3 text-gray-300">
                                                <li>
                                                    <strong className="text-white font-semibold">Project name :</strong>{" "}
                                                    <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">my-app-build</code>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        Choisis un nom descriptif pour identifier facilement ton projet.
                                                        Exemple : <code className="text-blue-300">mon-site-web-build</code> ou <code className="text-blue-300">api-backend-build</code>
                                                    </p>
                                                </li>
                                                <li>
                                                    <strong className="text-white font-semibold">Description</strong>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        Tu peux ajouter une description si tu veux. Elle est optionnelle.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h4 className="text-white font-bold mb-2">Source</h4>
                                            <ul className="list-none space-y-3 text-gray-300">
                                                <li>
                                                    <strong className="text-white font-semibold">Source provider :</strong> Sélectionne <strong className="text-blue-400">GitHub</strong>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        C&apos;est ici que se trouve ton code source. CodeBuild ira chercher ton code directement depuis GitHub.
                                                    </p>
                                                </li>
                                                <li>
                                                    <strong className="text-white font-semibold">Repository :</strong> Clique sur <strong className="text-blue-400">Connect to GitHub</strong>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        AWS va te demander d&apos;autoriser l&apos;accès à ton compte GitHub. C&apos;est normal et sécurisé !
                                                        Une fois connecté, sélectionne ton repository dans la liste.
                                                    </p>
                                                </li>
                                                <li>
                                                    <strong className="text-white font-semibold">Branch :</strong> <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">main</code>
                                                    (ou <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">master</code>)
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        Choisis la branche à surveiller. En général, c&apos;est la branche principale de ton projet.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h4 className="text-white font-bold mb-2">Environment</h4>
                                            <ul className="list-none space-y-3 text-gray-300">
                                                <li>
                                                    <strong className="text-white font-semibold">Environment image :</strong> Sélectionne <strong className="text-blue-400">Managed image</strong>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        AWS te fournit des images préconfigurées. C&apos;est plus simple que de créer ta propre image Docker.
                                                    </p>
                                                </li>
                                                <li>
                                                    <strong className="text-white font-semibold">Operating system :</strong> <strong className="text-blue-400">Ubuntu</strong>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        Ubuntu est un système Linux stable donc compatible avec la plupart des projets.
                                                    </p>
                                                </li>
                                                <li>
                                                    <strong className="text-white font-semibold">Runtime(s) :</strong> <strong className="text-blue-400">Standard</strong>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        Standard inclut les outils les plus courants (Node.js, Python, Java, etc.)
                                                    </p>
                                                </li>
                                                <li>
                                                    <strong className="text-white font-semibold">Image :</strong> Sélectionne la <strong className="text-blue-400">dernière version</strong>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        Prends toujours la version la plus récente pour avoir les dernières mises à jour de sécurité.
                                                    </p>
                                                </li>
                                                <li>
                                                    <strong className="text-white font-semibold">Service role :</strong> Laisse <strong className="text-blue-400">New service role</strong>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        AWS va créer automatiquement un rôle avec les permissions nécessaires pour faire fonctionner CodeBuild.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h4 className="text-white font-bold mb-2">Buildspec</h4>
                                            <ul className="list-none space-y-3 text-gray-300">
                                                <li>
                                                    <strong className="text-white font-semibold">Build specifications :</strong> Sélectionne <strong className="text-blue-400">Use a buildspec file</strong>
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        Cela indique à CodeBuild qu&apos;il doit chercher un fichier <code className="text-blue-400">buildspec.yml</code> à
                                                        la racine de ton projet. On va créer ce fichier juste après !
                                                    </p>
                                                </li>
                                                <li>
                                                    <strong className="text-white font-semibold">Buildspec name :</strong> Laisse vide
                                                    <p className="text-white text-sm mt-1 ml-4">
                                                        Le nom par défaut <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">buildspec.yml</code> est utilisé
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h4 className="text-white font-bold mb-2">Artifacts (optionnel pour l&apos;instant)</h4>
                                            <p className="text-gray-300 text-sm">
                                                Tu peux laisser <strong>No artifacts</strong> pour le moment. Les artifacts sont les fichiers
                                                générés après le build. On les configurera plus tard au moment du déploiement.
                                            </p>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h4 className="text-white font-bold mb-2">Logs (optionnel)</h4>
                                            <p className="text-gray-300 text-sm">
                                                Tu peux activer <strong>CloudWatch logs</strong> pour garder une trace de tous tes builds.
                                                C&apos;est très utile pour débugger en cas de problème !
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mt-6 mb-4">
                                        Une fois tous les champs remplis, clique sur <span className="text-blue-400 font-semibold">Create build project</span> {""}
                                        en bas de la page.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-8" id="codebuild3">
                                        Étape 3 : Créer le fichier buildspec.yml
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Le fichier <code className="text-blue-400">buildspec.yml</code> est le <strong>cerveau de ton build</strong>.
                                        Il contient toutes les instructions que CodeBuild doit exécuter et doit être placé à la racine de ton projet.
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Tu peux crée le fichier <code className="text-blue-400">buildspec.yml</code> avec le contenu suivant :
                                    </p>

                                    <CodeBlock
                                        language="yaml"
                                        code={`version: 0.2

phases:
  install:
    commands:
      - npm install
  build:
    commands:
      - npm run build

artifacts:
  files:
    - '**/*'
  base-directory: build`}
                                    />

                                    <div className="mt-4 mb-6">
                                        <h4 className="text-white font-semibold mb-3">Décryptage du buildspec.yml</h4>
                                        <ul className="list-none space-y-3 text-gray-300">
                                            <li>
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">version: 0.2</code>
                                                <span>: c&apos;est la version du format buildspec. Utilise toujours 0.2, c&apos;est la version actuelle.</span>
                                            </li>
                                            <li>
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">phases</code>
                                                <span>: les différentes étapes du build. Chaque phase s&apos;exécute dans l&apos;ordre.</span>
                                            </li>
                                            <li>
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">install</code>
                                                <span>: phase d&apos;installation des dépendances.
                                                </span>
                                            </li>
                                            <li>
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">build</code>
                                                <span> : phase de compilation. <code className="text-blue-300">npm run build</code> crée la version optimisée
                                                    de ton application.
                                                </span>
                                            </li>
                                            <li>
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">artifacts</code>
                                                <span>: définit quels fichiers doivent être sauvegardés après le build.{" "}
                                                    <code className="text-blue-300">&quot;**/*&quot;</code> signifie &quot;tous les fichiers&quot;,
                                                    et <code className="text-blue-300">base-directory: build</code> indique que ces fichiers se trouvent dans le dossier build.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-200 font-semibold mb-2">Adapter le buildspec à ton projet</p>
                                        <p className="text-gray-300 text-sm mb-2">
                                            Si tu n&apos;utilises pas React/Node.js, voici comment adapter les commandes :
                                        </p>
                                        <ul className="list-none space-y-2 text-gray-300 text-sm ml-4">
                                            <li>
                                                <strong>Python :</strong> Remplace <code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-300">npm install</code> par{" "}
                                                <code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-300">pip install -r requirements.txt</code>
                                            </li>
                                            <li>
                                                <strong>Java/Maven :</strong> Utilise <code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-300">mvn clean install</code>
                                            </li>
                                            <li>
                                                <strong>HTML/CSS statique :</strong> Tu peux sauter la phase de build puisque tu n&apos;as pas de compilation.
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-3">
                                        Une fois le fichier créé, <strong>commit et push-le sur GitHub</strong>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-8" id="codebuild4">
                                        Étape 4 : Tester ton build
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Maintenant que tout est configuré, testons si ça fonctionne !
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300">
                                        <li>
                                            Retourne sur la page de ton projet CodeBuild dans la console AWS
                                        </li>
                                        <li>
                                            Clique sur le bouton <span className="text-blue-400 font-semibold">Start build</span> en haut à droite
                                        </li>
                                        <li>
                                            Dans la popup, laisse les paramètres par défaut et clique sur <span className="text-blue-400 font-semibold">Start build</span>
                                        </li>
                                        <li>
                                            Observe le build en temps réel ! Tu verras chaque commande s&apos;exécuter étape par étape
                                        </li>
                                    </ol>

                                    <p className="text-gray-300 mt-3">
                                        Si ton build est passé au vert (<strong className="text-green-400">SUCCEEDED</strong>), félicitations !
                                        Ton projet CodeBuild est correctement configuré et prêt à être intégré dans un pipeline complet.
                                        Dans la section suivante, on va automatiser tout ça avec CodePipeline.
                                    </p>

                                        <p className="text-white font-semibold mb-2 mt-3">⚠️ Build en échec ?</p>
                                        <p className="text-gray-300 mb-2">
                                            Pas de panique ! Voici les erreurs les plus courantes :
                                        </p>
                                        <ul className="list-none space-y-2 text-gray-300 text-sm ml-4">
                                            <li>
                                                <strong className="text-red-200">npm: command not found</strong> → Vérifie que tu as bien sélectionné un runtime avec Node.js
                                            </li>
                                            <li>
                                                <strong className="text-red-200">buildspec.yml not found</strong> → Le fichier doit être à la racine de ton repo et s&apos;appeler exactement <code className="text-blue-300">buildspec.yml</code>
                                            </li>
                                            <li>
                                                <strong className="text-red-200">npm ERR! missing script: build</strong> → Ton <code className="text-blue-300">package.json</code> n&apos;a pas de script &quot;build&quot;.
                                                Ajoute-le ou change la commande dans le buildspec
                                            </li>
                                        </ul>
                                        <p className="text-gray-300 mt-3">
                                            Pour débugger, clique sur ton build et lis attentivement les logs. L&apos;erreur est généralement bien indiquée !
                                        </p>
                                </section>

                                <section id="codepipeline">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        4. Création du pipeline avec AWS CodePipeline
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Maintenant que notre projet CodeBuild est configuré et testé, nous allons créer le <strong>pipeline CI/CD </strong> avec AWS CodePipeline.
                                    </p>

                                    <p className="text-gray-300 mt-2">
                                        CodePipeline va <strong>automatiser l&apos;enchaînement</strong> : détecter les changements sur GitHub →
                                        lancer CodeBuild → déployer l&apos;application. Le tout sans intervention manuelle !
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="codepipeline1">
                                        Étape 1 : Accéder à CodePipeline
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Dans la console AWS, utilise la barre de recherche en haut et tape <strong>&quot;CodePipeline&quot;</strong>,
                                        puis clique sur le service. Clique ensuite sur le bouton orange <span className="text-blue-400 font-semibold">Create pipeline</span>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="codepipeline2">
                                        Étape 2 : Configuration générale (Pipeline settings)
                                    </h3>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-bold mb-3">Informations de base</h4>
                                        <ul className="list-none space-y-3 text-white">
                                            <li>
                                                <strong className="text-white font-semibold">Pipeline name :</strong>{" "}
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">my-app-pipeline</code>
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    Donne un nom clair à ton pipeline.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Service role :</strong> Sélectionne <strong className="text-blue-400">New service role</strong>
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    AWS va automatiquement créer un rôle IAM avec les permissions nécessaires pour que CodePipeline
                                                    puisse accéder à CodeBuild, GitHub, et aux autres services AWS. Le nom sera généré automatiquement.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-bold mb-3">Advanced settings</h4>
                                        <p className="text-white text-sm mb-3">
                                            Tu peux laisser les paramètres par défaut, mais voici ce qu&apos;ils signifient :
                                        </p>
                                        <ul className="list-none space-y-2 text-white">
                                            <li>
                                                <strong className="text-white font-semibold">Artifact store :</strong> <strong className="text-blue-400">Default location</strong>
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    AWS va créer automatiquement un bucket S3 pour stocker les artefacts (fichiers générés pendant le build).
                                                    Tu n&apos;as pas besoin de le créer manuellement.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Encryption key :</strong> <strong className="text-blue-400">Default AWS Managed Key</strong>
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    Les artefacts seront chiffrés automatiquement avec une clé gérée par AWS. C&apos;est sécurisé et gratuit.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        Une fois rempli, clique sur <span className="text-blue-400 font-semibold">Next</span>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="codepipeline3">
                                        Étape 3 : Configurer la source du code (Add source stage)
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Cette étape définit d&apos;où vient ton code. C&apos;est ici que tu connectes ton repository GitHub.
                                    </p>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <ul className="list-none space-y-4 text-white">
                                            <li>
                                                <strong className="text-white font-semibold">Source provider :</strong> Sélectionne <strong className="text-blue-400">GitHub (Version 2)</strong>
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    ⚠️ <strong>Important :</strong> Choisis bien &quot;GitHub (Version 2)&quot; et non &quot;GitHub (Version 1)&quot;.
                                                    La Version 2 utilise AWS Connector for GitHub qui est plus moderne, plus sécurisé et recommandé par AWS.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Connection :</strong> Clique sur <strong className="text-blue-400">Connect to GitHub</strong>
                                                <p className="text-white text-sm mt-1 ml-4 mb-2">
                                                    Une popup va s&apos;ouvrir pour autoriser AWS à accéder à ton compte GitHub. Voici le processus :
                                                </p>
                                                <ol className="list-decimal list-inside text-white text-sm ml-8 space-y-1">
                                                    <li>Donne un nom à la connexion</li>
                                                    <li>Clique sur <strong className="text-blue-400">Connect to GitHub</strong></li>
                                                    <li>Tu seras redirigé vers GitHub puis clique sur <strong className="text-blue-400">Authorize AWS Connector for GitHub</strong></li>
                                                    <li>Choisis si tu veux autoriser l&apos;accès à <strong>tous tes repositories</strong> ou seulement à <strong>certains repositories spécifiques</strong> (recommandé pour la sécurité)</li>
                                                    <li>Clique sur <strong className="text-blue-400">Install</strong></li>
                                                    <li>Tu reviens automatiquement sur AWS et tu cliques sur <strong className="text-blue-400">Connect</strong></li>
                                                </ol>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Repository name :</strong> Sélectionne ton repository
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    Une liste déroulante apparaît avec tous tes repositories GitHub. Sélectionne celui qui contient
                                                    ton application.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Branch name :</strong> <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">main</code>
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    Sélectionne la branche à surveiller.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Output artifact format :</strong> Laisse <strong className="text-blue-400">CodePipeline default</strong>
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    C&apos;est le format utilisé pour passer le code source à l&apos;étape suivante (CodeBuild).
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        Clique sur <span className="text-blue-400 font-semibold">Next</span> pour passer à l&apos;étape suivante.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="codepipeline4">
                                        Étape 4 : Configurer le build (Add build stage)
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Cette étape va <strong>lier ton projet CodeBuild au pipeline</strong>. C&apos;est ici que le code sera compilé et testé.
                                    </p>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-bold mb-3">Configuration du build</h4>
                                        <ul className="list-none space-y-3 text-gray-300">
                                            <li>
                                                <strong className="text-white font-semibold">Build provider :</strong> Sélectionne <strong className="text-blue-400">AWS CodeBuild</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    C&apos;est le seul choix possible si tu utilises les services natifs AWS.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Region :</strong> Laisse la région actuelle
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    La région AWS où se trouve ton projet CodeBuild. Par défaut, c&apos;est la même région que ton pipeline.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Project name :</strong> Sélectionne le nom de ton projet CodeBuild.
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    C&apos;est le projet CodeBuild que tu as créé dans la section précédente.
                                                    Tu devrais le voir apparaître dans la liste déroulante.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Build type :</strong> Laisse <strong className="text-blue-400">Single build</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    &quot;Single build&quot; signifie qu&apos;un seul build s&apos;exécute à la fois.
                                                    Tu pourrais aussi choisir &quot;Batch build&quot; pour exécuter plusieurs builds en parallèle mais ce n&apos;est pas nécessaire pour commencer.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        Clique sur <span className="text-blue-400 font-semibold">Next</span> pour passer au déploiement.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="codepipeline5">
                                        Étape 5 : Ajouter le déploiement (Add deploy stage )
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Pour l&apos;instant, nous allons <strong>sauter l&apos;étape de déploiement</strong>.
                                        Nous la configurerons dans la section suivante.
                                    </p>

                                    <p className="text-gray-300 mt-2 mb-3">
                                        Clique sur <span className="text-blue-400 font-semibold">Skip deploy stage</span> →
                                        une popup de confirmation apparaît → clique sur <strong>Skip</strong>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="codepipeline6">
                                        Étape 6 : Vérification finale (Review)
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        AWS te montre un récapitulatif de toute la configuration de ton pipeline. Vérifie que :
                                    </p>

                                    <ul className="list-none space-y-2 text-gray-300 ml-4">
                                        <li>✓ Le nom du pipeline est correct</li>
                                        <li>✓ La source est bien ton repository GitHub sur la bonne branche</li>
                                        <li>✓ Le build provider est bien AWS CodeBuild avec le bon projet</li>
                                        <li>✓ Le deploy stage est marqué comme &quot;Skipped&quot;</li>
                                    </ul>

                                    <p className="text-gray-300 mt-4 mb-4">
                                        Si tout est bon, clique sur <span className="text-blue-400 font-semibold">Create pipeline</span>.
                                    </p>

                                    <details className="mt-4 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span> Premier déclenchement automatique</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                        </summary>
                                        <div className="px-4 space-y-4 mb-6">
                                            <p className="text-gray-300 mb-4">
                                                Dès que tu cliques sur &quot;Create pipeline&quot;, AWS va <strong>automatiquement lancer le pipeline pour la première fois</strong> !
                                                Tu vas voir en temps réel :
                                            </p>

                                            <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                                <ol className="list-decimal list-inside space-y-3 text-gray-300 text-sm">
                                                    <li>
                                                        <strong>Source</strong> : CodePipeline récupère ton code depuis GitHub
                                                        <p className="text-gray-400 text-xs mt-1 ml-6">
                                                            Statut : <span className="text-blue-400">In progress</span> → <span className="text-green-400">Succeeded</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <strong>Build</strong> : CodeBuild exécute ton <code className="text-blue-300">buildspec.yml</code>
                                                        <p className="text-gray-400 text-xs mt-1 ml-6">
                                                            Tu peux cliquer sur <strong>Details</strong> pour voir les logs en temps réel
                                                        </p>
                                                    </li>
                                                </ol>
                                            </div>

                                            <p className="text-white font-semibold mb-2 mt-4">Pipeline créé avec succès !</p>
                                            <p className="text-white">
                                                Si les deux étapes (Source et Build) sont passées au vert, félicitations !
                                                Ton pipeline CI/CD est maintenant fonctionnel. À partir de maintenant, chaque fois que tu feras un
                                                <code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-400 mx-1">git push</code> sur la branche
                                                <code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-400 mx-1">main</code>,
                                                le pipeline se déclenchera automatiquement pour builder ton code.
                                            </p>
                                        </div>
                                    </details>

                                    <details className="mt-4 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span> Tester le déclenchement automatique</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                        </summary>
                                        <div className="px-4 space-y-4 mb-6">
                                            <p className="text-gray-300 mb-3">
                                                Pour vérifier que tout fonctionne bien, fais une petite modification dans ton code et push-la sur GitHub :
                                            </p>

                                            <p className="text-gray-300 mt-4 mb-4">
                                                Retourne sur la page de ton pipeline dans AWS. En quelques secondes, tu devrais voir
                                                un nouveau déclenchement apparaître automatiquement !
                                            </p>
                                        </div>
                                    </details>
                                        <p className="text-gray-300 mt-4 mb-3">
                                            Sur la page de ton pipeline, tu peux voir l&apos;historique complet de toutes les exécutions :
                                            quand elles ont eu lieu, combien de temps elles ont pris, et si elles ont réussi ou échoué.
                                            C&apos;est très utile pour comprendre quand un bug a été introduit ou pour auditer les déploiements.
                                        </p>
                                    <p className="text-gray-300 mt-4 mb-3">
                                        Nous sommes ainsi arrivés à la fin de l&apos;intégration continue.
                                        Nous allons maintenant passer au déploiement de l&apos;application.
                                    </p>

                                </section>

                                <section id="deploy">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        5. Déploiement automatique de l&apos;application
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Maintenant que ton pipeline récupère le code et le build automatiquement, il ne reste plus qu&apos;à
                                       déployer l&apos;application pour la rendre accessible sur Internet ! Pour cela nous allons utiliser
                                        le service Amazon S3.
                                    </p>

                                    <details className="mt-6 mb-6 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>Amazon S3</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown /></span>
                                        </summary>

                                        <div className="px-4 pb-6 space-y-6">
                                            <div>
                                                <p className="text-white font-semibold mb-2">Qu&apos;est-ce qu’Amazon S3 ?</p>
                                                <p className="text-gray-300 text-sm">
                                                    Amazon S3 (Simple Storage Service) est un service de stockage cloud d&apos;AWS.
                                                    En plus de stocker des fichiers, il permet aussi d&apos;héberger des sites web statiques.
                                                </p>
                                            </div>
                                            <hr className="border-blue-900/50" />
                                            <div>
                                                <p className="text-white font-semibold mb-2">À quoi sert S3 dans un projet web ?</p>
                                                <p className="text-gray-300 text-sm">
                                                    S3 permet de :
                                                </p>
                                                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm ml-4">
                                                    <li>Héberger un site vitrine ou un portfolio</li>
                                                    <li>Déployer une application front-end </li>
                                                    <li>Stocker des images, vidéos et documents</li>
                                                    <li>Servir de base à un CDN</li>
                                                </ul>
                                            </div>
                                            <hr className="border-blue-900/50" />
                                            <div>
                                                <p className="text-white font-semibold mb-2">Pourquoi c&apos;est souvent un excellent choix</p>
                                                <p className="text-gray-300 text-sm">
                                                    S3 est très rapide, très peu cher, hautement disponible et
                                                   scalable automatiquement : ton site peut supporter beaucoup de visiteurs sans configuration.
                                                </p>
                                            </div>
                                            <hr className="border-blue-900/50" />
                                            <div>
                                                <p className="text-white font-semibold mb-2">Ce que S3 peut et ne peut pas faire</p>

                                                <p className="text-gray-300 text-sm mb-2">
                                                    S3 héberge uniquement des sites statiques en HTML/CSS, React ou Angular mais ne peut pas
                                                    être utilisé pour héberger des applications avec logique serveur comme des backend Node.js, Django ou PHP.
                                                    Pour un backend, on utilisera plutôt <strong>EC2</strong>, <strong>ECS</strong> ou <strong>Lambda</strong>.
                                                </p>
                                            </div>
                                        </div>
                                    </details>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="deploy1">
                                        Étape 1 : Créer un bucket S3
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Dans la console AWS, utilise la barre de recherche et tape <strong>&quot;S3&quot;</strong>, puis clique sur le service.
                                        Une fois le service sélectionné, clique sur le bouton orange <span className="text-blue-400 font-semibold">Create bucket</span>.
                                    </p>
                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-bold mb-3">Configuration du bucket</h4>
                                        <ul className="list-none space-y-4 text-gray-300">
                                            <li>
                                                <strong className="text-white font-semibold">Bucket name :</strong>{" "}
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">my-app-bucket</code>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    ⚠️Le nom doit être <strong>unique dans tout AWS</strong> (pas seulement dans ton compte !).
                                                    Si &quot;my-app-bucket&quot; est déjà pris, ajoute ton nom ou une date, par exemple :
                                                    <code className="text-blue-400 mx-1">my-app-essi-2025</code> ou
                                                    <code className="text-blue-400 mx-1">frontend-react-app-prod</code>.
                                                    Le nom doit contenir uniquement des lettres minuscules, des chiffres et des tirets (-).
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">AWS Region :</strong> Choisis une région proche de tes utilisateurs
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Par exemple : <strong>eu-west-1</strong> pour l&apos;Europe, <strong> us-east-1</strong>pour l&apos;Amérique du Nord.
                                                    Plus la région est proche de tes visiteurs, plus ton site sera rapide ! Dans mon cas, je vais utiliser ma région
                                                    puisqu&apos;il s&apos;agit ici d&apos;un projet d&apos;apprentissage.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Object Ownership :</strong> Laisse l&apos;option <strong className="text-blue-400">ACLs disabled (recommended)</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    C&apos;est le paramètre recommandé par AWS pour simplifier la gestion des permissions.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Block Public Access settings :</strong>
                                                <strong className="text-blue-400"> Décoche toutes les cases</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4 mb-2">
                                                    Par défaut, AWS bloque tout accès public pour des raisons de sécurité.
                                                    Mais comme on veut héberger un site web accessible à tous, il faut autoriser l&apos;accès public.
                                                </p>
                                                    <p className="text-white text-sm font-semibold mb-1">⚠️ Décoche ces 4 options :</p>
                                                    <ul className="list-none space-y-1 text-gray-300 text-sm ml-2">
                                                        <li>☐ Block all public access</li>
                                                        <li>☐ Block public access to buckets and objects granted through new access control lists (ACLs)</li>
                                                        <li>☐ Block public access to buckets and objects granted through any access control lists (ACLs)</li>
                                                        <li>☐ Block public access to buckets and objects granted through new public bucket or access point policies</li>
                                                    </ul>
                                                <p className="text-gray-300 text-sm mt-1">
                                                    Une case de confirmation apparaîtra : coche la case <strong>&quot;I acknowledge that the current settings might result in this bucket and the objects within becoming public&quot;</strong>
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Bucket Versioning :</strong> <strong className="text-blue-400">Disable</strong> (pour commencer)
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Le versioning garde un historique de toutes les modifications de tes fichiers.
                                                    Pas nécessaire pour débuter, mais utile en production pour pouvoir revenir en arrière.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Tags :</strong> (optionnel)
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Tu peux ajouter des tags pour organiser tes ressources, par exemple :
                                                    <code className="text-blue-400 mx-1">Environment: Production</code> ou
                                                    <code className="text-blue-400 mx-1">Project: MyApp</code>
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Default encryption :</strong> Laisse <strong className="text-blue-400">Server-side encryption with Amazon S3 managed keys (SSE-S3)</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Tes fichiers seront automatiquement chiffrés au repos. C&apos;est gratuit et recommandé.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-6">
                                        Clique sur <span className="text-blue-400 font-semibold">Create bucket</span> en bas de la page.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="deploy2">
                                        Étape 2 : Activer l&apos;hébergement de site web statique
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Maintenant que ton bucket est créé, il faut le configurer pour qu&apos;il puisse servir des pages web.
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
                                        <li>
                                            Clique sur le nom de ton bucket dans la liste
                                        </li>
                                        <li>
                                            Va dans l&apos;onglet <strong className="text-blue-400">Properties</strong> (en haut)
                                        </li>
                                        <li>
                                            Descends tout en bas jusqu&apos;à la section <strong className="text-blue-400">Static website hosting</strong>
                                        </li>
                                        <li>
                                            Clique sur <strong>Edit</strong>
                                        </li>
                                    </ol>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-bold mb-3">Configuration de l&apos;hébergement web</h4>
                                        <ul className="list-none space-y-3 text-gray-300">
                                            <li>
                                                <strong className="text-white font-semibold">Static website hosting :</strong> Sélectionne <strong className="text-blue-400">Enable</strong>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Hosting type :</strong> <strong className="text-blue-400">Host a static website</strong>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Index document :</strong>{" "}
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">index.html</code>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    C&apos;est la page qui s&apos;affichera par défaut quand quelqu&apos;un visite ton site.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Error document :</strong>{" "}
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">index.html</code>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    La page qui s&apos;affichera en cas d&apos;erreur 404 (page non trouvée).
                                                    Pour les Single Page Applications (React ou Vue), utilise aussi <code className="text-blue-400">index.html</code> {""}
                                                    pour que le routing côté client fonctionne correctement.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        Clique sur <span className="text-blue-400 font-semibold">Save changes</span>.
                                    </p>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-white font-semibold mb-2">URL de ton site</p>
                                        <p className="text-gray-300 text-sm">
                                            Une fois sauvegardé, AWS génère automatiquement une URL publique pour ton site.
                                            Tu peux la trouver dans la section &quot;Static website hosting&quot; : elle ressemble à
                                            <code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-400 mx-1">
                                                http://my-app-bucket.s3-website-eu-west-1.amazonaws.com
                                            </code>
                                        </p>
                                        <p className="text-gray-300 text-sm mt-2">
                                            Note cette URL, on en aura besoin pour tester le déploiement !
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="deploy3">
                                        Étape 3 : Configurer les permissions d&apos;accès public
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Pour que les visiteurs puissent accéder à ton site, il faut ajouter une <strong>bucket policy</strong> {""}
                                        qui autorise la lecture publique de tous les fichiers.
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-4">
                                        <li>
                                            Toujours dans ton bucket, va dans l&apos;onglet <strong className="text-blue-400">Permissions</strong>
                                        </li>
                                        <li>
                                            Descends jusqu&apos;à la section <strong className="text-blue-400">Bucket policy</strong>
                                        </li>
                                        <li>
                                            Clique sur <strong>Edit</strong>
                                        </li>
                                    </ol>

                                    <p className="text-gray-300 mb-3">
                                        Copie-colle cette policy dans l&apos;éditeur (en remplaçant <code className="text-blue-400">my-app-bucket</code> par le nom de ton bucket) :
                                    </p>

                                    <CodeBlock
                                        language="json"
                                        code={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-app-bucket/*"
    }
  ]
}`}
                                    />

                                        <h4 className="text-white font-semibold mb-3 mt-3">Décryptage de la bucket policy</h4>
                                        <ul className="list-none space-y-2 text-gray-300">
                                            <li>
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">&quot;Effect&quot;: &quot;Allow&quot;</code>
                                                <span> : on autorise l&apos;action par opposition à &quot;Deny&quot; qui bloquerait l&apos;action</span>
                                            </li>
                                            <li>
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">&quot;Principal&quot;: &quot;*&quot;</code>
                                                <span> : l&apos;astérisque (*) signifie &quot;tout le monde&quot;, donc n&apos;importe qui sur Internet</span>
                                            </li>
                                            <li>
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">&quot;Action&quot;: &quot;s3:GetObject&quot;</code>
                                                <span> : on autorise uniquement la lecture des fichiers, pas la modification ou la suppression</span>
                                            </li>
                                            <li>
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">&quot;Resource&quot;: &quot;arn:aws:s3:::my-app-bucket/*&quot;</code>
                                                <span > : cette règle s&apos;applique à tous les fichiers (/*) dans le bucket spécifié.</span>
                                            </li>
                                        </ul>

                                    <p className="text-gray-300 mb-6 mt-3">
                                        Après avoir copié et collé la policy, clique sur <span className="text-blue-400 font-semibold">Save changes</span>.
                                        Un avertissement de sécurité apparaîtra, confirme en cliquant à nouveau sur <strong className="text-blue-400">Save</strong>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="deploy4">
                                        Étape 4 : Ajouter l&apos;étape de déploiement dans CodePipeline
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Retourne maintenant sur <strong>CodePipeline</strong> pour ajouter l&apos;étape de déploiement qui manquait.
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
                                        <li>
                                            Va sur la console CodePipeline et clique sur le nom de ton pipeline
                                        </li>
                                        <li>
                                            Clique sur le bouton <strong className="text-blue-400">Edit</strong> en haut à droite
                                        </li>
                                        <li>
                                            En bas du pipeline (après l&apos;étape &quot;Build&quot;), clique sur <strong className="text-blue-400">+ Add stage</strong>
                                        </li>
                                        <li>
                                            Donne un nom à cette étape : <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">Deploy</code>
                                        </li>
                                        <li>
                                            Clique sur <strong>Add stage</strong>
                                        </li>
                                        <li>
                                            Dans cette nouvelle étape, clique sur <strong className="text-blue-400">+ Add action group</strong>
                                        </li>
                                    </ol>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-bold mb-3">Configuration de l&apos;action de déploiement</h4>
                                        <ul className="list-none space-y-3 text-gray-300">
                                            <li>
                                                <strong className="text-white font-semibold">Action name :</strong>{" "}
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">Deploy-to-S3</code>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Choisis un nom descriptif pour identifier facilement cette action
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Action provider :</strong> Sélectionne <strong className="text-blue-400">Amazon S3</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    C&apos;est le service qui va recevoir les fichiers de ton application
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Region :</strong> Laisse la région actuelle
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Normalement, c&apos;est la même région que ton bucket S3
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Input artifacts :</strong> <strong className="text-blue-400">BuildArtifact</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Ce sont les fichiers générés par CodeBuild. CodePipeline les a automatiquement sauvegardés et les transmet maintenant au déploiement.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Bucket :</strong> Sélectionne ton bucket
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Tu devrais voir ton bucket apparaître dans la liste déroulante. Sélectionne le.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">S3 object key :</strong> Laisse <strong>vide</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    En laissant vide, les fichiers seront déployés à la racine du bucket
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Extract file before deploy :</strong> <strong className="text-blue-400">Coche cette case !</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    ⚠️ Cette option décompresse l&apos;archive ZIP créée par CodeBuild
                                                    et déploie les fichiers individuellement. Si tu ne coches pas cette case, S3 recevra juste un fichier ZIP et ton site ne fonctionnera pas !
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Deployment path :</strong> Laisse vide (optionnel)
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Tu pourrais spécifier un sous-dossier si tu voulais déployer dans <code className="text-blue-400">bucket/v2/</code> par exemple
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">CannedACL :</strong> Sélectionne <strong className="text-blue-400">public-read</strong>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Cela rend automatiquement tous les fichiers uploadés accessibles publiquement
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Cache control :</strong> (optionnel) Tu peux mettre{" "}
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">max-age=3600</code>
                                                <p className="text-gray-300 text-sm mt-1 ml-4">
                                                    Cela indique aux navigateurs de garder les fichiers en cache pendant 1 heure (3600 secondes),
                                                    ce qui améliore les performances
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        Clique ensuite sur <strong className="text-blue-400">Done</strong>, puis sur <span className="text-blue-400 font-semibold">Save</span> en haut de la page.
                                        Une popup de confirmation apparaît. Clique sur <strong className="text-blue-400">Save</strong> pour confirmer les modifications du pipeline.
                                    </p>

                                    <details className="mt-6 mb-6 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>Premier déploiement automatique</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown /></span>
                                        </summary>

                                        <div className="px-4 pb-6 space-y-6">
                                            <p className="text-gray-300 mb-4">
                                                Dès que tu sauvegardes, CodePipeline va <strong>automatiquement relancer le pipeline complet</strong> avec
                                                la nouvelle étape de déploiement ! Tu vas voir :
                                            </p>

                                            <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
                                                <li><strong>Source</strong> : Récupération du code depuis GitHub</li>
                                                <li><strong>Build</strong> : Compilation de l&aposz;application avec CodeBuild</li>
                                                <li><strong>Deploy</strong> : Déploiement des fichiers sur S3</li>
                                            </ol>

                                            <p className="text-gray-300 mb-4">
                                                Attends que les trois étapes passent au vert. Cela peut prendre 2-5 minutes selon la taille de ton projet.
                                            </p>

                                            <h4 className="text-lg font-semibold text-white mb-3 mt-6">
                                                Vérifier que le déploiement a fonctionné
                                            </h4>

                                            <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                                <li>
                                                    Retourne sur S3 et ouvre ton bucket
                                                </li>
                                                <li>
                                                    Tu devrais voir tous les fichiers de ton application
                                                </li>
                                                <li>
                                                    Copie l&apos;URL de ton site (Tu le trouveras dans Properties → Static website hosting → Bucket website endpoint)
                                                </li>
                                                <li>
                                                    Ouvre cette URL dans ton navigateur
                                                </li>
                                                <li>
                                                    <strong>Ton application est en ligne !</strong>
                                                </li>
                                            </ol>
                                        </div>
                                    </details>

                                    <details className="mt-6 mb-6 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>Utiliser CloudFront (optionnel)</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown /></span>
                                        </summary>

                                        <div className="px-4 pb-6 space-y-6">
                                                <p className="text-gray-300 mb-2">
                                                    L&apos;URL S3 fonctionne, mais elle n&apos;est pas idéale pour la production car :
                                                </p>
                                                <ul className="list-none space-y-1 text-gray-300 ml-4">
                                                    <li>• Elle n&apos;utilise pas HTTPS par défaut</li>
                                                    <li>• Elle est longue et peu mémorable</li>
                                                    <li>• Elle n&apos;est pas optimisée pour la vitesse mondiale</li>
                                                </ul>
                                                <p className="text-gray-300 mt-2">
                                                    Pour aller plus loin, tu peux ajouter <strong>CloudFront</strong> devant ton bucket S3 pour avoir :
                                                </p>
                                                <ul className="list-none space-y-1 text-gray-300 ml-4">
                                                    <li>• HTTPS automatique</li>
                                                    <li>• CDN mondial (ton site sera ultra-rapide partout dans le monde)</li>
                                                    <li>• Possibilité d&apos;utiliser ton propre nom de domaine (exemple.com)</li>
                                                </ul>
                                                <p className="text-gray-300 mt-2">
                                                    On pourra voir ça dans un prochain tutoriel!
                                                </p>
                                        </div>
                                    </details>
                                </section>

                                <section id="test-pipeline">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        6. Tester le pipeline CI/CD complet
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Maintenant que tout est en place, il est temps de tester le <strong>pipeline complet de bout en bout</strong>{""}
                                        pour vérifier que chaque modification de code se déploie automatiquement en production !
                                    </p>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-white font-semibold mb-2">Ce que nous allons vérifier</p>
                                        <p className="text-gray-300 text-sm mb-2">
                                            Un pipeline CI/CD complet doit :
                                        </p>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm ml-4">
                                            <li>Se déclencher <strong>automatiquement</strong> dès qu&apos;on push du code sur GitHub</li>
                                            <li>Récupérer le code <strong>sans intervention manuelle</strong></li>
                                            <li>Builder et tester l&apos;application <strong>dans un environnement propre</strong></li>
                                            <li>Déployer la nouvelle version <strong>directement en production</strong></li>
                                            <li>Tout cela en <strong>quelques minutes</strong> seulement</li>
                                        </ol>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="test-pipeline1">
                                        Étape 1 : Faire une modification dans ton code
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Pour tester le pipeline, tu peux faire une modification visible dans l&apos;application.
                                        Une fois ta modification faite, fais un commit et push sur Github.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="test-pipeline2">
                                        Étape 2 : Observer le pipeline en action
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Dès que tu as push ton code, le pipeline se déclenche automatiquement ! Voici comment le suivre en temps réel :
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300  mb-6">
                                        <li>
                                            Va sur la console AWS et ouvre <strong>CodePipeline</strong>
                                        </li>
                                        <li>
                                            Clique sur ton pipeline
                                        </li>
                                        <li>
                                            Tu devrais voir une nouvelle exécution qui vient de démarrer : en haut de la page, un bandeau indique &quot;Execution in progress&quot;
                                        </li>
                                        <li>
                                            Observe les 3 étapes s&apos;exécuter l&apos;une après l&apos;autre :
                                            <ul className="list-none ml-6 mt-2 space-y-2">
                                                <li>
                                                    <strong className="text-gray-300">Source</strong> : CodePipeline détecte le nouveau commit et récupère le code depuis GitHub
                                                </li>
                                                <li>
                                                    <strong className="text-gray-300">Build</strong> : CodeBuild compile ton application et lance les tests
                                                </li>
                                                <li>
                                                    <strong className="text-gray-300">Deploy</strong> : Les fichiers sont uploadés sur S3
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6" id="test-pipeline3">
                                        Étape 3 : Vérifier le déploiement
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Une fois que toutes les étapes sont passées au vert, ton application est déployée !
                                        Vérifions que tout fonctionne :
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
                                        <li>
                                            <strong>Récupère l&apos;URL de ton site S3</strong>
                                            <ul className="list-none ml-6 mt-2 space-y-1 text-sm text-gray-300">
                                                <li>• Va dans S3 et ouvre ton bucket</li>
                                                <li>• Onglet &quot;Properties&quot; puis section &quot;Static website hosting&quot;</li>
                                                <li>• Copie l&apos;URL &quot;Bucket website endpoint&quot;</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Ouvre l&apos;URL dans ton navigateur</strong>
                                            <ul className="list-none ml-6 mt-2 space-y-1 text-sm text-gray-300">
                                                <li>• Force le rafraîchissement avec <kbd className="bg-neutral-800 px-2 py-0.5 rounded">Ctrl+F5</kbd> (Windows)
                                                    ou <kbd className="bg-neutral-800 px-2 py-0.5 rounded">Cmd+Shift+R</kbd> (Mac) pour bypasser le cache si tu l&apos;avais mis plus haut</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Vérifie que ta modification est visible</strong>
                                            <ul className="list-none ml-6 mt-2 space-y-1 text-sm text-gray-300">
                                                <li>• Le nouveau titre doit apparaître</li>
                                                <li>• Si tu ne vois pas la modification, attends 30 secondes et rafraîchis à nouveau</li>
                                            </ul>
                                        </li>
                                    </ol>
                                    <p className="text-gray-300 my-3">
                                        Si tu vois ta modification en ligne, c&apos;est que le pipeline complet fonctionne de bout en bout.
                                        À partir de maintenant, <strong>chaque commit sur la branche main sera automatiquement déployé en production</strong>{""}
                                        sans que tu aies à faire quoi que ce soit manuellement !
                                    </p>

                                    <details className="mt-6 mb-6 rounded bg-red-950/30 border border-red-900/50 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>Le pipeline a échoué ?</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown /></span>
                                        </summary>

                                        <div className="px-4 pb-6 space-y-6">
                                            <p className="text-gray-300 mb-3">
                                                En cas d&apos;échec, voici comment tu peux débugger :
                                            </p>
                                            <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                                <li>
                                                    <strong>Identifie quelle étape a échoué</strong> (Source, Build ou Deploy)
                                                </li>
                                                <li>
                                                    <strong>Clique sur &quot;Details&quot;</strong> pour voir les logs complets
                                                </li>
                                                <li>
                                                    <strong>Lis le message d&apos;erreur</strong> en partant de la fin (le dernier message est souvent le plus informatif)
                                                </li>
                                                <li>
                                                    <strong>Erreurs courantes :</strong>
                                                    <ul className="list-none ml-6 mt-2 space-y-1 text-sm text-gray-300">
                                                        <li>• <strong>Build failed :</strong> erreur de syntaxe dans ton code ou tests qui échouent</li>
                                                        <li>• <strong>npm ERR! :</strong> problème avec une dépendance. Essaie de mettre à jour ton package.json</li>
                                                        <li>• <strong>Access Denied :</strong> problème de permissions IAM ou bucket policy</li>
                                                        <li>• <strong>Timeout :</strong> le build prend trop de temps. Tu peux augmenter le timeout dans les paramètres de CodeBuild</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <strong>Corrige l&apos;erreur</strong> localement, puis recommit et push
                                                </li>
                                            </ol>
                                        </div>
                                    </details>
                                </section>

                                <section id="best-practices">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        7. Bonnes pratiques CI/CD sur AWS
                                    </h2>

                                    <p className="text-gray-300 mb-6">
                                        Maintenant que ton pipeline fonctionne, voici les <strong>bonnes pratiques essentielles</strong> {""}
                                        pour sécuriser, optimiser et professionnaliser ton CI/CD en production.
                                    </p>

                                    <div className="space-y-6">
                                        <details className="mt-6 mb-6 rounded bg-neutral-900 border group">
                                            <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                                <span> Sécurité : Principe du moindre privilège</span>
                                                <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown /></span>
                                            </summary>

                                            <div className="px-4 pb-6 space-y-6">
                                                <p className="text-gray-300 mb-3">
                                                    Les rôles IAM créés automatiquement par AWS ont parfois trop de permissions.
                                                    Applique le <strong>principe du moindre privilège</strong>, c&apos,est-à-dire que chaque service ne doit avoir
                                                    que les permissions strictement nécessaires.
                                                </p>
                                                <ul className="list-none space-y-2 text-gray-300 ml-4">
                                                    <li>
                                                        • <strong>CodeBuild</strong> doit pouvoir lire S3 (pour les artefacts) et écrire dans CloudWatch (pour les logs)
                                                    </li>
                                                    <li>
                                                        • <strong>CodePipeline</strong> doit pouvoir déclencher CodeBuild et écrire dans S3
                                                    </li>
                                                    <li>
                                                        • Évite les permissions <code className="text-blue-400">*:*</code> (accès complet à tout)
                                                    </li>
                                                </ul>
                                                <p className="text-gray-300 my-3">
                                                    Tu peux utiliser <strong>IAM Access Analyzer</strong> pour identifier les permissions non utilisées
                                                    et les supprimer progressivement.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="mt-6 mb-6 rounded bg-neutral-900 border group">
                                            <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                                <span> Gestion des secrets avec AWS Secrets Manager</span>
                                                <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown /></span>
                                            </summary>
                                            <div className="px-4 pb-6 space-y-6">
                                                <p className="text-gray-300 mb-3">
                                                    <strong>Ne mets jamais</strong> de clés API, mots de passe ou tokens directement dans ton code
                                                    ou dans les variables d&apos;environnement en clair ! <br/>
                                                    A la place, tu peux utiliser <strong>AWS Secrets Manager</strong>. Il te permet de stocker tes
                                                    variables secrètes dans <strong>Secrets Manager</strong> ou <strong>Systems Manager Parameter Store</strong>
                                                </p>
                                                <p className="text-gray-300 mb-3">
                                                    Tu peux ensuite récupérer dynamiquement ces variables dans ton fichier buildspec.yml :
                                                </p>
                                                <CodeBlock
                                                    language="yaml"
                                                    code={`version: 0.2

env:
  secrets-manager:
    DATABASE_PASSWORD: prod/myapp/db:password
    API_KEY: prod/myapp/api:key

phases:
  build:
    commands:
      - echo "Building with secure credentials..."
      - npm run build`}
                                                />
                                            </div>
                                        </details>

                                        <details className="mt-6 mb-6 rounded bg-neutral-900 border group">
                                            <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                                <span> Ajouter des tests automatiques</span>
                                                <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown /></span>
                                            </summary>
                                            <div className="px-4 pb-6 space-y-6">
                                                <p className="text-gray-300 mb-3">
                                                    Il est conseillé d&apos;ajouter une phase de tests dans ton pipeline pour éviter de
                                                    déployer du code cassé en production.<br/>
                                                    Voici un exemple de buildspec avec tests :
                                                </p>
                                                <CodeBlock
                                                    language="yaml"
                                                    code={`version: 0.2

phases:
  install:
    commands:
      - npm install
  
  pre_build:
    commands:
      - echo "Running linter..."
      - npm run lint
      - echo "Running unit tests..."
      - npm test -- --coverage
  
  build:
    commands:
      - echo "Building application..."
      - npm run build
  
  post_build:
    commands:
      - echo "Running integration tests..."
      - npm run test:integration

artifacts:
  files:
    - '**/*'
  base-directory: build`}
                                                />
                                            </div>
                                        </details>

                                        <details className="mt-6 mb-6 rounded bg-neutral-900 border group">
                                            <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                                <span> Surveillance avec CloudWatch</span>
                                                <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown /></span>
                                            </summary>
                                            <div className="px-4 pb-6 space-y-6">
                                                <p className="text-gray-300 mb-3">
                                                    Tu peux activer les logs CloudWatch pour surveiller tes builds et être alerté en cas de problème.
                                                    Voici la configuration recommandée :
                                                </p>
                                                <ul className="list-none space-y-2 text-gray-300 ml-4">
                                                        <li>
                                                            • <strong>CloudWatch Logs</strong> : active les logs pour chaque exécution de CodeBuild
                                                        </li>
                                                        <li>
                                                            • <strong>CloudWatch Metrics</strong> : surveille la durée des builds, le taux d&apos;échec, etc.
                                                        </li>
                                                        <li>
                                                            • <strong>CloudWatch Alarms</strong> : te permet de recevoir une notification si un build échoue
                                                        </li>
                                                </ul>

                                                <p className="text-gray-300">
                                                    Tu peux aussi créer un dashboard CloudWatch pour visualiser en un coup d&apos;oeil ton pipeline,
                                                    le nombre de déploiements par jour, et le temps moyen de build.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="mt-6 mb-6 rounded bg-neutral-900 border group">
                                            <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                                <span>  Optimiser les coûts</span>
                                                <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown /></span>
                                            </summary>
                                            <div className="px-4 pb-6 space-y-6">
                                                <p className="text-gray-300 mb-3">
                                                    CodePipeline et CodeBuild sont payants au-delà du Free Tier. Voici comment réduire les coûts :
                                                </p>

                                                    <ul className="list-none space-y-2 text-gray-300 ml-4">
                                                        <li>
                                                            • <strong>Cache les dépendances</strong> : tu peux utiliser le cache S3 de CodeBuild pour éviter de retélécharger npm packages à chaque build
                                                        </li>
                                                        <li>
                                                            • <strong>Ajuste la taille de l&apos;instance</strong> : par défaut CodeBuild utilise &quot;small&quot; (3 GB RAM), mais &quot;large&quot; coûte 4x plus cher
                                                        </li>
                                                        <li>
                                                            • <strong>Limite les builds inutiles</strong> : tu peux configurer des filtres Git pour ne builder que sur certains chemins. Tu peux par exemple ignorer les modifications du README.
                                                        </li>
                                                        <li>
                                                            • <strong>Nettoie les anciens artefacts</strong> : tu peux configurer une lifecycle policy sur ton bucket S3 pour supprimer les vieux builds après 30 jours ou plus.
                                                        </li>
                                                    </ul>
                                            </div>
                                        </details>
                                    </div>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        8. Conclusion
                                    </h2>

                                    <p className="text-gray-300">
                                        Tu as maintenant mis en place un pipeline CI/CD complet sur AWS avec CodePipeline
                                        et CodeBuild. À chaque push sur GitHub, ton application est automatiquement buildée
                                        et déployée.
                                    </p>

                                    <p className="text-gray-300 mt-4 mb-6">
                                        Ce workflow est une base solide utilisée en entreprise. Tu peux maintenant l’enrichir
                                        avec des tests avancés, des environnements de déploiement différents ou des déploiements de backend sur ECS ou EC2.
                                    </p>
                                    <Link
                                        href="/blog"
                                        className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                                    >
                                        ← Retour au blog
                                    </Link>
                                    <Link
                                        href="/blog/ci-cd"
                                        className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 ml-2 py-2 rounded-md transition"
                                    >
                                        ← Retour à la série
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
                            <Link href="#prerequisites" className="hover:text-white">
                                2. Prérequis et configuration
                            </Link>
                            <Link href="#codebuild" className="hover:text-white">
                                3. Création du projet AWS CodeBuild
                            </Link>
                                <Link href="#codebuild1" className="hover:text-white ml-2">
                                    3.1. Accéder à CodeBuild
                                </Link>
                                <Link href="#codebuild2" className="hover:text-white ml-2">
                                    3.2. Configuration du projet
                                </Link>
                                <Link href="#codebuild3" className="hover:text-white ml-2">
                                    3.3. Créer le fichier buildspec.yml
                                </Link>
                                <Link href="#codebuild4" className="hover:text-white ml-2">
                                    3.4. Tester ton build
                                </Link>
                            <Link href="#codepipeline" className="hover:text-white">
                                4. Création du pipeline avec AWS CodePipeline
                            </Link>
                                <Link href="#codepipeline1" className="hover:text-white ml-2">
                                4.1. Accéder à CodePipeline
                                </Link>
                                <Link href="#codepipeline2" className="hover:text-white ml-2">
                                    4.2. Configuration générale
                                </Link>
                                <Link href="#codepipeline3" className="hover:text-white ml-2">
                                    4.3. Configurer la source du code
                                </Link>
                                <Link href="#codepipeline4" className="hover:text-white ml-2">
                                    4.4. Configurer le build
                                </Link>
                                <Link href="#codepipeline5" className="hover:text-white ml-2">
                                    4.5. Ajouter le déploiement
                                </Link>
                                <Link href="#codepipeline6" className="hover:text-white ml-2">
                                    4.6. Vérification finale
                                </Link>
                            <Link href="#deploy" className="hover:text-white">
                                5. Déploiement automatique de l&apos;application
                            </Link>
                                <Link href="#deploy1" className="hover:text-white ml-2">
                                    5.1. Créer un bucket S3
                                </Link>
                                <Link href="#deploy2" className="hover:text-white ml-2">
                                    5.2.  Activer l&apos;hébergement de site web statique
                                </Link>
                                <Link href="#deploy3" className="hover:text-white ml-2">
                                    5.3. Configurer les permissions
                                </Link>
                                <Link href="#deploy4" className="hover:text-white ml-2">
                                    5.4. Ajouter le déploiement dans CodePipeline
                                </Link>
                            <Link href="#test-pipeline" className="hover:text-white">
                                6. Tester le pipeline CI/CD complet
                            </Link>
                                <Link href="#test-pipeline1" className="hover:text-white ml-2">
                                6.1. Modifie ton code
                            </Link>
                                <Link href="#test-pipeline2" className="hover:text-white ml-2">
                                6.2. Observe le pipeline en action
                            </Link>
                                <Link href="#test-pipeline3" className="hover:text-white ml-2">
                                6.3. Vérifie le déploiement
                            </Link>
                            <Link href="#best-practices" className="hover:text-white">
                                7. Bonnes pratiques CI/CD sur AWS
                            </Link>
                            <Link href="#conclusion" className="hover:text-white">
                                Conclusion
                            </Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </main>
    );
}