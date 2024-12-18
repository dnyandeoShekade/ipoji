
import Image from "next/image";
import Link from "next/link";

const Playstore = () => {
  return (
    <div className="block sm:block md:hidden w-full bg-[#EEF0FA] py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-[1.75rem] sm:text-[2rem] font-md text-[#000066] mb-4">
          Download App
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-sm mb-3 sm:mb-2">
          India&apos;s most downloaded IPO App
          with 14,00,000+ Downloads
        </p>

        {/* Store Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Google Play Store Link */}
          <Link
            href="https://play.google.com/store"
            target="_blank"
            className="transition-transform hover:scale-105 flex items-center justify-center"
          >
            <Image
              src="/google_store.png?height=60&width=180"
              alt="Get it on Google Play"
              width={180}
              height={60}
              className="h-[50px] sm:h-[60px] w-auto"
              priority
            />
          </Link>

          {/* Apple Store Link */}
          <Link
            href="https://apps.apple.com"
            target="_blank"
            className="transition-transform hover:scale-105 flex items-center justify-center"
          >
            <Image
              src="/apple_store.png?height=60&width=180"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-[50px] sm:h-[60px] w-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Playstore;
