const CTASection = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block">Join us today and make a difference!</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-button hover:bg-primary"
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
