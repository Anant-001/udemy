// src/pages/CookiePolicyPage.jsx
export default function CookiePolicyPage() {
    return (
        <div className="max-w-5xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-gray-600 mb-4">
                We use cookies to improve your browsing experience and provide personalized content.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Essential cookies are required for basic site functionality.</li>
                <li>Analytics cookies help us track usage and performance.</li>
                <li>You can manage cookies in your browser settings.</li>
            </ul>
        </div>
    );
}
