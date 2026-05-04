import React from 'react';

const TopBrands = () => {
    return (
        <div className="container mx-auto px-4">
            <h3 className="mt-10 font-extrabold text-3xl text-center mb-8">🏷️ Top Brands</h3>

            <div className="grid grid-cols-1 gap-4 mb-20 md:grid-cols-4">
                <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-8 text-center">
                    <h3 className="font-extrabold text-orange-500 text-xl">SunGlow</h3>
                    <p className="text-gray-400">Premium Eyewear</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-8 text-center">
                    <h3 className="font-extrabold text-orange-500 text-xl">AquaShield</h3>
                    <p className="text-gray-400">Sun Protection</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-8 text-center">
                    <h3 className="font-extrabold text-orange-500 text-xl">TropicWear</h3>
                    <p className="text-gray-400">Summer Fashion</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-8 text-center">
                    <h3 className="font-extrabold text-orange-500 text-xl">CoastLine</h3>
                    <p className="text-gray-400">Beach Essentials</p>
                </div>
            </div>
        </div>
    );
};

export default TopBrands;