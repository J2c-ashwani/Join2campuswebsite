import { Lightbulb } from "lucide-react";

interface ExpertInsightProps {
    title?: string;
    children: React.ReactNode;
}

export function ExpertInsight({ title = "Ashwani's Expert Insight", children }: ExpertInsightProps) {
    return (
        <div className="my-8 overflow-hidden rounded-xl border-l-4 border-primary bg-blue-50/50 dark:bg-blue-900/10">
            <div className="flex items-center gap-2 bg-blue-100/50 dark:bg-blue-900/20 px-4 py-3 text-sm font-semibold text-primary">
                <Lightbulb className="h-4 w-4" />
                {title}
            </div>
            <div className="p-5 text-slate-700 dark:text-slate-300 italic leading-relaxed">
                {children}
            </div>
        </div>
    );
}
