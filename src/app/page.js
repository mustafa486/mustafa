

// app/page.js (or your Home page)

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Honda Atlas Pakistan</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Discover the perfect blend of style, performance, and innovation with Honda cars designed for Pakistan.
        </p>
        <a

          className="inline-block bg-white text-red-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Explore Models
        </a>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">About Honda Atlas Pakistan</h2>
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Honda Atlas Cars Pakistan Limited is a joint venture between Honda Motor Company Limited Japan, and the Atlas Group of Companies, Pakistan.
          Since its inception, Honda Atlas has delivered quality vehicles with cutting-edge technology to Pakistani customers.
        </p>
      </section>

      {/* Popular Models Section */}
      <section className="bg-white py-16 px-6">
        <h3 className="text-2xl font-semibold text-center mb-10">Popular Honda Models</h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Model Card */}
          <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://www.honda.com.pk/images/landingimages/images/civicnew/civic.webp"
              alt="Honda Civic"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Honda Civic</h4>
              <p className="text-gray-600 mb-4">Compact, stylish, and fuel-efficient sedan.</p>
              <a

                className="text-red-700 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://www.honda.com.pk/images/landingimages/images/accord/accord.webp"
              alt="Honda Accord"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Honda Accord</h4>
              <p className="text-gray-600 mb-4">Midsize sedan with comfort and performance.</p>
              <a

                className="text-red-700 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
              src="https://www.honda.com.pk/images/landingimages/images/brv/BRV.jpg"
              alt="Honda CR-V"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Honda CR-V</h4>
              <p className="text-gray-600 mb-4">Versatile SUV with advanced features.</p>
              <a

                className="text-red-700 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="bg-red-700 text-white py-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Drive Your Dream Honda?</h3>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us Today
        </a>
      </section>
    </main>
  );
}

