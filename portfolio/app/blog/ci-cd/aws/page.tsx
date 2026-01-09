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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 1 : Accéder à CodeBuild
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Connecte-toi à la console AWS (ton compte AWS) puis dans la barre de recherche en haut, tape <strong>&quot;CodeBuild&quot;</strong> et clique sur le service.
                                        Une fois sur la page CodeBuild, clique sur le bouton orange <span className="text-blue-400 font-semibold">Create project</span>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-8">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-8">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 1 : Accéder à CodePipeline
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Dans la console AWS, utilise la barre de recherche en haut et tape <strong>&quot;CodePipeline&quot;</strong>,
                                        puis clique sur le service. Clique ensuite sur le bouton orange <span className="text-blue-400 font-semibold">Create pipeline</span>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
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

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 3 : Configurer les permissions d&apos;accès public
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Pour que les visiteurs puissent accéder à ton site, il faut ajouter une <strong>bucket policy</strong> {""}
                                        qui autorise la lecture publique de tous les fichiers.
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300 text-sm mb-4">
                                        <li>
                                            Toujours dans ton bucket, va dans l'onglet <strong className="text-blue-400">Permissions</strong>
                                        </li>
                                        <li>
                                            Descends jusqu'à la section <strong className="text-blue-400">Bucket policy</strong>
                                        </li>
                                        <li>
                                            Clique sur <strong>Edit</strong>
                                        </li>
                                    </ol>

                                    <p className="text-gray-300 mb-3">
                                        Copie-colle cette policy dans l'éditeur (en remplaçant <code className="text-blue-400">my-app-bucket-2025</code> par le nom de TON bucket) :
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
      "Resource": "arn:aws:s3:::my-app-bucket-2025/*"
    }
  ]
}`}
                                    />

                                    <div className="bg-neutral-900 rounded-lg p-5 mt-4 mb-6">
                                        <h4 className="text-white font-semibold mb-3">📖 Décryptage de la bucket policy</h4>
                                        <ul className="list-none space-y-2 text-gray-300 text-sm">
                                            <li>
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-300">"Effect": "Allow"</code>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    On autorise l'action (par opposition à "Deny" qui bloquerait)
                                                </p>
                                            </li>
                                            <li>
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-300">"Principal": "*"</code>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    L'astérisque (*) signifie "tout le monde", c'est-à-dire n'importe qui sur Internet
                                                </p>
                                            </li>
                                            <li>
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-300">"Action": "s3:GetObject"</code>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    On autorise uniquement la lecture (GET) des fichiers, pas la modification ou la suppression
                                                </p>
                                            </li>
                                            <li>
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-300">"Resource": "arn:aws:s3:::my-app-bucket-2025/*"</code>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Cette règle s'applique à tous les fichiers (/*) dans le bucket spécifié.
                                                    Le <code className="text-blue-300">/*</code> à la fin est TRÈS important, ne l'oublie pas !
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-yellow-200 font-semibold mb-2">⚠️ N'oublie pas de modifier le nom du bucket !</p>
                                        <p className="text-gray-300 text-sm">
                                            Dans la policy, remplace <code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-300">my-app-bucket-2025</code>
                                            par le nom exact de TON bucket. Si tu oublies, la policy ne fonctionnera pas !
                                        </p>
                                    </div>

                                    <p className="text-gray-300 mb-6">
                                        Clique sur <span className="text-blue-400 font-semibold">Save changes</span>.
                                        Un avertissement de sécurité apparaîtra (c'est normal), confirme en cliquant à nouveau sur <strong>Save</strong>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 4 : Ajouter l'étape de déploiement dans CodePipeline
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Retourne maintenant sur <strong>CodePipeline</strong> pour ajouter l'étape de déploiement qui manquait.
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300 text-sm mb-6">
                                        <li>
                                            Va sur la console CodePipeline et clique sur le nom de ton pipeline (<code className="text-blue-300">my-app-pipeline</code>)
                                        </li>
                                        <li>
                                            Clique sur le bouton <strong className="text-blue-400">Edit</strong> en haut à droite
                                        </li>
                                        <li>
                                            En bas du pipeline (après l'étape "Build"), clique sur <strong className="text-blue-400">+ Add stage</strong>
                                        </li>
                                        <li>
                                            Donne un nom à cette étape : <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-300">Deploy</code>
                                        </li>
                                        <li>
                                            Clique sur <strong>Add stage</strong>
                                        </li>
                                        <li>
                                            Dans cette nouvelle étape, clique sur <strong className="text-blue-400">+ Add action group</strong>
                                        </li>
                                    </ol>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-semibold mb-3">Configuration de l'action de déploiement</h4>
                                        <ul className="list-none space-y-3 text-gray-300 text-sm">
                                            <li>
                                                <strong className="text-blue-400">Action name :</strong>{" "}
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-300">Deploy-to-S3</code>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Choisis un nom descriptif pour identifier facilement cette action
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Action provider :</strong> Sélectionne <strong>Amazon S3</strong>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    C'est le service qui va recevoir les fichiers de ton application
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Region :</strong> Laisse la région actuelle
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Normalement, c'est la même région que ton bucket S3
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Input artifacts :</strong> <strong>BuildArtifact</strong>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Ce sont les fichiers générés par CodeBuild (le dossier <code className="text-blue-300">build/</code> de ton application).
                                                    CodePipeline les a automatiquement sauvegardés et les transmet maintenant au déploiement.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Bucket :</strong> Sélectionne ton bucket (ex: <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-300">my-app-bucket-2025</code>)
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Tu devrais voir ton bucket apparaître dans la liste déroulante
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">S3 object key :</strong> Laisse <strong>vide</strong>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    En laissant vide, les fichiers seront déployés à la racine du bucket
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Extract file before deploy :</strong> <strong className="text-green-400">✓ Cocher cette case !</strong>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    <strong>TRÈS IMPORTANT :</strong> Cette option décompresse l'archive ZIP créée par CodeBuild
                                                    et déploie les fichiers individuellement (index.html, style.css, app.js...).
                                                    Si tu ne coches pas cette case, S3 recevra juste un fichier ZIP et ton site ne fonctionnera pas !
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Deployment path :</strong> Laisse vide (optionnel)
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Tu pourrais spécifier un sous-dossier si tu voulais déployer dans <code className="text-blue-300">bucket/v2/</code> par exemple
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">CannedACL :</strong> Sélectionne <strong>public-read</strong>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Cela rend automatiquement tous les fichiers uploadés accessibles publiquement
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Cache control :</strong> (optionnel) Tu peux mettre{" "}
                                                <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-300">max-age=3600</code>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Cela indique aux navigateurs de garder les fichiers en cache pendant 1 heure (3600 secondes),
                                                    ce qui améliore les performances
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        Clique sur <strong>Done</strong>, puis sur <span className="text-blue-400 font-semibold">Save</span> en haut de la page.
                                    </p>

                                    <p className="text-gray-300 mb-6">
                                        Une popup de confirmation apparaît → clique sur <strong>Save</strong> pour confirmer les modifications du pipeline.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        🎉 Premier déploiement automatique
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Dès que tu sauvegardes, CodePipeline va <strong>automatiquement relancer le pipeline complet</strong> avec
                                        la nouvelle étape de déploiement ! Tu vas voir :
                                    </p>

                                    <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm mb-6">
                                        <li><strong>Source</strong> : Récupération du code depuis GitHub ✅</li>
                                        <li><strong>Build</strong> : Compilation de l'application avec CodeBuild ✅</li>
                                        <li><strong>Deploy</strong> : Déploiement des fichiers sur S3 🚀</li>
                                    </ol>

                                    <p className="text-gray-300 mb-4">
                                        Attends que les trois étapes passent au vert. Cela peut prendre 2-5 minutes selon la taille de ton projet.
                                    </p>

                                    <div className="bg-green-950/30 border border-green-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-green-200 font-semibold mb-2">✅ Vérifier que le déploiement a fonctionné</p>
                                        <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
                                            <li>
                                                Retourne sur S3 et ouvre ton bucket
                                            </li>
                                            <li>
                                                Tu devrais voir tous les fichiers de ton application (index.html, CSS, JS, images...)
                                            </li>
                                            <li>
                                                Copie l'URL de ton site (dans Properties → Static website hosting → Bucket website endpoint)
                                            </li>
                                            <li>
                                                Ouvre cette URL dans ton navigateur
                                            </li>
                                            <li>
                                                <strong>🎊 Ton application est en ligne !</strong>
                                            </li>
                                        </ol>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        🧪 Tester le pipeline complet
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Pour vérifier que tout le pipeline fonctionne de bout en bout, fais une modification dans ton code :
                                    </p>

                                    <CodeBlock
                                        language="bash"
                                        code={`# Modifie un fichier de ton application
