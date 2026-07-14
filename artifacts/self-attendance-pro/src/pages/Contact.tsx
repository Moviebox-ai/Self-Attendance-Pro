import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-lg text-muted-foreground">Have a question, feedback, or need support? We're here to help.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            
            {/* Info Side */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-3xl">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">Our team typically responds within 24 hours.</p>
                <a href="mailto:support@selfattendance.pro" className="text-lg font-medium hover:text-primary transition-colors">
                  support@selfattendance.pro
                </a>
              </div>

              <div className="glass-panel p-8 rounded-3xl">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">In-App Support</h3>
                <p className="text-muted-foreground">
                  For faster resolution regarding your account, use the "Contact Support" option directly from the app Settings menu.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
              
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Subject</label>
                    <select className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground appearance-none">
                      <option value="support">General Support</option>
                      <option value="bug">Report a Bug</option>
                      <option value="feedback">Feature Request</option>
                      <option value="business">Business Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
