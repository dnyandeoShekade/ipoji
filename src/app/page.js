import React from "react";
import Navbar from "@/app/components/Navbar";

import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Head";
import MainContent from "@/app/components/MainContent";
import TopBrokers from "@/app/components/TopBrokers";
import BuybackListing1 from "@/app/components/BuybackListing1";
import TestimonialCard from "@/app/components/TestimonialCard";
import Ipoji_features from "@/app/components/Ipoji_features";
import BlogListing from "@/app/components/BlogListing";
import TextSlider from "@/app/components/TextSlider";
import Footer from "@/app/components/Footer";
import SignupImg from "@/app/components/SignupImg";
import RadioGroup from "./components/RadioGroup";
import CarouselDemo from "./components/CarouselDemo";
const page = () => {
  return (
    <>
      <Navbar className="z-10  bg-[#FFFFFF] " />

      {/* <Main /> */}
      <CarouselDemo />
      <div className="bg-[#F2F4FF]">
        <div className="container mx-auto p-9 overflow-hidden">
          <Header title="IPO - Initial Public Offering" />
          <div className="gap-9 m-2 relative left-[9px]">
            <RadioGroup />
          </div>
          <div className="grid grid-cols-1  md:grid-cols-[210px_1fr]">
            <Sidebar />
            <MainContent />
          </div>
        </div>

        <TopBrokers />
        <BuybackListing1 />
        <TestimonialCard />
        <SignupImg />
        <Ipoji_features />
      </div>

      <main>
        <BlogListing />
      </main>
      <div className="bg-[#F2F4FF]">
        <TextSlider />
      </div>
      <Footer />
    </>
  );
};

export default page;
