// src/components/TrendingNow.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const trendingCourses = [
    {
        id: 1,
        title: "The Complete JavaScript Course 2025",
        instructor: "Jonas Schmedtmann",
        headline: "Build projects, master ES6+, OOP, Async JS, and APIs.",
        price: "₹3,499",
        image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    },
    {
        id: 2,
        title: "Python for Data Science & Machine Learning Bootcamp",
        instructor: "Jose Portilla",
        headline: "Learn Python, Pandas, NumPy, Scikit-Learn, and ML.",
        price: "₹2,999",
        image: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",
    },
    {
        id: 3,
        title: "AWS Certified Solutions Architect - Associate 2025",
        instructor: "Stephane Maarek",
        headline: "Pass the AWS certification with hands-on labs and practice exams.",
        price: "₹3,999",
        image: "data:image/jpeg;base64,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",
    },
    {
        id: 4,
        title: "Ultimate Drawing Course - Beginner to Advanced",
        instructor: "Jaysen Batchelor",
        headline: "Learn to draw with pencil, ink, and digital techniques.",
        price: "₹1,499",
        image: "https://img-c.udemycdn.com/course/240x135/874012_c7f2_3.jpg",
    },
    {
        id: 5,
        title: "Excel Essentials: Master Excel in 3 Hours",
        instructor: "Kyle Pew",
        headline: "Learn Excel formulas, charts, pivot tables & automation.",
        price: "₹999",
        image: "https://img-c.udemycdn.com/course/240x135/793796_0e89.jpg",
    },
    {
        id: 6,
        title: "Digital Marketing Masterclass 2025",
        instructor: "Phil Ebiner",
        headline: "SEO, Facebook Ads, Google Ads, YouTube & Email Marketing.",
        price: "₹2,499",
        image: "https://img-c.udemycdn.com/course/240x135/671576_a272_4.jpg",
    },
];

export default function TrendingNow() {
    return (
        <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Trending Now</h2>
                <p className="text-gray-600 mb-8 max-w-3xl">
                    Courses students are actively enrolling in right now across different categories.
                </p>

                {/* Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {trendingCourses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition bg-white">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
