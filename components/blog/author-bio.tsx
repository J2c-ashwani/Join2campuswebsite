import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Author } from "@/lib/blog-data";

export function AuthorBio({ author }: { author: Author }) {
    return (
        <div className="my-10 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
            <Avatar className="h-20 w-20 border-2 border-white shadow-sm">
                <AvatarImage src={author.image} alt={author.name} />
                <AvatarFallback className="text-xl bg-primary/10 text-primary">AK</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{author.name}</h3>
                    <p className="text-sm font-medium text-primary">{author.role}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-2xl">
                    {author.bio}
                </p>
            </div>
        </div>
    );
}
