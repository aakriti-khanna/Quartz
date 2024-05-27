import React from 'react';
import { motion } from 'framer-motion';

function AboutUs  ()  {
    return (
        <motion.div
            className="bg-gradient-to-b from-blue-900 to-blue-600 text-white min-h-screen py-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto">
                <motion.h1
                    className="text-6xl font-semibold mb-8 text-center text-yellow-300"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    About Quartz & Silica Industries
                </motion.h1>

                <motion.div
                    className="p-8 bg-blue-800 rounded-lg shadow-md"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <h2 className="text-xl font-semibold mb-4 text-yellow-300">Our Mission</h2>
                    <p className="text-lg leading-relaxed">
                        At Quartz & Silica Industries, our mission is to provide premium-quality quartz and silica products while maintaining a commitment to environmental sustainability and ethical business practices. We aim to exceed our customers' expectations by delivering exceptional service and innovative solutions.
                    </p>
                </motion.div>

                <motion.div
                    className="p-8 mt-8 bg-blue-800 rounded-lg shadow-md"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <h2 className="text-xl font-semibold mb-4 text-green-300">Our Values</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Customer satisfaction is our top priority.</li>
                        <li className="mb-2">Integrity and transparency in all dealings.</li>
                        <li className="mb-2">Continuous improvement and innovation.</li>
                        <li className="mb-2">Respect for diversity and inclusivity.</li>
                        <li>Community engagement and social responsibility.</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="p-8 mt-8 bg-blue-800 rounded-lg shadow-md"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <h2 className="text-xl font-semibold mb-4 text-yellow-300">Our Trust</h2>
                    <p className="text-lg leading-relaxed">
                        Clients trust us for their quartz and silica needs because we deliver results. With our expertise and dedication, we ensure that our clients find the perfect products that meet their requirements. Our commitment to transparency and integrity builds lasting relationships based on trust.
                    </p>
                </motion.div>

                <motion.div
                    className="p-8 mt-8 bg-blue-800 rounded-lg shadow-md"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <h2 className="text-xl font-semibold mb-4 text-yellow-300">Problem Solving</h2>
                    <p className="text-lg leading-relaxed">
                        At Quartz & Silica Industries, we understand that navigating the quartz and silica market can be challenging. That's why we're here to help. Our innovative solutions and personalized approach ensure that our clients' needs are met effectively. Whether it's finding the perfect product or maximizing value, we are committed to solving our clients' challenges.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};



function ParentComponent() {
    return (
        <div className="parent-component">
            <h1>Welcome to Minerals Industries</h1>
            {/* Other content */}
            <AboutUs /> {/* Calling the AboutUs component */}
        </div>
    );
}

export default ParentComponent;
// export default AboutUs;
