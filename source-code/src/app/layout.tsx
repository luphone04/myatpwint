'use client';

import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <html lang="en">
      <body>
        <SessionContextProvider supabaseClient={supabaseClient}>
          <header style={{ padding: '20px', background: '#1a237e', color: 'white' }}>
            <nav style={{ display: 'flex', gap: '20px' }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link href="/books" style={{ color: 'white', textDecoration: 'none' }}>Books</Link>
              <Link href="/author" style={{ color: 'white', textDecoration: 'none' }}>Author</Link>
              <Link href="/publisher" style={{ color: 'white', textDecoration: 'none' }}>Publisher</Link>
              <Link href="/login" style={{ color: 'white', textDecoration: 'none', marginLeft: 'auto' }}>Login</Link>
            </nav>
          </header>
          <main style={{ padding: '40px' }}>
            {children}
          </main>
        </SessionContextProvider>
      </body>
    </html>
  );
}
