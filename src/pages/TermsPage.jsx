// src/pages/TermsPage.jsx
export default function TermsPage() {
    return (
        <div className="max-w-5xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-4">
                Welcome to UdemyClone! By using our platform, you agree to the following terms:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Courses are for personal and non-commercial use only.</li>
                <li>You must not share, resell, or distribute purchased content.</li>
                <li>Refunds are available within 30 days for most courses.</li>
                <li>We may update these terms from time to time.</li>
            </ul>
        </div>
    );
}
