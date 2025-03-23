import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loading } from '../SideEffects/Loading';
import { Error } from '../SideEffects/Error';

export const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-gray-900">
                <Loading />
                <h1 className="text-xl text-white font-semibold"><Loading/></h1>
            </div>
        );
    }

    if (error || !product) {
        return (
            <h1 className="h-screen w-screen bg-red-100 text-gray-900 flex items-center justify-center text-2xl font-bold">
                Product not found! <Error />
            </h1>
        );
    }

    return (
        <div className="container mx-auto p-6 min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center text-pink-700">{product.name}</h1>
                <img 
                    className="w-full h-96 object-cover rounded-lg mt-4"
                    src={product.image_link || 'https://via.placeholder.com/500'} 
                    alt={product.name} 
                />
                <p className="text-gray-600 mt-3 font-medium text-lg">
                    Brand: <span className="text-gray-900 font-semibold">{product.brand || 'Unknown'}</span>
                </p>
                <p className="text-gray-600 text-lg">
                    Price: <span className="text-pink-600 font-semibold">{product.price_sign}{product.price || 'N/A'}</span>
                </p>
                <p className="text-gray-700 mt-4">{product.description || "No description available."}</p>
                <a 
                    href={product.product_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 block text-center bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
                >
                    Buy Now
                </a>
            </div>
        </div>
    );
};
