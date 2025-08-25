// src/pages/CareersPage.jsx
export default function CareersPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="text-center py-16 bg-purple-50">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Careers at UdemyClone</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Help us improve lives through learning. Join our mission-driven team to shape the future of education.
                </p>
                <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    View Open Roles
                </button>
            </section>

            {/* Why Work With Us */}
            <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="font-bold text-lg mb-2">Make an Impact</h3>
                    <p className="text-gray-600">Your work empowers millions of learners worldwide.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">Grow with Us</h3>
                    <p className="text-gray-600">We support career development and continuous learning.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">Be Yourself</h3>
                    <p className="text-gray-600">We value diversity, creativity, and inclusivity in everything we do.</p>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-purple-600 text-white py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div><h3 className="text-3xl font-bold">15+</h3><p>Global Offices</p></div>
                    <div><h3 className="text-3xl font-bold">2k+</h3><p>Employees</p></div>
                    <div><h3 className="text-3xl font-bold">80M+</h3><p>Learners Impacted</p></div>
                    <div><h3 className="text-3xl font-bold">75+</h3><p>Languages</p></div>
                </div>
            </section>

            {/* Join Us */}
            <section className="max-w-4xl mx-auto text-center py-16 px-6">
                <h2 className="text-2xl font-bold mb-4">Join our team</h2>
                <p className="text-gray-600 mb-6">
                    Explore open roles and be part of a team that’s passionate about transforming education.
                </p>
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Explore Careers
                </button>
            </section>
        </div>
    );
}
