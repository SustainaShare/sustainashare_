const CTASection = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Make a Difference Today</span>
          <span className="block underline"> Donate Food and Help Fight Hunger <em>Sustainably</em></span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Your generosity can provide hope and nourishment to those in need. Together, we can combat hunger and build a stronger community.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/donate-food"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Donate Food
            </a>
          </div>
          <div className="inline-flex rounded-md shadow">
            <a
              href="/donate-items"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Donate Other Items
            </a>
          </div>
          <div className="inline-flex rounded-md shadow">
            <a
              href="/volunteer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Volunteer
            </a>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-indigo-200">
            For more information or if you have any questions, please reach out to us at{" "}
            <a href="mailto:contact@fooddonation.org" className="text-white underline">
              contact@fooddonation.org
            </a>{" "}
            or call us at (123) 456-7890.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
