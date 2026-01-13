import { getAllPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "European Education Blog | Expert Guides by Ashwani Kumar",
    description: "Read expert insights, comprehensive country guides, and student success stories about studying in Europe. Authored by Ashwani Kumar, MD of Join2Campus.",
};

export default function BlogIndexPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
            <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Expert Education Insights
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                    Your ultimate resource for studying in Europe. In-depth guides, real student experiences, and expert advice from our Managing Director.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.length > 0 ? (
                    posts.map((post) => <BlogCard key={post.id} post={post} />)
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <p className="text-xl text-slate-500">No articles found. Stay tuned for our first comprehensive guide!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
