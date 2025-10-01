import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">My App</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
