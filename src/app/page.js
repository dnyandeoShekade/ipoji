
import React from "react";
import Navbar from "@/app/components/layout/Navbar";
import Sidebar from "@/app/components/layout/Sidebar";
import Header from "@/app/components/layout/Head";
import MainContent from "@/app/components/sections/MainContent";
import TopBrokers from "@/app/components/sections/TopBrokers";
import BuybackListing1 from "@/app/components/ui/BuybackListing1";
import TestimonialCard from "@/app/components/sections/TestimonialCard";
import Ipoji_features from "@/app/components/sections/Ipoji_features";
import BlogListing from "@/app/components/ui/BlogListing";
import TextSlider from "@/app/components/sections/TextSlider";
import Footer from "@/app/components/layout/Footer";
import SignupImg from "@/app/components/sections/SignupImg";
import RadioGroup from "@/app/components/Utility/RadioGroup";
import CarouselDemo from "./components/ui/CarouselDemo";
import Advertising from "@/app/components/ui/Advertising";
import Adverti from "@/app/components/sections/Adverti";
import Playstore from "@/app/components/layout/Appstore";

const Page = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar className="z-10 bg-[#FFFFFF]" />

      {/* Carousel */}
      <CarouselDemo />
      <div className="lg:hidden sm:block">
        <Playstore/>
        </div>

      {/* Main Content Area */}
      <div className="bg-[#F2F4FF]">
        <div className="container mx-auto lg:p-9 p-4">
          {/* Header */}
          <Header title="IPO - Initial Public Offering" />

          {/* Radio Group */}
          <div className="gap-12 m-1 lg:relative lg:right-[4%] ">
            <RadioGroup />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-[100px]  md:w-[210px]">
              <Sidebar />
            </div>

            <div className="flex-1">
              <MainContent />
              <TopBrokers />
            </div>

            <div className="w-full md:w-[300px] relative right-[50px]">
              <Advertising />
            </div>
          </div>
        </div>

       
        <div className="">
          <BuybackListing1 />
        </div>

        {/* Testimonials */}
        <TestimonialCard />

        {/* Signup Image */}
        <SignupImg />

        {/* IPOJI Features */}
        <Ipoji_features />
      </div>

      {/* Blog Section */}
      <main>
        <BlogListing />
      </main>

      {/* Text Slider */}
      <div className="bg-[#F2F4FF]">
        <TextSlider />
      </div>

      <Adverti />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
