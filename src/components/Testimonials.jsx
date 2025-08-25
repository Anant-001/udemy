// src/components/Testimonials.jsx
import React from "react";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Ananya Sharma",
            role: "Web Developer",
            feedback:
                "Udemy helped me transition into web development with hands-on courses that were practical and easy to follow.",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
            id: 2,
            name: "Rahul Verma",
            role: "Data Analyst",
            feedback:
                "The Python and SQL courses gave me the skills I needed to land my first data analytics job.",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
            id: 3,
            name: "Emily Johnson",
            role: "UI/UX Designer",
            feedback:
                "I loved the design bootcamps! The instructors are industry experts and the projects improved my portfolio.",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            id: 4,
            name: "David Lee",
            role: "Entrepreneur",
            feedback:
                "The business strategy courses gave me actionable insights that I could immediately apply to my startup.",
            image: "https://randomuser.me/api/portraits/men/34.jpg",
        },
    ];

    return (
        <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">What our learners say</h2>
                <p className="text-gray-600 mt-2">
                    Hear from students around the world who have transformed their careers.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t) => (
                    <div
                        key={t.id}
                        className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-800">{t.name}</h3>
                                <p className="text-xs text-gray-500">{t.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">“{t.feedback}”</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
