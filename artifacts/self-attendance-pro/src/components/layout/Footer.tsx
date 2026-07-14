import React from 'react';
import { Link } from 'wouter';
import { Shield, Mail, MapPin, ExternalLink, Download } from 'lucide-react';
import appIconImg from '@assets/App_icon_1784054010117.png';

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8 mt-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={appIconImg} alt="Self Attendance PRO" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-bold text-xl">Self Attendance <span className="text-primary">PRO</span></h3>
                <p className="text-xs text-muted-foreground">by YOGESH</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Track your work, own your time. The most beautiful and rewarding way to manage your attendance, track salary, and build discipline.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full text-amber-400 border border-amber-500/20">
                <Shield className="w-4 h-4" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full text-foreground border border-white/10">
                <span>Version 3.0.2</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Product</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/screenshots" className="hover:text-primary transition-colors">Screenshots</Link></li>
              <li><Link href="/download" className="hover:text-primary transition-colors flex items-center gap-2">Download App <Download className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Legal & Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/delete-account" className="hover:text-destructive transition-colors">Delete Account</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} YOGESH. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
