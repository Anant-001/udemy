// src/pages/HelpCenterPage.jsx
export default function HelpCenterPage() {
    const faqs = [
        {
            q: "How do I reset my password?",
            a: "Click on 'Forgot Password' on the login page and follow the steps to reset your password."
        },
        {
            q: "Where can I view my purchased courses?",
            a: "Go to 'My Learning' in the top navigation bar after logging in."
        },
        {
            q: "Can I request a refund?",
            a: "Yes, UdemyClone offers a 30-day refund policy for most courses."
        },
    ];

    return (
        <div className="max-w-5xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold text-center mb-8">Help Center</h1>
            <p className="text-center text-gray-600 mb-12">
                Find answers to common questions or get in touch with our support team.
            </p>

            <div className="space-y-6">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white shadow p-6 rounded-lg">
                        <h2 className="text-lg font-semibold">{faq.q}</h2>
                        <p className="text-gray-600 mt-2">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
