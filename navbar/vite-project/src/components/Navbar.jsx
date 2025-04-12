import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 md:px-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">OrgName</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Courses</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Resources</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
        </div>

        {/* Mobile Menu Toggle */}
        {/* medium size k upar ye hidden h -breakpoint(md:...*/}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {/* medium size k upar ye hidden h -breakpoint(md:... */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Courses</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Resources</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Login</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
