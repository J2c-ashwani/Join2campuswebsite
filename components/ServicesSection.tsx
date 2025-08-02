export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="text-gray-700 space-y-8 leading-relaxed">
          <p>
            At Join2Campus, we offer a comprehensive suite of services designed to support both aspiring students and
            our valued partner consultants throughout the study abroad journey. Our goal is to make the process
            seamless, transparent, and successful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow-md flex items-start space-x-4">
              <span className="text-indigo-600 flex-shrink-0 mt-1 text-2xl">💼</span>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">For Students</h3>
                <ul className="list-disc list-inside space-y-2 text-left">
                  <li>Personalized Counseling & Program Selection</li>
                  <li>University Application Assistance</li>
                  <li>Document Preparation & Review</li>
                  <li>Visa Guidance & Interview Preparation</li>
                  <li>Pre-Departure Briefings</li>
                  <li>Post-Arrival Support</li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-md flex items-start space-x-4">
              <span className="text-green-600 flex-shrink-0 mt-1 text-2xl">✅</span>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">For Consultants & Agencies</h3>
                <ul className="list-disc list-inside space-y-2 text-left">
                  <li>Access to Extensive Partner University Network</li>
                  <li>Dedicated Account Management</li>
                  <li>Training & Workshops on European Education Systems</li>
                  <li>Marketing & Promotional Support</li>
                  <li>Streamlined Application & Admission Process</li>
                  <li>Commission & Incentive Programs</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-8">
            We are committed to fostering successful partnerships and empowering students to achieve their global
            academic aspirations. Contact us today to learn more about how our services can benefit you.
          </p>
        </div>
      </div>
    </section>
  )
}
