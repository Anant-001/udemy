// src/components/teach/HowToBegin.jsx
export default function HowToBegin() {
    return (
        <section className="px-6 py-12">
            <h2 className="text-2xl font-bold mb-6 text-center">How to begin</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                    <h3 className="font-semibold">Plan your curriculum</h3>
                    <p className="text-gray-600">Start with your passion and knowledge.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Record your video</h3>
                    <p className="text-gray-600">Good quality audio and video makes a big difference.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Launch your course</h3>
                    <p className="text-gray-600">Publish your course and inspire learners worldwide.</p>
                </div>
            </div>
        </section>
    );
}
