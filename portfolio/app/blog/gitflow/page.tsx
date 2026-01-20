import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

export default function BlogPage() {
    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link href="/blog" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                <IoIosArrowRoundBack />
            </Link>

            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">
                        Comprendre Gitflow : structurer efficacement son workflow Git
                    </h1>
                </header>

                <div className="px-4 py-10 md:py-20 w-full">
                    <div className="w-full space-y-16">

                        {/* INTRO */}
                        <section id="intro">
                            <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                            <p className="text-gray-300">
                                Quand un projet grandit ou qu’on travaille en équipe, gérer les branches Git peut vite
                                devenir chaotique. Gitflow est une méthodologie qui propose une organisation claire
                                des branches afin de mieux structurer le développement, les correctifs et les mises en production.
                            </p>
                        </section>

                        {/* DEFINITION */}
                        <section id="definition">
                            <h2 className="text-2xl font-bold mb-4 text-white">2. C’est quoi Gitflow ?</h2>
                            <p className="text-gray-300">
                                Gitflow est un modèle de workflow Git popularisé par Vincent Driessen.
                                Il repose sur des branches ayant chacune un rôle précis : production, développement,
                                fonctionnalités, correctifs et releases.
                            </p>
                        </section>

                        {/* BRANCHES */}
                        <section id="branches">
                            <h2 className="text-2xl font-bold mb-4 text-white">3. Les branches principales</h2>
                            <ul className="space-y-2 text-gray-300 list-disc ml-6">
                                <li><strong>main</strong> → contient le code en production</li>
                                <li><strong>develop</strong> → contient les fonctionnalités validées pour la prochaine version</li>
                                <li><strong>feature/*</strong> → développement de nouvelles fonctionnalités</li>
                                <li><strong>release/*</strong> → préparation d’une mise en production</li>
                                <li><strong>hotfix/*</strong> → correction rapide en production</li>
                            </ul>
                        </section>

                        {/* INSTALL */}
                        <section id="install">
                            <h2 className="text-2xl font-bold mb-4 text-white">4. Installer Gitflow</h2>
                            <CodeBlock language="bash" code={`# Mac
brew install git-flow

# Ubuntu
sudo apt install git-flow`} />
                        </section>

                        {/* INIT */}
                        <section id="init">
                            <h2 className="text-2xl font-bold mb-4 text-white">5. Initialiser Gitflow</h2>
                            <p className="text-gray-300 mb-2">Dans un dépôt Git existant :</p>
                            <CodeBlock language="bash" code={`git flow init`} />
                        </section>

                        {/* FEATURE */}
                        <section id="feature">
                            <h2 className="text-2xl font-bold mb-4 text-white">6. Exemple : créer une fonctionnalité</h2>
                            <CodeBlock language="bash" code={`git flow feature start login-page

# développement...

git flow feature finish login-page`} />
                        </section>

                        {/* CONCLUSION */}
                        <section id="conclusion">
                            <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                            <p className="text-gray-300 mb-6">
                                Gitflow apporte une structure claire et professionnelle à la gestion des branches Git.
                                Il est particulièrement adapté aux projets d’équipe et aux applications ayant un cycle
                                de versions bien défini. Bien utilisé, il améliore la collaboration, réduit les erreurs
                                et rend les mises en production plus sûres.
                            </p>

                            <Link
                                href="/blog"
                                className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                            >
                                ← Retour au blog
                            </Link>
                        </section>

                    </div>
                    <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                        <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
                        <nav className="flex flex-col gap-2 text-sm text-gray-400">
                            <Link href="#intro" className="hover:text-white">
                                1. Introduction
                            </Link>
                            <Link href="#preparation" className="hover:text-white">
                                2. Préparation du projet
                            </Link>
                            <Link href="#configuration" className="hover:text-white">
                                3. Configuration du déploiement
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