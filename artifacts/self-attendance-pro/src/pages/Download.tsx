import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Smartphone, HardDrive, Star } from 'lucide-react';
import appIconImg from '@assets/App_icon_1784054010117.png';

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />
                  <img src={appIconImg} alt="Self Attendance PRO" className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-2xl" />
                </div>
                
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-4">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Secure</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Self Attendance <span className="text-primary">PRO</span></h1>
                  <p className="text-xl text-muted-foreground mb-8">Track Your Work, Own Your Time.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Version</p>
                      <p className="font-semibold text-foreground">3.0.2</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Size</p>
                      <p className="font-semibold text-foreground">18 MB</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">OS Requires</p>
                      <p className="font-semibold text-foreground">Android 7.0+</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Rating</p>
                      <p className="font-semibold text-amber-400 flex items-center justify-center md:justify-start gap-1">
                        4.8 <Star className="w-3 h-3 fill-amber-400" />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-lg shadow-primary/25">
                      <Download className="w-6 h-6" />
                      Download APK
                    </button>
                    <button className="flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/80 text-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/10 hover:-translate-y-1">
                      <Smartphone className="w-6 h-6" />
                      Play Store
                    </button>
                  </div>
                  
                </div>
              </div>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "100% Secure", desc: "Scanned and verified. No malware, no invasive tracking." },
                { icon: HardDrive, title: "Lightweight", desc: "Optimized bundle size won't bloat your device storage." },
                { icon: Star, title: "Ad-Free Premium", desc: "Enjoy a clean, uninterrupted interface while tracking." }
              ].map((feature, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-12 h-12 mx-auto rounded-full bg-secondary border border-white/5 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
