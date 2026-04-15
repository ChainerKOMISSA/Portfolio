"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogHero() {
    return (
        <section className="relative w-full p-24 flex  px-6 bg-[#0f172a] text-white overflow-hidden">

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#121640] via-[#1f8ce3]/20 to-[#f39d8e]/20 blur-3xl opacity-30"></div>

            <div className="relative max-w-5xl text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    Bienvenue sur{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f8ce3] to-[#f39d8e]">
            mon blog
          </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-lg text-white/60 max-w-2xl text-left"
                >
                    Un espace pour les devs curieux : vous trouverez ici mes boilerplates, des tutoriels sur
                    des outils que j&apos;ai testé et des liens vers des plateformes, des outils bref des
                    ressources utiles que j&apos;ai découvert. Open source, bien sûr.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 flex justify-start gap-4 flex-wrap"
                >
                    <Link
                        href="/projects"
                        className="px-6 py-3 rounded-xl bg-purple hover:bg-purple/80 transition font-medium"
                    >
                        Explorer
                    </Link>

                    <Link
                        href="/contact"
                        className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-medium"
                    >
                        Me contacter
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}