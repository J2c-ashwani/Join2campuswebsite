import CountriesSection from "@/components/CountriesSection"

export const metadata = {
  title: "European Study Destinations | Join2Campus",
  description:
    "Explore study opportunities in France, Germany, Ireland, Spain, Cyprus, and Malta. Expert guidance for European education with Join2Campus.",
  keywords:
    "study in Europe, France education, Germany universities, Ireland colleges, Spain study abroad, Cyprus education, Malta universities",
}

export default function CountriesPage() {
  return (
    <div className="pt-20">
      <CountriesSection />

      {/* Additional Country Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose European Education?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Quality Education</h3>
              <p className="text-gray-700">
                European universities are globally recognized for their academic excellence, innovative research, and
                comprehensive programs that prepare students for successful careers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Cultural Diversity</h3>
              <p className="text-gray-700">
                Experience rich cultural heritage, learn new languages, and build international networks while studying
                in some of the world's most beautiful and historic cities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Affordable Education</h3>
              <p className="text-gray-700">
                Many European countries offer high-quality education at affordable costs, with numerous scholarship
                opportunities and reasonable living expenses.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Career Opportunities</h3>
              <p className="text-gray-700">
                Graduate with internationally recognized degrees and access to Europe's thriving job market, with
                opportunities for post-study work visas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
