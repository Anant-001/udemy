// src/components/Routes/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Navbar({ setSearchTerm, setSearchCategory }) {
    const [inputValue, setInputValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        "all",
        "development",
        "business",
        "design",
        "it-and-software",
        "marketing",
    ];

    const handleSearch = (e) => {
        setInputValue(e.target.value);
        setSearchTerm(e.target.value);
        setSearchCategory(selectedCategory);
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-purple-600">udemy</Link>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 mx-6 gap-2">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border px-3 py-2 rounded-lg bg-gray-50 focus:ring-2 focus:ring-purple-500"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat.replace("-", " ")}
                        </option>
                    ))}
                </select>
                <div className="flex flex-1">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleSearch}
                        placeholder="Search for anything"
                        className="w-full border rounded-l-full px-4 py-2 focus:outline-none"
                    />
                    <button className="bg-gray-100 border rounded-r-full px-4 py-2">
                        <Search className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 items-center">
                <Link to="/plans-pricing" className="hidden md:block text-gray-700">
                    Plans & Pricing
                </Link>
                <Link to="/udemy-business" className="hidden md:block text-gray-700">
                    Udemy Business
                </Link>
                <Link to="/teach-on-udemy" className="hidden md:block text-gray-700">
                    Teach on Udemy
                </Link>
                <button className="px-4 py-1 border rounded hover:bg-gray-100">Log In</button>
                <button className="px-4 py-1 bg-purple-600 text-white rounded hover:bg-purple-700">
                    Sign Up
                </button>
            </div>
        </nav>
    );
}
