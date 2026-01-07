"use client";
import Link from "next/link";
import {IoIosArrowRoundBack, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

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
                                        C’est aujourd’hui un incontournable dans les équipes de développement modernes.
                                    </p>

                                    <p className="text-gray-300 mb-4">
                                        Dans ce tutoriel, nous allons apprendre à <strong>installer Jenkins avec Docker</strong>.
                                        Cette approche permet d’éviter les installations complexes,
                                        tout en garantissant un environnement stable, isolé et reproductible.
                                    </p>

                                    <p className="text-gray-300">
                                        À la fin de ce guide, vous aurez un Jenkins fonctionnel en quelques minutes,
                                        accessible depuis votre navigateur, et prêt à accueillir ses premiers pipelines CI/CD.
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
                                        <li>Docker installé sur ta machine ou Docker Desktop en cours d&apos;exécution</li>
                                        <li>Un navigateur web moderne (Chrome, Firefox, Edge…)</li>
                                        <li>Des bases en ligne de commande</li>
                                    </ul>
                                    <p className="text-gray-300 mt-3">
                                        ℹ️ Docker Desktop inclut déjà Docker et permet de gérer facilement tes conteneurs via une interface graphique.
                                    </p>

                                    <p className="text-gray-300 mt-3">
                                        ℹ️ Jenkins fonctionnera ici en local, mais la même approche
                                        s’applique à un serveur distant.
                                        Tout au long de ce tutoriel, des captures d’écran viendront illustrer chaque étape.
                                    </p>
                                    <details className="mt-4 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>🔧 Installation de Docker Desktop</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                        </summary>

                                        <div className="px-4 pb-4">
                                            <p className="text-gray-300 mb-2">
                                                Si Docker n’est pas encore installé sur ta machine, télécharge Docker Desktop depuis le site officiel :
                                            </p>

                                            <a
                                                href="https://www.docker.com/products/docker-desktop/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-blue-400 hover:underline"
                                            >
                                                 https://www.docker.com/products/docker-desktop/
                                            </a>

                                            <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                                <Image
                                                    src="/docker1.png"
                                                    alt="Page officielle de téléchargement Docker"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <p className="text-gray-300 mt-3">
                                                Docker Desktop est disponible sur Windows, macOS et Linux.
                                                Une fois l’installation terminée, lance l’application et assure-toi qu’elle est bien en cours d’exécution avant de continuer ce tutoriel.
                                            </p>
                                            <details className="mt-4 rounded bg-[#0b1220] border border-orange-800 group">
                                                <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                                    <span>⚠️ Erreur WSL trop ancien (Windows)</span>
                                                    <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                                </summary>

                                                <div className="px-4 pb-4 text-gray-300">
                                                    <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                                        <Image
                                                            src="/docker2.png"
                                                            alt="Erreur WSL"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="mb-2">
                                                        Si tu vois le message indiquant que ta version de WSL est trop ancienne,
                                                        exécute la commande suivante dans un terminal ouvert en administrateur :
                                                    </p>

                                                    <pre className="bg-[#020617] p-3 rounded mb-2 text-gray-200">
wsl --update
    </pre>

                                                    <p className="mb-2">
                                                        Redémarre ensuite ton ordinateur, puis vérifie avec :
                                                    </p>

                                                    <pre className="bg-[#020617] p-3 rounded text-gray-200">
wsl --version
    </pre>
                                                    <p className="text-gray-300 mt-3">
                                                        ⚠️ Tu dois lancer la commande avec Windows Terminal ou PowerShell en mode <strong>Admin</strong>
                                                    </p>
                                                </div>

                                            </details>
                                            <p className="text-gray-300 mt-3">
                                                Une fois sur l&apos;écran d&apos;accueil, vérifie si tu as la mention <strong>Engine running</strong>
                                                <em> en bas à gauche</em> de ton écran. Si oui, Docker fonctionne parfaitement.
                                            </p>
                                            <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                                <Image
                                                    src="/docker4.png"
                                                    alt="Accueil Docker Desktop"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </details>
                                    <h3 className="text-xl font-semibold mt-6 mb-3 text-white" id="verify">
                                        2.1 Vérifier l’installation de Docker
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Ouvre un terminal et exécute les commandes suivantes pour vérifier que Docker est bien installé
                                        et qu’il fonctionne correctement :
                                    </p>

                                    <pre className="bg-[#0f172a] text-gray-200 p-4 rounded mb-3">
{`docker --version
docker ps`}
  </pre>
                                    <p className="text-gray-300 mb-3">
                                        Si Docker est bien installé, la première commande affiche la version de Docker,
                                        et la seconde retourne une liste (éventuellement vide) de conteneurs.
                                    </p>
                                    <p className="text-gray-300">
                                        Une fois ces vérifications effectuées, tu peux passer à l’étape suivante :
                                        l’installation et le lancement de Jenkins avec Docker.
                                    </p>
                                </section>

                                <section id="why-docker">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        3. Pourquoi installer Jenkins avec Docker ?
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Installer Jenkins manuellement peut vite devenir fastidieux :
                                        Java, dépendances, configuration système etc.
                                        Chaque étape peut entraîner des erreurs ou des conflits.
                                        Docker simplifie tout cela en encapsulant Jenkins dans un environnement prêt à l’emploi.
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li><strong>Installation rapide</strong> : lance Jenkins en quelques commandes.</li>
                                        <li><strong>Environnement isolé</strong> : pas de conflit avec ton système ou d’autres applications.</li>
                                        <li><strong>Facile à supprimer ou recréer</strong> : testez différentes versions ou configurations sans risque.</li>
                                        <li><strong>Version officielle maintenue par Jenkins</strong> : toujours à jour et sécurisée.</li>
                                    </ul>

                                    <p className="text-gray-300 mt-3">
                                        ℹ️ Avec Docker, tu peux te concentrer sur la création de pipelines CI/CD plutôt que sur l’installation de Jenkins.
                                    </p>
                                </section>

                                <section id="install">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        4. Installation de Jenkins avec Docker
                                    </h2>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                            Avant de commencer, assures-toi que :
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                            <li>les ports 8080 et 50000 sont disponibles </li>
                                            <li>tu as eu moins 2 GB de RAM libre recommandés</li>
                                        </ul>
                                    </div>

                                    <div className="mb-8" id="image">
                                        <h3 className="text-xl font-semibold text-white mb-4">
                                            Étape 1 : Télécharger l&apos;image officielle Jenkins
                                        </h3>

                                        <p className="text-gray-300 mb-4">
                                            Nous allons utiliser la version <strong className="text-white">LTS</strong> (Long Term Support),
                                            recommandée pour sa stabilité et sa maintenance à long terme. Cette version reçoit des mises à jour de
                                            sécurité régulières et est idéale pour un usage en production ou en environnement de test.
                                        </p>
                                        <p className="text-gray-300 mt-3">
                                            ℹ️ L&apos;image fait environ 700 MB. Le téléchargement peut prendre quelques minutes
                                            selon la connexion internet.
                                        </p>

                                        <p className="text-gray-300 mt-3">
                                            Dans ton terminal, saisies la commande suivante :
                                        </p>

                                        <pre className="bg-neutral-900 p-4 rounded text-gray-300 text-sm mb-3">
docker pull jenkins/jenkins:lts
        </pre>

                                        <p className="text-gray-300 mb-3">
                                            Cette commande télécharge l&apos;image officielle de Jenkins depuis Docker Hub. Docker va télécharger
                                            l&apos;image en plusieurs couches.
                                        </p>
                                        <p className="text-gray-300 mb-3">
                                            Tu peux aussi utiliser le terminal intégré de Docker Desktop si tu préfères une interface graphique :
                                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                <li>Ouvre Docker Desktop</li>
                                                <li>Clique sur l&apos;icône du terminal en bas à droite (ou cherche &quot;CLI&quot; dans l&apos;interface)</li>
                                            </ul>

                                        </p>
                                        <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                            <Image
                                                src="/docker5.png"
                                                alt="Installation de Jenkins"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="text-gray-300 mb-2">
                                            Une fois le téléchargement terminé, tu verras affiché dans le terminal :
                                        </p>
                                        <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-200">
                                            Status : Downloaded newer image for jenkins/jenkins:lts
                                        </p>
                                    </div>

                                            <p className="text-gray-300 mb-2"><strong>Vérification :</strong> Pour confirmer que l&apos;image a bien été téléchargée, utilise la commande :</p>
                                            <pre className="bg-neutral-900 p-4 rounded text-gray-300 text-sm mb-3">
docker images jenkins/jenkins
          </pre>
                                        <p className="text-gray-300 mb-2">
                                            Et tu auras cet affichage :
                                        </p>
                                        <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                            <Image
                                                src="/docker6.png"
                                                alt="Installation de Jenkins vérifiée"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-8" id="lancer">
                                        <h3 className="text-xl font-semibold text-white mb-4">
                                            Étape 2 : Lancer le conteneur Jenkins
                                        </h3>

                                        <p className="text-gray-300 mb-4">
                                            Nous allons maintenant créer et lancer un conteneur à partir de cette image. <br/>Cette commande va
                                            démarrer Jenkins en arrière-plan et exposer les ports nécessaires.
                                        </p>

                                        <pre className="bg-neutral-900 p-4 rounded text-gray-300 text-sm mb-4">
{`docker run -d -p 8080:8080 -p 50000:50000 --name jenkins jenkins/jenkins:lts`}
        </pre>

                                        <div className="mb-4">
                                            <p className="text-white font-semibold mb-3">Explication des paramètres :</p>
                                            <ul className="space-y-3 text-gray-300">
                                                <li className="flex items-start gap-3">
                                                    <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">-d</code>
                                                    <span>: lance le conteneur en mode détaché (en arrière-plan), permettant de continuer à utiliser le terminal</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">-p 8080:8080</code>
                                                    <span>: mappe le port 8080 du conteneur vers le port 8080 de la machine. C&apos;est le port pour accéder à l&apos;interface web Jenkins</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">-p 50000:50000</code>
                                                    <span>: port utilisé pour la communication avec les agents Jenkins (workers distants)</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">--name jenkins</code>
                                                    <span> : donne un nom explicite au conteneur pour faciliter sa gestion ultérieure</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <p className="text-gray-300 mb-4">
                                            Après l&apos;exécution de cette commande, tu devrais voir s&apos;afficher un long identifiant du conteneur.
                                            Jenkins est maintenant lancé et démarre en arrière-plan.
                                        </p>
                                            <p className="text-gray-300 mb-2"><strong>Vérification du conteneur :</strong></p>
                                            <pre className="bg-neutral-900 p-4 rounded text-gray-300 text-sm mb-4">
docker ps
          </pre>
                                            <p className="text-gray-300">
                                                Cette commande liste tous les conteneurs en cours d&apos;exécution. Tu devrais voir le conteneur
                                                Jenkins avec son statut &quot;Up&quot; et les ports mappés.
                                            </p>

                                        <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                            <Image
                                                src="/docker7.png"
                                                alt="Installation de Jenkins"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="text-gray-300">
                                            Dans Docker Desktop, tu auras cet affichage:
                                        </p>

                                        <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                            <Image
                                                src="/docker8.png"
                                                alt="Installation de Jenkins"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>


                                    </div>

                                    <div className="mb-8" id="password">
                                        <h3 className="text-xl font-semibold text-white mb-4">
                                            Étape 3 : Vérifier les logs et récupérer le mot de passe initial
                                        </h3>

                                        <p className="text-gray-300 mb-4">
                                            Jenkins génère un mot de passe administrateur initial lors de son premier démarrage.
                                            Nous devons récupérer ce mot de passe dans les logs du conteneur avec la commande :
                                        </p>

                                        <pre className="bg-neutral-900 p-4 rounded text-gray-300 text-sm mb-4">
docker logs jenkins
        </pre>

                                        <p className="text-gray-300 mb-4">
                                            Cherches dans les logs une section similaire à celle-ci :
                                        </p>

                                        <div className="bg-neutral-900 rounded-lg p-4 mb-4">
          <pre className="text-red-400 text-xs overflow-x-auto">
{`*************************************************************
*************************************************************
*************************************************************

Jenkins initial setup is required. An admin user has been created and 
a password generated.
Please use the following password to proceed to installation:

a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6

This may also be found at: /var/jenkins_home/secrets/initialAdminPassword

*************************************************************
*************************************************************
*************************************************************`}
          </pre>
                                        </div>
                                        <p className="text-gray-300">
                                            ⚠️ <strong>Important :</strong> Copies et conserves ce mot de passe, tu en auras besoin pour
                                            la configuration initiale de Jenkins dans la prochaine section.
                                        </p>
                                    </div>

                                    <details className="mt-4 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>🛠️ Commandes de gestion utiles</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                        </summary>

                                        <div className="px-4 pb-4 space-y-4">
                                            <div className="bg-neutral-900 rounded-lg p-4">
                                                <p className="text-white font-semibold mb-2">Arrêter Jenkins :</p>
                                                <pre className="bg-[#0f172a] p-3 rounded text-gray-300 text-sm">
docker stop jenkins
            </pre>
                                                <p className="text-gray-300 text-sm mt-2">Cette commande arrête le conteneur en douceur tout en conservant les données.</p>
                                            </div>

                                            <div className="bg-neutral-900 rounded-lg p-4">
                                                <p className="text-white font-semibold mb-2">Redémarrer Jenkins :</p>
                                                <pre className="bg-[#0f172a] p-3 rounded text-gray-300 text-sm">
docker start jenkins
            </pre>
                                                <p className="text-gray-300 text-sm mt-2">Cette commande redémarre le conteneur arrêté avec toutes ses données.</p>
                                            </div>

                                            <div className="bg-neutral-900 rounded-lg p-4">
                                                <p className="text-white font-semibold mb-2">Redémarrer Jenkins (alternative) :</p>
                                                <pre className="bg-[#0f172a] p-3 rounded text-gray-300 text-sm">
docker restart jenkins
            </pre>
                                                <p className="text-gray-300 text-sm mt-2">Cette commande équivaut à STOP + START en une seule commande.</p>
                                            </div>

                                            <div className="bg-neutral-900 rounded-lg p-4">
                                                <p className="text-white font-semibold mb-2">Voir les logs en temps réel :</p>
                                                <pre className="bg-[#0f172a] p-3 rounded text-gray-300 text-sm">
docker logs -f jenkins
            </pre>
                                                <p className="text-gray-300 text-sm mt-2">Cette commande affiche les logs en continu. Utilisez Ctrl+C pour quitter.</p>
                                            </div>

                                            <div className="bg-neutral-900 rounded-lg p-4">
                                                <p className="text-white font-semibold mb-2">Accéder au shell du conteneur :</p>
                                                <pre className="bg-[#0f172a] p-3 rounded text-gray-300 text-sm">
docker exec -it jenkins bash
            </pre>
                                                <p className="text-gray-300 text-sm mt-2">Cette commande ouvre un terminal interactif dans le conteneur pour du débogage avancé.</p>
                                            </div>
                                        </div>
                                    </details>

                                    <details className="mt-4 rounded bg-[#0b1220] border border-red-900/50 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>🛑 Problèmes courants et solutions</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                        </summary>

                                        <div className="px-4 pb-4 space-y-4">
                                            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4">
                                                <p className="text-red-300 font-semibold mb-2">Erreur : &quot;port is already allocated&quot;</p>
                                                <p className="text-gray-300 text-sm mb-3">
                                                    Le port 8080 ou 50000 est déjà utilisé par une autre application.
                                                </p>
                                                <p className="text-gray-300 text-sm mb-2"><strong>Solution :</strong></p>
                                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                                                    <li>Identifies l&apos;application utilisant le port : <code className="text-blue-400">lsof -i :8080</code> (Mac/Linux) ou <code className="text-blue-400">netstat -ano | findstr :8080</code> (Windows)</li>
                                                    <li>Arrêtes l&apos;application ou utilises un autre port : <code className="text-blue-400">-p 9090:8080</code></li>
                                                </ul>
                                            </div>

                                            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4">
                                                <p className="text-red-300 font-semibold mb-2">Le conteneur s&apos;arrête immédiatement</p>
                                                <p className="text-gray-300 text-sm mb-3">
                                                    Vérifies les logs pour identifier l&apos;erreur.
                                                </p>
                                                <pre className="bg-[#0f172a] p-3 rounded text-gray-300 text-sm mb-2">
docker logs jenkins
            </pre>
                                                <p className="text-gray-300 text-sm">
                                                    Il s&apos;agit souvent d&apos;un manque de mémoire ou des permissions insuffisantes.
                                                </p>
                                            </div>

                                            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4">
                                                <p className="text-red-300 font-semibold mb-2">Impossible d&apos;accéder à http://localhost:8080</p>
                                                <p className="text-gray-300 text-sm mb-3">
                                                    Jenkins peut mettre jusqu&apos;à 1 ou 2 minutes à démarrer complètement.
                                                </p>
                                                <p className="text-gray-300 text-sm">
                                                    <strong>Solutions :</strong> Attends quelques instants et rafraîchis la page, ou vérifies les logs
                                                    avec <code className="text-blue-400">docker logs jenkins</code> pour voir si le démarrage est complet.
                                                </p>
                                            </div>
                                        </div>
                                    </details>

                                    <p className="text-gray-300 mb-3 mt-4">
                                        Jenkins est maintenant installé et opérationnel ! Dans la section suivante, nous allons configurer
                                        Jenkins pour la première fois en utilisant le mot de passe administrateur que tu viens de récupérer.
                                    </p>
                                    <p className="text-gray-300">
                                        ⚠️ Assures-toi d&apos;avoir noté le mot de passe initial avant de continuer.
                                    </p>
                                </section>

                                <section id="access">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        5. Accéder à Jenkins
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Dans ton navigateur, rends-toi à l’adresse :  <code className="text-blue-400">http://localhost:8080</code>
                                    </p>

                                    <p className="text-gray-300">
                                        Jenkins te demande alors un <strong>mot de passe administrateur </strong>
                                        pour déverrouiller l’interface.
                                        C&apos;est donc ici que tu utilises le mot de passe récupéré dans les logs plus haut.
                                    </p>
                                    <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                        <Image
                                            src="/docker9.png"
                                            alt="Page officielle de téléchargement Docker"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <p className="text-gray-300 mb-3 mt-4">
                                        Jenkins te propose ensuite d’installer des plugins.
                                        Choisis l’option : <strong className="text-blue-400">Install suggested plugins</strong>
                                    </p>
                                    <p className="text-gray-300 mt-3">
                                        Ces plugins sont essentiels pour créer des pipelines,
                                        gérer Git et afficher les résultats des builds.
                                    </p>
                                    <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                        <Image
                                            src="/docker10.png"
                                            alt="Page officielle de téléchargement Docker"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-gray-300 mt-3">
                                        Après l&apos;installation des plugins, tu peux créer un utilisateur Admin :
                                    </p>
                                    <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                        <Image
                                            src="/docker11.png"
                                            alt="Page officielle de téléchargement Docker"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-gray-300 mt-3">
                                        À la fin de la configuration de Jenkins, tu auras accès au tableau de bord principal.
                                        Jenkins est maintenant prêt à être utilisé!
                                    </p>
                                    <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                        <Image
                                            src="/docker12.png"
                                            alt="Page officielle de téléchargement Docker"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        Conclusion
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Jenkins est maintenant installé et prêt à être utilisé.
                                        Grâce à Docker, tu disposes d’une installation propre,
                                        rapide et facilement reproductible.  Si tu veux directement passer au CI/CD avec Jenkins,
                                        je t&apos;invite à consulter le tutoriel ici : {""}
                                        <a
                                            href="/blog/ci-cd/jenkins"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-400 hover:underline"
                                        >
                                            CI/CD avec Jenkins
                                        </a>
                                    </p>
                                </section>

                                <Link href="/blog" className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
                                    ← Retourner au blog
                                </Link>
                            </div>
                        </div>
                    </div>

                    <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                        <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
                        <nav className="flex flex-col gap-2 text-sm text-gray-400 ">
                            <Link href="#intro" className="hover:text-white">
                                1. Introduction
                            </Link>
                            <Link href="#prerequisites" className="hover:text-white">
                                2. Prérequis
                            </Link>
                            <Link href="#verify" className="hover:text-white ml-2">
                                2.1 Vérifier l’installation de Docker
                            </Link>
                            <Link href="#why-docker" className="hover:text-white">
                                3. Pourquoi installer Jenkins avec Docker ?
                            </Link>
                            <Link href="#install" className="hover:text-white">
                                4. Installation de Jenkins avec Docker
                            </Link>
                            <Link href="#image" className="hover:text-white ml-2">
                                Étape 1 : Télécharger l&apos;image Jenkins
                            </Link>
                            <Link href="#lancer" className="hover:text-white ml-2">
                                Étape 2 : Lancer le conteneur Jenkins
                            </Link>
                            <Link href="#password" className="hover:text-white ml-2">
                                Étape 3 : Récupérer le mot de passe initial
                            </Link>
                            <Link href="#access" className="hover:text-white">
                                5. Accéder à Jenkins
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