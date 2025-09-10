import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navItems = [
  { id: "home", label: "รุ่นรถ" },
  { id: "technology", label: "เทคโนโลยี" },
  { id: "promotion", label: "โปรโมชั่น" },
  { id: "afterSales", label: "บริการหลังการขาย" },
  { id: "dealer", label: "ผู้จำหน่าย" },
];

const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: string
  ) => {
    e.preventDefault();
    setCurrentPage(page);
    setIsOpen(false); // ปิดเมนูอัตโนมัติหลังจากกดเลือก
  };

  return (
    <header className="bg-white text-gray-800 p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://www.honda.co.th/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-honda%402x.d146d040.png&w=1200&q=75"
            alt="Honda Logo"
            className="h-10 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          />
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, item.id)}
                className={`hover:text-red-500 transition-colors ${
                  currentPage === item.id
                    ? "text-red-500 font-bold border-b-2 border-red-500"
                    : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="https://thvnext.bing.com/th/id/OIP.Au0_7mpqZMtQeoRL4iFkqAHaHa?w=170&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="menu" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu (Animated) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 mt-2 px-4 bg-white shadow-md">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block py-2 ${
                  currentPage === item.id
                    ? "text-red-500 font-bold"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;