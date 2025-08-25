import { courses } from "../data/coursesData";

export default function PopularCourses() {
    const popular = courses.slice(0, 3); // first 3 courses as "popular"

    return (
        <section className="px-6 py-12">
            <h2 className="text-xl font-bold mb-4">Popular Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {popular.map((course) => (
                    <div
                        key={course.id}
                        className="p-4 border rounded-lg shadow bg-white hover:shadow-lg transition"
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-32 object-cover rounded"
                        />
                        <h3 className="font-semibold mt-2 text-sm line-clamp-2">
                            {course.title}
                        </h3>
                        <p className="text-xs text-gray-600">{course.instructor}</p>
                        <p className="font-bold mt-1">{course.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
