import React from "react";
import heroImg from "/public/ufb-logout-hero-desktop-v2.webp"; // replace with your screenshot image

export default function Hero() {
    return (
        <section className="bg-gray-50 flex flex-col md:flex-row items-center justify-between px-6 py-12">
            {/* Text */}
            <div className="md:w-1/2 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Udemy <span className="text-purple-600">Business</span>
                </h1>
                <p className="text-gray-700">
                    Your company can give you access to our top 20,000+ business and tech courses.
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
                    Learn More
                </button>
            </div>

            {/* Image */}
            <div className="md:w-1/2 mt-6 md:mt-0">
                <img src={heroImg} alt="Hero" className="rounded-lg shadow-lg" />
            </div>
        </section>
    );
}
