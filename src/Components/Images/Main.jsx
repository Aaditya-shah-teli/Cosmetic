import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../SideEffects/Loading';
import { Error } from '../SideEffects/Error';
import { NavLink } from 'react-router-dom';

export const Main = () => {
    const [allData, setAllData] = useState([]); // Stores full data
    const [filteredData, setFilteredData] = useState([]); // Stores filtered data for search
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json");
                setAllData(response.data); // Store full data
                setFilteredData(response.data); // Initially, show all data
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Search functionality
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (!query) {
            setFilteredData(allData); // Reset to full data if search is empty
        } else {
            const filtered = allData.filter(item =>
                item.name?.toLowerCase().includes(query) || 
                item.brand?.toLowerCase().includes(query)
            );
            setFilteredData(filtered);
        }
    };

    if (loading) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-gray-900">
                <Loading />
                <h1 className="text-xl text-white font-semibold">Loading the best makeup products for you...</h1>
            </div>
        );
    }

    if (filteredData.length === 0) {
        return (
            <h1 className="h-screen w-screen bg-pink-100 text-gray-900 flex items-center justify-center text-2xl font-bold">
                No products found! <Error />
            </h1>
        );
    }

    return (
        <div className="container mx-auto p-6 min-h-screen bg-pink-50">
            <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">Explore Our Makeup Collection</h1>

            {/* Search Input */}
            <div className="flex justify-center mb-6">
                <input 
                    type="text"
                    placeholder="Search by product name or brand..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
                {filteredData.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow-lg p-4 transform transition duration-300 hover:scale-105">
                        <h1 className="text-center text-xl font-bold text-gray-800 mb-2">{item.name}</h1>
                        <img className="w-full h-72 object-cover rounded-lg" src={item.image_link} alt={item.name} />
                        <p className='text-gray-600 mt-3 font-medium'>Brand: <span className='text-gray-900 font-semibold'>{item.brand || "Unknown"}</span></p>
                        <p className='text-gray-600'>Price: <span className='text-pink-600 font-semibold'>{item.price_sign}{item.price || "N/A"}</span></p>
                        <NavLink to={`/${item.id}`} className='block mt-4'>
                            <button className='w-full py-2 px-4 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition duration-300'>See Details</button>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};
