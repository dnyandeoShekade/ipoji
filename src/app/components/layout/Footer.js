
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#CECEFF] px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8">
        <div className="w-20 h-20 relative bg-white rounded-lg overflow-hidden">
          <Image
            src="/ipoji.png"
            alt="IPO Ji Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="text-md sm:text-base lg:text-lg text-[#293057] flex-1">
          No financial information whatsoever published anywhere, within this
          application, should be considered as an advice to buy or sell
          securities or invest in IPOs, or as a guide to doing so in any way
          whatsoever. All matter published here is purely for educational and
          information purposes only and under no circumstances should be used
          for making investment decisions. We are not a SEBI Registered analyst.
          Readers must consult a qualified financial advisor prior to making any
          actual investment decisions, based on information published on this
          application. The information in the App is based on information
          available as on date coupled with market perceptions. You agree with
          the terms and conditions to use the App.
        </p>
      </div>

      {/* Footer Links Section */}
      <div className="flex-1 flex flex-wrap justify-between gap-8 sm:gap-12 mb-8">
        {/* Contact Us */}
        <div className="  ">
          <h3 className="mb-4 text-lg font-md">Contact Us</h3>
          <div className="space-y-2">
            <p>
              Support:{" "}
              <a
                href="mailto:support@ipoji.com"
                className="text-blue-600 hover:underline"
              >
                support@ipoji.com
              </a>
            </p>
            <p>
              For other enquiry:{" "}
              <a
                href="mailto:info@ipoji.com"
                className="text-blue-600 hover:underline"
              >
                info@ipoji.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex space-x-4">
            {["youtube", "instagram", "facebook", "telegram", "twitter"].map(
              (social) => (
                <a
                  key={social}
                  href="#"
                  className="rounded-full hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={`/${social}.png`}
                    alt={`${social} icon`}
                    width={30}
                    height={30}
                  />
                </a>
              )
            )}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="mb-4 text-lg font-md">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support & FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-md">Products</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                IPO
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Buyback
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Brokers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
       

        {/* Download */}
        <div>
          <h3 className="mb-4 text-lg font-md">Download</h3>
          <div className="flex flex-col space-y-2">
            <a href="#" className="w-40">
              <Image
                src="/google_store.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="rounded"
              />
            </a>
            <a href="#" className="w-40">
              <Image
                src="/apple_store_3.png"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="rounded"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section (moved here) */}
      <div className="mt-8 text-center text-muted-foreground font-bold">
        <p className="text-[#4700B3]">IPO JI IS A PRODUCT BY CAPAX INFOTECH PVT. LTD.
        ©2024, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
