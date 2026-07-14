import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Gift, DownloadCloud } from 'lucide-react';
import calendarScreenImg from '@assets/Calendar_Screen_1784054010227.png';
import { PhoneMockup } from '../components/ui/PhoneMockup';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Set Your Base Details",
      desc: "Start by entering your daily or monthly salary. Configure your standard working hours and any overtime rates. This sets the foundation for real-time calculations.",
      icon: Calendar
    },
    {
      number: "02",
      title: "Mark Daily Status",
      desc: "Open the app daily to mark your status. Choose between Present, Absent, Half-Day, Holiday, or Overtime. The visual calendar makes this take less than 3 seconds.",
      icon: TrendingUp
    },
    {
      number: "03",
      title: "Watch Earnings Grow",
      desc: "As you log days, the dashboard instantly updates your estimated salary for the month. See exactly how your overtime and leaves impact your final payout.",
      icon: Gift
    },
    {
      number: "04",
      title: "Export & Backup",
      desc: "At the end of the month, export a beautiful PDF report of your attendance. Sync your data to the cloud so you never lose your history.",
      icon: DownloadCloud
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">How it <span className="text-gradient">Works</span></h1>
            <p className="text-lg text-muted-foreground">A simple, four-step journey to taking complete control of your attendance and earnings.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-secondary border border-white/10 flex items-center justify-center text-xl font-black text-primary group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center relative lg:sticky lg:top-32"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
              <PhoneMockup src={calendarScreenImg} alt="Calendar View" />
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
