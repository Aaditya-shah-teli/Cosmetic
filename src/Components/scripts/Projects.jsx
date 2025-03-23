import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get("https://api.github.com/users/Aaditya-shah-teli/repos");
                setRepos(response.data);
            } catch (error) {
                setError("Failed to fetch repositories");
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    // Search function
    const filteredRepos = repos.filter(repo =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
                <h1 className="text-xl font-semibold">Fetching Your GitHub Projects...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-screen flex justify-center items-center bg-red-100 text-red-800">
                <h1 className="text-xl font-semibold">{error}</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">My GitHub Projects</h1>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredRepos.length > 0 ? (
                    filteredRepos.map((repo) => (
                        <div key={repo.id} className="bg-white rounded-xl shadow-lg p-4 transform transition duration-300 hover:scale-105">
                            <h2 className="text-lg font-bold text-gray-800">{repo.name}</h2>
                            <p className="text-gray-600 text-sm mt-1">{repo.description || "No description available"}</p>
                            <p className="text-gray-500 text-xs mt-1">⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 block text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-700 text-lg">No projects found.</p>
                )}
            </div>
        </div>
    );
};