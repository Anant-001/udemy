// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Routes/Navbar";
import Hero from "./components/Hero";
import TopCategories from "./components/TopCategories";
import AllCategories from "./components/AllCategories";
import TabbedCourses from "./components/TabbedCourses";
import LearnersViewing from "./components/LearnersViewing";
import LearningGoals from "./components/LearningGoals";
import PricingPlans from "./components/PricingPlans";
import TrustedCompanies from "./components/TrustedCompanies";
import Testimonials from "./components/Testimonials";
import AIForBusiness from "./components/AIForBusiness";
import TrendingNow from "./components/TrendingNow";
import Partners from "./components/Partners";
import Footer from "./components/Routes/Footer";
import FAQ from "./components/FAQ";
import UdemyBusinessPage from "./pages/UdemyBusinessPage";
import TeachOnUdemy from "./pages/TeachOnUdemy";
// ✅ New Page
import PlansPricingPage from "./pages/PlansPricingPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import FAQs from "./pages/FAQ.jsx";

export default function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCategory, setSearchCategory] = useState("all");
    const [showAllCategories, setShowAllCategories] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar setSearchTerm={setSearchTerm} setSearchCategory={setSearchCategory} />

            <main className="flex-1">
                <Routes>
                    {/* Home Page */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                {!showAllCategories ? (
                                    <TopCategories
                                        setCategory={setSearchCategory}
                                        onViewAll={() => setShowAllCategories(true)}
                                    />
                                ) : (
                                    <AllCategories
                                        setCategory={setSearchCategory}
                                        onBack={() => setShowAllCategories(false)}
                                    />
                                )}
                                <TabbedCourses searchTerm={searchTerm} searchCategory={searchCategory} />
                                <LearnersViewing />
                                <LearningGoals />
                                <PricingPlans />
                                <TrustedCompanies />
                                <Testimonials />
                                <FAQ />
                                <AIForBusiness />
                                <TrendingNow />
                                <Partners />
                            </>
                        }
                    />

                    {/* ✅ Plans & Pricing Page */}
                    <Route path="/plans-pricing" element={<PlansPricingPage />} />
                    <Route path="/udemy-business" element={<UdemyBusinessPage />} />
                    <Route path="/teach-on-udemy" element={<TeachOnUdemy />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/help" element={<HelpCenterPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/cookies" element={<CookiePolicyPage />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