# Par exemple, change le titre dans index.html ou App.js

git add .
git commit -m "Test automatic deployment"
git push origin main`}
                                    />

                                    <p className="text-gray-300 mt-4 mb-4">
                                        Observe le pipeline dans CodePipeline : les 3 étapes vont s'exécuter automatiquement !
                                        Quelques minutes plus tard, rafraîchis ton site sur S3, et tu verras tes modifications en ligne. 🚀
                                    </p>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-200 font-semibold mb-2">💡 Optimisation : Utiliser CloudFront (optionnel)</p>
                                        <p className="text-gray-300 text-sm mb-2">
                                            L'URL S3 fonctionne, mais elle n'est pas idéale pour la production car :
                                        </p>
                                        <ul className="list-none space-y-1 text-gray-300 text-sm ml-4">
                                            <li>• Elle n'utilise pas HTTPS par défaut</li>
                                            <li>• Elle est longue et peu mémorable</li>
                                            <li>• Elle n'est pas optimisée pour la vitesse mondiale</li>
                                        </ul>
                                        <p className="text-gray-300 text-sm mt-2">
                                            Pour aller plus loin, tu peux ajouter <strong>CloudFront</strong> devant ton bucket S3 pour avoir :
                                        </p>
                                        <ul className="list-none space-y-1 text-gray-300 text-sm ml-4">
                                            <li>✅ HTTPS automatique</li>
                                            <li>✅ CDN mondial (ton site sera ultra-rapide partout dans le monde)</li>
                                            <li>✅ Possibilité d'utiliser ton propre nom de domaine (exemple.com)</li>
                                        </ul>
                                        <p className="text-gray-300 text-sm mt-2">
                                            On pourra voir ça dans un prochain tutoriel si ça t'intéresse !
                                        </p>
                                    </div>

                                    <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4">
                                        <p className="text-red-200 font-semibold mb-2">❌ Déploiement en échec ?</p>
                                        <p className="text-gray-300 text-sm mb-2">
                                            Voici les erreurs les plus fréquentes et leurs solutions :
                                        </p>
                                        <ul className="list-none space-y-2 text-gray-300 text-sm ml-4">
                                            <li>
                                                <strong>Access Denied</strong> → Vérifie que :
                                                <ul className="list-none ml-4 mt-1 space-y-1 text-xs text-gray-400">
                                                    <li>• Le bucket policy est correctement configuré</li>
                                                    <li>• Le nom du bucket dans la policy correspond exactement au nom réel</li>
                                                    <li>• Tu n'as pas oublié le《/*》 à la fin de l'ARN dans la policy</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Le site affiche un fichier ZIP au lieu de l'application</strong> →
                                                Tu as oublié de cocher "Extract file before deploy" dans la config de déploiement
                                            </li>
                                            <li>
                                                <strong>404 sur les sous-pages (React/Vue Router)</strong> →
                                                Dans la config Static website hosting, mets <code className="text-blue-300">index.html</code>
                                                comme Error document
                                            </li>
                                            <li>
                                                <strong>Le pipeline ne se déclenche pas automatiquement</strong> →
                                                Vérifie la connexion GitHub dans CodePipeline (Source stage)
                                            </li>
                                        </ul>
                                    </div>
                                </section>


                                <section id="test-pipeline1">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        6. Tester le pipeline CI/CD
                                    </h2>

                                    <p className="text-gray-300">
                                        Fais maintenant une modification dans ton projet (par exemple dans le README ou l’interface),
                                        puis pousse le code sur GitHub :
                                    </p>

                                    <CodeBlock
                                        language="bash"
                                        code={`git add .
