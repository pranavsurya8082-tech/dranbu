import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <a href="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">A</span>
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate">Dr Anbu Arumugam</span>
            </a>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <a href="/" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Home
            </a>
            <a href="/articles" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Articles
            </a>
            <a href="/about" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              About Me
            </a>
            <a href="/contact" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Contact
            </a>
            <a href="/admin" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Admin
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 sm:p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="/" className="text-sm font-medium hover:text-accent transition-colors">
                Home
              </a>
              <a href="/articles" className="text-sm font-medium hover:text-accent transition-colors">
                Articles
              </a>
              <a href="/about" className="text-sm font-medium hover:text-accent transition-colors">
                About Me
              </a>
              <a href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
                Contact
              </a>
              <a href="/admin" className="text-sm font-medium hover:text-accent transition-colors">
                Admin
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
