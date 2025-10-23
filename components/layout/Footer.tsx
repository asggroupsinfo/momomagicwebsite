import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-space border-t border-charcoal">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-premium-orange mb-4">
              Momos Magic
            </h3>
            <p className="text-foreground/80 mb-4">
              From Humble Stall to Culinary Legend. Experience the Magic That 
              Transformed Sherghati's Street Food Scene.
            </p>
            <div className="flex space-x-4">
              <span className="text-vegetarian-green">📍</span>
              <span className="text-foreground/80">
                Naya Bazar, Near Post Office<br />
                Sherghati, Bihar 824211
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-golden-glow mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-foreground/80 hover:text-premium-orange transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/80 hover:text-premium-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/80 hover:text-premium-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-golden-glow mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2 text-foreground/80">
              <li>📞 +91 9955955191</li>
              <li>🌐 www.momomegics.com</li>
              <li>⏰ 10:00 AM - 10:00 PM</li>
              <li>📅 Every Day</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal mt-8 pt-8 text-center">
          <p className="text-foreground/60">
            © 2024 Momos Magic. All rights reserved. | FSSAI License: 20424201001152
          </p>
        </div>
      </div>
    </footer>
  );
};
