import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-10 text-sm">Last updated: October 2023</p>

            <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-primary max-w-none">
              <p>
                Self Attendance PRO ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Self Attendance PRO.
              </p>

              <h3>1. Information We Collect</h3>
              <p>
                <strong>Personal Information:</strong> When you register an account, we collect your email address, name, and profile information.
                <br />
                <strong>App Data:</strong> We securely store the attendance records, salary configurations, and usage data you input into the app to provide the cloud sync service.
              </p>

              <h3>2. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain our app</li>
                <li>Improve, personalize, and expand our app's functionality</li>
                <li>Process cloud backups and data synchronization</li>
                <li>Communicate with you for customer service and updates</li>
              </ul>

              <h3>3. Data Security</h3>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your attendance and financial data are encrypted both in transit and at rest on our secure cloud servers.
              </p>

              <h3>4. Sharing Your Information</h3>
              <p>
                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners.
              </p>

              <h3>5. Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal data. You can delete your account and all associated data directly from the app settings or via our Delete Account request page.
              </p>

              <h3>6. Changes to This Privacy Policy</h3>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h3>Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us via the support section in the app or via our website contact form.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
