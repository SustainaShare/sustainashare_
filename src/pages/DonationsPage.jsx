/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navLinks } from '../dummyData';
import DropdownButton from '../components/DropdownButton';
const actions = [DropdownButton]

const Donation = ({ id, title, description }) => {
  const [addedQuantity, setAddedQuantity] = useState(0);

  const handleAddToCart = () => {
    setAddedQuantity(addedQuantity + 1);
    // Simulate adding to cart (replace with actual cart logic)
    console.log(`Added ${addedQuantity + 1} unit(s) of "${title}" (ID: ${id}) to cart`);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden p-4 transition-transform transform hover:scale-105 ${
        addedQuantity > 0 ? 'border border-green-500' : ''
      }`}
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-col items-start md:items-center md:flex-row justify-between space-y-4 md:space-y-0">
        <input
          type="number"
          min="0"
          value={addedQuantity}
          onChange={(e) => setAddedQuantity(parseInt(e.target.value))}
          className="px-2 py-1 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        />
        <button
          className={`w-full md:w-auto py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 ${
            addedQuantity === 0 ? 'cursor-not-allowed' : ''
          }`}
          onClick={handleAddToCart}
          disabled={addedQuantity === 0}
        >
          {addedQuantity > 0 ? 'Add to Cart' : 'Increase Quantity'}
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
            <Donation key={donation.id} {...donation} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DonationsPage;
