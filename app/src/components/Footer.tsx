import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full text-white mt-16"
      style={{ backgroundColor: "#009688" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm text-center md:text-left">
          تم إنجاز هذا التاسك بالكامل بواسطة{" "}
          <span className="font-bold">عبد الرحمن السمرة</span>
        </p>

        {/* Right */}
        <p className="text-sm text-center md:text-right opacity-90">
          E-Commerce Mini App • Clean UI • Responsive Design • Built with Next.js & Tailwind
        </p>
      </div>

      <div className="text-center text-xs py-3 bg-black/10">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
