import Link from "next/link";
import { FaTrophy, FaArrowRotateLeft } from "react-icons/fa6";

type QuizResultProps = {
    quizTitle: string;
    score: number;
    total: number;
    onRestart: () => void;
};

export default function QuizResult({ quizTitle, score, total, onRestart }: QuizResultProps) {
    const percent = Math.round((score / total) * 100);

    return (
        <div className="mx-auto max-w-xl rounded-3xl border border-white/5 bg-white/[0.02] p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                <FaTrophy className="h-6 w-6" />
            </div>

            <h1 className="mt-6 text-2xl font-bold">{quizTitle} terminé</h1>
            <p className="mt-2 text-white/60">
                Vous avez obtenu {score} bonnes réponses sur {total} ({percent}%).
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
                <button
                    type="button"
                    onClick={onRestart}
                    className="flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10"
                >
                    <FaArrowRotateLeft className="h-3.5 w-3.5" />
                    Recommencer
                </button>

                <Link
                    href="/blog/quiz"
                    className="rounded-xl bg-purple px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                    Retour aux quiz
                </Link>
            </div>
        </div>
    );
}