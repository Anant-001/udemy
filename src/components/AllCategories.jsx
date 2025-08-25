import React from "react";

export default function AllCategories({ setCategory, onBack }) {
    const allCategories = [
        "Development",
        "Business",
        "Design",
        "IT and Software",
        "Marketing",
        "Personal Development",
        "Photography",
        "Music",
        "Health & Fitness",
        "Finance & Accounting",
        "Teaching & Academics",
        "Lifestyle",
    ];

    return (
        <section className="px-6 py-12 bg-white min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">All Categories</h2>
                <button
                    onClick={onBack}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    ← Back
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {allCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat.toLowerCase().replace(/\s+/g, "-"))}
                        className="p-6 border rounded-lg shadow hover:shadow-lg transition"
                    >
                        <span className="font-medium">{cat}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}
