// src/components/teach/InstructorTestimonial.jsx
export default function InstructorTestimonial() {
    return (
        <section className="px-6 py-12 flex flex-col md:flex-row gap-6 items-center">
            <img
                src="https://s.udemycdn.com/teaching/instructors/en/deborah-1x.jpg"
                alt="Instructor"
                className="w-32 h-32 rounded-full"
            />
            <blockquote className="italic text-gray-700">
                "I’m proud to wake up knowing my work is helping people improve their
                lives. While being a full-time instructor is hard work, it’s worth it!"
                <br />
                <span className="font-bold block mt-2">— Rene, Udemy Instructor</span>
            </blockquote>
        </section>
    );
}
