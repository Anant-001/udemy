// src/pages/BlogPage.jsx
export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "The Future of Online Learning",
            excerpt: "Discover trends shaping education in 2025 and beyond...",
            date: "Aug 10, 2025",
        },
        {
            id: 2,
            title: "Why Upskilling Matters in Today’s Workplace",
            excerpt: "How continuous learning helps employees and businesses grow...",
            date: "Jul 28, 2025",
        },
        {
            id: 3,
            title: "Top Skills to Learn This Year",
            excerpt: "From AI to leadership, see what’s trending among learners worldwide...",
            date: "Jul 15, 2025",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold text-center mb-12">UdemyClone Blog</h1>

            <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <article key={post.id} className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <a href="#" className="text-purple-600 hover:underline">
                            Read More →
                        </a>
                    </article>
                ))}
            </div>
        </div>
    );
}
