const features = [
  {
    title: "We make it easy",
    description: "We’ve taken the headaches out of the donation process. Your team will be set up and donating in no time.",
    icon: "🌟",
  },
  {
    title: "It’s all in the SustainaShare App",
    description: "Select your donation items and schedule delivery in just a few minutes each day. Need a driver? The SustainaShare App will dispatch one, and we’ll track the chain of custody to the recipient.",
    icon: "🚀",
  },
  {
    title: "Scale from one location to thousands",
    description: "Whether your business is small or large or whether you’re donating tomatoes or tacos, SustainaShare’s vast network of nonprofit partners and 99% match rate means we’ll take the hassle out of finding a good home for your surplus.",
    icon: "💡",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Key Features of Our Service
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover the main features that make our service stand out.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
