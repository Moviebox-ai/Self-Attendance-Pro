import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Shield, Zap, Gift, Cloud, FileText, PieChart, Smartphone, Moon, Sun, Download, History } from 'lucide-react';
import dashboardScreenImg from '@assets/Dashboard_Screen_1784054010288.png';
import { PhoneMockup } from '../components/ui/PhoneMockup';

export default function Features() {
  const features = [
    {
      title: "Real-time Salary Estimate",
      desc: "Watch your hard work translate to numbers. Enter your daily or monthly base, and the app calculates your exact earnings based on presents, half-days, and overtime.",
      icon: PieChart,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Attendance Tracking",
      desc: "A highly visual calendar makes logging simple. Mark yourself Present, Absent, Half-Day, Holiday, or Overtime with a single intuitive tap.",
      icon: History,
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      title: "AX Coins Gamification",
      desc: "We reward consistency. Spin the daily wheel, collect AX Coins, and build a rewarding habit of showing up to work.",
      icon: Gift,
      color: "text-amber-400",
      bg: "bg-amber-500/10"
    },
    {
      title: "Detailed Statistics",
      desc: "Get a comprehensive breakdown of your work month. See total working days, exact hours of overtime, and accumulated leave.",
      icon: FileText,
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      title: "PDF Report Export",
      desc: "Generate professional PDF reports of your monthly attendance and estimated salary. Perfect for freelance invoicing or personal records.",
      icon: Download,
      color: "text-rose-400",
      bg: "bg-rose-500/10"
    },
    {
      title: "Cloud Sync & Backup",
      desc: "Your data is precious. Seamlessly backup your attendance history to the cloud and restore it instantly on a new device.",
      icon: Cloud,
      color: "text-sky-400",
      bg: "bg-sky-500/10"
    },
    {
      title: "100% Secure & Private",
      desc: "Your financial and attendance data stays yours. Built with robust encryption to ensure complete privacy of your personal records.",
      icon: Shield,
      color: "text-zinc-400",
      bg: "bg-zinc-500/10"
    },
    {
      title: "Dark & Light Mode",
      desc: "A gorgeous, carefully crafted interface that respects your system settings and looks stunning in any lighting condition.",
      icon: Moon,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Powerful Features for <br/><span className="text-gradient">Daily Discipline</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Self Attendance PRO combines the utility of an enterprise HR tool with the beautiful, rewarding experience of a premium mobile game.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-24">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-panel p-6 rounded-3xl hover:bg-card/60 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sticky top-32 hidden lg:block"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
              <PhoneMockup src={dashboardScreenImg} alt="Dashboard Feature" />
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
