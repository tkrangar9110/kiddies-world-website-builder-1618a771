
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Requirements", path: "/requirements" },
    { name: "Schedule", path: "/schedule" },
    { name: "Staff", path: "/staff" },
    { name: "Gallery", path: "/gallery" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/85064e33-bb10-4b81-ae99-c6209af82175.png" 
              alt="Kiddies World Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-gray-800">Kiddies World</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`${
                    isActive(item.path)
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-blue-600"
                  } px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col space-y-1 py-4">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`${
                      isActive(item.path)
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:text-blue-600"
                    } w-full justify-start px-4 py-2 text-sm font-medium`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
