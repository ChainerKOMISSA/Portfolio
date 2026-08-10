import Link from "next/link";
import { FaTrophy, FaArrowRotateLeft } from "react-icons/fa6";
import {QuizQuestionData} from "@/data/types";
type QuizResultProps = {
    quizTitle: string;
    score: number;
    total: number;
    questions: QuizQuestionData[];
    answers: Record<string, string>;
    onRestart: () => void;
};

export default function QuizResult({ quizTitle, score, total,questions, answers, onRestart }: QuizResultProps) {
    const percent = Math.round((score / total) * 100);

    return (
        <div className="mx-auto max-w-4xl">
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

            <div className="mt-10 space-y-6">
                {questions.map((question, index) => {
                    const selectedOptionId = answers[question.id];

                    return (
                        <div
                            key={question.id}
                            className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-10"
                        >
                            <p className="text-sm font-medium uppercase tracking-widest text-white/40">
                                Question {index + 1}
                            </p>
                            <p className="mt-2 text-lg font-medium leading-8 md:text-xl">
                                {question.prompt}
                            </p>

                            {question.code && (
                                <pre className="mt-6 overflow-x-auto rounded-xl bg-black/40 p-5 text-sm leading-6 text-white/80">
                                    <code>{question.code}</code>
                                </pre>
                            )}

                            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                                {question.options.map((option) => {
                                    const isCorrect = option.id === question.correctOptionId;
                                    const isSelected = option.id === selectedOptionId;
                                    const isWrongSelected = isSelected && !isCorrect;

                                    return (
                                        <div
                                            key={option.id}
                                            className={`rounded-2xl border p-5 text-left transition ${
                                                isCorrect
                                                    ? "border-violet-500/60 bg-violet-500/10"
                                                    : isWrongSelected
                                                        ? "border-white/5 bg-white/[0.015] opacity-50"
                                                        : "border-white/5 bg-white/[0.03]"
                                            }`}
                                        >
                                            <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                                                Option {option.id}
                                            </span>
                                            <div className="mt-1 font-semibold">{option.label}</div>

                                            {isCorrect && (
                                                <div className="mt-2 text-xs font-medium text-violet-300">
                                                    Bonne réponse
                                                </div>
                                            )}
                                            {isWrongSelected && (
                                                <div className="mt-2 text-xs font-medium text-white/40">
                                                    Votre réponse
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}