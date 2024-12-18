
  
const TextSlider = () => {
  return (
    <div className="relative bg-[#F2F4FF] overflow-hidden w-full min-h-[450px] sm:h-screen flex items-start sm:items-center justify-center px-4 py-16 sm:p-0">
      {/* Header Title */}
      <h1 className="absolute top-10 sm:top-12 left-4 sm:left-14 text-2xl sm:text-3xl font-bold text-blue-950">
        Welcome to IPO Ji
      </h1>

      {/* Main Content Container */}
      <div className="flex flex-col bg-[#FFFFFF] w-full sm:w-[90%] max-w-5xl h-[450px] sm:h-[80%] rounded-lg border border-x-gray-500   border-y-gray-500 overflow-hidden mt-8 sm:mt-0">
        {/* Scrollable Content */}
        <div className="flex flex-col space-y-6 sm:space-y-9 overflow-y-auto h-full p-4 sm:p-6 scroll-smooth border ">
          {/* Content Sections */}
          <div className="flex flex-col space-y-4 bg-[#FFFFFF] p-4 sm:p-8 rounded-lg  ">
            <h2 className="font-bold text-lg sm:text-xl text-[#212529] mb-2">
              Your Gateway to Initial Public Offerings
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Welcome to IPO Ji, a one-stop gateway into the brave new world of
              Initial Public Offerings! IPO Ji is dedicated to bringing you
              comprehensive, updated information on Mainline and SME IPOs. Be it
              the latest offerings or detailed insights into upcoming IPOs, we
              make sure that you are always armed with knowledge and ready for
              any new investment opportunities that knock on your doors.
            </p>

            <h2 className="font-bold text-lg sm:text-xl text-[#212529] mb-2">
              Seamless IPO Applications
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              What puts us at IPO Ji a head and shoulders above the rest of the
              lot is the ability to apply for IPOs directly from our platform.
              No more hassles of the traditional application process. Using IPO
              Ji, you can apply to the most happening IPOs with just a few
              clicks. We integrate with leading brokers like Angel Broking,
              Zerodha, Dhan, and Upstox, so applying becomes smooth,
              efficient, and easy.
            </p>

            <h2 className="font-bold text-lg sm:text-xl text-[#212529] mb-2">
              Stay Ahead with Real-Time Updates
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Be the first one at IPO Ji to get detailed, timely updates on the
              latest IPOs hitting the markets. Know the offer dates, price
              ranges, lot sizes, subscription data, and the expected premiums.
              Keep yourself updated about upcoming IPOs of industry giants and
              promising startups. Ensure that you never miss out on any
              investment opportunity by being first in line with an application
              for a new offering from companies such as Hyundai Motor India,
              IndiaFirst Life Insurance, or Swiggy.
            </p>

            <h2 className="font-bold text-lg sm:text-xl text-[#212529] mb-2">
              Comprehensive Buyback Information
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Apart from IPOs, IPO Ji provides detailed coverage on buybacks.
              Track current, upcoming, and closed buybacks with ease. Know all
              the key details like Buyback prices, issue sizes, and record dates
              for companies like TCS, Wipro, Infosys, Bajaj Auto and more. Sell
              your shares back to the issuing company or simply track for
              overall information in our buyback section.
            </p>

            <h2 className="font-bold text-lg sm:text-xl text-[#212529] mb-2">
              Real-Time Expected Premiums
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Get ahead with grey market premium updates that are a strong
              indicator of the performance of new IPOs before listing. Our GMP
              section brings to you information about expected premiums that
              will let you make a call for the best returns on your investment.
            </p>

            <h2 className="font-bold text-lg sm:text-xl text-[#212529] mb-2">
              User-Friendly Interface
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The road to an IPO was never so easy. Through our user-friendly
              platform, you can get all the information that you need in the
              snap of your fingers. Furthermore, because of our partnerships
              with top brokers, at IPO Ji, one can apply for IPOs directly,
              which makes the process seamless and efficient.
            </p>

            <h2 className="font-bold text-lg sm:text-xl text-[#212529] mb-2">
              Your One-Stop IPO Resource
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              IPO Ji is a website, but it is much more—an online community of
              investors who are crazy about IPOs. Be it detailed company
              insights, subscription details, or related news, IPO Ji has
              everything one needs for any kind of information on IPOs.
            </p>

            <h2 className="font-bold text-lg sm:text-xl text-[#212529] mb-2">
              Invest with a View
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              With IPO Ji, get ready for an exciting investment journey. Be
              informed, stay ahead, and apply effortlessly in the most lucrative
              IPOs with IPO Ji. Let's invest in the future together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
