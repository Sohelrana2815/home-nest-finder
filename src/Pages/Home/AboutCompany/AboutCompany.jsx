const AboutCompany = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center py-12 space-y-10 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 space-y-6 px-4">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900">
            About our company
          </h2>
          <p className="text-gray-600">
            At EstatePro, we are a team of experienced real estate professionals
            committed to delivering exceptional service. Our extensive knowledge
            of the local market and our strategic approach ensure that we
            provide our clients with the best opportunities and the most
            accurate information.
          </p>
          <p className="text-gray-600">
            We believe in building lasting relationships based on trust,
            transparency, and personalized service.
          </p>
          <button className="mt-8 px-6 py-3 bg-black text-white font-semibold rounded-md">
            About us
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around w-full lg:w-1/2 text-center space-y-10 md:space-y-0 md:space-x-8 px-4">
          <div>
            <p className="text-gray-600">Satisfaction rate</p>
            <h2 className="text-4xl lg:text-7xl font-semibold mt-2 text-gray-900">
              99%
            </h2>
          </div>
          <div>
            <p className="text-gray-600">Happy clients</p>
            <h2 className="text-4xl lg:text-7xl font-semibold mt-2 text-gray-900">
              15K
            </h2>
          </div>
          <div>
            <p className="text-gray-600">Expert agents</p>
            <h2 className="text-4xl lg:text-7xl font-semibold mt-2 text-gray-900">
              45+
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
