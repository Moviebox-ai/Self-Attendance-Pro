import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PhoneMockup } from '../components/ui/PhoneMockup';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Star, Shield, Zap, Gift, Smartphone, Cloud, FileText, CheckCircle2 } from 'lucide-react';

import appIconImg from '@assets/App_icon_1784054010117.png';
import featureGraphicImg from '@assets/Feature_graphic_1784054010258.png';
import dashboardScreenImg from '@assets/Dashboard_Screen_1784054010288.png';
import calendarScreenImg from '@assets/Calendar_Screen_1784054010227.png';
import spinScreenImg from '@assets/Spin_Screen_1784054010401.png';
import settingScreenImg from '@assets/Setting_Screen_1784054010323.png';
import loginScreenImg from '@assets/Login_Screen_1784054010366.png';
import splashScreenImg from '@assets/Splash_Screen_1784054010428.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-12 pb-24">
              
              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8">
                  <Star className="w-4 h-4 fill-primary" />
                  <span>4.8 Rating • 10K+ Active Users</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Track Your Work,<br />
                  <span className="text-gradient">Own Your Time.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  The most rewarding attendance tracker. Mark your daily presence, estimate your salary in real-time, and earn AX Coins every day you show up.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/download" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(124,109,240,0.5)]">
                    <Download className="w-5 h-5" />
                    Download Now
                  </Link>
                  <Link href="/features" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/10">
                    See Features
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                </div>
                
                <div className="flex items-center gap-8 text-sm text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    100% Secure
                  </div>
                  <div className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-blue-400" />
                    Cloud Sync
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-amber-400" />
                    Daily Rewards
                  </div>
                </div>
              </motion.div>

              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="relative lg:ml-auto flex justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                <PhoneMockup src={dashboardScreenImg} alt="Self Attendance PRO Dashboard" className="relative z-10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ease-out" />
                
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-20 -left-12 glass-panel p-4 rounded-2xl z-30 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Est. Salary</p>
                      <p className="text-sm font-bold">₹ 8,432.67</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-32 -right-12 glass-panel p-4 rounded-2xl z-30 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Gift className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">AX Coins</p>
                      <p className="text-sm font-bold text-amber-400">342 Balance</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FEATURE GRAPHIC BANNER */}
        <section className="py-12 border-y border-white/5 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img src={featureGraphicImg} alt="Feature Graphic" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">A system that rewards <span className="text-gradient">consistency</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Four simple steps to mastering your time and maximizing your productivity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Mark Daily", desc: "Log your attendance, half-days, or overtime with a single tap.", icon: Zap },
                { step: "02", title: "Track Progress", desc: "Watch your estimated salary grow in real-time as you work.", icon: FileText },
                { step: "03", title: "Build Habits", desc: "Consistency unlocks rewards. Earn AX coins for showing up.", icon: Gift },
                { step: "04", title: "Never Miss", desc: "Export detailed PDF reports for perfect personal record keeping.", icon: Shield },
              ].map((item, i) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:bg-card/60 transition-colors"
                >
                  <div className="text-6xl font-black text-white/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110">{item.step}</div>
                  <item.icon className="w-10 h-10 text-primary mb-6 relative z-10" />
                  <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GAMIFICATION & REWARDS */}
        <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 blur-[150px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-6">
                  <Gift className="w-4 h-4" />
                  <span>Daily Rewards</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Earn <span className="text-gold-gradient">AX Coins</span> while you work.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discipline deserves recognition. Spin the daily wheel, collect AX Coins, and build a streak that pays off. Work doesn't have to be just a grind.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Daily spin wheel with up to 5 chances', 'Bonus coins for perfect attendance streaks', 'Unlock premium features with your balance'].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                      {text}
                    </li>
                  ))}
                </ul>
                <Link href="/features" className="text-amber-400 font-bold hover:text-amber-300 flex items-center gap-2 group">
                  Explore all features
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full" />
                  <PhoneMockup src={spinScreenImg} alt="Spin Wheel Rewards" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SCREENSHOT GALLERY */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Beautifully Crafted</h2>
              <p className="text-muted-foreground">A premium interface designed for daily use.</p>
            </div>

            <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar pl-4 md:pl-0 md:justify-center">
              {[dashboardScreenImg, calendarScreenImg, settingScreenImg, spinScreenImg].map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="snap-center shrink-0"
                >
                  <PhoneMockup src={src} alt={`App Screenshot ${i+1}`} className="w-[240px] md:w-[260px]" />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/screenshots" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-full font-medium transition-all border border-white/10">
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="glass-panel rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
              
              <img src={appIconImg} alt="Logo" className="w-20 h-20 mx-auto mb-8 drop-shadow-2xl relative z-10" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to take control?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
                Join over 10,000 active users who are tracking their attendance, estimating their salary, and earning rewards.
              </p>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/download" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-primary/30">
                  <Download className="w-6 h-6" />
                  Download for Android
                </Link>
                <span className="text-sm text-muted-foreground font-medium">Version 3.0.2 • 18 MB</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
