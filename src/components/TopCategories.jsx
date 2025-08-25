import React from "react";

export default function TopCategories({ setCategory, onViewAll }) {
    const categories = [
        {
            name: "Development",
            img: "https://img.icons8.com/color/96/source-code.png",
            color: "from-purple-500 to-indigo-500",
        },
        {
            name: "Business",
            img: "https://img.icons8.com/color/96/briefcase.png",
            color: "from-yellow-400 to-orange-500",
        },
        {
            name: "Design",
            img: "https://img.icons8.com/color/96/design.png",
            color: "from-pink-400 to-red-500",
        },
        {
            name: "IT and Software",
            img: "https://img.icons8.com/color/96/cloud.png",
            color: "from-green-400 to-teal-500",
        },
        {
            name: "Marketing",
            img: "https://img.icons8.com/color/96/marketing.png",
            color: "from-blue-400 to-cyan-500",
        },
    ];

    return (
        <section className="px-6 py-12 bg-white">
            <h2 className="text-2xl font-bold mb-8">Top Categories</h2>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() =>
                            setCategory(cat.name.toLowerCase().replace(/\s+/g, "-"))
                        }
                        className="group flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div
                            className={`w-20 h-20 mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${cat.color}`}
                        >
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span className="font-semibold text-white drop-shadow-md">
              {cat.name}
            </span>
                    </button>
                ))}
            </div>

            {/* View All Categories Button */}
            <div className="mt-8 text-center">
                <button
                    onClick={onViewAll}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                    View All Categories
                </button>
            </div>
        </section>
    );
}