git commit -m "test ci/cd pipeline"
git push origin main`}
                                    />

                                    <p className="text-gray-300 mt-4">
                                        Va dans AWS CodePipeline. Tu devrais voir ton pipeline se déclencher automatiquement :
                                        Source → Build → Deploy.
                                    </p>

                                    <p className="text-gray-300 mt-2">
                                        Si toutes les étapes sont en vert, ton CI/CD est fonctionnel 🎉
                                        Ouvre l’URL de ton site S3 pour voir la mise à jour en ligne.
                                    </p>
                                </section>

                                <section id="test-pipeline">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        6. Tester le pipeline CI/CD complet
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Maintenant que tout est en place, il est temps de tester le <strong>pipeline complet de bout en bout</strong>
                                        pour vérifier que chaque modification de code se déploie automatiquement en production !
                                    </p>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-200 font-semibold mb-2">🎯 Ce que nous allons vérifier</p>
                                        <p className="text-gray-300 text-sm mb-2">
                                            Un pipeline CI/CD complet doit :
                                        </p>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm ml-4">
                                            <li>Se déclencher <strong>automatiquement</strong> dès qu'on push du code sur GitHub</li>
                                            <li>Récupérer le code <strong>sans intervention manuelle</strong></li>
                                            <li>Builder et tester l'application <strong>dans un environnement propre</strong></li>
                                            <li>Déployer la nouvelle version <strong>directement en production</strong></li>
                                            <li>Tout cela en <strong>quelques minutes</strong> seulement</li>
                                        </ol>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 1 : Faire une modification dans ton code
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Pour tester le pipeline, nous allons faire une modification visible dans l'application.
                                        Choisis l'une de ces options selon ton projet :
                                    </p>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-semibold mb-3">Options de modification</h4>

                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-blue-400 font-semibold mb-2">Option 1 : Modification simple (HTML)</p>
                                                <p className="text-gray-300 text-sm mb-2">
                                                    Ouvre ton fichier <code className="text-blue-300">index.html</code> et modifie le titre :
                                                </p>
                                                <CodeBlock
                                                    language="html"
                                                    code={`<!-- Avant -->
