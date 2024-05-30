const HeroSection = () => {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Welcome to Our Service</h1>
          <p className="mt-4 text-lg leading-6 text-gray-600">We provide the best solutions for your needs.</p>
          <div className="mt-6">
            <a href="/get-started" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Get Started</a>
          </div>
        </div>
      </div>
    );
  };
  
export default HeroSection;
