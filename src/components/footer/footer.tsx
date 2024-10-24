import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Annatator</h2>
            <p className="mb-4">
              Your trusted partner for hassle-free hotel reservations worldwide.
            </p>
            <div className="flex space-x-4">
              <Link to="" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link to="" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link to="" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <address className="not-italic">
              <p>123 Travel Street</p>
              <p>Cityville, State 12345</p>
              <p>United States</p>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p>Email: info@Annatator.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest deals and travel tips.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white border-gray-700"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Annatator. All rights reserved.
          </p>
          <p className="mt-2">
            <Link to="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link to="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
