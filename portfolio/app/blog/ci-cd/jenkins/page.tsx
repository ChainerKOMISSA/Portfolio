import Link from "next/link";
import {IoIosArrowDown, IoIosArrowRoundBack} from "react-icons/io";
import { BsGearFill } from "react-icons/bs";
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
                                        Jenkins est l’un des outils les plus populaires pour mettre en place des pipelines de
                                        <strong> CI/CD</strong>. Contrairement à des plateformes comme GitHub Actions ou GitLab CI,
                                        Jenkins est une application que l’on installe et configure soi-même.
                                    </p>

                                    <p className="text-gray-300 mt-3">
                                        Il permet d’automatiser les principales étapes du cycle de vie d’une application :
                                        <strong> build</strong>, <strong> tests</strong> et <strong> déploiement</strong>, à l’aide de pipelines définis sous forme de code.
                                    </p>

                                    <p className="text-gray-300 mt-4">
                                        <strong>Objectif de ce tutoriel :</strong> mettre en place un pipeline Jenkins fonctionnel capable d’automatiser ces différentes étapes.
                                    </p>
                                </section>

                                <section id="prerequis">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        2. Prérequis et environnement de travail
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Avant de créer notre premier pipeline CI/CD, assurons-nous de disposer de tout le nécessaire.
                                    </p>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">
                                            Prérequis techniques
                                        </h3>

                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                            <li>
                                                <strong>Java 11 ou supérieur</strong> installé sur ta machine ou sur le serveur
                                                Jenkins (Jenkins est une application Java).
                                            </li>
                                            <li>
                                                <strong>Un compte GitHub ou GitLab</strong> avec un dépôt accessible
                                            </li>
                                            <li>
                                                <strong>Un projet simple</strong> à automatiser (ex : app HTML, Node.js, Angular, etc.)
                                            </li>

                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-4">
                                        Jenkins peut être installé de différentes manières selon le contexte. Voici les principales approches.
                                    </p>

                                    <details className="mt-4 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>🔧 Installations de Jenkins</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                        </summary>
                                        <div className="px-4 space-y-4 mb-6">
                                            <div className="bg-neutral-900 rounded-lg p-4">
                                                <p className="text-white font-semibold mb-2">Installation locale</p>
                                                <p className="text-gray-300 text-sm">
                                                    Jenkins est installé directement sur la machine.
                                                    Cette solution est pratique pour tester rapidement, mais dépend fortement de l’environnement local .
                                                </p>
                                            </div>
                                            <div className="bg-neutral-900 rounded-lg p-4">
                                                <p className="text-white font-semibold mb-2">Installation via Docker (recommandée)</p>
                                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                                    <li>Aucune installation complexe</li>
                                                    <li>Environnement isolé et reproductible</li>
                                                    <li>Démarrage rapide</li>
                                                    <li>Très proche des conditions réelles en entreprise</li>
                                                </ul>
                                            </div>
                                            <div className="bg-neutral-900 rounded-lg p-4">
                                                <p className="text-white font-semibold mb-2">Installation sur serveur</p>
                                                <p className="text-gray-300 text-sm">
                                                    Jenkins est déployé sur un serveur dédié ou cloud.
                                                    Cette approche est surtout utilisée en production pour des équipes et des pipelines continus.
                                                </p>
                                            </div>
                                        </div>
                                    </details>

                                    <p className="text-gray-300 mb-3 mt-4">
                                        Dans ce tutoriel, nous utiliserons <strong>Jenkins avec Docker</strong> afin de garantir une configuration
                                        simple, propre et reproductible. Si Jenkins n’est pas encore installé, tu peux suivre ce guide détaillé :
                                        <a
                                            href="/blog/docker"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 font-semibold ml-1"
                                        >
                                            Installer Jenkins sur Docker
                                        </a>
                                    </p>
                                </section>

                                <section id="pipeline">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        3. Premier pipeline Jenkins
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Avant de construire un pipeline CI/CD, nous allons commencer par un pipeline très simple.
                                        L’objectif est de comprendre ce qu’est un <strong>job Jenkins</strong> et comment fonctionne un <strong>Jenkinsfile</strong>.
                                        <br/>
                                        Jenkins s’appuie sur un fichier appelé <code className="text-blue-400">Jenkinsfile</code>, placé à la racine du projet.
                                        Il décrit le pipeline sous forme de code.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        Étape 1 : Créer un job Jenkins minimal
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Crée un fichier <code className="text-blue-400">Jenkinsfile</code> à la racine de ton projet et ajoute le contenu suivant :
                                    </p>

                                    <CodeBlock
                                        language="groovy"
                                        code={`pipeline {
  agent any

  stages {
    stage('Mon premier job') {
      steps {
        echo 'Jenkins est correctement configuré !'
      }
    }
  }
}`}
                                    />

                                    <p className="text-gray-300 mt-3">
                                        Ce pipeline définit un <strong>job Jenkins</strong> contenant une seule étape qui affiche un message dans les logs.
                                        C’est l’équivalent d’un “Hello World” en CI/CD.
                                    </p>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mt-4 mb-6">
                                        <p className="text-blue-200 font-semibold mb-2">Comparaison rapide</p>
                                        <p className="text-gray-300 text-sm">
                                            - Dans <strong>GitHub Actions</strong>, ce job serait défini dans un fichier YAML dans <code>.github/workflows</code><br/>
                                            - Dans <strong>GitLab CI</strong>, il serait écrit dans <code>.gitlab-ci.yml</code><br/>
                                            - Avec <strong>Jenkins</strong>, le pipeline est centralisé dans un Jenkinsfile et exécuté par un serveur que tu héberges toi-même.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        Étape 2 : Comprendre la structure du pipeline
                                    </h3>

                                    <div className="mb-4">
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">pipeline {`{ ... }`}</code>
                                                <span>: bloc principal du pipeline. Équivalent du fichier de workflow dans GitHub Actions ou GitLab CI</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">agent any</code>
                                                <span>: indique où le job s’exécute. Jenkins choisit un agent disponible. Contrairement à GitHub Actions, tu contrôles entièrement tes machines d’exécution.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">stages</code>
                                                <span>: Contient les différentes étapes du pipeline. Pour l’instant, nous n’en avons qu’une.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">stage(&quot;Mon premier job&quot;)</code>
                                                <span> : représente un <strong>job Jenkins</strong>. C’est une unité logique du pipeline.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">steps</code>
                                                <span> : contient les actions exécutées par Jenkins : commandes, scripts, tests, builds, etc.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <code className="bg-[#0f172a] px-2 py-1 rounded text-blue-400 text-sm shrink-0">echo</code>
                                                <span> : affiche un message dans les logs Jenkins. Utile pour vérifier que le pipeline fonctionne.</span>
                                            </li>
                                        </ul>
                                    </div>
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
    
    environment {
        PROJECT_NAME = 'demo-app'
        BUILD_DIR = 'build'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du code source...'
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Construction du projet...'
                sh '''
                    mkdir -p ${`BUILD_DIR`}
                    cp -r index.html css ${`BUILD_DIR`}/
                '''
            }
        }
        
        stage('Test') {
            steps {
                echo 'Exécution des tests...'
                sh '''
                    # Vérification de la présence des fichiers
                    test -f ${`BUILD_DIR`}/index.html
                    test -f ${`BUILD_DIR`}/css/style.css
                    echo "Tests réussis!"
                '''
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Déploiement de l'application...'
                sh '''
                    # Exemple de déploiement
                    echo "Déploiement vers l'environnement cible"
                    # cp -r ${`BUILD_DIR`}/* /var/www/html/
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline exécuté avec succès!'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
        always {
            cleanWs()
        }
    }
}`}
                                    />

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-4">
                                        Exécuter et vérifier le pipeline depuis Jenkins
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        ⚠️ Pour que Jenkins puisse accéder à ton Jenkinsfile, il devrait être disponible sur Github ou Gitlab. Fais donc
                                        un push pour mettre à jour ton repository. <br/><br/>
                                        Maintenant que ton <code className="text-blue-400">Jenkinsfile</code> est prêt dans ton dépôt GitHub, il est temps de voir ton pipeline s’exécuter dans Jenkins.
                                        Comme nous avons installé Jenkins via Docker, tu peux y accéder dans ton navigateur à l’adresse :{""}
                                        <code className="text-blue-400">http://localhost:8080</code>.
                                    </p>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <p className="text-gray-300 mb-3 font-semibold">Configuration du pipeline dans Jenkins</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                            <li>Ouvre Jenkins dans ton navigateur et connecte-toi avec ton mot de passe administrateur initial.</li>
                                            <li>Dans le menu principal, clique sur <strong>New Item</strong> (ou <strong>Nouvel Item</strong>).</li>
                                            <li>Donne un nom à ton projet et sélectionne <strong>Pipeline</strong>, puis clique sur <strong>OK</strong>.</li>
                                            <li>Tu arrives sur la page de configuration avec plusieurs sections :</li>
                                            <ul className="list-disc list-inside ml-5 space-y-1">
                                                <li><strong>General :</strong> tu peux laisser les options par défaut et ajouter une description si tu veux.</li>
                                                <li><strong>Triggers :</strong> pour l’instant, ne coche rien. Le pipeline sera lancé manuellement via “Build Now”.</li>
                                                <p>
                                                    Plus tard, tu pourras activer : <strong>GitHub hook trigger for GITScm polling</strong>. Cette option déclenche le pipeline automatiquement quand tu pushes sur GitHub.
                                                </p>
                                                <li><strong>Pipeline :</strong></li>
                                                <ul className="list-disc list-inside ml-5 space-y-1">
                                                    <li><strong>Definition :</strong> choisis <code className="text-blue-400">Pipeline script from SCM</code> pour utiliser le Jenkinsfile depuis Git.</li>
                                                    <li><strong>SCM :</strong> sélectionne <code className="text-blue-400">Git</code>.</li>
                                                    <li><strong>Repository URL :</strong> mets l’URL de ton dépôt GitHub.</li>
                                                    <li><strong>Credentials :</strong> si ton dépôt est privé, ajoute tes identifiants GitHub. Si non, laisse vide.</li>
                                                    <li><strong>Branches to build :</strong> laisse par défaut <code className="text-blue-400">*/main</code> (ou <code>*/master</code>).</li>
                                                    <li><strong>Script Path :</strong> mets <code className="text-blue-400">Jenkinsfile</code> (le nom du fichier à la racine du projet).</li>
                                                </ul>
                                                <li><strong>Advanced :</strong> laisse par défaut pour le moment.</li>
                                            </ul>
                                            <li>Clique sur <strong>Save</strong> pour sauvegarder la configuration.</li>
                                            <li>Dans le tableau du projet, clique sur <strong>Build Now</strong> (ou <strong>Construire maintenant</strong>) pour lancer ton pipeline.</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-3">
                                        Après quelques secondes, un nouveau build apparaît dans la colonne de gauche.
                                        Si tout est correct, ton job s’exécute et Jenkins affiche un statut <strong className="text-green-400">SUCCESS</strong>.
                                    </p>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-200 font-semibold mb-2">Astuce</p>
                                        <p className="text-gray-300 text-sm">
                                            🔹 Les logs Jenkins affichent toutes les étapes exécutées dans le pipeline.<br/>
                                            🔹 En cas d’erreur, consulte les logs pour identifier la cause et corriger ton Jenkinsfile ou la configuration du pipeline.
                                        </p>
                                    </div>

                                    <p className="text-gray-300 mb-3">
                                        Ton pipeline est maintenant opérationnel ! Tu peux l’utiliser comme base pour créer des pipelines plus avancés, avec plusieurs stages pour le build, les tests et le déploiement.
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Exemple de pipeline réussi
                                    </p>
                                    <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                        <Image
                                            src="/reussi.png"
                                            alt="Exemple de pipeline réussi"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="text-gray-300 mb-3">
                                        Exemple de pipeline échoué
                                    </p>
                                    <div className="relative w-full h-96 mt-3 rounded-lg overflow-hidden">
                                        <Image
                                            src="/echoue.png"
                                            alt="Exemple de pipeline échoué"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>


                                </section>

                                <section id="variables">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        5. Variables et secrets Jenkins
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Comme pour GitLab CI/CD ou GitHub Actions, il est fortement déconseillé de stocker des informations sensibles (API keys, tokens, mots de passe) directement dans le code.
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Jenkins permet de gérer ces secrets de manière sécurisée via : <strong>Manage Jenkins</strong> (l&apos;icône ⚙️ en haut à gauche) → <strong>Credentials</strong>.
                                        <br/>
                                        Cliques ensuite sur <strong>System</strong> puis <strong>Global credentials</strong> pour ajouter des variables secrètes.
                                        Chaque secret peut être assigné à un identifiant unique que tu pourras utiliser dans ton pipeline.
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Exemple : pour utiliser un token API stocké dans Jenkins, tu peux déclarer une variable d’environnement dans ton Jenkinsfile :
                                    </p>

                                    <CodeBlock
                                        language="groovy"
                                        code={`pipeline {
  agent any

  environment {
    API_TOKEN = credentials('my-api-token')
  }

  stages {
    stage('Print Token') {
      steps {
        echo "Le token est sécurisé et peut être utilisé ici"
      }
    }
  }
}`}
                                    />

                                    <p className="text-gray-300 mb-3 mt-4">
                                        ⚠️ Cette variable ne sera pas affichée en clair dans les logs. Jenkins remplace automatiquement la valeur réelle par des astérisques si tu essaies de l’afficher.
                                    </p>

                                    {/* 📸 Screenshot : Jenkins Credentials */}
                                </section>

                                <section id="debug1">
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
                                <section id="debug">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        6. Dépannage et bonnes pratiques
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Pour maintenir tes pipelines Jenkins efficaces et fiables, voici quelques recommandations essentielles :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <strong>Consulter les logs de build :</strong> Clique sur un build puis <em>Console Output</em> pour voir les étapes exécutées et détecter les erreurs.
                                        </li>
                                        <li>
                                            <strong>Tester les étapes une par une :</strong> Commence par des pipelines simples et ajoute les stages progressivement.
                                        </li>
                                        <li>
                                            <strong>Utiliser des pipelines lisibles :</strong> Nommer clairement les stages et commenter les étapes importantes.
                                        </li>
                                        <li>
                                            <strong>Versionner systématiquement le Jenkinsfile :</strong> Le Jenkinsfile doit rester dans ton dépôt Git pour garder un historique et faciliter la collaboration.
                                        </li>
                                        <li>
                                            <strong>Gérer les secrets via Jenkins Credentials :</strong> Ne jamais stocker d’API keys ou mots de passe en clair.
                                        </li>
                                    </ul>

                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mt-4 mb-6">
                                        <p className="text-blue-200 font-semibold mb-2">Astuce :</p>
                                        <p className="text-gray-300 text-sm">
                                            🔹 Si un pipeline échoue, commence par vérifier le <em>stage</em> concerné.<br/>
                                            🔹 Les erreurs les plus courantes incluent des problèmes de chemin, des dépendances manquantes, ou des permissions Docker.<br/>
                                            🔹 Utilise Docker logs pour déboguer ton conteneur Jenkins si nécessaire.
                                        </p>
                                    </div>

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