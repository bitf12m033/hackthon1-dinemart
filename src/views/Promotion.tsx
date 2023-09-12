import Image from "next/image";
import React from "react";
import event1 from "/public/event1.webp";
import event2 from "/public/event2.webp";
import event3 from "/public/event3.webp";
import { Button } from "@/components/ui/button";

export default function Promotion() {
  return (
    <section>
      <p className="text-center text-xs text-blue-600 font-bold uppercase">
        Promotions
      </p>
      <h2 className="scroll-m-20 text-center py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Our Promotions Events
      </h2>
      <div className="flex justify-between h-96 gap-x-8">
        <div className="w-3/5">
          <div className="bg-slate-300 h-1/2 p-10 flex justify-between items-center">
            <div>
              <h2 className="scroll-m-20 py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                GET UP TO 60%
              </h2>
              <p className="capitalize">For the summer season</p>
            </div>
            <Image className="mb-6" src={event1} alt="promotions-banner" />
          </div>
          <div className="bg-black h-1/2 mt-4 p-4 text-white text-center">
            <h2 className="scroll-m-20 py-2 text-3xl font-semibold ">
              GET 30% Off
            </h2>
            <p className="capitalize">USE PROMO CODE</p>
            <Button className="bg-gray-500 px-8 rounded-xl mt-2 hover:bg-gray-400">
              DINEWEEKENDSALE
            </Button>
          </div>
        </div>
        <div className="w-1/5 bg-orange-100 overflow-hidden p-4">
          <p>Flex Shirt</p>
          <p>
            <del>$1000</del>
            <span className="ml-2 font-bold">$500</span>
          </p>
          <Image src={event2} alt="Promotion Image" />
        </div>
        <div className="w-1/5 bg-slate-300 overflow-hidden p-4">
          <p>Flex Shirt</p>
          <p>
            <del>$1000</del>
            <span className="ml-2 font-bold">$500</span>
          </p>
          <Image src={event3} alt="Promotion Image" />
        </div>
      </div>
    </section>
  );
}
