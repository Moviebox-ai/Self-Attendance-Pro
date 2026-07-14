import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Is Self Attendance PRO really free to use?",
    a: "Yes! The core attendance tracking and salary estimation features are completely free. You can earn AX Coins through daily usage which can unlock additional premium features."
  },
  {
    q: "How is my estimated salary calculated?",
    a: "The app calculates your salary based on the base daily/monthly amount you set. It automatically factors in full days (Present), half days, and overtime hours multiplied by your specific overtime rate."
  },
  {
    q: "What are AX Coins and how do I earn them?",
    a: "AX Coins are our reward currency. You earn them by spinning the daily wheel (up to 5 spins/day) and by maintaining perfect attendance streaks. They can be used for in-app perks."
  },
  {
    q: "Can I export my attendance records?",
    a: "Absolutely. You can generate professional PDF reports of your monthly attendance, which is perfect for submitting to HR or keeping for your own records."
  },
  {
    q: "Is my data backed up if I change phones?",
    a: "Yes. By creating an account and enabling Cloud Sync, your data is securely backed up. Simply log in on your new device and all your records will be restored instantly."
  },
  {
    q: "Does the app support dark mode?",
    a: "Yes, Self Attendance PRO features a beautifully crafted dark mode that is easy on the eyes. It can follow your system settings or be toggled manually."
  }
];

function FAQItem({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-white/10 rounded-2xl bg-card/40 backdrop-blur-sm overflow-hidden transition-colors hover:bg-card/60">
      <button 
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
      >
        <span className="font-semibold text-lg">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Frequently Asked <span className="text-gradient">Questions</span></h1>
            <p className="text-lg text-muted-foreground">Everything you need to know about Self Attendance PRO.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i} 
                q={faq.q} 
                a={faq.a} 
                isOpen={openIndex === i} 
                onClick={() => setOpenIndex(openIndex === i ? null : i)} 
              />
            ))}
          </div>

          <div className="mt-16 text-center bg-secondary/30 rounded-3xl p-8 border border-white/5">
            <h3 className="font-semibold text-xl mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">We're here to help you get the most out of the app.</p>
            <a href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all">
              Contact Support
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
