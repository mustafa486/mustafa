import Card from '../components/Card';

const products = [
  {
    title: 'Honda Civic',
    image: 'https://www.honda.com.pk/images/landingimages/images/civicnew/civic.webp',
    description: 'Compact and stylish with great fuel efficiency.',
  },
  {
    title: 'Honda Accord',
    image: 'https://www.honda.com.pk/images/landingimages/images/accord/accord.webp',
    description: 'A midsize sedan that blends performance and comfort.',
  },
  {
    title: 'Honda BR-V',
    image: 'https://www.honda.com.pk/images/landingimages/images/brv/BRV.jpg',
    description: 'Versatile SUV with modern design and features.',
  },
];

export default function ProductsPage() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Honda Models</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((car, idx) => (
          <Card key={idx} {...car} />
        ))}
      </div>
    </main>
  );
}