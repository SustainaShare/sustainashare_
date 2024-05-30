import React, { useState } from 'react';
import donationItems from '../dummy';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Donation = ({ id, title, description, quantity, price }) => {
  const [addedQuantity, setAddedQuantity] = useState(0);

  const handleAddToCart = () => {
    setAddedQuantity(addedQuantity + 1);
    // Simulate adding to cart (replace with actual cart logic)
    console.log(`Added ${addedQuantity + 1} unit(s) of "${title}" (ID: ${id}) to cart`);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden p-4 ${
        addedQuantity > 0 ? 'border border-green-500' : ''
      }`}
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        {/* <span className="text-gray-500 text-sm">Price: ${price} per unit</span> */}
        <div className="flex items-center">
          <input
            type="number"
            min="0"
            value={addedQuantity}
            onChange={(e) => setAddedQuantity(parseInt(e.target.value))}
            className="px-2 py-1 border rounded-md mr-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          />
          <button
            className={`py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 ${
              addedQuantity === 0 ? 'cursor-not-allowed' : ''
            }`}
            onClick={handleAddToCart}
            disabled={addedQuantity === 0}
          >
            {addedQuantity > 0 ? 'Add to Cart' : 'Apply to receive'}
          </button>
        </div>
      </div>
    </div>
  );
};

const DonationsPage = ({ donationItems }) => {
  return (
    <>
    <Header/>
    <main className='mt-32 mb-34 mr-48 ml-48'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {donationItems.map((donation) => (
                <Donation key={donation.id} {...donation} />
            ))}
        </div>
    </main>
    {/* <Footer className="pb-0"/> */}
    </>
  );
};

export default DonationsPage;
