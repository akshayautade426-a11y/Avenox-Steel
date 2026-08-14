import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import AnimatedLogo from './AnimatedLogo';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [, setLocation] = useLocation();

  const handleRequestQuote = () => {
    const subject = encodeURIComponent('Request for Steel Detailing / Estimating Quote');
    const body = encodeURIComponent(
      'Hello Avenox Steel Team,\n\n' +
        'I would like to request a quote for a steel detailing / estimating project.\n\n' +
        'Project Details:\n' +
        '- Project / Scope:\n' +
        '- Location:\n' +
        '- Timeline:\n' +
        '- Estimated Quantity / Material Requirements:\n' +
        '- Any other notes:\n\n' +
        'Please share pricing, scope, and the next steps.\n\n' +
        'Best regards,\n' +
        '[Your Name]\n' +
        '[Company Name]\n' +
        '[Phone Number]\n' +
        '[Email Address]'
    );

    window.location.href = `mailto:estimating@avenoxsteel.com?subject=${subject}&body=${body}`;
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Why Avenox', href: '/why-avenox' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string, hash?: string) => {
    setIsMobileMenuOpen(false);
    setLocation(href);
    try {
      if (hash) {
        setTimeout(() => {
          const target = document.getElementById(hash.replace('#', ''));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 0);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    } catch (e) {
      /* ignore in non-browser env */
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo (transparent / updated asset) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="flex items-center justify-center cursor-pointer bg-transparent border-0 p-0"
            aria-label="Go to homepage"
          >
            <div style={{ width: 210 }}>
              <AnimatedLogo size={210} animated={false} suppressAAnimation={true} />
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <Button onClick={handleRequestQuote} className="bg-primary text-white hover:bg-primary/90">
            Request a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <Button onClick={handleRequestQuote} className="w-full bg-primary text-white hover:bg-primary/90 mt-2">
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
