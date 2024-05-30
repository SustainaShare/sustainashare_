const testimonials = [
  {
    name: "John Doe",
    quote: "Thanks to your generous donation, I can now access essential services that have greatly improved my life.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    quote: "Your support has made a significant impact on my daily life. I am so grateful for the help I've received.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sam Johnson",
    quote: "I highly recommend supporting this cause. The quality of assistance and support has been exceptional.",
    image: "https://via.placeholder.com/150",
  },
];


const TestimonialsSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our beneficiaries Would say Saying
          </p>
        </div>
        <div className="mt-10 space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="space-y-4">
              <img className="w-24 h-24 rounded-full mx-auto" src={testimonial.image} alt={testimonial.name} />
              <p className="text-lg leading-6 font-medium text-gray-900 text-center">{testimonial.name}</p>
              <p className="text-base text-gray-500 text-center">`&quot;`{testimonial.quote}`&quot;`</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
