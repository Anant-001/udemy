import FAQ from "../components/FAQ";
import TrustedCompanies from "../components/TrustedCompanies";
import Testimonials from "../components/Testimonials";

export default function PlansPricingPage() {
    return (
        <div className="px-6 py-12">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-4">
                Choose a plan for success
            </h1>
            <p className="text-center text-gray-600 mb-12">
                Don’t want to buy courses one by one? Pick a plan to help you, your team, or your organization
                achieve customer faster.
            </p>

            {/* Plans Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {/* Personal Plan */}
                <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-bold mb-2">Personal Plan</h2>
                    <p className="text-gray-600 mb-4">₹850 per month</p>
                    <ul className="text-sm space-y-2 mb-4">
                        <li>✔ Access to 10,000+ top courses</li>
                        <li>✔ Hands-on practice</li>
                        <li>✔ Personalized recommendations</li>
                    </ul>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                        Start Subscription →
                    </button>
                </div>

                {/* Team Plan */}
                <div className="border rounded-lg p-6 shadow-lg ring-2 ring-purple-600">
                    <h2 className="text-xl font-bold mb-2">Team Plan</h2>
                    <p className="text-gray-600 mb-4">₹1,250 per user / month</p>
                    <ul className="text-sm space-y-2 mb-4">
                        <li>✔ Access to 20,000+ top courses</li>
                        <li>✔ Analytics & reporting</li>
                        <li>✔ Mobile access</li>
                    </ul>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                        Start Team Trial →
                    </button>
                </div>

                {/* Enterprise Plan */}
                <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-bold mb-2">Enterprise Plan</h2>
                    <p className="text-gray-600 mb-4">Contact sales for pricing</p>
                    <ul className="text-sm space-y-2 mb-4">
                        <li>✔ Access to 25,000+ top courses</li>
                        <li>✔ Customizable content</li>
                        <li>✔ Dedicated account manager</li>
                    </ul>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                        Request Demo →
                    </button>
                </div>
            </div>

            {/* Compare Plans Section */}
            <h2 className="text-2xl font-bold text-center mb-8">
                Compare plans and features
            </h2>

            <div className="overflow-x-auto mb-16">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-3 text-left">Features</th>
                        <th className="border px-4 py-3 text-center">Personal</th>
                        <th className="border px-4 py-3 text-center">Team</th>
                        <th className="border px-4 py-3 text-center">Enterprise</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[
                        ["Top rated courses", "✔", "✔", "✔"],
                        ["Certification prep", "✔", "✔", "✔"],
                        ["Goal aligned recommendations", "✔", "✔", "✔"],
                        ["Mobile & TV access", "✔", "✔", "✔"],
                        ["Advanced analytics", "✖", "✔", "✔"],
                        ["Dedicated support", "✖", "✔", "✔"],
                        ["Custom learning paths", "✖", "✖", "✔"],
                        ["Dedicated account manager", "✖", "✖", "✔"],
                    ].map(([feature, p, t, e], idx) => (
                        <tr key={idx} className="text-sm text-gray-700">
                            <td className="border px-4 py-2">{feature}</td>
                            <td className="border px-4 py-2 text-center">{p}</td>
                            <td className="border px-4 py-2 text-center">{t}</td>
                            <td className="border px-4 py-2 text-center">{e}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Trusted Companies */}
            <TrustedCompanies />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <div className="mt-16">
                <FAQ />
            </div>
        </div>
    );
}
