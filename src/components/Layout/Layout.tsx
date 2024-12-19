import { ReactNode } from 'react';
import { NavBar } from '@/components/NavBar/NavBar';
import { Header } from '../Header/Header';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ height: '56px', flexShrink: 0 }}>
        <Header />
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Navbar */}
        <nav style={{ width: '80px', display: 'flex', flexDirection: 'column' }}>
          <NavBar />
        </nav>

        {/* Page Content */}
        <main style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>{children}</main>
      </div>
    </div>
  );
}
