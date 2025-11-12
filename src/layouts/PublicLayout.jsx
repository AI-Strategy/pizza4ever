import React from 'react';
import ChatbotFAB from '../components/ChatbotFAB';

const PublicLayout = ({ children }) => {
  return (
    <div>
      {/* A placeholder for a shared header */}
      <header className="bg-background-dark text-white p-4">
        <h1 className="text-xl">Pizza 4 Ever</h1>
      </header>

      <main>{children}</main>

      {/* A placeholder for a shared footer */}
      <footer className="bg-background-dark text-white p-4 mt-8">
        <p>© 2024 Pizza 4 Ever</p>
      </footer>

      <ChatbotFAB />
    </div>
  );
};

export default PublicLayout;
