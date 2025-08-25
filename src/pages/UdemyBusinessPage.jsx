import TrustedCompanies from "../components/TrustedCompanies";

export default function UdemyBusinessPage() {
    return (
        <div className="px-6 py-12 max-w-7xl mx-auto">
            {/* Left side content */}
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Get your demo</h1>
                    <p className="text-gray-600 mb-6">
                        Tell us your needs and we’ll start on a custom plan to drive results.
                    </p>

                    <ul className="space-y-3 text-gray-700 text-sm mb-8">
                        <li>✔ Train your entire workforce with over 30,000+ courses in 18 languages</li>
                        <li>✔ Prep employees for over 200 industry-recognized certification exams</li>
                        <li>✔ Develop highly skilled tech teams in risk-free practice environments</li>
                        <li>✔ Identify emerging skills gaps, learning trends, and industry benchmarks</li>
                        <li>✔ Integrate content with your existing learning management system</li>
                    </ul>

                    {/* Trusted Logos */}
                    <TrustedCompanies />
                </div>

                {/* Right side form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Form submitted! 🚀"); // replace with backend later
                    }}
                    className="space-y-4"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name *" required className="border p-2 rounded w-full" />
                        <input type="text" placeholder="Last Name *" required className="border p-2 rounded w-full" />
                    </div>
                    <input type="email" placeholder="Work Email *" required className="border p-2 rounded w-full" />
                    <input type="tel" placeholder="Phone Number *" required className="border p-2 rounded w-full" />

                    <select className="border p-2 rounded w-full" required>
                        <option value="">Where are you located? *</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Other</option>
                    </select>

                    <input type="text" placeholder="Company Name *" required className="border p-2 rounded w-full" />

                    <div className="grid grid-cols-2 gap-4">
                        <select className="border p-2 rounded w-full" required>
                            <option value="">Company Size *</option>
                            <option>1-50</option>
                            <option>51-200</option>
                            <option>201-1000</option>
                            <option>1000+</option>
                        </select>
                        <select className="border p-2 rounded w-full" required>
                            <option value=""># of people to train *</option>
                            <option>1-50</option>
                            <option>51-200</option>
                            <option>201-1000</option>
                            <option>1000+</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Job Title *" required className="border p-2 rounded w-full" />
                        <select className="border p-2 rounded w-full" required>
                            <option value="">Job Level *</option>
                            <option>Executive</option>
                            <option>Manager</option>
                            <option>Staff</option>
                            <option>Intern</option>
                        </select>
                    </div>

                    <textarea
                        placeholder="What are your organization’s training needs?"
                        className="border p-2 rounded w-full"
                        rows="3"
                    />

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                    >
                        Submit
                    </button>

                    <p className="text-xs text-gray-500">
                        By signing up, you agree to our Terms of Use and Privacy Policy.
                    </p>
                </form>
            </div>
        </div>
    );
}
