import Link from "next/link";
import {IoIosArrowRoundBack} from "react-icons/io";
import Image from "next/image";

export default function BlogPage(){
    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link href="/blog" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                <IoIosArrowRoundBack />
            </Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                {/* Header */}
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">Tutoriels envoi de mail avec NodeMailer</h1>
                </header>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="relative flex-1 flex flex-col items-center justify-center">
                        {/* Borders */}
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
                                    <p className="text-gray-300">
                                        Dans cette série de tutoriels, nous allons explorer différentes manières d’envoyer des emails directement depuis ton code, en utilisant des technologies populaires comme JavaScript, Node.js, EmailJS, ou même du simple HTML avec des services tiers. Chaque tutoriel sera pratique, accompagné d’exemples concrets et de bonnes pratiques pour t’aider à choisir la solution la plus adaptée à ton cas d’usage.

                                        Que tu travailles côté client ou serveur, tu trouveras ici de quoi apprendre à faire parler ton code par email !
                                    </p>
                                </section>

                                <section id="preparation">
                                    <h2 className="text-2xl font-bold mb-4 text-white">2. Préparation du projet</h2>
                                    <p className="text-gray-300">
                                        Avant tout, assurez-vous que votre projet est bien hébergé sur GitHub. <br/>
                                        Le repository doit être à jour avec le code prêt à être déployé. <br/>
                                        Voici un aperçu d’un projet prêt :
                                    </p><br/>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                                        <Image src="/github1.png" alt="Capture du dépôt GitHub" fill className="object-cover"/>
                                    </div>
                                </section>

                                <section id="configuration">
                                    <h2 className="text-2xl font-bold mb-4 text-white">3. Déploiement sur Vercel</h2>
                                    <p className="text-gray-300">
                                        1. Allez sur <a href="https://vercel.com" className="text-blue-400 underline" target="_blank">vercel.com</a> et connectez-vous avec votre compte GitHub. <br/>
                                        2. Cliquez sur <code className="text-blue-400">Add New → Project</code> pour commencer.
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercel2.png" alt="Import depuis GitHub" fill className="object-cover"/>
                                    </div>
                                    <p className="text-gray-300">
                                        3. Sélectionnez le repository contenant votre projet. <br />
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercel3.png" alt="Configuration du framework" fill className="object-cover"/>
                                    </div>
                                    <p className="text-gray-300">
                                        4. Configurez les options du projet si nécessaire (framework utilisé, build command, etc.). Vercel détecte souvent automatiquement les bons réglages.
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercel4.png" alt="Déploiement en cours" fill className="object-cover"/>
                                    </div>
                                    <p className="text-gray-300">
                                        5. Cliquez sur <code className="text-blue-400">Deploy</code>. Vercel va alors lancer le déploiement automatiquement.
                                    </p>
                                    <p className="text-gray-300">
                                        Une fois terminé, vous verrez un lien vers votre site en ligne. Ce lien est immédiatement actif et peut être partagé.
                                    </p>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                    <p className="text-gray-300 mb-6">
                                        Et voilà ! 🚀 Vous venez de déployer votre application front-end gratuitement avec Vercel. <br/>
                                        Grâce à son intégration avec GitHub, chaque push sur votre branche principale peut automatiquement mettre à jour votre site. <br/>
                                        Pensez à consulter les options avancées de Vercel pour personnaliser vos environnements et optimiser vos performances.
                                    </p>
                                    <Link href="/blog" className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
                                        ← Retour au blog
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar TOC */}
                    <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                        <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
                        <nav className="flex flex-col gap-2 text-sm text-gray-400">
                            <Link href="#intro" className="hover:text-white">1. Introduction</Link>
                            <Link href="#preparation" className="hover:text-white">2. Préparation du projet</Link>
                            <Link href="#configuration" className="hover:text-white">3. Déploiement sur Vercel</Link>
                            <Link href="#conclusion" className="hover:text-white">Conclusion</Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </main>
    )
}