const BlogListing = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-6 bg-[#F2F4FF]">
      <div className="flex flex-col lg:flex-row lg:space-x-9">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 lg:mb-0">
          <div className="overflow-hidden transition-shadow hover:shadow-lg border rounded-lg bg-white h-full">
            <div className="relative aspect-[4/3] w-full">
              <img
                src="/blog-1.jpg?height=200&width=300"
                alt="IPO Pipeline for December 2024"
                className="object-cover bg-slate-200 rounded-t-lg"
              />
            </div>
            <div className="p-4 space-y-2">
              <time className="block text-sm text-gray-500">
                November 30, 2024 at 01:59 PM
              </time>
              <h2 className="text-lg font-semibold text-gray-900">
                IPO Pipeline for December 2024
              </h2>
              <p className="text-sm text-gray-600">
                The businesses are using the primary market to meet working
                capital needs...
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="block group">
            <div className="overflow-hidden bg-white transition-shadow hover:shadow-md border rounded-lg w-full">
              <div className="p-4 flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-1 space-y-2">
                  <time className="text-sm text-gray-500">
                    November 29, 2024 at 04:28 PM
                  </time>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Breaking Records! Indian Startups Take IPOs by Storm
                  </h2>
                  <p className="text-sm text-gray-600">
                    New-age tech startups like Swiggy, Go Digit, TBO Tek, Awfis,
                    Ola Electric...
                  </p>
                </div>
                <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
                  <div className="aspect-[4/3] relative">
                    <img
                      src="/blog-2.jpg?height=200&width=300"
                      alt="Breaking Records! Indian Startups Take IPOs by Storm"
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Links */}
      <div className="mt-8 flex justify-center">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium"
        >
          View All <span className="ml-1" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default BlogListing;
