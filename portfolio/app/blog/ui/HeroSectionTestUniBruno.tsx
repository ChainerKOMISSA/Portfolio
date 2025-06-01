"use client";
import Link from "next/link";
import {IoIosArrowRoundBack} from "react-icons/io";

export function HeroSectionOne() {
    return (
        <>
            <Link href="/blog" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                <IoIosArrowRoundBack /></Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
            {/* Header */}
            <header className="w-full px-4 md:px-8 py-6">
                <h1 className="text-5xl font-bold text-slate-500 text-center">Tester ses APIs avec Bruno</h1>
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
                                <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                                <p className="text-gray-300">
                                    Dans cet article, nous allons découvrir comment écrire des tests unitaires efficaces
                                    avec Bruno, un outil simple et puissant pour tester des APIs.<br/><br/>
                                    Bruno est un client API open-source conçu pour être:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start space-x-2">
                                        <svg className="w-4 h-4 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                        <span><b>Compatible avec Git</b> puisque les collections d’API sont enregistrées sous forme de fichiers texte simples.</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg className="w-4 h-4 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                        <span><b>Utilisable hors ligne</b> car il fonctionne entièrement hors ligne, sans nécessité de se connecter avec un cloud.</span>
                                    </li>
                                </ul>
                            </section>
                            <section id="install">
                                <h2 className="text-2xl font-bold mb-4 text-white">2. Installation de Bruno</h2>
                                <p className="text-gray-300">
                                    Pour commencer, téléchargez Bruno depuis son <a className="text-blue-400 underline" href="https://docs.usebruno.com/introduction/what-is-bruno" target="_blank" rel="noopener noreferrer">
                                    site officiel</a> ou installez-le via npm si vous utilisez la version CLI.
                                </p><br/>
                                <p>Lorsque vous l&apos;ouvrez, la page d&apos;acceuil s&apos;affiche comme ceci:</p><br/>
                                <div className="bg-[url('/bruno1.png')] bg-cover bg-center h-96 w-full"></div>
                            </section>

                            <section id="writing-tests">
                                <h2 className="text-2xl font-bold mb-4 text-white">3. Écriture de tests</h2>
                                <p className="text-gray-300 mb-6">
                                    Une fois Bruno installé, vous pouvez commencer à créer vos premiers tests. Voici les étapes pour écrire un test unitaire avec Bruno :
                                </p>
                                <h3 className="text-xl font-semibold text-white mb-2">Etape 1 : Créer une collection</h3>
                                <p className="text-gray-300 mb-4">
                                    Une collection dans Bruno représente un ensemble de requêtes liées à un projet ou une API spécifique.
                                    Pour en créer une :
                                </p>
                                <ul className="list-disc list-inside text-gray-300 mb-6">
                                    <li>Cliquez sur <strong>“New Collection”</strong>.</li>
                                    <li>Ensuite choisissez un emplacement sur votre ordinateur où vous allez enregistrer vos fichiers de tests.
                                    <em>Personnellement j&apos;enregistre ma collection dans le dossier de mon projet</em></li>
                                    <li>Donnez-lui un nom (<code>Tests Bruno</code> par exemple) puis validez.</li>
                                </ul>
                                <div className="bg-[url('/bruno2.png')] bg-cover bg-center h-96 w-full mb-4"></div>
                                <h3 className="text-xl font-semibold text-white mb-2">Etape 2 : Ajouter une requête</h3>
                                <p className="text-gray-300 mb-4">
                                    À l’intérieur de votre collection, vous pouvez créer des requêtes pour tester vos endpoints :
                                </p>
                                <ul className="list-disc list-inside text-gray-300 mb-6">
                                    <li>Faites un clic droit sur la collection ou un dossier, puis cliquez sur <strong>“New Request”</strong>.</li>
                                    <li>Choisissez le type de requête (GET, POST, etc.) et donnez-lui un nom.</li>
                                    <li>Renseignez l’URL de l’API et les éventuels paramètres.</li>
                                </ul>
                                <p className="text-gray-300 mb-4">Il est tout à fait possible d&apos;ajouter ou de modifier la requête après sa création.</p>
                                <div className="bg-[url('/bruno5.png')] bg-cover bg-center h-96 w-full mb-4">

                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">Etape 3 : Écrire un test (assertion)</h3>
                                <p className="text-gray-300 mb-4">
                                    Bruno permet d’ajouter des assertions dans l&apos;onglet <b>&quot;Asserts&quot;</b> ou dans l&apos;onglet <b>&quot;Tests&quot;</b> de chaque requête. Vous pouvez, par exemple, vérifier que le code retour est bien 200 :
                                </p>
                                <pre className="bg-neutral-900 text-green-300 p-4 rounded-md overflow-auto text-sm mb-4">
                                    <code>
                                        {`response.status === 200`}
                                    </code>
                                </pre>
                                <p className="text-gray-300 mb-4">
                                    Il est aussi possible d’écrire des assertions plus complexes sur le contenu du JSON de la réponse :
                                </p>
                                <pre className="bg-neutral-900 text-green-300 p-4 rounded-md overflow-auto text-sm mb-6">
                                    <code>
                                        {`const data = response.json();\ndata.user.id !== undefined`}
                                    </code>
                                </pre>
                                <p className="text-gray-300 mb-4">Exemple: Dans l&apos;onglet Assert: </p>
                                <div className="bg-[url('/bruno6.png')] bg-cover bg-center h-96 w-full mb-4"></div>
                                <h3 className="text-xl font-semibold text-white mb-2">Etape 4 : Lancer le test</h3>
                                <p className="text-gray-300 mb-4">
                                    Une fois la requête et les assertions prêtes, cliquez sur la flèche en haut à droite. Vous verrez la réponse s&apos;afficher, accompagnée d’un indicateur de succès ou d’échec de votre test.
                                </p>
                                <div className="bg-[url('/bruno7.png')] bg-cover bg-center h-96 w-full mb-4"></div>
                                <p className="text-gray-300 mt-6">
                                    🎉 Bravo, vous avez créé et exécuté votre premier test avec Bruno ! C’est simple, lisible et versionnable.
                                </p>
                            </section>

                            <section id="good-practices">
                                <h2 className="text-2xl font-bold mb-4 text-white">4. Bonnes pratiques</h2>
                                <p className="text-gray-300 mb-6">
                                    Pour tirer le meilleur parti de Bruno et maintenir des tests efficaces, voici quelques bonnes pratiques à suivre :
                                </p>
                                <section id="nommer">
                                    <h3 className="text-xl font-semibold text-white mb-2" >4.1. Nommer clairement chaque requête</h3>
                                    <p className="text-gray-300 mb-4">
                                        Donnez des noms explicites à vos requêtes, par exemple: <br/>
                                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto text-sm mb-4">
                                    <code>GET /users =&gt; liste des utilisateurs</code>
                                    </pre>  ou
                                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto text-sm mb-4 mt-4">
                                        <code>POST /login =&gt; authentification</code>
                                    </pre>Cela facilite la lecture et la navigation dans votre collection.
                                    </p>
                                </section>
                                <section id="organiser">
                                    <h3 className="text-xl font-semibold text-white mb-2">4.2. Organiser les requêtes par dossiers</h3>
                                    <p className="text-gray-300 mb-2">
                                        Utilisez des dossiers pour regrouper les requêtes par ressource ou par fonctionnalité.<br/>
                                        Par exemple :
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300 mb-2">
                                        <li><code>/auth</code> pour l&apos;authentification</li>
                                        <li><code>/users</code> pour les utilisateurs</li>
                                        <li><code>/products</code> pour les produits</li>
                                    </ul>etc.
                                </section>
                                <section id="separer">
                                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">4.3. Séparer les scénarios de test</h3>
                                    <p className="text-gray-300 mb-4">
                                        Créez une requête pour chaque scénario : succès, erreurs, données manquantes, etc. Cela évite d’écraser les données et rend les tests plus précis.
                                    </p>
                                </section>
                                <section id="variables">
                                    <h3 className="text-xl font-semibold text-white mb-2">4.4. Utiliser des variables d’environnement</h3>
                                    <p className="text-gray-300 mb-4">
                                        L&apos;utilisation de variables d&apos;environnement dans Bruno permet de rendre vos requêtes plus dynamiques, réutilisables et faciles à maintenir.
                                        <br/>Par exemple, au lieu d&apos;écrire plusieurs fois l&apos;URL de votre API, vous pouvez créer une variable <code>baseUrl</code> et l&apos;utiliser dans vos requêtes.
                                    </p>
                                    <section id="creer">
                                        <h4 className="text-lg font-medium text-white mb-2">Étapes pour créer des variables d&apos;environnement :</h4>

                                        <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
                                            <li>
                                                Dans Bruno, sélectionnez votre collection.
                                            </li>
                                            <li>
                                                Cliquez sur le bouton <b>No Environement</b> en haut à droite de la fenêtre.
                                            </li>
                                            <li>
                                                Lorsque vous cliquez sur <code>Configure</code> une boîte de dialogue s&apos;ouvre
                                                où vous avez le choix entre: <b>Créer un environnement</b> et <b>Importer un environnement</b>
                                            </li>
                                            <div className="bg-[url('/bruno8.png')] bg-cover bg-center h-96 w-full mb-4"></div>
                                            <li>
                                                Choisissez <b>Créer un environnement</b>  et donnez-lui un nom (par exemple : <strong>Local</strong>, <strong>Production</strong>, etc.)
                                            </li>
                                            <div className="bg-[url('/bruno9.png')] bg-cover bg-center h-96 w-full mb-4"></div>
                                            <li>
                                                Dans le fichier YAML généré à l&apos;emplacement de votre collection, vous pouvez ajouter vos variables comme ceci :
                                                <pre className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm mt-2 mb-2">{`apiUrl: "http://localhost:3000"`}</pre>
                                                <p>Il est aussi possible (et plus rapide) de déclarer les variables directement à partir de l&apos;interface graphique. Dans ce cas
                                                    vous cliquez sur <b>Ajouter une variable</b> et vous lui donnez un nom et une valeur : </p>
                                            </li>
                                            <div className="bg-[url('/bruno10.png')] bg-cover bg-center h-96 w-full mb-4"></div>
                                            <li>
                                                Une fois sauvegardé, sélectionnez l’environnement dans la barre supérieure de Bruno.
                                            </li>
                                        </ol>
                                    </section>
                                    <section id="utiliser">
                                        <h4 className="text-lg font-medium text-white mb-2">Exemple d’utilisation dans une requête :</h4>

                                        <p className="text-gray-300 mb-4">
                                            Dans votre requête, au lieu d’écrire l’URL complète, utilisez la variable entre double-accolades :
                                        </p>
                                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm my-2">{`{{apiUrl}}`}</pre>
                                        et dans le cas d&apos;une route :
                                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm my-2">{`{{apiUrl}}/api/users`}</pre>

                                        <p className="text-gray-300 mt-4">
                                            Cela rend vos tests portables entre différents environnements (développement, préprod, production). Vous pouvez également changer facilement le <code>authToken</code> sans toucher aux requêtes.
                                        </p>
                                        <div className="bg-[url('/bruno11.png')] bg-cover bg-center h-96 w-full mb-4"></div>

                                    </section>
                                </section>
                                <section id="documenter">
                                    <h3 className="text-xl font-semibold text-white mb-2">4.5. Documenter vos tests</h3>
                                    <p className="text-gray-300 mb-4">
                                        Ajoutez une description à chaque requête pour expliquer son objectif ou ses cas d’usage. Cela est utile pour les autres développeurs… et pour vous dans 3 mois !
                                    </p>
                                </section>
                                <section id="verifier">
                                    <h3 className="text-xl font-semibold text-white mb-2">4.6. Vérifier les réponses attendues</h3>
                                    <p className="text-gray-300 mb-4">
                                        Ne vous contentez pas de vérifier le statut HTTP. Assurez-vous que les champs clés du JSON de réponse sont bien présents et cohérents (types, valeurs, structure).
                                    </p>
                                </section>
                                <section id="versionner">
                                    <h3 className="text-xl font-semibold text-white mb-2">4.7. Versionner vos tests avec Git</h3>
                                    <p className="text-gray-300 mb-4">
                                        Puisque Bruno enregistre tout dans des fichiers texte, vous pouvez (et devriez) versionner vos tests dans votre dépôt Git, comme du code classique.
                                    </p>
                                </section>
                            </section>

                            <section id="conclusion">
                                <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                <p className="text-gray-300 mb-4">
                                    Bruno est une alternative moderne, rapide et minimaliste aux outils traditionnels de test d&apos;API.
                                    Grâce à sa compatibilité avec Git, sa capacité à fonctionner hors ligne et sa simplicité d&apos;utilisation,
                                    il s&apos;intègre parfaitement dans des workflows de développement professionnels.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Que vous testiez une API REST ou un projet plus complexe, Bruno vous permet de :
                                </p>
                                <ul className="list-disc list-inside text-gray-300 mb-4">
                                    <li>Structurer vos collections de tests comme du code</li>
                                    <li>Automatiser les scénarios de test</li>
                                    <li>Configurer facilement différents environnements</li>
                                    <li>Collaborer efficacement via Git</li>
                                </ul>
                                <p className="text-gray-300 mb-6">
                                    N&apos;hésitez pas à l&apos;essayer dans vos prochains projets!
                                </p>
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
        </>
    );
}

export default HeroSectionOne;