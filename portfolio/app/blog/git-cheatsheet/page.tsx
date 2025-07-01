import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

const blocCode = `
"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiClipboard, FiCheck } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Tu peux changer le thème ici

export default function CodeBlock({ code, language = "javascript" }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative text-sm rounded-md overflow-hidden">
            <CopyToClipboard text={code} onCopy={handleCopy}>
                <button
                    className="absolute top-2 right-2 z-10 text-xs bg-gray-800 hover:bg-gray-700 text-white p-2 rounded transition"
                    aria-label="Copy to clipboard"
                >
                    {copied ? <FiCheck className="text-green-400" /> : <FiClipboard />}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                language={language}
                style={dracula}
                customStyle={{
                    padding: "1.5rem 1rem 1rem", // top right/left bottom
                    borderRadius: "0.5rem",
                    backgroundColor: "#282a36",
                    margin: 0,
                }}
                wrapLines={true}
                wrapLongLines={true}
            >
                {code}
            </SyntaxHighlighter>

        </div>
    );
}
`;

const exempleCode = `
import CodeBlock from "@/components/CodeBlock" // Le chemin vers ton composant CodeBlock

const exemple = \`function helloWorld() {
  console.log("Hello, world!")
}\`

export default function Page() {
  return (
    <div className="p-6">
      <CodeBlock code={exemple} language="javascript" />
    </div>
  )
}
`;


