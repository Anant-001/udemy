// src/components/AIForBusiness.jsx
import React from "react";

const aiCourses = [
    {
        id: 1,
        title: "AI for Business Leaders",
        instructor: "Dr. Sarah Johnson",
        headline: "Learn how AI can transform strategy, decision-making, and operations.",
        price: "₹3,499",
        image: "https://img-c.udemycdn.com/course/240x135/5296886_2296_6.jpg",
    },
    {
        id: 2,
        title: "ChatGPT & Generative AI for Business",
        instructor: "Michael Brown",
        headline: "Use AI tools like ChatGPT to boost productivity and innovation.",
        price: "₹2,499",
        image: "https://img-c.udemycdn.com/course/240x135/6269579_a11d.jpg",
    },
    {
        id: 3,
        title: "AI in Marketing & Analytics",
        instructor: "Emily Carter",
        headline: "Leverage AI for data-driven marketing and customer insights.",
        price: "₹2,999",
        image: "https://img-c.udemycdn.com/course/240x135/6581503_a974.jpg",
    },
    {
        id: 4,
        title: "Machine Learning for Business Professionals",
        instructor: "James Miller",
        headline: "Understand ML concepts and applications in real-world business.",
        price: "₹3,999",
        image: "https://img-c.udemycdn.com/course/240x135/6112535_7103.jpg",
    },
];

export default function AIForBusiness() {
    return (
        <section className="px-6 py-12 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    AI for Business
                </h2>
                <p className="text-gray-600 mb-8 max-w-3xl">
                    Explore how Artificial Intelligence is reshaping industries.
                    Learn to integrate AI into strategy, decision-making, and
                    operations to gain a competitive edge.
                </p>

                {/* Courses grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {aiCourses.map((course) => (
                        <div
                            key={course.id}
                            className="border rounded-lg overflow-hidden hover:shadow-lg transition bg-white"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-3">
                                <h3 className="font-semibold text-sm line-clamp-2">
                                    {course.title}
                                </h3>
                                <p className="text-xs text-gray-600">{course.instructor}</p>
                                <p className="text-xs text-gray-500 line-clamp-2 mb-1">
                                    {course.headline}
                                </p>
                                <p className="font-bold mt-2">{course.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore More Button */}
                <div className="text-center">
                    <button className="px-6 py-2 border border-purple-600 text-purple-600 font-medium rounded hover:bg-purple-50 transition">
                        Show all AI courses
                    </button>
                </div>
            </div>
        </section>
    );
}
