import React from 'react';
import { Link, useLocation } from 'wouter';
import appIconImg from '@assets/App_icon_1784054010117.png';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/screenshots', label: 'Screenshots' },
  { href: '/faq', label: 'FAQ' },
];

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-colors" />
            <img src={appIconImg} alt="Self Attendance PRO" className="w-10 h-10 relative z-10 object-contain drop-shadow-xl" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">Self Attendance <span className="text-primary">PRO</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-primary ${
                    location === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/download"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-primary/25 flex items-center gap-2 text-sm"
          >
            <Download className="w-4 h-4" />
            Download App
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 glass-panel border-t-0 p-4 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      location === link.href ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download App Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
