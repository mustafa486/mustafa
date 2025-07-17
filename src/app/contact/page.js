// app/contact/page.js (or wherever your Contact page is)

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-center mb-6">Contact Honda Atlas Pakistan</h1>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div>
          <h2 className="text-xl font-medium mb-2">Social Media</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com/hondaatlascars/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                📘 Facebook: @hondaatlascars
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hondaatlas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                📸 Instagram: @hondaatlas
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-2">Contact Details</h2>
          <ul className="space-y-1 text-gray-700">
            <li>📞 Phone: +92-42-35941701-10</li>
            <li>✉️ Email: info@honda.com.pk</li>
            <li>🏢 Address: 43-Km, Multan Road, Manga Mandi, Lahore, Pakistan</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
