export default function Footer() {
  return (
    <footer className="bg-gray-800 text-yellow-300 text-center py-4 mt-10">
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}