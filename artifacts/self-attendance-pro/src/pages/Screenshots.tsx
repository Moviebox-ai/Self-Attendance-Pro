import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PhoneMockup } from '../components/ui/PhoneMockup';
import { motion } from 'framer-motion';

import dashboardScreenImg from '@assets/Dashboard_Screen_1784054010288.png';
import calendarScreenImg from '@assets/Calendar_Screen_1784054010227.png';
import settingScreenImg from '@assets/Setting_Screen_1784054010323.png';
import loginScreenImg from '@assets/Login_Screen_1784054010366.png';
import spinScreenImg from '@assets/Spin_Screen_1784054010401.png';
import splashScreenImg from '@assets/Splash_Screen_1784054010428.png';

export default function Screenshots() {
  const screens = [
    { src: splashScreenImg, title: "Splash Screen", desc: "A bold, energetic welcome." },
    { src: loginScreenImg, title: "Secure Login", desc: "Fast and private authentication." },
    { src: dashboardScreenImg, title: "Dashboard", desc: "Your metrics at a glance." },
    { src: calendarScreenImg, title: "Visual Calendar", desc: "Mark attendance effortlessly." },
    { src: spinScreenImg, title: "Daily Rewards", desc: "Earn AX Coins every day." },
    { src: settingScreenImg, title: "Settings & Cloud", desc: "Complete control of your data." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">App <span className="text-gradient">Gallery</span></h1>
            <p className="text-lg text-muted-foreground">Take a closer look at the crafted interface of Self Attendance PRO.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20">
            {screens.map((screen, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="mb-8 relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <PhoneMockup src={screen.src} alt={screen.title} className="transform transition-transform duration-500 group-hover:-translate-y-2" />
                </div>
                <h3 className="text-xl font-bold mb-2">{screen.title}</h3>
                <p className="text-muted-foreground text-sm text-center max-w-[260px]">{screen.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
