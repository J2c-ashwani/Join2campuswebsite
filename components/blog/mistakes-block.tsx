import { AlertTriangle } from "lucide-react";

interface MistakeItem {
    title: string;
    description: string;
}

interface MistakesBlockProps {
    mistakes: MistakeItem[];
}

export function MistakesBlock({ mistakes }: MistakesBlockProps) {
    return (
        <div className="my-10">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-red-600 mb-6">
                <AlertTriangle className="h-8 w-8" />
                Common Mistakes Students Make
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
                {mistakes.map((mistake, index) => (
                    <div
                        key={index}
                        className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/50 hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 text-lg">
                            {index + 1}. {mistake.title}
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                            {mistake.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
