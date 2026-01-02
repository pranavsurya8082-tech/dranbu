import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Settings, LogIn, LogOut, UserPlus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAdmin, user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">A</span>
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate">Dr Anbu Arumugam</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Primary navigation">
            <Link
              to="/"
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Contact
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all flex items-center gap-1.5"
              >
                <Settings className="h-4 w-4" />
                Admin
              </Link>
            )}
            
            {/* Auth buttons - Desktop */}
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all flex items-center gap-1.5"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            ) : (
              <Link
                to="/auth"
                className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-2 transition-all flex items-center gap-1.5"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-1">
            {/* Mobile: Auth button */}
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-muted/60 transition-colors"
                aria-label="Sign out"
              >
                <LogOut className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            ) : (
              <Link
                to="/auth"
                className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-muted/60 transition-colors"
                aria-label="Sign in"
              >
                <LogIn className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            )}

            {/* Mobile: direct Admin button (so it doesn't get missed behind the menu) */}
            {isAdmin && (
              <Link
                to="/admin"
                className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-muted/60 transition-colors"
                aria-label="Open admin dashboard"
              >
                <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/articles" className="text-sm font-medium hover:text-accent transition-colors">
                Articles
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
                About Me
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors">
                Contact
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <Settings className="h-4 w-4" />
                  Admin
                </Link>
              )}
              
              {/* Auth links - Mobile menu */}
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1.5 text-left"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              ) : (
                <>
                  <Link to="/auth" className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1.5">
                    <LogIn className="h-4 w-4" />
                    Sign In
                  </Link>
                  <Link to="/auth" className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1.5">
                    <UserPlus className="h-4 w-4" />
                    Create Account
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
