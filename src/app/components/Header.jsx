import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-yellow-600 text-white flex justify-between items-center px-6 py-4">

      <nav className="space-x-6">
        <Link href="/">Home </Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/feedback">Feedback</Link>
      </nav>
    </header>
  );
}