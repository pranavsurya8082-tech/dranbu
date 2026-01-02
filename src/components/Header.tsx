import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Settings, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

const Header = ({ variant = "solid" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAdmin, user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const isTransparent = variant === "transparent";

  return (
    <header className={`${isTransparent ? 'absolute top-0 left-0 right-0 z-50' : 'sticky top-0 z-50 bg-background border-b border-border'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">A</span>
            </div>
            <span className={`text-lg font-semibold ${isTransparent ? 'text-white' : 'text-foreground'}`}>
              Dr. Anbu.
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Primary navigation">
            <Link
              to="/"
              className={`text-sm font-medium px-4 py-2 transition-colors ${isTransparent ? 'text-white hover:text-white/80' : 'text-foreground hover:text-muted-foreground'}`}
            >
              Home
            </Link>
            <span className={`text-xs ${isTransparent ? 'text-white/30' : 'text-muted-foreground/30'}`}>•</span>
            <Link
              to="/about"
              className={`text-sm font-medium px-4 py-2 transition-colors ${isTransparent ? 'text-white/70 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}
            >
              About Me
            </Link>
            <span className={`text-xs ${isTransparent ? 'text-white/30' : 'text-muted-foreground/30'}`}>•</span>
            <Link
              to="/contact"
              className={`text-sm font-medium px-4 py-2 transition-colors ${isTransparent ? 'text-white/70 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Contact
            </Link>
            <span className={`text-xs ${isTransparent ? 'text-white/30' : 'text-muted-foreground/30'}`}>•</span>
            <Link
              to="/about"
              className={`text-sm font-medium px-4 py-2 transition-colors ${isTransparent ? 'text-white/70 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Services
            </Link>
            {isAdmin && (
              <>
                <span className={`text-xs ${isTransparent ? 'text-white/30' : 'text-muted-foreground/30'}`}>•</span>
                <Link
                  to="/admin"
                  className={`text-sm font-medium px-4 py-2 transition-colors flex items-center gap-1.5 ${isTransparent ? 'text-white/70 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <Settings className="h-4 w-4" />
                  Admin
                </Link>
              </>
            )}
          </nav>

          {/* Right side - Menu icon */}
          <div className="flex items-center gap-4">
            {/* Desktop auth */}
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className={`text-sm ${isTransparent ? 'text-white/70 hover:text-white hover:bg-white/10' : ''}`}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </Button>
              ) : (
                <Link
                  to="/auth"
                  className={`text-sm font-medium px-4 py-2 transition-colors ${isTransparent ? 'text-white/70 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Sign In
                </Link>
              )}
            </div>
            
            {/* Hamburger menu lines */}
            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 transition-all ${isTransparent ? 'bg-white' : 'bg-foreground'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 transition-all ${isTransparent ? 'bg-white' : 'bg-foreground'} ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 transition-all ${isTransparent ? 'bg-white' : 'bg-foreground'} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t animate-fade-in ${isTransparent ? 'border-white/10' : 'border-border'}`}>
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              <Link to="/" className={`text-sm font-medium transition-colors ${isTransparent ? 'text-white' : 'text-foreground'}`}>
                Home
              </Link>
              <Link to="/about" className={`text-sm font-medium transition-colors ${isTransparent ? 'text-white/70' : 'text-muted-foreground'}`}>
                About Me
              </Link>
              <Link to="/contact" className={`text-sm font-medium transition-colors ${isTransparent ? 'text-white/70' : 'text-muted-foreground'}`}>
                Contact
              </Link>
              {isAdmin && (
                <Link to="/admin" className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${isTransparent ? 'text-white/70' : 'text-muted-foreground'}`}>
                  <Settings className="h-4 w-4" />
                  Admin
                </Link>
              )}
              {user ? (
                <button
                  onClick={handleSignOut}
                  className={`text-sm font-medium transition-colors flex items-center gap-1.5 text-left ${isTransparent ? 'text-white/70' : 'text-muted-foreground'}`}
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              ) : (
                <Link to="/auth" className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${isTransparent ? 'text-white/70' : 'text-muted-foreground'}`}>
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;