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

                                <section id="codepipeline1">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        4. Création du pipeline avec AWS CodePipeline
                                    </h2>

                                    <p className="text-gray-300">
                                        Maintenant que notre projet <span className="text-blue-400">CodeBuild</span> est prêt,
                                        nous allons créer le pipeline CI/CD avec <span className="text-blue-400">AWS CodePipeline</span>.
                                        CodePipeline va orchestrer toutes les étapes : récupération du code, build et déploiement.
                                    </p>

                                    <p className="text-gray-300 mt-4">
                                        Dans la console AWS, va dans <span className="text-blue-400">CodePipeline → Create pipeline</span>.
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                        <li><strong className="text-white">Pipeline name :</strong> my-app-pipeline</li>
                                        <li><strong className="text-white">Source provider :</strong> GitHub (version 2)</li>
                                        <li><strong className="text-white">Repository :</strong> ton repository</li>
                                        <li><strong className="text-white">Branch :</strong> main</li>
                                        <li><strong className="text-white">Build provider :</strong> AWS CodeBuild</li>
                                        <li><strong className="text-white">Project :</strong> my-app-build</li>
                                    </ul>

                                    <p className="text-gray-300 mt-4">
                                        À ce stade, ton pipeline récupère automatiquement le code et lance le build à chaque push.
                                        Nous allons maintenant ajouter l’étape de déploiement.
                                    </p>
                                </section>

                                <section id="codepipeline">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        4. Création du pipeline avec AWS CodePipeline
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Maintenant que notre projet <span className="text-blue-400">CodeBuild</span> est configuré et testé,
                                        nous allons créer le <strong>pipeline CI/CD complet</strong> avec <span className="text-blue-400">AWS CodePipeline</span>.
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
                                        <ul className="list-none space-y-3 text-gray-300">
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
                                        <ul className="list-none space-y-2 text-gray-300">
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
                                        <ul className="list-none space-y-4 text-gray-300">
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
                                                    ton application (celui où tu as créé le fichier <code className="text-blue-300">buildspec.yml</code>).
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Branch name :</strong> <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-400">main</code>
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    Sélectionne la branche à surveiller. En général, c&apos;est <code className="text-blue-300">main</code> ou
                                                    <code className="text-blue-300">master</code>. Chaque fois que tu feras un push sur cette branche,
                                                    le pipeline se déclenchera automatiquement.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-white font-semibold">Output artifact format :</strong> Laisse <strong>CodePipeline default</strong>
                                                <p className="text-white text-sm mt-1 ml-4">
                                                    C&apos;est le format utilisé pour passer le code source à l&apos;étape suivante (CodeBuild).
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-yellow-200 font-semibold mb-2">🔐 Sécurité et permissions</p>
                                        <p className="text-gray-300 text-sm">
                                            Quand tu autorises AWS à accéder à GitHub, tu crées une connexion sécurisée et chiffrée.
                                            AWS ne stocke <strong>jamais</strong> ton mot de passe GitHub. La connexion utilise OAuth,
                                            un protocole standard et sûr. Tu peux révoquer cet accès à tout moment depuis les paramètres
                                            de ton compte GitHub → Settings → Applications → AWS Connector for GitHub.
                                        </p>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        Clique sur <span className="text-blue-400 font-semibold">Next</span> pour passer à l'étape suivante.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 4 : Add build stage (Configurer le build)
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Cette étape va <strong>lier ton projet CodeBuild au pipeline</strong>. C'est ici que le code sera compilé et testé.
                                    </p>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h4 className="text-white font-semibold mb-3">Configuration du build</h4>
                                        <ul className="list-none space-y-3 text-gray-300 text-sm">
                                            <li>
                                                <strong className="text-blue-400">Build provider :</strong> Sélectionne <strong>AWS CodeBuild</strong>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    C'est le seul choix possible si tu utilises les services natifs AWS.
                                                    (Tu pourrais aussi utiliser Jenkins si tu avais un serveur Jenkins configuré, mais ce n'est pas notre cas ici).
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Region :</strong> Laisse la région actuelle (ex: <code className="text-blue-300">eu-west-1</code>)
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    La région AWS où se trouve ton projet CodeBuild. Par défaut, c'est la même région que ton pipeline.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Project name :</strong> Sélectionne <code className="bg-neutral-800 px-2 py-0.5 rounded text-blue-300">my-app-build</code>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    C'est le projet CodeBuild que tu as créé dans la section précédente.
                                                    Tu devrais le voir apparaître dans la liste déroulante.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-blue-400">Build type :</strong> Laisse <strong>Single build</strong>
                                                <p className="text-gray-400 text-xs mt-1 ml-4">
                                                    "Single build" signifie qu'un seul build s'exécute à la fois.
                                                    Tu pourrais aussi choisir "Batch build" pour exécuter plusieurs builds en parallèle (utile pour tester sur plusieurs environnements),
                                                    mais ce n'est pas nécessaire pour commencer.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-200 font-semibold mb-2">💡 Que se passe-t-il à cette étape ?</p>
                                        <p className="text-gray-300 text-sm">
                                            Quand le pipeline arrive à cette étape, il va :
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-300 text-sm mt-2 space-y-1 ml-4">
                                            <li>Prendre le code source récupéré depuis GitHub (étape précédente)</li>
                                            <li>Le transmettre à CodeBuild</li>
                                            <li>CodeBuild exécute les commandes définies dans ton <code className="text-blue-300">buildspec.yml</code></li>
                                            <li>Si le build réussit, les artefacts générés (le dossier <code className="text-blue-300">build/</code>) sont sauvegardés</li>
                                            <li>Ces artefacts sont transmis à l'étape suivante (le déploiement)</li>
                                        </ol>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        Clique sur <span className="text-blue-400 font-semibold">Next</span> pour passer au déploiement.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 5 : Add deploy stage (À configurer plus tard)
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Pour l'instant, nous allons <strong>sauter l'étape de déploiement</strong>.
                                        Nous la configurerons dans la section suivante du tutoriel.
                                    </p>

                                    <div className="bg-neutral-900 rounded-lg p-4 mb-6">
                                        <p className="text-gray-300 text-sm">
                                            Clique sur <span className="text-blue-400 font-semibold">Skip deploy stage</span> →
                                            une popup de confirmation apparaît → clique sur <strong>Skip</strong>.
                                        </p>
                                    </div>

                                    <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-yellow-200 font-semibold mb-2">⚠️ Pourquoi sauter le déploiement ?</p>
                                        <p className="text-gray-300 text-sm">
                                            Avant de déployer, il faut d'abord choisir <strong>où</strong> déployer ton application :
                                            sur S3 (pour un site statique), sur EC2 (une machine virtuelle), sur ECS (conteneurs),
                                            ou sur Elastic Beanstalk (plateforme managée). Chacune de ces options nécessite une configuration
                                            spécifique. Nous verrons ça dans la prochaine section !
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 6 : Review (Vérification finale)
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        AWS te montre un récapitulatif de toute la configuration de ton pipeline. Vérifie que :
                                    </p>

                                    <ul className="list-none space-y-2 text-gray-300 text-sm ml-4">
                                        <li>✓ Le nom du pipeline est correct</li>
                                        <li>✓ La source est bien ton repository GitHub sur la bonne branche</li>
                                        <li>✓ Le build provider est bien AWS CodeBuild avec le bon projet</li>
                                        <li>✓ Le deploy stage est marqué comme "Skipped" (normal pour l'instant)</li>
                                    </ul>

                                    <p className="text-gray-300 mt-4 mb-4">
                                        Si tout est bon, clique sur <span className="text-blue-400 font-semibold">Create pipeline</span>.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        🎉 Premier déclenchement automatique
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Dès que tu cliques sur "Create pipeline", AWS va <strong>automatiquement lancer le pipeline pour la première fois</strong> !
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

                                    <div className="bg-green-950/30 border border-green-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-green-200 font-semibold mb-2">✅ Pipeline créé avec succès !</p>
                                        <p className="text-gray-300 text-sm">
                                            Si les deux étapes (Source et Build) sont passées au vert, <strong>félicitations</strong> !
                                            Ton pipeline CI/CD est maintenant fonctionnel. À partir de maintenant, chaque fois que tu feras un
                                            <code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-300 mx-1">git push</code> sur la branche
                                            <code className="bg-neutral-800 px-1 py-0.5 rounded text-blue-300 mx-1">main</code>,
                                            le pipeline se déclenchera automatiquement pour builder ton code.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        🧪 Tester le déclenchement automatique
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Pour vérifier que tout fonctionne bien, fais une petite modification dans ton code et push-la sur GitHub :
                                    </p>

                                    <CodeBlock
                                        language="bash"
                                        code={`# Modifie un fichier (par exemple README.md)
echo "Test pipeline" >> README.md

# Commit et push
git add README.md
git commit -m "Test automatic pipeline trigger"
git push origin main`}
                                    />

                                    <p className="text-gray-300 mt-4 mb-4">
                                        Retourne sur la page de ton pipeline dans AWS. En quelques secondes, tu devrais voir
                                        un nouveau déclenchement apparaître automatiquement ! 🚀
                                    </p>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4">
                                        <p className="text-blue-200 font-semibold mb-2">📊 Suivre l'historique de tes builds</p>
                                        <p className="text-gray-300 text-sm">
                                            Sur la page de ton pipeline, tu peux voir l'historique complet de toutes les exécutions :
                                            quand elles ont eu lieu, combien de temps elles ont pris, et si elles ont réussi ou échoué.
                                            C'est très utile pour comprendre quand un bug a été introduit ou pour auditer les déploiements.
                                        </p>
                                    </div>
                                </section>

                                <section id="deploy">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        5. Déploiement automatique de l’application
                                    </h2>

                                    <p className="text-gray-300">
                                        Pour le déploiement, nous allons utiliser un <span className="text-blue-400">bucket S3</span>
                                        afin d’héberger notre application front-end en mode statique.
                                    </p>

                                    <p className="text-gray-300 mt-4">
                                        Crée un bucket S3, puis active :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                        <li>Static website hosting</li>
                                        <li>Les permissions publiques (ou CloudFront si tu veux aller plus loin)</li>
                                    </ul>

                                    <p className="text-gray-300 mt-4">
                                        Dans CodePipeline, ajoute une étape <span className="text-blue-400">Deploy</span>
                                        et sélectionne :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                        <li><strong className="text-white">Deploy provider :</strong> Amazon S3</li>
                                        <li><strong className="text-white">Bucket :</strong> my-app-bucket</li>
                                        <li><strong className="text-white">Extract file :</strong> true</li>
                                    </ul>

                                    <p className="text-gray-300 mt-4">
                                        À chaque push sur GitHub, ton application sera automatiquement déployée.
                                    </p>
                                </section>

                                <section id="test-pipeline">
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

                                <section id="best-practices">
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