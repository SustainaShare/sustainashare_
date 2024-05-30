const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/path-to-logo.png" alt="Logo" />
            </div>
            <div className="flex justify-between h-16">
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    <a href="/" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</a>
                    <a href="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">About</a>
                    <a href="/donations-list" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Donation List</a>
                    <a href="/contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</a>
                </div>
                <div>
                    Login
                </div>
                </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
