// src/components/LearnersViewing.jsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { coursesData } from "../data/coursesData"; // use the same dataset

export default function LearnersViewing({ searchTerm = "", searchCategory = "all" }) {
    const [index, setIndex] = useState(0);
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        let allCourses = [];

        if (searchCategory === "all") {
            // merge all categories into one array
            Object.values(coursesData).forEach((arr) => {
                allCourses = [...allCourses, ...arr];
            });
        } else {
            allCourses = coursesData[searchCategory] || [];
        }

        const filtered = allCourses.filter(
            (course) =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredCourses(filtered);
        setIndex(0); // reset carousel to start
    }, [searchTerm, searchCategory]);

    const next = () => {
        if (index < filteredCourses.length - 4) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <section className="px-6 py-12 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">
                {searchTerm ? `Results for "${searchTerm}"` : "Learners are viewing"}
            </h2>

            {filteredCourses.length === 0 ? (
                <p className="text-gray-500">No courses found</p>
            ) : (
                <div className="relative">
                    {/* Carousel */}
                    <div className="flex gap-4 overflow-hidden">
                        {filteredCourses.slice(index, index + 4).map((course) => (
                            <div
                                key={course.id}
                                className="min-w-[250px] border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
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
                                    <p className="text-yellow-500 text-xs">
                                        ⭐ {course.rating} ({course.students})
                                    </p>
                                    <p className="font-bold mt-1">{course.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={prev}
                        disabled={index === 0}
                        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        disabled={index >= filteredCourses.length - 4}
                        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
                    >
                        <ChevronRight />
                    </button>
                </div>
            )}
        </section>
    );
}
