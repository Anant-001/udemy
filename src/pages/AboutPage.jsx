// src/pages/AboutPage.jsx
export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="text-center py-16 bg-purple-50">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to where possibilities begin
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    Check out our latest company news and learn how we’re helping millions unlock their potential.
                </p>
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Learn More
                </button>
            </section>

            {/* Skills Section */}
            <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Skills are the key to unlocking potential
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Whether you want to learn a new skill, train your team, or share your knowledge with the world,
                        we’re here to help you achieve success.
                    </p>
                    <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        See Our Impact
                    </button>
                </div>
                <img
                    src="https://about.udemy.com/wp-content/uploads/2024/04/bedi-marquee-2.png"
                    alt="Learning"
                    className="rounded-lg shadow-lg"
                />
            </section>

            {/* Stats Section */}
            <section className="bg-purple-600 text-white py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div><h3 className="text-3xl font-bold">81M</h3><p>Learners</p></div>
                    <div><h3 className="text-3xl font-bold">77</h3><p>Languages</p></div>
                    <div><h3 className="text-3xl font-bold">250K+</h3><p>Courses</p></div>
                    <div><h3 className="text-3xl font-bold">17K+</h3><p>Enterprise clients</p></div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-6xl mx-auto py-16 px-6 text-center">
                <h2 className="text-2xl font-bold mb-8">What our partners say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <blockquote className="bg-gray-50 p-6 rounded-lg shadow">
                        <p>"Udemy fits us like a glove..."</p>
                        <footer className="mt-4 text-sm text-gray-500">— Varon Patel, SurveyMonkey</footer>
                    </blockquote>
                    <blockquote className="bg-gray-50 p-6 rounded-lg shadow">
                        <p>"It was a big success, we would get emails about the fantastic resources."</p>
                        <footer className="mt-4 text-sm text-gray-500">— Alfred Nordvik, Nordea</footer>
                    </blockquote>
                    <blockquote className="bg-gray-50 p-6 rounded-lg shadow">
                        <p>"Udemy responds to the needs of the business in an agile and cost-effective manner."</p>
                        <footer className="mt-4 text-sm text-gray-500">— Lee Karlsson, Volkswagen</footer>
                    </blockquote>
                </div>
            </section>

            {/* Work With Us / Research / Blog */}
            <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 py-16">
                <div>
                    <h3 className="font-bold mb-2">Work with us</h3>
                    <p className="text-gray-600 text-sm mb-2">
                        At Udemy, we’re curious and inventive. We value our culture.
                    </p>
                    <a href="#" className="text-purple-600 hover:underline">Join our team</a>
                </div>
                <div>
                    <h3 className="font-bold mb-2">See our research</h3>
                    <p className="text-gray-600 text-sm mb-2">
                        Our research helps organizations adapt to change.
                    </p>
                    <a href="#" className="text-purple-600 hover:underline">Read more</a>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Read our blog</h3>
                    <p className="text-gray-600 text-sm mb-2">
                        Learn what we’ve been up to, and insights about learning.
                    </p>
                    <a href="#" className="text-purple-600 hover:underline">Explore blog</a>
                </div>
            </section>
        </div>
    );
}
