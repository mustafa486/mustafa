// app/about/page.js (or wherever your About page is)

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Image on top */}
      <img
        src="https://honda.com.pk/images/2019/10/hondainpakistan-img-1.jpg"
        alt="Honda Atlas Pakistan"
        className="w-full rounded-lg mb-8 object-cover"
      />

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-8">Honda Atlas Pakistan</h1>

      {/* Content paragraphs */}
      <div className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-800 leading-relaxed">
        <p>
          Honda Atlas Cars Pakistan Limited is a joint venture between Honda Motor Company Limited Japan, and the Atlas Group of Companies, Pakistan.
        </p>
        <p>
          The company was incorporated on November 04, 1992 and joint venture agreement was signed on August 05, 1993. The ground breaking ceremony was held on April 17, 1993 and within a record time of 11 months, construction and erection of machinery was completed. The first car rolled off the assembly line on May 26, 1994. Official inauguration was done by the then President of Pakistan, Sardar Farooq Ahmad Khan Leghari. Mr.Kawamoto, President of Honda Motor Company Limited Japan was also present to grace the occasion. The company is listed in Karachi, Lahore, and Islamabad Stock Exchanges.
        </p>
        <p>
          On July 14, 1994, car bookings started at six dealerships in Karachi, Lahore, and Islamabad. Since then the dealerships network has expanded and now the company has thirty-seven 3S (Sales, Service and Spare Parts), twenty 2S (Service and Spare Parts), and five 1S (Spare Parts) authorized dealerships network in all major cities of Pakistan.
        </p>
        <p>
          All dealerships are constructed in accordance with the standards defined by Honda World over.
        </p>
        <p>
          Percentage of local parts conforms to the government's policy. Local vendors are continuously patronized to develop parts locally. The quality of local parts is thoroughly checked to meet stringent international standards.
        </p>
        <p>
          We always strive to give outstanding service to our valued customers. In addition to providing regular service to customers, the company also regularly conducts Service Campaigns to facilitate customer's need for service. This has given our customers absolute confidence in our cars which is clearly evident from the ever increasing sale volumes.
        </p>
        <p>
          It is the constant endeavor of Honda Atlas Cars (Pakistan) Limited to achieve No .1 Customer satisfaction. Honda Atlas Cars (Pakistan) Limited is committed to meet customer expectations and to provide good value for money.
        </p>
        <p>
          Currently, we are offering Honda Accord, Honda CR-V, Honda Civic (Three variant), Honda HR-V (Two variants), Honda BR-V, and Honda City (Three variant) in wide range of colors with advanced technological features.
        </p>
        <p>
          Company Registration number: 0028815 National Tax Number: 0829237-0
        </p>
        <p>
          <strong>Factory / Head Office</strong><br />
          43 km, Multan Road, Manga Mandi, Lahore. Ph: (042) 35384671-80, Fax: (042) 35384691-92 E-mail: info@honda.com.pk
        </p>
        <p>
          <strong>Registered Office</strong><br />
          1-Mcleod Road, Lahore, Ph: (042) 37225015-17, Fax: (042) 37233518
        </p>
        <p>
          <strong>Regional Offices</strong><br />
          1. Lahore Office<br />
          HONDA Atlas Cars (Pakistan) Limited Asia House, 19 – C & D, Block L, Gulberg III, Main Ferozepur Road, Lahore. Ph: (042) 35694851-3 Fax: (042) 35694854<br /><br />
          2. Karachi Office<br />
          HONDA Atlas Cars (Pakistan) Limited (Regional Office ‐ Karachi) 5th floor, Tower A, Technology Park, Shahrah e Faisal, Karachi.<br /><br />
          3. Islamabad Office<br />
          HONDA Atlas Cars (Pakistan) Limited (Regional Office ‐ Islamabad) Shirazi Trading Company, Plot # 41, East End Block, Ataturk Avenue, Blue Area, Islamabad.
        </p>
      </div>

      {/* Social media links */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-medium mb-4">Connect with us</h2>
        <ul className="space-y-3">
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
    </main>
  );
}
