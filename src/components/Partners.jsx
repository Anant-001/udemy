// src/components/Partners.jsx
import React from "react";

const partners = [
    { id: 1, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { id: 2, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 3, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { id: 4, name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 5, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 6, name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" },
    { id: 7, name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
    { id: 8, name: "Adobe", logo: "https://cdn-icons-png.flaticon.com/128/888/888835.png" },
];

export default function Partners() {
    return (
        <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Our Global Partners
                </h2>
                <p className="text-gray-600 mb-8">
                    Leading companies around the world collaborate with us to empower
                    learning and growth.
                </p>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
                    {partners.map((partner) => (
                        <div key={partner.id} className="flex items-center justify-center">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 object-contain grayscale hover:grayscale-0 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
