import { ExternalLink } from "lucide-react";

interface Reference {
    title: string;
    url: string;
}

interface ReferenceListProps {
    references: Reference[];
}

export function ReferenceList({ references }: ReferenceListProps) {
    return (
        <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-4 text-slate-700 dark:text-slate-300">
                Official Sources & References
            </h3>
            <ul className="space-y-2">
                {references.map((ref, index) => (
                    <li key={index}>
                        <a
                            href={ref.url}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="flex items-start gap-2 text-sm text-slate-600 hover:text-primary transition-colors group"
                        >
                            <ExternalLink className="h-4 w-4 mt-0.5 shrink-0 opacity-50 group-hover:opacity-100" />
                            <span className="break-all">{ref.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <p className="text-xs text-slate-400 mt-4 italic">
                *Disclaimer: Visa rules and tuition fees are subject to change. Always verify with official embassy sources.
            </p>
        </div>
    );
}
