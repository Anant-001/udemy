// src/components/PricingPlans.jsx
import React from "react";
import { Users, Building, Crown } from "lucide-react";

export default function PricingPlans() {
    const plans = [
        {
            id: 1,
            icon: <Crown className="w-6 h-6 text-purple-600" />,
            title: "Personal Plan",
            price: "₹850/month",
            desc: "Access 10,500+ top-rated courses for individuals.",
            features: ["Learn at your own pace", "Cancel anytime", "Hands-on practice"],
            button: "Start Learning",
        },
        {
            id: 2,
            icon: <Users className="w-6 h-6 text-purple-600" />,
            title: "Team Plan",
            price: "₹1,100/user/month",
            desc: "For teams of 5 to 20. Upskill your whole team.",
            features: ["10,500+ courses", "Analytics & insights", "Certification prep"],
            button: "Start for Teams",
        },
        {
            id: 3,
            icon: <Building className="w-6 h-6 text-purple-600" />,
            title: "Enterprise Plan",
            price: "Custom pricing",
            desc: "For organizations scaling learning across teams.",
            features: ["Custom learning paths", "Advanced analytics", "Dedicated support"],
            button: "Contact Sales",
        },
    ];

    return (
        <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Plans & Pricing</h2>
                <p className="text-gray-600">Choose a plan that fits your learning needs</p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="border rounded-xl bg-white p-6 shadow hover:shadow-lg transition flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            {plan.icon}
                            <h3 className="text-xl font-semibold">{plan.title}</h3>
                        </div>
                        <p className="text-2xl font-bold mb-2">{plan.price}</p>
                        <p className="text-gray-600 mb-4">{plan.desc}</p>
                        <ul className="text-sm text-gray-700 mb-6 space-y-2 flex-1">
                            {plan.features.map((f, i) => (
                                <li key={i}>✅ {f}</li>
                            ))}
                        </ul>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
