import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <Card className="h-full overflow-hidden border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:shadow-slate-900/50 flex flex-col">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    {/* Fallback color if no image, or use a real placeholder logic */}
                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-400">
                            No Image
                        </div>
                    )}
                </div>
                <CardHeader className="p-5 pb-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                        ))}
                    </div>
                    <h3 className="line-clamp-2 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {post.title}
                    </h3>
                </CardHeader>
                <CardContent className="p-5 pt-2 flex-grow">
                    <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
                        {post.excerpt}
                    </p>
                </CardContent>
                <CardFooter className="p-5 pt-0 border-t border-slate-100 dark:border-slate-900 mt-auto flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <time>{post.publishedAt}</time>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-primary font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        Read article <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
