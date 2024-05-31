import { useEffect } from "react";

const HeroSection = () => {
  const phrases = [
    "feed your neighbor",
    "professionalize your donation program",
    "enhance your profitability",
  ];
  let currentPhraseIndex = 0;

  const updatePhrase = () => {
    const pTag = document.querySelector('p'); // Select the paragraph element
    if (pTag) {
      pTag.textContent = phrases[currentPhraseIndex]; // Update content
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Cycle through phrases
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updatePhrase, 2000); // Update every 2 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Empty dependency array to run only once

  return (
    <div className="bg-gray-100  opacity-60"
     style={{
      backgroundImage:
       `url('https://media.gettyimages.com/id/1362787762/photo/details-of-volunteer-with-box-of-food-for-poor.jpg?s=612x612&w=0&k=20&c=q-eLXPRlCfDV2m8mRJt1GIoExrSQJFW1h8FiE6LoMc0=')`,
       }}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-gray-950 mt-14 mb-28 ">SustainaShare makes it easy to</h1>
        <p className="mt-4 text-6xl font-medium text-zinc-800 mb-28"></p>
        <div className="mt-6">
          <a href="/register-beneficiary" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-button-light hover:bg-bg-button hover:bg-button">Let&apos;s Connect</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;