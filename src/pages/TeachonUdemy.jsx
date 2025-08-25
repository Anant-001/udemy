// src/pages/TeachOnUdemy.jsx
import HeroTeach from "../components/teach/HeroTeach";
import ReasonsToStart from "../components/teach/ReasonsToStart";
import StatsBanner from "../components/teach/StatsBanner";
import HowToBegin from "../components/teach/HowToBegin";
import InstructorTestimonial from "../components/teach/InstructorTestimonial";
import SupportSection from "../components/teach/SupportSection";
import CTASection from "../components/teach/CTASection";

export default function TeachOnUdemy() {
    return (
        <div className="bg-white">
            <HeroTeach />
            <ReasonsToStart />
            <StatsBanner />
            <HowToBegin />
            <InstructorTestimonial />
            <SupportSection />
            <CTASection />
        </div>
    );
}
