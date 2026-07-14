import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground mb-10 text-sm">Last updated: October 2023</p>

            <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-primary max-w-none">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Self Attendance PRO application operated by YOGESH.
              </p>

              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing or using the app, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the app.
              </p>

              <h3>2. App Usage & Licensing</h3>
              <p>
                Self Attendance PRO grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the application solely for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement.
              </p>

              <h3>3. User Accounts</h3>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our app.
              </p>

              <h3>4. Financial Estimates Disclaimer</h3>
              <p>
                The salary estimation features provided by the app are for personal tracking and informational purposes only. The app calculations do not constitute a legally binding wage claim or financial advice. The developer is not responsible for discrepancies between app estimates and actual employer payouts.
              </p>

              <h3>5. AX Coins & Rewards</h3>
              <p>
                "AX Coins" hold no real-world monetary value and cannot be exchanged for cash. The reward system is intended solely for gamification and engagement within the app ecosystem. We reserve the right to modify or terminate the reward system at any time.
              </p>

              <h3>6. Termination</h3>
              <p>
                We may terminate or suspend access to our app immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h3>7. Changes to Terms</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
              </p>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