export default function BlogPage() {
    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link href="/blog" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"><IoIosArrowRoundBack /></Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">Cheat Sheet Github</h1>
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
                                    <h2 className="text-2xl font-bold mb-4 text-white">1. Installation de Github</h2>
                                    <p className="text-gray-300">
                                        GitHub met à disposition plusieurs applications desktop pratiques, ainsi qu&apos;un outil
                                        en ligne de commande toujours à jour:
                                    </p>
                                        <ul className="space-y-2 my-2">
                                            <li className="flex items-start space-x-2">
                                                <svg className="w-4 h-4 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                                <span><code className="text-blue-400">GitHub Desktop</code> une interface graphique simple et intuitive, disponible sur Windows et macOS.</span>
                                            </li>
                                            <li className="flex items-start space-x-2">
                                                <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor"
                                                     viewBox="0 0 20 20">
                                                    <path fillRule="evenodd"
                                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                                <span><code className="text-blue-400">GitHub CLI</code> une interface en ligne de commande puissante,
                                                maintenue à jour automatiquement, pour gérer dépôts, issues, pull requests, releases et bien
                                                d&apos;autres directement depuis le terminal.</span>
                                            </li>
                                        </ul>
                                    <p className="text-gray-300">
                                        Cette combinaison d&apos;outils facilite le travail collaboratif sur GitHub, en
                                        proposant une prise en main rapide aux débutants grâce à GitHub Desktop, et une
                                        flexibilité maximale aux utilisateurs avancés grâce à la GitHub CLI.<br/><br/>
                                        Liens d&apos;installation de Github:
                                    </p>
                                    <ul className="space-y-2 my-2">
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-5 h-5 text-white mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                            </svg>
                                            <span>GitHub pour Windows: <code className="text-blue-400"><a href="https://github.com/apps/desktop" target="_blank">windows.github.com</a></code></span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-5 h-5 text-white mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                            </svg>
                                            <span>GitHub pour Mac: <code className="text-blue-400"><a href="https://github.com/apps/desktop" target="_blank">mac.github.com</a></code></span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-5 h-5 text-white mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                            </svg>
                                            <span>Git pour toutes les plate-formes: <code className="text-blue-400"><a href="https://git-scm.com/" target="_blank">git-scm.com</a></code></span>
                                        </li>
                                    </ul>
                                </section>

                                <section id="setup">
                                    <h2 className="text-2xl font-bold mb-4 text-white">2. Configuration</h2>
                                    <p className="text-gray-300">Pour configurer les informations de l&apos;utilisateur pour tous les
                                        dépôts locaux, vous allez avoir besoin de ces commandes:
                                    </p>
                                    <ul className="space-y-2 ml-4 my-2">
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-yellow-500 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" >
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
                                            </svg>
                                            <span>Définir le nom que vous voulez associer à toutes vos opérations de commit: </span>
                                        </li>
                                        <CodeBlock language="bash" code={`$ git config --global user.name "[nom]"`}/>
                                    </ul>
                                    <ul className="space-y-2 ml-4 my-2">
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-yellow-500 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" >
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
                                            </svg>
                                            <span>Définir l’email que vous voulez associer à toutes vos opérations de commit: </span>
                                        </li>
                                        <CodeBlock language="bash" code={`$ git config --global user.email "[adresse email]"`}/>
                                    </ul>
                                    <ul className="space-y-2 my-2">
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-green-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>
                                            </svg>
                                            <span>Un commit est un enregistrement des fichiers à un moment précis, accompagné d&apos;un message décrivant
                                                les changements.</span>
                                        </li>
                                    </ul>
                                </section>

                                <section id="composant">
                                    <h2 className="text-2xl font-bold mb-4 text-white">3. Création de dépôts</h2>
                                    <p className="text-gray-300">Pour configurer les informations de l&apos;utilisateur pour tous les
                                        dépôts locaux, vous allez avoir besoin de ces commandes:
                                    </p>
                                    <ul className="space-y-2 ml-4 my-2">
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-yellow-500 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" >
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
                                            </svg>
                                            <span>Démarrer un nouveau dépôt ou en obtenir un depuis une URL existante:  </span>
                                        </li>
                                        <CodeBlock language="bash" code={`$ git config --global user.name "[nom]"`}/>
                                    </ul>
                                    <ul className="space-y-2 ml-4 my-2">
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-yellow-500 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" >
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
                                            </svg>
                                            <span>Définir l’email que vous voulez associer à toutes vos opérations de commit: </span>
                                        </li>
                                        <CodeBlock language="bash" code={`$ git config --global user.email "[adresse email]"`}/>
                                    </ul>
                                    <ul className="space-y-2 my-2">
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-green-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>
                                            </svg>
                                            <span>Un dépôt GitHub est un espace en ligne où sont stockés le code source d’un projet,
                                                son historique de modifications et ses ressources associées.</span>
                                        </li>
                                    </ul>
                                </section>

                                <section id="exemple">
                                    <h2 className="text-2xl font-bold mb-4 text-white">4. Utiliser le composant dans une page</h2>
                                    <p className="text-gray-300">
                                        Voici un exemple d&apos;utilisation du composant CodeBlock dans une page:
                                    </p>
                                    <CodeBlock code={exempleCode} language="javascript"/>
                                    <h3 className="text-xl font-semibold mt-10 mb-2 text-white">Les langages les plus utiles pour CodeBlock</h3>
                                    <table className="text-sm text-left text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
                                        <thead className="bg-gray-800 text-gray-100">
                                        <tr>
                                            <th className="px-4 py-3 border-b border-gray-700">Types de code</th>
                                            <th className="px-4 py-3 border-b border-gray-700">Langage (language)</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-gray-900">
                                        <tr className="border-b border-gray-700">
                                            <td className="px-4 py-2">Commandes terminal</td>
                                            <td className="px-4 py-2">bash</td>
                                        </tr>
                                        <tr className="border-b border-gray-700">
                                            <td className="px-4 py-2">HTML</td>
                                            <td className="px-4 py-2">html</td>
                                        </tr>
                                        <tr className="border-b border-gray-700">
                                            <td className="px-4 py-2">CSS</td>
                                            <td className="px-4 py-2">css</td>
                                        </tr>
                                        <tr className="border-b border-gray-700">
                                            <td className="px-4 py-2">Javascript (client)</td>
                                            <td className="px-4 py-2">javascript</td>
                                        </tr>
                                        <tr className="border-b border-gray-700">
                                            <td className="px-4 py-2">Nodejs (backend)</td>
                                            <td className="px-4 py-2">javascript</td>
                                        </tr>
                                        <tr className="border-b border-gray-700">
                                            <td className="px-4 py-2">Typescript</td>
                                            <td className="px-4 py-2">typescript</td>
                                        </tr>
                                        <tr className="border-b border-gray-700">
                                            <td className="px-4 py-2">JSON</td>
                                            <td className="px-4 py-2">json</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Markdown</td>
                                            <td className="px-4 py-2">markdown</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-gray-300 mt-2">
                                        Pour avoir une idée des différents thèmes que tu pourrais utiliser pour tes blocs de code, tu peux
                                        utiliser <a href="https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/" className="text-blue-400 underline">ce site</a>.
                                    </p>

                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                    <p className="text-gray-300 mb-6">
                                        Afficher du code sur un site web devient simple et propre grâce à un composant
                                        comme <code className="text-blue-400">CodeBlock</code>. Avec la possibilité de copier en un
                                        clic et de préciser le langage, tu améliores l&apos;expérience de lecture et de partage
                                        de contenu technique.
                                    </p>
                                    <Link
                                        href="/blog"
                                        className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                                    >
                                        ← Retour au blog
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
