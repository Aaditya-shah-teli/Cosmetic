import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Social = () => {
    const socialLinks = [
        { id: 1, name: "Facebook", icon: <FaFacebook className="text-blue-600" />, link: "https://www.facebook.com/aaditya.shah.3367174" },
        { id: 2, name: "Instagram", icon: <FaInstagram className="text-pink-600" />, link: "https://www.instagram.com/aadityaaa____7/" },
        { id: 3, name: "LinkedIn", icon: <FaLinkedin className="text-blue-700" />, link: "https://www.linkedin.com/in/aaditya-sah-516178308/" }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Connect with Me</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {socialLinks.map((social) => (
                    <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
                    >
                        <div className="text-5xl mb-3">{social.icon}</div>
                        <h2 className="text-xl font-semibold text-gray-800">{social.name}</h2>
                    </a>
                ))}
            </div>
        </div>
    );
};