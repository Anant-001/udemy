// src/components/teach/HeroTeach.jsx
export default function HeroTeach() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12">
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">Come teach with us</h1>
                <p className="mb-6 text-gray-600">
                    Become an instructor and change lives — including your own.
                </p>
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Get Started
                </button>
            </div>
            <div className="flex-1">
                <img
                    src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg"
                    alt="Teach on Udemy"
                    className="rounded-lg"
                />
            </div>
        </section>
    );
}
