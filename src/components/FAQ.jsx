// src/components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Udemy and how does it work?",
            answer:
                "Udemy is an online learning platform with thousands of courses taught by expert instructors. Once you enroll, you can learn at your own pace from any device.",
        },
        {
            question: "Do I get lifetime access to courses?",
            answer:
                "Yes! Once enrolled, you get lifetime access to the course materials, including any future updates by the instructor.",
        },
        {
            question: "Are there certificates after completing a course?",
            answer:
                "Yes, Udemy provides a certificate of completion that you can share on LinkedIn or with employers.",
        },
        {
            question: "Can I access courses on mobile?",
            answer:
                "Absolutely. Udemy has apps for both iOS and Android, so you can learn on the go.",
        },
        {
            question: "What if I’m not satisfied with a course?",
            answer:
                "Udemy offers a 30-day money-back guarantee if you're not satisfied with your purchase.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-6 py-16 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
                <p className="text-gray-600 mt-2">
                    Find answers to some of the most common questions from learners.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className="border rounded-lg p-4 bg-gray-50 shadow-sm hover:shadow-md transition"
                    >
                        <button
                            className="flex justify-between items-center w-full text-left"
                            onClick={() => toggleFAQ(idx)}
                        >
                            <span className="font-medium text-gray-800">{faq.question}</span>
                            {openIndex === idx ? (
                                <ChevronUp className="w-5 h-5 text-gray-600" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-600" />
                            )}
                        </button>
                        {openIndex === idx && (
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
