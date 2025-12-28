import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#009688]  shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-white text-2xl font-bold">
          E-Shop
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-yellow-300 font-medium transition">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-yellow-300 font-medium transition">
            Products
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-300 font-medium transition">
            About
          </Link>
          <Link href="/cart" className="text-white hover:text-yellow-300 font-medium transition">
            Cart
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
