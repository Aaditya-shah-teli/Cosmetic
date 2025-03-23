import React from 'react';

export const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl text-center">
                {/* Profile Image */}
                <img 
                    src="myPic.jpeg" 
                    alt="Aaditya Shah" 
                    className="w-32 h-32 rounded-full mx-auto shadow-lg"
                />
                
                {/* Name and Title */}
                <h1 className="text-3xl font-bold text-gray-900 mt-4">Aaditya Shah</h1>
                <p className="text-gray-600 text-lg">Full-Stack Developer | E-commerce Specialist</p>

                {/* Goals */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800">🎯 My Goal</h2>
                    <p className="text-gray-700 mt-2">
                        I aim to explore **AI and Machine Learning**, enhance my **back-end development skills**, 
                        and contribute to **innovative startups** 🚀.
                    </p>
                </div>

                {/* Current Affairs */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800">📌 Current Affairs</h2>
                    <p className="text-gray-700 mt-2">
                        - **Learning MERN Stack** (MongoDB, Express.js, React, Node.js)  
                        - Building **React and Full-Stack applications**  
                        - Open to **collaborations and internship opportunities**  
                    </p>
                </div>

                {/* Experience */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800">💼 Experience</h2>
                    <p className="text-gray-700 mt-2">
                        I have **3 years of experience** in the **e-commerce industry**, 
                        where I worked on **front-end and back-end development** to build scalable platforms.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-800">🚀 Looking for Startups!</h2>
                    <p className="text-gray-700 mt-2">
                        If you're a **startup** looking for a dedicated developer with a strong **e-commerce background**,  
                        let's collaborate! Feel free to **reach out** and let's build something amazing together. 💡
                    </p>
                </div>

                {/* Contact Button */}
                <a 
                    href="mailto:shahsudha259@gmail.com" 
                    className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};