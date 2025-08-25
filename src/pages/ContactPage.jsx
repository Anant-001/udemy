// src/pages/ContactPage.jsx
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent by ${formData.name}`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="max-w-4xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-center text-gray-600 mb-12">
                Have questions? Fill out the form below and we’ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
                <div>
                    <label className="block font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 mt-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 mt-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border rounded-lg px-4 py-2 mt-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
