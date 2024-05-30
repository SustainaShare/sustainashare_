const CTASection = () => {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block">Join us today and make a difference!</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/sign-up"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
