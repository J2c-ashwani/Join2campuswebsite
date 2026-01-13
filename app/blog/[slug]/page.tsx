import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import { AuthorBio } from "@/components/blog/author-bio";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

// Generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | Join2Campus`,
        description: post.excerpt,
        openGraph: {
            type: "article",
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
            authors: [post.author.name],
        },
    };
}


export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] w-full bg-slate-900">
                {post.coverImage && (
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="container relative z-10 flex h-full flex-col justify-end pb-12 text-white max-w-4xl mx-auto px-4">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Badge key={tag} className="bg-primary hover:bg-primary/90 text-white border-0 text-sm py-1 px-3">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-slate-300">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white border border-white/20">
                                {post.author.name.substring(0, 2)}
                            </div>
                            <span className="font-medium text-white">{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{post.publishedAt}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container px-4 py-12 max-w-4xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to all articles
                </Link>

                {/* Main Article Content - ensuring prose styling */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:shadow-md">
                    {post.content}
                </div>

                {/* Divider */}
                <hr className="my-12 border-slate-200 dark:border-slate-800" />

                {/* Author Bio */}
                <AuthorBio author={post.author} />
            </div>
        </article>
    );
}
