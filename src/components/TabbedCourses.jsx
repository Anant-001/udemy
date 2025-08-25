import React, { useState } from "react";
import Courses from "./Courses";

export default function TabbedCourses({ searchTerm, searchCategory }) {
    const categories = ["development", "business", "design", "it-and-software", "marketing"];
    const [activeCategory, setActiveCategory] = useState("development");

    // ✅ If searchCategory = "all" → show all categories
    const effectiveCategories =
        searchTerm && searchCategory === "all"
            ? categories
            : searchTerm
                ? [searchCategory]
                : [activeCategory];

    return (
        <section className="px-6 py-12">
            {/* Tabs (only when not searching) */}
            {!searchTerm && (
                <div className="flex gap-4 mb-6 border-b overflow-x-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 font-medium capitalize ${
                                activeCategory === cat
                                    ? "border-b-2 border-purple-600 text-purple-600"
                                    : "text-gray-600 hover:text-purple-600"
                            }`}
                        >
                            {cat.replace("-", " ")}
                        </button>
                    ))}
                </div>
            )}

            {/* Courses */}
            {effectiveCategories.map((cat) => (
                <div key={cat} className="mb-12">
                    <h3 className="text-xl font-bold mb-4 capitalize">{cat}</h3>
                    <Courses searchTerm={searchTerm} category={cat} />
                </div>
            ))}
        </section>
    );
}
