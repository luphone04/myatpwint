'use client';

import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      router.push('/publisher');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  useEffect(() => {
  const checkAccess = async () => {
    if (!session) return;

    const email = session.user.email;
    const { data, error } = await supabase
      .from('publishers')
      .select('email')
      .eq('email', email)
      .single();

    if (error || !data) {
      alert('❌ You are not authorized to access the publisher interface.');
      await supabase.auth.signOut();
    } else {
      router.push('/publisher');
    }
  };

    checkAccess();
  }, [session]);


  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>🔐 Publisher Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
      />
      <button onClick={handleLogin} style={{ width: '100%' }}>Login</button>
    </div>
  );
}
