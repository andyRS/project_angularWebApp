import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon, 
  MagnifyingGlassIcon,
  SparklesIcon,
} from '../ui/Icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Tendencias', path: '/categoria/tendencias' },
    { name: 'Tutoriales', path: '/categoria/tutoriales' },
    { name: 'Comparativas', path: '/categoria/comparativas' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
              aria-label="IA Trends Blog - Inicio"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-tech rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-tech p-2 rounded-lg">
                  <SparklesIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-gradient">
                  IA Trends
                </span>
                <span className="text-xs text-neutral-600 font-medium tracking-wide">
                  Blog de Inteligencia Artificial
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
                aria-label="Buscar artículos"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>

              {/* Newsletter CTA */}
              <Link
                to="/newsletter"
                className="btn-premium text-sm"
              >
                Newsletter
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-white border-t border-neutral-200 shadow-xl">
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-neutral-200">
                <Link
                  to="/newsletter"
                  className="block w-full btn-premium text-center"
                >
                  Suscribirse al Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 p-6 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-4 pb-4 border-b border-neutral-200">
              <MagnifyingGlassIcon className="h-6 w-6 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar artículos sobre IA..."
                className="flex-1 text-lg outline-none placeholder:text-neutral-400"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-neutral-500 hover:text-neutral-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4 text-sm text-neutral-600">
              Prueba buscar: "ChatGPT", "Machine Learning", "Tutoriales IA"
            </div>
          </div>
        </div>
      )}

      {/* Spacer para header fijo */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
