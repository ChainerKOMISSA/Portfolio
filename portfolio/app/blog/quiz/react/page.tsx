"use client";

import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaClock, FaListUl, FaChartBar, FaTrophy, FaArrowRight } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { ReactNode } from "react";

function Stat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
    return (
        <div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-violet-400/80">
                {icon}
                {label}
            </div>
            <div className="mt-1.5 text-lg font-semibold">{value}</div>
        </div>
    );
}

export default function ReactPage() {
    return (
        <>
            <header
                className={"fixed top-0 right-0 z-30 h-16 py-2 flex items-center gap-6 px-6\n   " +
                    "     bg-black-100/80 backdrop-blur-md border-b border-white/5\n    " +
                    "    transition-all duration-300\n      " +
                    "  left-0"}>
                <a
                    href="/blog/quiz"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm
                    text-white/50 hover:text-white hover:bg-white/8 transition"
                >
                    <IoIosArrowRoundBack size={15} />
                    <span>Retour</span>
                </a>
            </header>

            <main className="mt-10 min-h-screen bg-black-100 text-white px-6 py-12">
                <section className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {/* LEFT COLUMN */}
                        <div className="lg:col-span-2">
                            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                                Architecture
                                <br />
                                <span className="text-transparent bg-clip-text bg-purple">React Avancée</span>
                            </h1>

                            <p className="mt-5 max-w-xl leading-7 text-white/60">
                                Évaluez votre maîtrise des concepts d&apos;architecture complexes, de l&apos;optimisation
                                des performances au state management à grande échelle.
                            </p>

                            <div className="mt-10 rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                                <h2 className="text-lg font-semibold">Ce que vous allez tester</h2>
                                <ul className="mt-6 space-y-5">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                                            <IoCheckmarkCircle className="h-4 w-4" />
                                        </span>
                                        <span className="text-sm leading-6 text-white/70">
                                            La compréhension approfondie du cycle de vie des composants et des{" "}
                                            <strong>Hooks personnalisés</strong> avancés.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                                            <IoCheckmarkCircle className="h-4 w-4" />
                                        </span>
                                        <span className="text-sm leading-6 text-white/70">
                                            Stratégies d&apos;optimisation des performances avec{" "}
                                            <strong>useMemo, useCallback</strong> et le routage asynchrone.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                                            <IoCheckmarkCircle className="h-4 w-4" />
                                        </span>
                                        <span className="text-sm leading-6 text-white/70">
                                            Architecture d&apos;état global et patterns d&apos;injection de dépendances via{" "}
                                            <strong>Context API</strong>.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="flex flex-col gap-5">
                            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
                                <h2 className="text-lg font-semibold">Détails du quiz</h2>

                                <div className="mt-6 grid grid-cols-2 gap-6">
                                    <Stat icon={<FaClock className="h-3.5 w-3.5" />} label="Durée" value="15 mins" />
                                    <Stat icon={<FaListUl className="h-3.5 w-3.5" />} label="Questions" value="20" />
                                    <Stat icon={<FaChartBar className="h-3.5 w-3.5" />} label="Difficulté" value="Expert" />
                                    <Stat icon={<FaTrophy className="h-3.5 w-3.5" />} label="Points max" value="500 XP" />
                                </div>

                                <Link
                                    href="/blog/quiz/react/start"
                                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-purple/40 px-5 py-3 text-sm font-semibold text-purple transition hover:opacity-90"
                                >
                                    Commencer le quiz
                                    <FaArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>

                            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
                                <div className="flex items-start gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-400">
                                        <FaTrophy className="h-4 w-4" />
                                    </span>
                                    <div>
                                        <h3 className="text-sm font-semibold text-violet-300">Prêt à relever le défi ?</h3>
                                        <p className="mt-1.5 text-xs leading-5 text-white/50">
                                            Obtenez un score de 80% ou plus pour débloquer le badge exclusif
                                            d&apos;Architecture React.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}