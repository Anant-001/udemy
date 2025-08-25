// src/components/Courses.jsx
import { coursesData } from "../data/coursesData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Courses({ searchTerm = "", category = "development" }) {
    const allCourses = coursesData[category] || [];
    const scrollRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const filtered = allCourses.filter(
        (course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ✅ Check scroll position
    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 5); // little buffer
    };

    useEffect(() => {
        checkScroll(); // check on mount
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", checkScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", checkScroll);
            }
        };
    }, [filtered]);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="px-6 py-6 relative">
            <h2 className="text-2xl font-bold mb-6 capitalize">{category} Courses</h2>

            {filtered.length === 0 ? (
                <p className="text-gray-500">No courses found for "{searchTerm}"</p>
            ) : (
                <div className="relative">
                    {/* Left Arrow */}
                    {showLeft && (
                        <button
                            onClick={() => scroll("left")}
                            className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                    )}

                    {/* Courses Scrollable Row */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {filtered.map((course) => (
                            <div
                                key={course.id}
                                className="min-w-[220px] border rounded-lg overflow-hidden hover:shadow-lg transition bg-white"
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
                                    <p className="text-sm text-yellow-500">
                                        ⭐ {course.rating}{" "}
                                        <span className="text-gray-500 ml-1">
                                            ({course.students} students)
                                        </span>
                                    </p>
                                    <p className="font-bold mt-2">{course.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    {showRight && (
                        <button
                            onClick={() => scroll("right")}
                            className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                    )}
                </div>
            )}
        </section>
    );
}
