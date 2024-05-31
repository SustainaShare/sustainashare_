/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navLinks } from '../dummyData';
import DropdownButton from '../components/DropdownButton';
const actions = [DropdownButton]

const DonationProductCard = ({ id, title, description, image_link }) => {
    const [addedQuantity, setAddedQuantity] = useState(0);

    const handleIncrement = () => {
        setAddedQuantity(addedQuantity + 1);
    };

    const handleDecrement = () => {
    if (addedQuantity > 0) {
        setAddedQuantity(addedQuantity - 1);
    }
    };

    const handleAddToCart = () => {
        setAddedQuantity(addedQuantity + 1);
        // Simulate adding to cart (replace with actual cart logic)
        console.log(`Added ${addedQuantity + 1} unit(s) of "${title}" (ID: ${id}) to cart`);
    };

    return (
        <div className="w-80 bg-white shadow rounded">
            <div
                className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                style={{
                    backgroundImage:
                     `url('${image_link}')`,
                }}
            >
                <div className="flex justify-between">
                    <input type="checkbox" />
                    <button className="text-white hover:text-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </button>
                </div>
                <div>
                    <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                        available
                    </span>
                </div>
            </div>
            <div
                className={`p-4 flex flex-col items-center transition-transform transform hover:scale-105 ${addedQuantity > 0 ? 'border border-green-300' : ''
                    }`}
            >
                <h1 className="text-gray-900 text-center mt-1">
                    {title}
                </h1>
                <p className="text-gray-500 font-light text-xs text-center">
                    {description}
                </p>
                <div className="inline-flex items-center m-2">
                    <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200" 
                    onClick={handleDecrement}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                            />
                        </svg>
                    </button>
                    <input
                        type="number" min="0" value={addedQuantity} onChange={(e) => setAddedQuantity(parseInt(e.target.value))}
                        className="px-2 py-1 m-1 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                    />
                    <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200" 
                    onClick={handleIncrement}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </button>
                </div>
                <button
                    className={`w-full md:w-auto py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 ${addedQuantity === 0 ? 'cursor-not-allowed' : ''}`}
                    onClick={handleAddToCart}
                    disabled={addedQuantity === 0}
                >
                    {addedQuantity > 0 ? 'Request Donation' : 'Specify Quantity'}
                </button>
            </div>
        </div>
    );
};


const DonationsPage = ({ donationItems }) => {
    return (
        <>
            <Header navLinks={navLinks} actions={actions} />
            <main className='mt-12 mb-34 m-4 sm:m-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {donationItems.map((donation) => (
                        <DonationProductCard key={donation.id} {...donation} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default DonationsPage;
