// src/components/teach/StatsBanner.jsx
export default function StatsBanner() {
    const stats = [
        { label: "Students", value: "80M" },
        { label: "Languages", value: "75+" },
        { label: "Enrollments", value: "1.1B" },
        { label: "Countries", value: "180+" },
        { label: "Instructors", value: "17,200+" },
    ];
    return (
        <section className="bg-purple-600 text-white py-10 text-center">
            <div className="flex flex-wrap justify-center gap-10">
                {stats.map((s, i) => (
                    <div key={i}>
                        <h3 className="text-2xl font-bold">{s.value}</h3>
                        <p>{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