<h1>Mon Application</h1>

<!-- Après -->
<h1>Mon Application - CI/CD Actif ! 🚀</h1>`}
                                                />
                                            </div>

                                            <div>
                                                <p className="text-blue-400 font-semibold mb-2">Option 2 : Application React</p>
                                                <p className="text-gray-300 text-sm mb-2">
                                                    Ouvre <code className="text-blue-300">src/App.js</code> et change le texte :
                                                </p>
                                                <CodeBlock
                                                    language="jsx"
                                                    code={`// Avant
<h1>Welcome to React</h1>

// Après
<h1>Welcome to React - Déployé automatiquement ! ✨</h1>`}
                                                />
                                            </div>

                                            <div>
                                                <p className="text-blue-400 font-semibold mb-2">Option 3 : Modification du README</p>
                                                <p className="text-gray-300 text-sm mb-2">
                                                    Si tu veux juste tester sans toucher à l'interface, modifie le <code className="text-blue-300">README.md</code> :
                                                </p>
                                                <CodeBlock
                                                    language="markdown"
                                                    code={`# Mon Projet

✅ Pipeline CI/CD configuré avec AWS CodePipeline et CodeBuild
Dernière mise à jour : ${new Date().toLocaleString('fr-FR')}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 2 : Commit et push sur GitHub
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Une fois ta modification faite, sauvegarde le fichier et exécute ces commandes dans ton terminal :
                                    </p>

                                    <CodeBlock
                                        language="bash"
                                        code={`# Ajoute tous les fichiers modifiés
git add .

# Crée un commit avec un message descriptif
git commit -m "test: vérification du pipeline CI/CD automatique"

# Envoie les modifications sur GitHub
git push origin main`}
                                    />

                                    <div className="bg-neutral-900 rounded-lg p-4 mt-4 mb-6">
                                        <p className="text-gray-400 text-sm mb-2">
                                            💡 <strong>Astuce :</strong> Utilise des messages de commit clairs et descriptifs.
                                            Exemples de bonnes pratiques :
                                        </p>
                                        <ul className="list-none space-y-1 text-gray-300 text-sm ml-4">
                                            <li>• <code className="text-blue-300">feat: ajout du bouton de connexion</code></li>
                                            <li>• <code className="text-blue-300">fix: correction du bug d'affichage mobile</code></li>
                                            <li>• <code className="text-blue-300">docs: mise à jour du README</code></li>
                                            <li>• <code className="text-blue-300">style: amélioration du design de la navbar</code></li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 3 : Observer le pipeline en action
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Dès que tu as push ton code, le pipeline se déclenche automatiquement ! Voici comment le suivre en temps réel :
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300 text-sm mb-6">
                                        <li>
                                            Va sur la console AWS et ouvre <strong>CodePipeline</strong>
                                        </li>
                                        <li>
                                            Clique sur ton pipeline (<code className="text-blue-300">my-app-pipeline</code>)
                                        </li>
                                        <li>
                                            Tu devrais voir une nouvelle exécution qui vient de démarrer (en haut de la page, un bandeau indique "Execution in progress")
                                        </li>
                                        <li>
                                            Observe les 3 étapes s'exécuter l'une après l'autre :
                                            <ul className="list-none ml-6 mt-2 space-y-2">
                                                <li>
                                                    <strong className="text-blue-400">Source</strong> : CodePipeline détecte le nouveau commit et récupère le code depuis GitHub
                                                    <p className="text-gray-400 text-xs mt-1">⏱️ Durée moyenne : 10-30 secondes</p>
                                                </li>
                                                <li>
                                                    <strong className="text-blue-400">Build</strong> : CodeBuild compile ton application et lance les tests
                                                    <p className="text-gray-400 text-xs mt-1">⏱️ Durée moyenne : 1-3 minutes (selon la taille du projet)</p>
                                                </li>
                                                <li>
                                                    <strong className="text-blue-400">Deploy</strong> : Les fichiers sont uploadés sur S3
                                                    <p className="text-gray-400 text-xs mt-1">⏱️ Durée moyenne : 20-60 secondes</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-semibold mb-3">🔍 Comprendre les statuts du pipeline</h4>
                                        <ul className="list-none space-y-2 text-gray-300 text-sm">
                                            <li>
                                                <span className="inline-block w-24 text-gray-400">⏳ In progress</span> : L'étape est en cours d'exécution
                                            </li>
                                            <li>
                                                <span className="inline-block w-24 text-green-400">✅ Succeeded</span> : L'étape s'est terminée avec succès
                                            </li>
                                            <li>
                                                <span className="inline-block w-24 text-red-400">❌ Failed</span> : Une erreur s'est produite (clique sur "Details" pour voir les logs)
                                            </li>
                                            <li>
                                                <span className="inline-block w-24 text-yellow-400">⚠️ Stopped</span> : L'exécution a été arrêtée manuellement
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-200 font-semibold mb-2">💡 Voir les logs détaillés</p>
                                        <p className="text-gray-300 text-sm">
                                            Pour voir exactement ce qui se passe pendant le build, clique sur <strong>Details</strong>
                                            dans l'étape Build. Tu seras redirigé vers CodeBuild où tu pourras voir :
                                        </p>
                                        <ul className="list-none space-y-1 text-gray-300 text-sm ml-4 mt-2">
                                            <li>• Les commandes exécutées en temps réel</li>
                                            <li>• Les dépendances installées</li>
                                            <li>• Les éventuelles erreurs ou warnings</li>
                                            <li>• La durée de chaque phase (install, build, post_build...)</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 4 : Vérifier le déploiement
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Une fois que toutes les étapes sont passées au vert (✅), ton application est déployée !
                                        Vérifions que tout fonctionne :
                                    </p>

                                    <ol className="list-decimal list-inside space-y-3 text-gray-300 text-sm mb-6">
                                        <li>
                                            <strong>Récupère l'URL de ton site S3</strong>
                                            <ul className="list-none ml-6 mt-2 space-y-1 text-xs text-gray-400">
                                                <li>• Va dans S3 → ouvre ton bucket</li>
                                                <li>• Onglet "Properties" → section "Static website hosting"</li>
                                                <li>• Copie l'URL "Bucket website endpoint"</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Ouvre l'URL dans ton navigateur</strong>
                                            <ul className="list-none ml-6 mt-2 space-y-1 text-xs text-gray-400">
                                                <li>• Force le rafraîchissement avec <kbd className="bg-neutral-800 px-2 py-0.5 rounded">Ctrl+F5</kbd> (Windows)
                                                    ou <kbd className="bg-neutral-800 px-2 py-0.5 rounded">Cmd+Shift+R</kbd> (Mac) pour bypasser le cache</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Vérifie que ta modification est visible</strong>
                                            <ul className="list-none ml-6 mt-2 space-y-1 text-xs text-gray-400">
                                                <li>• Le nouveau titre doit apparaître</li>
                                                <li>• Si tu ne vois pas la modification, attends 30 secondes et rafraîchis à nouveau (propagation DNS)</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <div className="bg-green-950/30 border border-green-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-green-200 font-semibold mb-2">🎉 Félicitations, ton CI/CD fonctionne parfaitement !</p>
                                        <p className="text-gray-300 text-sm">
                                            Si tu vois ta modification en ligne, c'est que le pipeline complet fonctionne de bout en bout.
                                            À partir de maintenant, <strong>chaque commit sur la branche main sera automatiquement déployé en production</strong>
                                            sans que tu aies à faire quoi que ce soit manuellement !
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        📊 Mesurer les performances du pipeline
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Sur la page de ton pipeline dans CodePipeline, tu peux voir des statistiques intéressantes :
                                    </p>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <ul className="list-none space-y-2 text-gray-300 text-sm">
                                            <li>
                                                <strong className="text-blue-400">Durée totale</strong> : De combien de temps tu as besoin du commit au déploiement ?
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Un bon pipeline devrait prendre entre 3 et 7 minutes pour un projet simple
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Taux de succès</strong> : Quel pourcentage de tes déploiements réussit ?
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Vise un taux supérieur à 95%. Si tu es en-dessous, c'est peut-être que tes tests ne sont pas assez robustes
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Historique des exécutions</strong> : Tu peux cliquer sur chaque exécution passée
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    Pratique pour voir quel commit a introduit un bug ou pour revenir en arrière si nécessaire
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4">
                                        <p className="text-red-200 font-semibold mb-2">❌ Le pipeline a échoué ?</p>
                                        <p className="text-gray-300 text-sm mb-3">
                                            Pas de panique ! Voici comment débugger :
                                        </p>
                                        <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
                                            <li>
                                                <strong>Identifie quelle étape a échoué</strong> (Source, Build ou Deploy)
                                            </li>
                                            <li>
                                                <strong>Clique sur "Details"</strong> pour voir les logs complets
                                            </li>
                                            <li>
                                                <strong>Lis le message d'erreur</strong> en partant de la fin (le dernier message est souvent le plus informatif)
                                            </li>
                                            <li>
                                                <strong>Erreurs courantes :</strong>
                                                <ul className="list-none ml-6 mt-2 space-y-1 text-xs text-gray-400">
                                                    <li>• <strong>Build failed :</strong> Erreur de syntaxe dans ton code ou tests qui échouent</li>
                                                    <li>• <strong>npm ERR! :</strong> Problème avec une dépendance (essaie de mettre à jour ton package.json)</li>
                                                    <li>• <strong>Access Denied :</strong> Problème de permissions IAM ou bucket policy</li>
                                                    <li>• <strong>Timeout :</strong> Le build prend trop de temps (augmente le timeout dans les settings CodeBuild)</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Corrige l'erreur</strong> localement, puis recommit et push
                                            </li>
                                        </ol>
                                    </div>
                                </section>

                                <section id="best-practices1">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        7. Bonnes pratiques CI/CD sur AWS
                                    </h2>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Utilise des <span className="text-blue-400">rôles IAM</span> avec le minimum de permissions.</li>
                                        <li>Stocke les secrets avec <span className="text-blue-400">AWS Secrets Manager</span>.</li>
                                        <li>Ajoute une phase <span className="text-blue-400">test</span> dans le buildspec.yml.</li>
                                        <li>Surveille les logs via <span className="text-blue-400">CloudWatch</span>.</li>
                                        <li>Versionne ton pipeline comme ton code.</li>
                                    </ul>
                                </section>

                                <section id="best-practices">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        7. Bonnes pratiques CI/CD sur AWS
                                    </h2>

                                    <p className="text-gray-300 mb-6">
                                        Maintenant que ton pipeline fonctionne, voici les <strong>bonnes pratiques essentielles</strong>
                                        pour sécuriser, optimiser et professionnaliser ton CI/CD en production.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <span className="text-2xl mr-2">🔐</span>
                                                Sécurité : Principe du moindre privilège
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-3">
                                                Les rôles IAM créés automatiquement par AWS ont parfois trop de permissions.
                                                Applique le <strong>principe du moindre privilège</strong> : chaque service ne doit avoir
                                                que les permissions strictement nécessaires.
                                            </p>

                                            <div className="bg-neutral-800 rounded p-4 mb-3">
                                                <p className="text-blue-400 font-semibold text-sm mb-2">✅ Ce qu'il faut faire :</p>
                                                <ul className="list-none space-y-2 text-gray-300 text-xs ml-4">
                                                    <li>
                                                        • <strong>CodeBuild</strong> doit pouvoir lire S3 (pour les artefacts) et écrire dans CloudWatch (pour les logs)
                                                    </li>
                                                    <li>
                                                        • <strong>CodePipeline</strong> doit pouvoir déclencher CodeBuild et écrire dans S3
                                                    </li>
                                                    <li>
                                                        • Évite les permissions <code className="text-red-300">*:*</code> (accès complet à tout)
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-950/30 border border-blue-900/50 rounded p-3">
                                                <p className="text-blue-200 text-xs font-semibold mb-1">💡 Audit régulier</p>
                                                <p className="text-gray-300 text-xs">
                                                    Utilise <strong>IAM Access Analyzer</strong> pour identifier les permissions non utilisées
                                                    et les supprimer progressivement.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <span className="text-2xl mr-2">🔑</span>
                                                Gestion des secrets avec AWS Secrets Manager
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-3">
                                                <strong>Ne jamais</strong> mettre de clés API, mots de passe ou tokens directement dans ton code
                                                ou dans les variables d'environnement en clair !
                                            </p>

                                            <div className="bg-neutral-800 rounded p-4 mb-3">
                                                <p className="text-blue-400 font-semibold text-sm mb-2">✅ Utilise AWS Secrets Manager :</p>
                                                <ol className="list-decimal list-inside space-y-2 text-gray-300 text-xs ml-4">
                                                    <li>
                                                        Stocke tes secrets dans <strong>Secrets Manager</strong> ou <strong>Systems Manager Parameter Store</strong>
                                                    </li>
                                                    <li>
                                                        Dans ton buildspec.yml, récupère les secrets dynamiquement :
                                                    </li>
                                                </ol>
                                            </div>

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

                                            <div className="bg-yellow-950/30 border border-yellow-900/50 rounded p-3 mt-3">
                                                <p className="text-yellow-200 text-xs font-semibold mb-1">⚠️ Attention</p>
                                                <p className="text-gray-300 text-xs">
                                                    N'affiche jamais les secrets dans les logs avec <code className="text-blue-300">echo $SECRET</code> !
                                                    Les logs CodeBuild sont visibles par tous ceux qui ont accès au projet.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <span className="text-2xl mr-2">🧪</span>
                                                Ajouter des tests automatiques
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-3">
                                                Un pipeline sans tests, c'est comme conduire sans freins : ça finira mal !
                                                Ajoute une phase de tests pour <strong>éviter de déployer du code cassé en production</strong>.
                                            </p>

                                            <div className="bg-neutral-800 rounded p-4 mb-3">
                                                <p className="text-blue-400 font-semibold text-sm mb-2">✅ Exemple de buildspec avec tests :</p>
                                            </div>

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

                                            <div className="bg-green-950/30 border border-green-900/50 rounded p-3 mt-3">
                                                <p className="text-green-200 text-xs font-semibold mb-1">✨ Aller plus loin</p>
                                                <p className="text-gray-300 text-xs">
                                                    Ajoute des tests de performance (Lighthouse CI), des tests de sécurité (npm audit),
                                                    ou des tests end-to-end (Playwright, Cypress) pour un pipeline encore plus robuste !
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <span className="text-2xl mr-2">📊</span>
                                                Surveillance avec CloudWatch
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-3">
                                                Active les logs CloudWatch pour surveiller tes builds et être alerté en cas de problème.
                                            </p>

                                            <div className="bg-neutral-800 rounded p-4 mb-3">
                                                <p className="text-blue-400 font-semibold text-sm mb-2">✅ Configuration recommandée :</p>
                                                <ul className="list-none space-y-2 text-gray-300 text-xs ml-4">
                                                    <li>
                                                        • <strong>CloudWatch Logs</strong> : Active les logs pour chaque exécution de CodeBuild
                                                    </li>
                                                    <li>
                                                        • <strong>CloudWatch Metrics</strong> : Surveille la durée des builds, le taux d'échec, etc.
                                                    </li>
                                                    <li>
                                                        • <strong>CloudWatch Alarms</strong> : Reçois une notification (email/SMS) si un build échoue
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-950/30 border border-blue-900/50 rounded p-3">
                                                <p className="text-blue-200 text-xs font-semibold mb-1">💡 Dashboard personnalisé</p>
                                                <p className="text-gray-300 text-xs">
                                                    Crée un dashboard CloudWatch pour visualiser en un coup d'œil :
                                                    la santé de ton pipeline, le nombre de déploiements par jour, et le temps moyen de build.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <span className="text-2xl mr-2">📝</span>
                                                Versionner ton infrastructure as Code
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-3">
                                                Ton pipeline lui-même devrait être versionné et déployé comme du code !
                                            </p>

                                            <div className="bg-neutral-800 rounded p-4 mb-3">
                                                <p className="text-blue-400 font-semibold text-sm mb-2">✅ Utilise CloudFormation ou Terraform :</p>
                                                <ul className="list-none space-y-2 text-gray-300 text-xs ml-4">
                                                    <li>
                                                        • Définis ton pipeline CodePipeline en YAML/Terraform au lieu de le créer manuellement
                                                    </li>
                                                    <li>
                                                        • Stocke cette configuration dans Git avec le reste de ton code
                                                    </li>
                                                    <li>
                                                        • Avantages : reproductibilité, historique des changements, rollback facile
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-yellow-950/30 border border-yellow-900/50 rounded p-3">
                                                <p className="text-yellow-200 text-xs font-semibold mb-1">📚 Ressource utile</p>
                                                <p className="text-gray-300 text-xs">
                                                    AWS propose <strong>AWS CDK</strong> (Cloud Development Kit) qui permet de définir
                                                    l'infrastructure en TypeScript/Python au lieu de YAML. Plus moderne et plus maintenable !
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <span className="text-2xl mr-2">🌍</span>
                                                Environnements multiples (Dev, Staging, Prod)
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-3">
                                                Ne déploie jamais directement en production ! Utilise plusieurs environnements.
                                            </p>

                                            <div className="bg-neutral-800 rounded p-4 mb-3">
                                                <p className="text-blue-400 font-semibold text-sm mb-2">✅ Architecture recommandée :</p>
                                                <ul className="list-none space-y-2 text-gray-300 text-xs ml-4">
                                                    <li>
                                                        • <strong>Branche dev</strong> → déploie automatiquement sur environnement de développement
                                                    </li>
                                                    <li>
                                                        • <strong>Branche staging</strong> → déploie sur un environnement de test (copie de prod)
                                                    </li>
                                                    <li>
                                                        • <strong>Branche main</strong> → déploie en production <strong>avec une approbation manuelle</strong>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-blue-950/30 border border-blue-900/50 rounded p-3">
                                                <p className="text-blue-200 text-xs font-semibold mb-1">💡 Approbation manuelle</p>
                                                <p className="text-gray-300 text-xs">
                                                    Dans CodePipeline, tu peux ajouter une étape <strong>Manual Approval</strong> avant le déploiement prod.
                                                    Le pipeline attend qu'un humain vérifie et approuve avant de continuer.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-neutral-900 rounded-lg p-5">
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                <span className="text-2xl mr-2">💰</span>
                                                Optimiser les coûts
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-3">
                                                CodePipeline et CodeBuild sont payants au-delà du Free Tier. Voici comment réduire les coûts :
                                            </p>

                                            <div className="bg-neutral-800 rounded p-4">
                                                <ul className="list-none space-y-2 text-gray-300 text-xs ml-4">
                                                    <li>
                                                        • <strong>Cache les dépendances</strong> : Utilise le cache S3 de CodeBuild pour éviter de retélécharger npm packages à chaque build
                                                    </li>
                                                    <li>
                                                        • <strong>Ajuste la taille de l'instance</strong> : Par défaut CodeBuild utilise "small" (3 GB RAM), mais "large" coûte 4x plus cher
                                                    </li>
                                                    <li>
                                                        • <strong>Limite les builds inutiles</strong> : Configure des filtres Git pour ne builder que sur certains chemins (ex: ignorer les modifications du README)
                                                    </li>
                                                    <li>
                                                        • <strong>Nettoie les anciens artefacts</strong> : Configure une lifecycle policy sur ton bucket S3 pour supprimer les vieux builds après 30 jours
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-green-950/30 border border-green-900/50 rounded-lg p-4 mt-6">
                                        <p className="text-green-200 font-semibold mb-2">🎓 Récapitulatif des bonnes pratiques</p>
                                        <ul className="list-none space-y-1 text-gray-300 text-sm">
                                            <li>✅ Principe du moindre privilège pour les rôles IAM</li>
                                            <li>✅ Secrets stockés dans AWS Secrets Manager</li>
                                            <li>✅ Tests automatiques à chaque build (unit, integration, e2e)</li>
                                            <li>✅ Logs et monitoring avec CloudWatch</li>
                                            <li>✅ Infrastructure as Code (CloudFormation/Terraform/CDK)</li>
                                            <li>✅ Environnements multiples (dev, staging, prod)</li>
                                            <li>✅ Approbation manuelle avant déploiement en production</li>
                                            <li>✅ Optimisation des coûts (cache, sizing, lifecycle policies)</li>
                                        </ul>
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

                                    <p className="text-gray-300 mt-4">
                                        Ce workflow est une base solide utilisée en entreprise. Tu peux maintenant l’enrichir
                                        avec des tests avancés, des environnements (dev/staging/prod) ou des déploiements sur
                                        ECS, EC2 ou Elastic Beanstalk.
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
                            <Link href="#setup" className="hover:text-white">
                                2. Configuration
                            </Link>
                            <Link href="#composant" className="hover:text-white">
                                3. Créer un bouton PayPal
                            </Link>
                            <Link href="#exemple" className="hover:text-white">
                                4. Exemple d&apos;utilisation
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