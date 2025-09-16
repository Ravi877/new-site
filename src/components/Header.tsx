import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-heading font-bold text-xl text-content-primary hover:text-content-secondary transition-colors duration-200"
          >
            Modern Blog
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`font-ui font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-content-primary' 
                  : 'text-content-secondary hover:text-content-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-ui font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-content-primary' 
                  : 'text-content-secondary hover:text-content-primary'
              }`}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;