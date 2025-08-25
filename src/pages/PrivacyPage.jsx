// src/pages/PrivacyPage.jsx
export default function PrivacyPage() {
    return (
        <div className="max-w-5xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">
                Your privacy is important to us. This policy explains how we collect and use your data:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>We collect information you provide when creating an account.</li>
                <li>Your data is used to improve courses and provide personalized recommendations.</li>
                <li>We do not sell your personal data to third parties.</li>
                <li>You can request deletion of your account and data anytime.</li>
            </ul>
        </div>
    );
}
