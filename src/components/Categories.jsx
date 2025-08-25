const categories = [
    "Development",
    "Business",
    "IT & Software",
    "Design",
    "Marketing",
    "Personal Development",
];

export default function Categories() {
    return (
        <section className="px-6 py-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="border rounded-lg p-6 text-center hover:shadow-lg cursor-pointer"
                    >
                        {cat}
                    </div>
                ))}
            </div>
        </section>
    );
}
