import Link from "next/link";
import {IoIosArrowDown, IoIosArrowRoundBack} from "react-icons/io";
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
                                                <span>: contient les différentes étapes du pipeline. Pour l’instant, nous n’en avons qu’une.</span>
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

                                <section id="deploy">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        5. Déploiement continu avec Docker
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Jusqu&apos;ici, notre pipeline automatisait le build et les tests : nous étions principalement dans une logique de CI (Continuous Integration).
                                        Nous allons maintenant ajouter une étape de CD (Continuous Deployment), c&apos;est-à-dire un déploiement automatique de l&apos;application après le succès du pipeline.
                                    </p>

                                    <p className="text-gray-300 mb-4">
                                        J&apos;ai choisi d&apos;illustrer le déploiement avec Docker, car c&apos;est une solution
                                        très utilisée en entreprise et parfaitement adaptée à Jenkins.
                                        Cependant, un déploiement continu peut aussi se faire vers d&apos;autres plateformes comme Vercel,
                                        Netlify, Render, Railway, un VPS ou un cloud provider.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Configuration préalable : Docker dans Jenkins
                                    </h3>

                                    <div className="bg-neutral-900 rounded-lg p-4 mb-6">
                                        <p className="text-gray-300 mb-3">
                                            Pour que Jenkins puisse exécuter des commandes Docker depuis son conteneur, deux conditions doivent être remplies :
                                        </p>
                                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-3">
                                            <li>Le socket Docker doit être monté dans le conteneur Jenkins</li>
                                            <li>Docker CLI doit être installé à l&apos;intérieur du conteneur Jenkins</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-3 mt-4">
                                        Nous allons d&apos;abord supprimer le conteneur Jenkins qui existait déjà dans Docker avec
                                        cette commande :
                                    </p>

                                    <CodeBlock
                                        language="bash"
                                        code={`docker rm -f jenkins`}
                                    />

                                    <p className="text-gray-300 mb-3 mt-4">
                                        Tu peux remplacer <code className="text-blue-400">jenkins</code> par le nom que tu as donné à ton conteneur dans Docker Desktop.<br/>
                                        Maintenant, nous allons relancer Jenkins avec le socket Docker monté terminal :

                                    </p>

                                    <CodeBlock
                                        language="bash"
                                        code={`docker run -d \`
  -p 8080:8080 -p 50000:50000 \`
  -v jenkins_home:/var/jenkins_home \`
  -v /var/run/docker.sock:/var/run/docker.sock \`
  --name jenkins \`
  jenkins/jenkins:lts`}
                                    />

                                    <p className="text-gray-300 mb-3 mt-4">
                                        La ligne <code className="text-blue-400">-v /var/run/docker.sock:/var/run/docker.sock</code> permet à Jenkins d&apos;utiliser le Docker de ta machine.
                                        <br/>Maintenant, installe Docker CLI dans le conteneur Jenkins en exécutant cette commande dans ton terminal :
                                    </p>

                                    <CodeBlock
                                        language="bash"
                                        code={`docker exec -u root jenkins bash -c "apt-get update && apt-get install -y docker.io"`}
                                    />

                                    <p className="text-gray-300 mb-3 mt-4">
                                        Puis donnes les permissions :
                                    </p>

                                    <CodeBlock
                                        language="bash"
                                        code={`docker exec -u root jenkins chmod 666 /var/run/docker.sock`}
                                    />

                                        <p className="text-white font-semibold mb-2 mt-3">Vérification</p>
                                        <p className="text-gray-300 mb-2">
                                            Pour confirmer que Docker fonctionne correctement dans Jenkins, tu peux créer un petit pipeline de test avec ce stage :
                                        </p>
                                        <CodeBlock
                                            language="groovy"
                                            code={`stage('Test Docker') {
    steps {
        sh 'docker --version'
    }
}`}
                                        />
                                        <p className="text-gray-300 mt-2">
                                            Si cette commande s&apos;exécute sans erreur et affiche la version de Docker dans les logs Jenkins, tu es prêt à continuer !
                                        </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 1 : Créer un Dockerfile
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        À la racine de ton projet, crée un fichier nommé <code className="text-blue-400">Dockerfile</code>.
                                        Ce fichier définit comment ton application sera empaquetée dans une image Docker.
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Copie et colle le code suivant :
                                    </p>

                                    <CodeBlock
                                        language="dockerfile"
                                        code={`FROM nginx:alpine

COPY build/ /usr/share/nginx/html

EXPOSE 80`}
                                    />

                                    <p className="text-white font-semibold mb-2 mt-4">Explication du Dockerfile :</p>
                                    <ul className="none text-gray-300 space-y-1">
                                            <li><code className="text-blue-400">FROM nginx:alpine</code> : on utilise une image Nginx légère basée sur Alpine Linux</li>
                                            <li><code className="text-blue-400">COPY build/ /usr/share/nginx/html</code> : on copie le contenu du dossier build (généré par le pipeline) vers le répertoire par défaut de Nginx</li>
                                            <li><code className="text-blue-400">EXPOSE 80</code> : on expose le port 80 pour accéder à l&apos;application</li>
                                        </ul>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 2 : Configurer les credentials Docker dans Jenkins
                                    </h3>

                                    <p className="text-gray-300 mb-3">En essayant de te connecter à Jenkins, tu dois remettre ton met de passe
                                    administrateur. Si tu ne l&apos;avais pas sauvegardé, tu peux le retrouver avec cette commande : </p>

                                    <CodeBlock
                                        language="bash"
                                        code={`docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword`}
                                    />

                                    <p className="text-gray-300 mb-3 mt-3">
                                        Ensuite, tu continueras la configuration en te servant de ce tutoriel : <a href="/blog/docker" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Installer Jenkins dans Docker</a>.
                                        <br/>
                                        Tu dois également recréer ton pipeline, pour cela, tu dois retourner à <a href="#advanced" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">l&apos;étape 4</a> de ce tutoriel.<br/><br/>
                                        Nous allons maintenant configurer Jenkins pour qu&apos;il puisse se connecter à Docker Hub et pousser automatiquement les images après chaque build réussi.</p>

                                    <p className="text-gray-300 mb-4">Avant de continuer, assure-toi d&apos;avoir :</p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                                        <li>Un compte Docker Hub. Tu peux le créer sur le site :  <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">hub.docker.com</a></li>
                                        <li>Un repository Docker pour ton image</li>
                                    </ul>

                                    <details className="mt-4 mb-4 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>Différence entre Docker Desktop et Docker Hub</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                        </summary>
                                        <div className="px-4 space-y-4 mb-6">
                                            <p className="text-white font-semibold mb-2">Docker Desktop</p>
                                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                                <li><strong>Application locale</strong> installée sur ta machine
                                                qui permet de <strong>créer et gérer des conteneurs</strong> localement</li>
                                                <li>Interface graphique pour voir tes images et conteneurs</li>
                                                <li>Nous l&apos;utilisons déjà pour faire tourner Jenkins</li>
                                            </ul>
                                            <p className="text-white font-semibold mb-2">Docker Hub</p>
                                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2 mb-6">
                                                <li><strong>Registre en ligne</strong> qui permet de <strong>stocker et partager</strong> tes images
                                                    Docker. C&apos;est comme GitHub mais pour les images Docker</li>
                                                <li>Accessible à l&apos;adresse : <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">hub.docker.com</a>{" "}
                                                    et <strong>gratuit</strong> pour les dépôts publics</li>
                                            </ul>
                                                <p className="text-white font-semibold mb-2 mt-6">Pourquoi utiliser Docker Hub dans ce pipeline ?</p>
                                                <p className="text-gray-300 mb-2">
                                                    Dans un workflow CI/CD professionnel, les images Docker sont généralement poussées vers un registre distant (Docker Hub, AWS ECR, Google Container Registry, etc.).
                                                    Cela permet de :
                                                </p>
                                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                    <li>Sauvegarder les images en ligne</li>
                                                    <li>Les déployer sur différentes machines ou serveurs</li>
                                                    <li>Versionner les images</li>
                                                    <li>Simuler un vrai environnement de production</li>
                                                </ul>
                                            <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                                <p className="text-white font-semibold mb-2">Rappel : Deux repositories différents</p>
                                                <div className="text-gray-300 text-sm space-y-2">
                                                    <p>
                                                        <strong>GitHub ou GitLab</strong> : stocke ton <strong>code source</strong>
                                                    </p>
                                                    <p>
                                                        <strong>Docker Hub</strong> : stocke tes <strong>images Docker</strong>
                                                    </p>
                                                    <p className="mt-2">
                                                        Le pipeline récupèrera le code depuis GitHub, le transforme en image Docker, puis pousse cette image vers Docker Hub.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-blue-950/30 border border-blue-900/50  rounded-lg p-4 mt-6">
                                                <p className="text-gray-300 text-sm">
                                                    Si tu préfères rester 100% local sans utiliser Docker Hub, tu peux sauter l&apos;étape <code className="text-blue-400">Docker Push</code> et
                                                    utiliser directement l&apos;image locale dans le stage Deploy. Cependant, pour comprendre le workflow CI/CD complet tel qu&apos;utilisé en entreprise,
                                                    je te recommande de créer un compte Docker Hub gratuit.
                                                </p>
                                            </div>
                                        </div>
                                    </details>

                                    <div className="bg-neutral-900 rounded-lg p-5 mb-6">
                                        <p className="text-gray-300 mb-3 font-semibold">Ajouter les credentials dans Jenkins :</p>
                                        <ul className="list-decimal list-inside space-y-2 text-gray-300">
                                            <li>Dans Jenkins, clique sur <strong>Manage Jenkins</strong></li>
                                            <li>Sélectionne <strong>Credentials</strong></li>
                                            <li>Clique sur <strong>System</strong> → <strong>Global credentials</strong> → <strong>Add credentials</strong></li>
                                            <li>Remplis le formulaire comme suit :</li>
                                            <ul className="list-disc list-inside ml-5 space-y-1">
                                                <li><strong>Kind</strong> : <code className="text-blue-400">Username with password</code></li>
                                                <li><strong>Username</strong> : ton nom d&apos;utilisateur Docker Hub</li>
                                                <li><strong>Password</strong> : ton mot de passe Docker Hub ou un access token pour plus de sécurité</li>
                                                <li><strong>ID</strong> : <code className="text-blue-400">docker-credentials</code>. Cet ID est important car on l&apos;utilisera dans le Jenkinsfile.</li>
                                                <li><strong>Description</strong> : elle est optionnelle</li>
                                            </ul>
                                            <li>Clique sur <strong>Create</strong></li>
                                        </ul>
                                    </div>

                                    <details className="mt-4 mb-4 rounded bg-[#0b1220] border border-blue-900 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>Générer un Access Token Docker Hub</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                        </summary>

                                        <div className="px-4 space-y-4 mb-6">
                                            <p className="text-gray-300 mb-3">
                                                Pour des raisons de sécurité, il est fortement recommandé d&apos;utiliser un <strong>Access Token</strong> plutôt que ton mot de passe principal.
                                            </p>
                                            <ul className="list-decimal list-inside space-y-2 text-gray-300 ">
                                                <li>Connecte-toi sur <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">hub.docker.com</a></li>
                                                <li>Clique sur ton <strong>nom d&apos;utilisateur</strong> en haut à droite</li>
                                                <li>Sélectionne <strong>Account Settings</strong></li>
                                                <li>Dans le menu latéral, clique sur <strong>Personal access tokens</strong></li>
                                                <li>Clique sur <strong>Generate New Token</strong></li>
                                                <li>Remplis le formulaire :
                                                    <ul className="list-disc list-inside ml-5 space-y-1 mt-2">
                                                        <li><strong>Token description</strong> : <code className="text-blue-400">jenkins-pipeline</code> ou un nom de ton choix</li>
                                                        <li><strong>Access permissions</strong> : Sélectionne <strong>Read & Write</strong>. Cette option est suffisante pour push des images</li>
                                                    </ul>
                                                </li>
                                                <li>Clique sur <strong>Generate</strong></li>
                                                <li className="text-white">
                                                    ⚠️ Copie immédiatement le token affiché !
                                                    Il ne s&apos;affichera qu&apos;une seule fois. Si tu fermes la page sans le copier, tu devras en créer un nouveau.
                                                </li>
                                            </ul>
                                            <div className="bg-blue-950/30 border border-blue-800 rounded-lg p-3 mt-4">
                                                <p className="text-blue-200 text-sm">
                                                    Tu peux sauvegarder temporairement ton token dans un fichier texte ou directement dans Jenkins.
                                                    Tu peux supprimer le fichier après avoir configuré Jenkins.
                                                </p>
                                            </div>
                                        </div>
                                    </details>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 3 : Mettre à jour le Jenkinsfile complet
                                    </h3>

                                    <p className="text-gray-300 mb-3">
                                        Nous allons maintenant créer un pipeline CI/CD complet qui inclut : build, tests, création de l&apos;image Docker,
                                        push vers Docker Hub et déploiement automatique.
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Voici le <strong>Jenkinsfile complet</strong> à utiliser :
                                    </p>

                                    <CodeBlock
                                        language="groovy"
                                        code={`pipeline {
    agent any
    
    environment {
        PROJECT_NAME = 'demo-app'
        BUILD_DIR = 'build'
        IMAGE_NAME = 'ton-dockerhub-username/demo-app'  // ⚠️ Remplace par ton username Docker
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
                    mkdir -p \${BUILD_DIR}
                    cp -r index.html css \${BUILD_DIR}/
                '''
            }
        }
        
        stage('Test') {
            steps {
                echo 'Exécution des tests...'
                sh '''
                    test -f \${BUILD_DIR}/index.html
                    test -f \${BUILD_DIR}/css/style.css
                    echo "Tests réussis!"
                '''
            }
        }
        
        stage('Docker Build') {
            steps {
                echo "Construction de l'image Docker..."
                sh 'docker build -t $IMAGE_NAME .'
            }
        }
        
        stage('Docker Push') {
            steps {
                echo "Envoi de l'image vers Docker Hub..."
                withCredentials([usernamePassword(
                    credentialsId: 'docker-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $IMAGE_NAME
                    '''
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo "Déploiement automatique de l'application..."
                sh '''
                    docker rm -f demo-app || true
                    docker run -d -p 8081:80 --name demo-app $IMAGE_NAME
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
                                    <p className="text-gray-300 mt-4">
                                        ⚠️ N&apos;oublie pas de remplacer <code className="text-blue-400">ton-dockerhub-username</code> par ton vrai nom d&apos;utilisateur Docker Hub
                                        et <code className="text-blue-400">demo-app</code> par le nom de ton repository dans la variable <code className="text-blue-400">IMAGE_NAME</code> !
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Comprendre le pipeline CD
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        Analysons les nouveaux stages ajoutés pour le déploiement continu :
                                    </p>

                                    <div className="space-y-4 mb-6">
                                        <p className="text-white font-semibold mb-2">Stage &apos;Docker Build&apos;</p>
                                        <pre className="bg-neutral-900 text-blue-300 p-4 rounded-md overflow-auto text-sm mb-4">
                                            <code>
                                                {`sh 'docker build -t $IMAGE_NAME .'`}
                                            </code>
                                        </pre>
                                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
                                            <li>Cette étape transforme ton application en une image Docker</li>
                                            <li><code className="text-blue-400">-t $IMAGE_NAME</code> : donne un nom à l&apos;image. Dans ce cas, le nom de ton repository sur Docker Hub</li>
                                            <li><code className="text-blue-400">.</code> : indique que le Dockerfile est dans le répertoire courant</li>
                                        </ul>
                                            <p className="text-white font-semibold mb-2">Stage &apos;Docker Push&apos;</p>
                                            <pre className="bg-neutral-900 text-blue-300 p-4 rounded-md overflow-auto text-sm mb-4">
                                            <code>
                                                {`withCredentials([...]) {
    sh '''
        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
        docker push $IMAGE_NAME
    '''
}`}
                                            </code>
                                            </pre>
                                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
                                                <li><code className="text-blue-400">withCredentials</code> : récupère les identifiants Docker de manière sécurisée</li>
                                                <li><code className="text-blue-400">docker login</code> : se connecte à Docker Hub</li>
                                                <li><code className="text-blue-400">docker push</code> : envoie l&apos;image vers Docker Hub</li>
                                            </ul>
                                            <p className="text-white font-semibold mb-2">Stage &apos;Deploy&apos;</p>
                                            <pre className="bg-neutral-900 text-blue-300 p-4 rounded-md overflow-auto text-sm mb-4">
                                            <code>
                                                {`sh '''
    docker rm -f demo-app || true
    docker run -d -p 8081:80 --name demo-app $IMAGE_NAME
'''`}
                                            </code>
                                            </pre>
                                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
                                                <li><code className="text-blue-400">docker rm -f demo-app || true</code> : supprime le conteneur existant s&apos;il existe (le || true évite une erreur si le conteneur n&apos;existe pas)</li>
                                                <li><code className="text-blue-400">docker run -d</code> : lance le conteneur en arrière-plan</li>
                                                <li><code className="text-blue-400">-p 8081:80</code> : mappe le port 80 du conteneur (Nginx) vers le port 8081 de ta machine</li>
                                                <li><code className="text-blue-400">--name demo-app</code> : donne un nom au conteneur pour le retrouver facilement</li>
                                            </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                                        Étape 4 : Exécuter le pipeline et vérifier le déploiement
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Pour vérifier que le déploiement fonctionne :
                                    </p>

                                    <ul className="list-decimal list-inside space-y-2 text-gray-300">
                                        <li><strong>Fais un commit et push tes modifications</strong> contenant le Dockerfile et le Jenkinsfile vers GitHub ou GitLab</li>
                                        <li><strong>Lance le pipeline</strong> depuis Jenkins en cliquant sur <strong className="text-blue-400">&quot;Build Now&quot;</strong></li>
                                        <li><strong>Observe les logs</strong> pour chaque stage</li>
                                    </ul>

                                    <p className="text-gray-300 mb-3 mt-4">
                                        Si tout se passe bien, tu devrais voir :
                                    </p>

                                    <ul className="list-disc space-y-1 text-gray-300 mb-6 ml-3">
                                        <li>L&apos;image Docker construite avec succès</li>
                                        <li>L&apos;image envoyée vers Docker Hub</li>
                                        <li>Le conteneur démarré automatiquement</li>
                                    </ul>

                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <p className="text-gray-300 font-semibold mb-2">Vérifier que l&apos;image est sur Docker Hub :</p>
                                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                <li>Connecte-toi sur <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">hub.docker.com</a></li>
                                                <li>Va dans <strong>Repositories</strong></li>
                                                <li>Tu devrais voir ton image <code className="text-blue-400">demo-app</code> avec un tag <code className="text-blue-400">latest</code></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="text-gray-300 font-semibold mb-2">Vérifier que le conteneur tourne :</p>
                                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                <li>Ouvre Docker Desktop</li>
                                                <li>Va dans l&apos;onglet <strong>Containers</strong></li>
                                                <li>Tu devrais voir <code className="text-blue-400">demo-app</code> avec le statut <strong className="text-green-400">Running</strong></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-3">
                                        Accéder à ton application :
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Ton application est maintenant accessible dans ton navigateur à l&apos;adresse :
                                    </p>

                                    <div className="bg-neutral-900 inline-block px-4 py-2 rounded mb-6">
                                        <code className="text-blue-400">http://localhost:8081</code>
                                    </div>


                                    <p className="text-gray-300 mb-3">
                                       Tu as maintenant un <strong>pipeline CI/CD complet et automatisé</strong> qui fait :
                                    </p>

                                    <ul className="list-none space-y-1 text-gray-300 mb-4">
                                        <li>1.<strong>Build</strong> : construction du projet</li>
                                        <li>2.<strong>Test</strong> : vérification des fichiers</li>
                                        <li>3.<strong>Docker Build</strong> : création de l&apos;image</li>
                                        <li>4.<strong>Docker Push</strong> : envoi vers Docker Hub</li>
                                        <li>5.<strong>Deploy</strong> : déploiement automatique du conteneur</li>
                                    </ul>

                                    <div className="bg-neutral-900 rounded-lg p-4 mb-6">
                                        <p className="text-white font-semibold mb-2">À chaque modification de code :</p>
                                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                                            <li>Tu push vers Git</li>
                                            <li>Jenkins détecte le changement</li>
                                            <li>Le pipeline s&apos;exécute automatiquement</li>
                                            <li>Une nouvelle version de ton app est déployée</li>
                                        </ul>
                                    </div>

                                    <details className="mt-4 mb-4 rounded bg-neutral-900 border border-red-900/50 group">
                                        <summary className="cursor-pointer list-none p-4 text-lg font-semibold text-white flex items-center justify-between">
                                            <span>Erreurs Docker courantes</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180"><IoIosArrowDown/></span>
                                        </summary>

                                        <div className="px-4 space-y-4 mb-6">
                                            <div className="space-y-3 mb-6">
                                                <div className="bg-neutral-900 rounded-lg p-4">
                                                    <p className="text-red-400 font-semibold mb-2">Erreur : <code>docker: command not found</code></p>
                                                    <p className="text-gray-300 text-sm mb-1"><strong>Cause :</strong> Docker CLI n&apos;est pas installé dans Jenkins</p>
                                                    <p className="text-gray-300 text-sm"><strong>Solution :</strong> Exécute <code className="text-blue-400">docker exec -u root jenkins bash -c &quot;apt-get update && apt-get install -y docker.io&quot;</code></p>
                                                </div>

                                                <div className="bg-neutral-900 rounded-lg p-4">
                                                    <p className="text-red-400 font-semibold mb-2">Erreur : <code>Cannot connect to the Docker daemon</code></p>
                                                    <p className="text-gray-300 text-sm mb-1"><strong>Cause :</strong> Le socket Docker n&apos;est pas monté</p>
                                                    <p className="text-gray-300 text-sm"><strong>Solution :</strong> Vérifie que Jenkins a été lancé avec <code className="text-blue-400">-v /var/run/docker.sock:/var/run/docker.sock</code></p>
                                                </div>

                                                <div className="bg-neutral-900 rounded-lg p-4">
                                                    <p className="text-red-400 font-semibold mb-2">Erreur : <code>permission denied while trying to connect to the Docker daemon</code></p>
                                                    <p className="text-gray-300 text-sm mb-1"><strong>Cause :</strong> Jenkins n&apos;a pas les permissions sur le socket Docker</p>
                                                    <p className="text-gray-300 text-sm"><strong>Solution :</strong> Exécute <code className="text-blue-400">docker exec -u root jenkins chmod 666 /var/run/docker.sock</code></p>
                                                </div>

                                                <div className="bg-neutral-900 rounded-lg p-4">
                                                    <p className="text-red-400 font-semibold mb-2">Erreur : <code>port is already allocated</code></p>
                                                    <p className="text-gray-300 text-sm mb-1"><strong>Cause :</strong> Le port 8081 est déjà utilisé par un autre conteneur</p>
                                                    <p className="text-gray-300 text-sm"><strong>Solution :</strong> Change le port dans le Jenkinsfile (<code className="text-blue-400">-p 8082:80</code> par exemple) ou arrête le conteneur qui utilise déjà ce port</p>
                                                </div>

                                                <div className="bg-neutral-900 rounded-lg p-4">
                                                    <p className="text-red-400 font-semibold mb-2">Le conteneur <code>demo-app</code> ne démarre pas</p>
                                                    <p className="text-gray-300 text-sm"><strong>Solution :</strong> Consulte les logs avec <code className="text-blue-400">docker logs demo-app</code></p>
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                    <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
                                        <p className="text-gray-300 text-sm">
                                            🔹 Docker est un <strong>choix personnel</strong> pour illustrer le CD dans ce tutoriel<br/>
                                            🔹 Le même pipeline pourrait déployer vers <strong>Vercel, Netlify, un serveur cloud, ou Kubernetes</strong><br/>
                                            🔹 Tu as maintenant un <strong>vrai pipeline CI/CD professionnel</strong> : build → test → image → push → deploy<br/>
                                            🔹 Cette approche est exactement celle utilisée dans de nombreuses entreprises pour automatiser leurs déploiements
                                        </p>
                                    </div>
                                </section>

                                <section id="variables">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        6. Variables et secrets Jenkins
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
                                </section>

                                <section id="debug">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        7. Dépannage et bonnes pratiques
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Pour maintenir tes pipelines Jenkins efficaces et fiables, voici quelques recommandations essentielles :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <strong>Consulter les logs de build :</strong> clique sur un build puis <em>Console Output</em> pour voir les étapes exécutées et détecter les erreurs.
                                        </li>
                                        <li>
                                            <strong>Tester les étapes une par une :</strong> commence par des pipelines simples et ajoute les stages progressivement.
                                        </li>
                                        <li>
                                            <strong>Utiliser des pipelines lisibles :</strong> nomme clairement les stages et commente les étapes importantes.
                                        </li>
                                        <li>
                                            <strong>Versionner systématiquement le Jenkinsfile :</strong> le Jenkinsfile doit rester dans ton dépôt Git pour garder un historique et faciliter la collaboration.
                                        </li>
                                        <li>
                                            <strong>Gérer les secrets via Jenkins Credentials :</strong> ne jamais stocker d’API keys ou mots de passe en clair.
                                        </li>
                                    </ul>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        8. Conclusion
                                    </h2>

                                    <p className="text-gray-300 mb-3">
                                        Jenkins reste une solution extrêmement puissante pour mettre en place des pipelines CI/CD sur mesure.
                                        Son principal avantage est la flexibilité, c&apos;est-à-dire que tu contrôles entièrement ton serveur, tes agents et tes pipelines.
                                    </p>

                                    <p className="text-gray-300 mb-3">
                                        Après avoir exploré Github Actions,  GitLab CI/CD et Jenkins, tu disposes désormais d’une vision claire des approches du CI/CD :
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-1 mb-3">
                                        <li><strong>Github Actions et GitLab CI/CD :</strong> intégrés, faciles à configurer dans le dépôt, idéaux pour démarrer rapidement.</li>
                                        <li><strong>Jenkins :</strong> indépendant, extrêmement flexible et personnalisable, parfait pour les projets complexes ou multi-environnements.</li>
                                    </ul>

                                    <p className="text-gray-300 mb-3">
                                        Tu peux maintenant expérimenter avec des pipelines multi-stage, gérer des secrets et automatiser des déploiements réels. Chaque projet te permettra de te familiariser avec la puissance de Jenkins.
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
                                3. Premier pipeline
                            </Link>
                            <Link href="#advanced" className="hover:text-white">
                                4. Pipeline multi-stages
                            </Link>
                            <Link href="#deploy" className="hover:text-white">
                                5. Déploiement continu avec Docker
                            </Link>
                            <Link href="#variables" className="hover:text-white">
                                6. Variables et secrets
                            </Link>
                            <Link href="#debug" className="hover:text-white">
                                7. Dépannage
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