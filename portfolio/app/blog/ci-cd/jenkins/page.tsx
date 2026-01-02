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
                        CI/CD avec Jenkins
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
                                        1. Introduction à Jenkins
                                    </h2>

                                    <p className="text-gray-300">
                                        Jenkins est l’un des outils historiques et les plus populaires du monde
                                        <strong> CI/CD</strong>. Contrairement à GitLab ou Github, Jenkins est une
                                        application indépendante que l’on installe et configure soi-même.
                                    </p>

                                    <p className="text-gray-300 mt-3">
                                        Il permet d’automatiser toutes les étapes du cycle de vie d’un projet :
                                        <strong> build</strong>, <strong>tests</strong> et <strong>déploiement</strong>,
                                        via des pipelines décrits sous forme de code.
                                    </p>

                                    <p className="text-gray-300 mt-4 font-semibold">
                                        Dans ce tutoriel, nous allons apprendre à :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                        <li>Créer un pipeline Jenkins simple</li>
                                        <li>Structurer un pipeline avec plusieurs stages</li>
                                        <li>Gérer des variables et des secrets</li>
                                        <li>Comprendre l’interface Jenkins</li>
                                    </ul>
                                </section>

                                <section id="prerequis">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        2. Prérequis et installation
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Avant de créer un pipeline Jenkins, quelques prérequis sont nécessaires.
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <strong>Java 11 ou supérieur</strong> installé sur votre machine ou sur le serveur
                                            Jenkins (Jenkins est une application Java).
                                        </li>
                                        <li>
                                            Un dépôt Git hébergé sur{" "}
                                            <a
                                                href="https://github.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400"
                                            >
                                                GitHub
                                            </a>{" "}
                                            ou{" "}
                                            <a
                                                href="https://gitlab.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400"
                                            >
                                                GitLab
                                            </a>.
                                        </li>
                                        <li>
                                            Un projet simple à automatiser (par exemple une application HTML/CSS/JS ou
                                            un petit projet Node.js).
                                        </li>
                                    </ul>
                                    <p className="text-gray-300 mt-4">
                                        Jenkins peut être installé de plusieurs façons, selon votre environnement
                                        et votre objectif (apprentissage, projet personnel ou usage professionnel).
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-3">
                                        <li>
                                            <strong>Installation locale</strong><br />
                                            Jenkins est installé directement sur votre machine (Windows, macOS ou Linux).
                                            <br />
                                            👉 Cette option est adaptée pour découvrir Jenkins rapidement ou faire des
                                            tests ponctuels, mais elle dépend fortement de la configuration de votre
                                            poste (Java, ports, permissions).
                                        </li>

                                        <li>
                                            <strong>Installation via Docker (recommandée)</strong><br />
                                            Jenkins est exécuté dans un conteneur Docker prêt à l’emploi.
                                            <br />
                                            👉 C’est la solution <strong>la plus simple et la plus fiable</strong> pour
                                            apprendre et travailler proprement :
                                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                                                <li>Aucune installation complexe sur la machine hôte</li>
                                                <li>Environnement isolé et reproductible</li>
                                                <li>Démarrage et arrêt rapides</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <strong>Installation sur un serveur distant</strong><br />
                                            Jenkins est installé sur un serveur dédié (VPS, machine cloud, serveur
                                            d’entreprise).
                                            <br />
                                            👉 Cette approche est principalement utilisée en <strong>production</strong>,
                                            lorsque plusieurs développeurs partagent la même instance Jenkins et que
                                            les pipelines doivent tourner en continu.
                                        </li>
                                    </ul>

                                    <p className="text-gray-300 mt-4 italic">
                                        Dans la suite de ce tutoriel, nous utiliserons <strong>Jenkins avec Docker</strong>,
                                        afin de garantir une configuration simple, reproductible et accessible à tous.
                                    </p>

                                    <p className="text-gray-300 mt-4">
                                        Pour installer Jenkins sur Docker, vous pouvez utiliser le tutoriel disponible ici {""}
                                        <a href="/blog/docker" target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-blue-400">
                                            <strong>Installer Jenkins sur Docker</strong></a>
                                    </p>



                                    {/* 📸 Screenshot : écran d’accueil Jenkins après installation */}
                                </section>

                                <section id="pipeline">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        3. Premier pipeline Jenkins
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Commençons par un pipeline minimal afin de comprendre la structure
                                        d’un <strong>Jenkinsfile</strong>.
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Jenkins utilise un fichier nommé{" "}
                                        <code className="text-blue-400">Jenkinsfile</code> à la racine du projet.
                                    </p>

                                    <CodeBlock
                                        language="groovy"
                                        code={`pipeline {
  agent any

  stages {
    stage('Hello') {
      steps {
        echo 'Hello Jenkins!'
      }
    }
  }
}`}
                                    />

                                    <p className="text-gray-300 mt-3">
                                        Ce pipeline :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                        <li>Utilise n’importe quel agent disponible</li>
                                        <li>Contient un seul stage</li>
                                        <li>Affiche un message dans les logs</li>
                                    </ul>

                                    {/* 📸 Screenshot : pipeline Jenkins réussi (pastille verte) */}
                                </section>

                                <section id="advanced">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        4. Pipeline multi-stage avec Jenkins
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Dans un projet réel, un pipeline est découpé en plusieurs étapes afin de
                                        séparer les responsabilités.
                                    </p>

                                    <p className="text-gray-300 font-semibold mb-3">
                                        Ordre d’exécution :
                                        <code className="text-blue-400 ml-2">build</code> →
                                        <code className="text-blue-400 ml-1">test</code> →
                                        <code className="text-blue-400 ml-1">deploy</code>
                                    </p>

                                    <CodeBlock
                                        language="groovy"
                                        code={`pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Build du projet'
      }
    }

    stage('Test') {
      steps {
        echo 'Exécution des tests'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Déploiement de l’application'
      }
    }
  }
}`}
                                    />

                                    {/* 📸 Screenshot : vue stages Jenkins */}
                                </section>

                                <section id="variables">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        5. Variables et secrets Jenkins
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Comme pour GitLab CI/CD, il est fortement déconseillé de stocker des secrets
                                        directement dans le code.
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Jenkins permet de stocker des secrets via{" "}
                                        <strong>Manage Jenkins → Credentials</strong>.
                                    </p>

                                    <CodeBlock
                                        language="groovy"
                                        code={`environment {
  API_TOKEN = credentials('my-api-token')
}`}
                                    />

                                    {/* 📸 Screenshot : Jenkins Credentials */}
                                </section>

                                <section id="debug">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        6. Dépannage et bonnes pratiques
                                    </h2>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Consulter les logs de build</li>
                                        <li>Tester les étapes une par une</li>
                                        <li>Utiliser des pipelines simples et lisibles</li>
                                        <li>Versionner systématiquement le Jenkinsfile</li>
                                    </ul>

                                    {/* 📸 Screenshot : logs Jenkins */}
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        7. Conclusion
                                    </h2>

                                    <p className="text-gray-300">
                                        Jenkins reste une solution extrêmement puissante pour mettre en place
                                        des pipelines CI/CD sur mesure.
                                    </p>

                                    <p className="text-gray-300 mt-3">
                                        Après GitLab CI/CD et Jenkins, vous disposez désormais d’une vision claire
                                        des deux grandes approches du CI/CD moderne.
                                    </p>

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