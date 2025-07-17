import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-purple-600 text-white flex justify-between items-center px-6 py-4">
      <h2 className="text-2xl font-bold">My Website</h2>
      <nav className="space-x-6">
        <Link href="/">Home </Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}