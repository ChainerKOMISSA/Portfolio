"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {Quiz} from "@/data/types";
import QuizQuestion from "./QuizQuestion";
import QuizProgression from "./QuizProgress";
import QuizResult from "./QuizResult";

type Answers = Record<string, string>;

export default function QuizPlayer({ quiz }: { quiz: Quiz }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = quiz.questions[currentIndex];
    const total = quiz.questions.length;
    const isLast = currentIndex === total - 1;

    function handleSelect(optionId: string) {
        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
    }

    function goPrevious() {
        setCurrentIndex((i) => Math.max(0, i - 1));
    }

    function goNext() {
        if (isLast) {
            setIsFinished(true);
            return;
        }
        setCurrentIndex((i) => Math.min(total - 1, i + 1));
    }

    function restart() {
        setAnswers({});
        setCurrentIndex(0);
        setIsFinished(false);
    }

    if (isFinished) {
        const score = quiz.questions.reduce(
            (acc, q) => acc + (answers[q.id] === q.correctOptionId ? 1 : 0),
            0
        );
        return (
            <QuizResult quizTitle={quiz.title} score={score} total={total} onRestart={restart} />
        );
    }

    return (
        <div className="mx-auto max-w-4xl">
            <QuizProgression title={quiz.title} currentIndex={currentIndex} total={total} />

            <QuizQuestion
                prompt={currentQuestion.prompt}
                code={currentQuestion.code}
                options={currentQuestion.options}
                selectedOptionId={answers[currentQuestion.id] ?? null}
                onSelect={handleSelect}
            />

            <div className="mt-8 flex items-center justify-between">
                <button
                    type="button"
                    onClick={goPrevious}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <FaArrowLeft className="h-3.5 w-3.5" />
                    Précédent
                </button>

                <button
                    type="button"
                    onClick={goNext}
                    disabled={!answers[currentQuestion.id]}
                    className="flex items-center gap-2 rounded-xl bg-purple px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    {isLast ? "Terminer" : "Suivant"}
                    <FaArrowRight className="h-3.5 w-3.5" />
                </button>
            </div>
        </div>
    );
}