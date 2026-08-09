import {QuizOption} from "@/data/types";

type QuizQuestionProps = {
    prompt: string;
    code?: string;
    options: QuizOption[];
    selectedOptionId: string | null;
    onSelect: (id: string) => void;
};

export default function QuizQuestion({
                                         prompt,
                                         code,
                                         options,
                                         selectedOptionId,
                                         onSelect,
                                     }: QuizQuestionProps) {
    return (
        <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-10">
            <p className="text-lg font-medium leading-8 md:text-xl">{prompt}</p>

            {code && (
                <pre className="mt-6 overflow-x-auto rounded-xl bg-black/40 p-5 text-sm leading-6 text-white/80">
                    <code>{code}</code>
                </pre>
            )}

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {options.map((option) => {
                    const isSelected = option.id === selectedOptionId;
                    return (
                        <button
                            key={option.id}
                            type="button"
                            onClick={() => onSelect(option.id)}
                            className={`rounded-2xl border p-5 text-left transition ${
                                isSelected
                                    ? "border-violet-500/60 bg-violet-500/10"
                                    : "border-white/5 bg-white/[0.03] hover:border-white/15"
                            }`}
                        >
                            <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                                Option {option.id}
                            </span>
                            <div className="mt-1 font-semibold">{option.label}</div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}