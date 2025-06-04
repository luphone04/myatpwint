'use client';

import Link from 'next/link';
import './page.css'; // we'll create this file

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero-title">📚 Myat Pwint Publishing House</h1>
        <p className="hero-subtitle">
          Discover, read, rent, or publish books — an all-in-one platform for readers,
          authors, and publishers across Myanmar and beyond.
        </p>

        <div className="button-group">
          <Link href="/books" className="button primary">Explore Books</Link>
          <Link href="/author" className="button secondary">Author Portal</Link>
          <Link href="/publisher" className="button secondary">Publisher Dashboard</Link>
        </div>
      </section>
    </main>
  );
}
