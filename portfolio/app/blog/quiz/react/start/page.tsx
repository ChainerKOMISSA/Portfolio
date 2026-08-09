import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { reactQuiz } from "@/data/quiz/react";
import QuizPlayer from "@/components/layout/Quiz/QuizPlayer";

export default function ReactQuizPage() {
    return (
        <>
            <header
                className={"fixed top-0 right-0 z-30 h-16 py-2 flex items-center gap-6 px-6\n   " +
                    "     bg-black-100/80 backdrop-blur-md border-b border-white/5\n    " +
                    "    transition-all duration-300\n      " +
                    "  left-0"}>
                <Link
                    href="/blog/quiz"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm
                    text-white/50 hover:text-white hover:bg-white/8 transition"
                >
                    <IoIosArrowRoundBack size={15} />
                    <span>Retour</span>
                </Link>
            </header>

            <main className="mt-10 min-h-screen bg-black-100 px-6 py-12 text-white">
                <QuizPlayer quiz={reactQuiz} />
            </main>
        </>
    );
}