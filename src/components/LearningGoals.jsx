// src/components/LearningGoals.jsx
import React from "react";
import { BookOpen, Award, BarChart, Sliders } from "lucide-react"; // icons

export default function LearningGoals() {
    const goals = [
        {
            id: 1,
            icon: <BookOpen className="w-6 h-6 text-purple-600" />,
            title: "Hands-on training",
            desc: "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
        },
        {
            id: 2,
            icon: <Award className="w-6 h-6 text-purple-600" />,
            title: "Certification prep",
            desc: "Prep for industry-recognized certifications like PMP, AWS, CompTIA, and more.",
        },
        {
            id: 3,
            icon: <BarChart className="w-6 h-6 text-purple-600" />,
            title: "Insights and analytics",
            desc: "Measure skills and benchmark teams with advanced reporting and analytics.",
        },
        {
            id: 4,
            icon: <Sliders className="w-6 h-6 text-purple-600" />,
            title: "Customizable content",
            desc: "Create tailored learning paths with courses, practice, and assessments.",
        },
    ];

    return (
        <section className="px-6 py-16 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left - Goals list */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">Learning focused on your goals</h2>
                    <div className="space-y-6">
                        {goals.map((goal) => (
                            <div
                                key={goal.id}
                                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
                            >
                                <div className="p-3 bg-purple-100 rounded-full">{goal.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-lg">{goal.title}</h3>
                                    <p className="text-gray-600 text-sm">{goal.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Image */}
                <div className="flex justify-center">
                    <img
                        src="/desktop-hands-on-learning-2x.webp"
                        alt="Learning Goals"
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
