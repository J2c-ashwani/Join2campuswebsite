
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, ExternalLink, Sparkles, BookOpen, Calendar, Clock, Database, Globe, Rocket, ShieldCheck, Laptop } from "lucide-react"

export default function IndianInstituteOfAIPage() {
    const syllabus = [
        {
            week: "Week 1",
            title: "Foundation & Idea Validation",
            icon: <Sparkles className="h-5 w-5 text-indigo-600" />,
            topics: [
                "Introduction to AI tools for entrepreneurship",
                "Identifying problems and opportunities",
                "AI-powered market research techniques",
                "Validating startup ideas using AI",
            ],
        },
        {
            week: "Week 2",
            title: "Website Development & Design",
            icon: <Globe className="h-5 w-5 text-indigo-600" />,
            topics: [
                "Building websites using AI platforms (no coding)",
                "Designing professional user interfaces",
                "Creating responsive mobile-friendly designs",
                "Setting up custom domains",
            ],
        },
        {
            week: "Week 3",
            title: "Backend & Monetization",
            icon: <Database className="h-5 w-5 text-indigo-600" />,
            topics: [
                "Database setup and management",
                "Creating admin panels for content management",
                "Integrating Razorpay payment gateway",
                "Setting up subscription models",
            ],
        },
        {
            week: "Week 4",
            title: "Launch & Scale",
            icon: <Rocket className="h-5 w-5 text-indigo-600" />,
            topics: [
                "Deploying your startup to production",
                "MSME registration guidance",
                "Marketing automation with AI",
                "Scaling strategies and next steps",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-16">
            {/* Hero Section - Matching Join2Campus Gradient Theme */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 mb-12 relative overflow-hidden">
                {/* Abstract shapes for visual interest */}
                <div className="absolute top-0 right-0 p-12 opacity-10 transform rotate-12">
                    <Sparkles className="h-64 w-64" />
                </div>

                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium mb-6 border border-white/30">
                        Official Training Division
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Indian Institute of AI
                    </h1>
                    <p className="text-xl md:text-2xl text-indigo-100 mb-8 font-light">
                        The Training Division of <span className="font-semibold text-white">Join2Campus</span>
                    </p>
                    <p className="text-lg text-indigo-50 max-w-2xl mx-auto leading-relaxed">
                        Empowering the next generation of entrepreneurs with AI-powered skills.
                        Build real startups in just 30 days without writing a single line of code.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-6xl">
                {/* Course Header Card */}
                <Card className="mb-12 border-0 shadow-xl overflow-hidden rounded-2xl">
                    <CardHeader className="bg-white border-b border-gray-100 p-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <CardTitle className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                                    <BookOpen className="h-8 w-8 text-indigo-600" />
                                    Certification in AI-Powered Startup Building
                                </CardTitle>
                                <CardDescription className="text-lg text-gray-600 ml-11">
                                    A 30-Day Intensive Certification Program
                                </CardDescription>
                            </div>
                            <div className="flex gap-3">
                                <Badge variant="secondary" className="px-4 py-2 text-sm bg-indigo-50 text-indigo-700 hover:bg-indigo-100">Online</Badge>
                                <Badge variant="secondary" className="px-4 py-2 text-sm bg-purple-50 text-purple-700 hover:bg-purple-100">Live Support</Badge>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="p-8 bg-white text-gray-700 leading-relaxed">
                        <p className="mb-6 text-lg">
                            Our flagship 30-day certification program is designed to take you from idea to launch.
                            This isn't just a theoretical course—it's a <strong>hands-on startup building bootcamp</strong> where you'll
                            use AI tools to create a real, functioning business. No coding required.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                            {[
                                { icon: Clock, label: "Duration", value: "30 Days" },
                                { icon: Laptop, label: "Mode", value: "100% Practical" },
                                { icon: ShieldCheck, label: "Support", value: "MSME Reg." },
                                { icon: CheckCircle, label: "Prerequisite", value: "None" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <item.icon className="h-6 w-6 text-indigo-500 mb-2" />
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</span>
                                    <span className="font-bold text-gray-900">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Syllabus Column (Left 2/3) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="bg-indigo-100 p-2 rounded-lg text-indigo-600"><Calendar className="h-5 w-5" /></span>
                            Week-by-Week Syllabus
                        </h2>

                        <div className="space-y-4">
                            {syllabus.map((week, index) => (
                                <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-indigo-50 text-indigo-700 font-bold px-3 py-1 rounded-md text-sm whitespace-nowrap">
                                                {week.week}
                                            </div>
                                            <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                                                {week.title}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid sm:grid-cols-2 gap-2 mt-2">
                                            {week.topics.map((topic, i) => (
                                                <li key={i} className="flex items-start text-sm text-gray-600 gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Fees Column (Right 1/3) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <Card className="border-2 border-indigo-600 shadow-xl relative overflow-hidden bg-white">
                                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    BEST VALUE
                                </div>
                                <CardHeader className="text-center pb-2 bg-gradient-to-br from-indigo-50 to-purple-50">
                                    <CardTitle className="text-xl text-indigo-900">Exclusive Offer</CardTitle>
                                    <CardDescription>Seminar Exclusive / Early Bird</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center pt-6">
                                    <div className="text-4xl font-extrabold text-indigo-700 mb-1">₹15,000</div>
                                    <div className="text-sm text-gray-500 mb-6 line-through">Standard Fee: ₹22,000</div>

                                    <ul className="text-left space-y-3 mb-8 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Full Course Access</li>
                                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Lifetime Updates</li>
                                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Completion Certificate</li>
                                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> MSME Support</li>
                                    </ul>

                                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 font-bold py-6 text-lg shadow-lg hover:scale-105 transition-transform" asChild>
                                        <Link href="https://www.indianinstituteofai.com/enroll" target="_blank">
                                            Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <p className="text-xs text-gray-400 mt-4">
                                        Redirects to official enrollment form
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gray-900 text-white border-0">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        Have questions about the syllabus or batch timings?
                                    </p>
                                    <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold" asChild>
                                        <Link href="https://www.indianinstituteofai.com/contact" target="_blank">Contact Us</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center bg-gray-100 rounded-2xl p-12 text-gray-900 shadow-inner">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                        Join the cohort today and transform your idea into a reality.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="default" size="lg" className="bg-gray-900 text-white hover:bg-black px-8" asChild>
                            <Link href="https://www.indianinstituteofai.com/enroll" target="_blank">
                                Secure Your Spot
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="px-8" asChild>
                            <Link href="https://www.indianinstituteofai.com/programs" target="_blank">
                                View Full Details <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
