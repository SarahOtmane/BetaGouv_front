// components/layout/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="fr-container fr-mt-5w">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
