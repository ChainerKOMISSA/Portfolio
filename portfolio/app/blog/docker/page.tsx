"use client";
import Link from "next/link";
import {IoIosArrowRoundBack} from "react-icons/io";

export default function BlogPage() {
    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link
                href="/blog"
                className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"
            >
                <IoIosArrowRoundBack />
            </Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">Installer Jenkins sur Docker</h1>
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
                            {/* Content */}
                            <div className="w-full space-y-16">
                                <section id="intro">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        1. Introduction
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Jenkins est l’un des outils de <strong>CI/CD</strong> les plus utilisés au monde.
                                        Il permet d’automatiser des tâches clés comme :
                                        les tests, le build, l’analyse de code et le déploiement.
                                    </p>

                                    <p className="text-gray-300 mb-4">
                                        Dans ce tutoriel, nous allons apprendre à <strong>installer Jenkins avec Docker</strong>.
                                        Cette approche permet d’éviter les installations complexes,
                                        tout en garantissant un environnement stable et reproductible.
                                    </p>

                                    <p className="text-gray-300 italic">
                                        L&apos;objectif visé ici est de disposer d’un Jenkins fonctionnel en quelques minutes,
                                        prêt à accueillir ses premiers pipelines.
                                    </p>
                                </section>

                                <section id="prerequisites">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        2. Prérequis
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Avant de commencer, assure-toi d’avoir les éléments suivants :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Docker installé sur ta machine</li>
                                        <li>Docker Desktop en cours d’exécution</li>
                                        <li>Un navigateur web moderne</li>
                                        <li>Des bases en ligne de commande (terminal)</li>
                                    </ul>

                                    <p className="text-gray-300 mt-3 italic">
                                        ℹ️ Jenkins fonctionnera ici en local, mais la même approche
                                        s’applique à un serveur distant.
                                    </p>
                                </section>

                                <section id="why-docker">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        3. Pourquoi installer Jenkins avec Docker ?
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Installer Jenkins manuellement peut vite devenir fastidieux
                                        (Java, dépendances, configuration système…).
                                        Docker simplifie tout cela.
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>🚀 Installation rapide</li>
                                        <li>🧼 Environnement isolé</li>
                                        <li>🔁 Facile à supprimer ou recréer</li>
                                        <li>📦 Version officielle maintenue par Jenkins</li>
                                    </ul>
                                </section>

                                <section id="install">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        4. Installation de Jenkins avec Docker
                                    </h2>

                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        Étape 1 – Télécharger l’image officielle
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Nous allons utiliser la version <strong>LTS</strong> (Long Term Support),
                                        recommandée pour sa stabilité.
                                    </p>

                                    <pre className="bg-neutral-900 p-4 rounded text-gray-300 text-sm">
docker pull jenkins/jenkins:lts
  </pre>

                                    <p className="text-gray-300 mt-2 italic">
                                        Cette commande télécharge Jenkins depuis Docker Hub.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mt-8 mb-2">
                                        Étape 2 – Lancer le conteneur Jenkins
                                    </h3>

                                    <pre className="bg-neutral-900 p-4 rounded text-gray-300 text-sm">
docker run -d \
  -p 8080:8080 \
  -p 50000:50000 \
  --name jenkins \
  jenkins/jenkins:lts
  </pre>

                                    <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                                        <li><code>8080</code> : interface web Jenkins</li>
                                        <li><code>50000</code> : communication avec les agents</li>
                                    </ul>

                                    <p className="text-gray-300 italic mt-3">
                                        📸 Capture suggérée : résultat de <code>docker ps</code>
                                    </p>
                                </section>

                                <section id="access">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        5. Accéder à Jenkins
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Ouvre ton navigateur et rends-toi à l’adresse :
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        <code className="text-blue-400">http://localhost:8080</code>
                                    </p>

                                    <p className="text-gray-300">
                                        Jenkins te demande alors un <strong>mot de passe administrateur</strong>
                                        pour déverrouiller l’interface.
                                    </p>

                                    <p className="italic text-gray-300 mt-2">
                                        📸 Capture : écran “Unlock Jenkins”
                                    </p>
                                </section>

                                <section id="unlock">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        6. Déverrouiller Jenkins
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Le mot de passe initial est stocké dans le conteneur Docker.
                                    </p>

                                    <pre className="bg-neutral-900 p-4 rounded text-gray-300 text-sm">
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
  </pre>

                                    <p className="text-gray-300 mt-2">
                                        Copie ce mot de passe et colle-le dans l’interface Jenkins.
                                    </p>
                                </section>

                                <section id="setup">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        7. Configuration initiale
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Jenkins te propose ensuite d’installer des plugins.
                                        Choisis l’option :
                                    </p>

                                    <p className="text-gray-300 font-semibold">
                                        Install suggested plugins
                                    </p>

                                    <p className="text-gray-300 mt-3">
                                        Ces plugins sont essentiels pour créer des pipelines,
                                        gérer Git et afficher les résultats des builds.
                                    </p>

                                    <p className="italic text-gray-300 mt-2">
                                        📸 Capture : écran d’installation des plugins
                                    </p>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        Conclusion
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Jenkins est maintenant installé et prêt à être utilisé.
                                        Grâce à Docker, tu disposes d’une installation propre,
                                        rapide et facilement reproductible.
                                    </p>

                                    <p className="text-gray-300 font-semibold">
                                        Prochaine étape logique :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        <li>Créer ton premier job Jenkins</li>
                                        <li>Découvrir les pipelines avec Jenkinsfile</li>
                                        <li>Connecter Jenkins à GitHub ou GitLab</li>
                                    </ul>
                                </section>

                                <Link href="/blog" className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
                                    ← Retourner au blog
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar TOC */}
                    <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                        <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
                        <nav className="flex flex-col gap-2 text-sm text-gray-400 ">
                            <Link href="#intro" className="hover:text-white">
                                1. Introduction
                            </Link>
                            <Link href="#install" className="hover:text-white">
                                2. Installation de Bruno
                            </Link>
                            <Link href="#writing-tests" className="hover:text-white">
                                3. Écriture de tests
                            </Link>
                            <Link href="#good-practices" className="hover:text-white">
                                4. Bonnes pratiques
                            </Link>
                            <Link href="#nommer" className="hover:text-white ml-2">
                                4.1. Nommer clairement chaque requête
                            </Link>
                            <Link href="#organiser" className="hover:text-white ml-2">
                                4.2. Organiser les requêtes par dossiers
                            </Link>
                            <Link href="#separer" className="hover:text-white ml-2">
                                4.3. Séparer les scénarios de test
                            </Link>
                            <Link href="#variables" className="hover:text-white ml-2">
                                4.4. Utiliser des variables d’environnement
                            </Link>
                            <Link href="#creer" className="hover:text-white ml-4">
                                Étapes pour créer des variables d&apos;environnement
                            </Link>
                            <Link href="#utiliser" className="hover:text-white ml-4">
                                Exemple d’utilisation dans une requête
                            </Link>
                            <Link href="#documenter" className="hover:text-white ml-2">
                                4.5. Documenter vos tests
                            </Link>
                            <Link href="#verifier" className="hover:text-white ml-2">
                                4.6. Vérifier les réponses attendues
                            </Link>
                            <Link href="#versionner" className="hover:text-white ml-2">
                                4.7. Versionner vos tests avec Git
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