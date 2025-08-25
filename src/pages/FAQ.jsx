// src/components/FAQ.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How are courses selected for the plans?",
        answer:
            "Courses are selected based on learner demand, ratings, and industry relevance to ensure the highest quality content."
    },
    {
        question: "How is the Personal Plan different from buying a course?",
        answer:
            "With the Personal Plan, you get unlimited access to thousands of courses during your subscription. Buying a course gives you lifetime access to that single course."
    },
    {
        question: "What languages does Enterprise Plan have content for?",
        answer:
            "The Enterprise Plan includes content in over 18 languages to support global teams."
    },
    {
        question: "What is Udemy Business Pro?",
        answer:
            "Udemy Business Pro provides hands-on labs, skills assessments, and advanced insights for your team."
    }
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently asked questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-lg overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-600" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
