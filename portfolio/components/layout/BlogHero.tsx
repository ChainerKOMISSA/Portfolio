"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
    return (
        <section className="relative w-full py-12 px-6 bg-black-100 text-white overflow-hidden rounded-5xl">

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black-100 via-black/10 to-white/50 blur-3xl opacity-30"></div>

            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-8">

                {/* LEFT CONTENT */}
                <div className="flex-1 text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Bienvenue sur{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500">
                            mon blog
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg text-white/60 max-w-xl"
                    >
                        Un espace pour les devs curieux : vous trouverez ici mes boilerplates, des tutoriels sur
                        des outils que j&apos;ai testés et des ressources utiles. Open source, bien sûr.
                    </motion.p>

                    {/*<motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        className="mt-10 flex gap-4 flex-wrap"
                    >
                        <Link
                            href="/projects"
                            className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-medium"
                        >
                            Explorer
                        </Link>

                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-medium"
                        >
                            Me contacter
                        </Link>
                    </motion.div>*/}
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex-1 flex justify-center"
                >
                    <Image
                        src="/b5.svg"
                        alt="Code illustration"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-2xl border border-white/10"
                    />
                </motion.div>

            </div>
        </section>
    );
}