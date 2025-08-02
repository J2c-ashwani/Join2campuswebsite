import { testimonialsData } from "@/lib/data"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">"{testimonial.quote}"</p>
              <p className="font-semibold text-indigo-600">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
