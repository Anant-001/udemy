// src/components/teach/ReasonsToStart.jsx
const reasons = [
    { title: "Teach your way", desc: "Publish the course you want, in the way you want.", icon: "🎓" },
    { title: "Inspire learners", desc: "Help people learn new skills and advance careers.", icon: "🌍" },
    { title: "Get rewarded", desc: "Expand your reach and earn money on each enrollment.", icon: "💰" },
];

export default function ReasonsToStart() {
    return (
        <section className="text-center px-6 py-12">
            <h2 className="text-2xl font-bold mb-8">So many reasons to start</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {reasons.map((r, i) => (
                    <div key={i} className="p-6 border rounded-lg bg-gray-50">
                        <div className="text-4xl mb-4">{r.icon}</div>
                        <h3 className="font-semibold mb-2">{r.title}</h3>
                        <p className="text-gray-600">{r.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
