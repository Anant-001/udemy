// src/components/Routes/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-bold mb-4">UdemyClone</h4>
                    <p className="text-sm text-gray-400">
                        Learn anytime, anywhere. Grow your skills.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/help">Help Center</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/terms">Terms</Link></li>
                        <li><Link to="/privacy">Privacy</Link></li>
                        <li><Link to="/cookies">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-6">
                © 2025 UdemyClone. All rights reserved.
            </div>
        </footer>
    );
}
