import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DeleteAccount() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 flex items-center">
        <div className="container mx-auto px-4 md:px-6 max-w-xl">
          
          <div className="glass-panel rounded-3xl p-8 md:p-10">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Request Received</h2>
                <p className="text-muted-foreground mb-8">
                  We have received your account deletion request for <strong className="text-foreground">{email}</strong>. 
                  Our team will process this within 48 hours. You will receive a final confirmation email once all your data is permanently removed.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">Delete Account</h1>
                    <p className="text-sm text-muted-foreground">Request permanent removal of your data</p>
                  </div>
                </div>

                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-8">
                  <p className="text-sm text-destructive font-medium mb-2">Warning: This action is irreversible.</p>
                  <ul className="text-xs text-destructive/80 space-y-1 list-disc list-inside">
                    <li>All attendance history will be lost</li>
                    <li>Your AX Coins balance will be erased</li>
                    <li>Cloud sync backups will be permanently deleted</li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Registered Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-destructive/50 transition-all text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="reason" className="text-sm font-medium">Reason for leaving (Optional)</label>
                    <textarea 
                      id="reason"
                      rows={3}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Help us improve..."
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground resize-none"
                    />
                  </div>

                  <div className="space-y-2 pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-destructive/20"
                    >
                      Request Permanent Deletion
                    </button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      You can also delete your account instantly from within the app via Settings {'>'} Account.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
