// src/components/CTA.jsx
import React from "react";

export default function CTA() {
    return (
        <section className="px-6 py-16 bg-purple-600 text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Become an Instructor */}
                <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-3">Become an Instructor</h2>
                    <p className="mb-6 text-gray-600">
                        Instructors from around the world teach millions of students on Udemy.
                        We provide the tools and skills to teach what you love.
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700">
                        Start Teaching Today
                    </button>
                </div>

                {/* Transform Your Life */}
                <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-3">Transform Your Life Through Learning</h2>
                    <p className="mb-6 text-gray-600">
                        Join millions of learners worldwide and gain skills that make a difference.
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700">
                        Join Now
                    </button>
                </div>
            </div>
        </section>
    );
}
