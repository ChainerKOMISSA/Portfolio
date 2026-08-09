type QuizProgressionProps = {
    title: string;
    currentIndex: number; // 0-based
    total: number;
};

export default function QuizProgression({ title, currentIndex, total }: QuizProgressionProps) {
    const current = currentIndex + 1;
    const percent = Math.round((current / total) * 100);

    return (
        <div className="mb-8 flex items-center justify-between gap-6">
            <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                    Quiz en cours
                </span>
                <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
            </div>

            <div className="w-40 shrink-0 text-right">
                <span className="text-xs text-white/50">
                    Question {current} sur {total}
                </span>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                        className="h-full rounded-full bg-purple transition-all duration-300"
                        style={{ width: `${percent}%` }}
                    />
                </div>
            </div>
        </div>
    );
}