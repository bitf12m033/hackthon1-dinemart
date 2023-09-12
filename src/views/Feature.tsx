import Image from "next/image";
import React from "react";
import feature from "/public/feature.webp";
import { Button } from "@/components/ui/button";
export default function Feature() {
  return (
    <section className="mt-32 bg-slate-50 p-8 flex justify-around">
      <div className="text-4xl font-bold absolute right-1 w-1/3 -mt-20">
        Unique and Authentic Vintage Designer Jewellery
      </div>
      <div className="w-1/2">
        <div className="text-8xl text-gray-200 font-extrabold w-1/4 absolute opacity-40 z-30 float-left">
          Different from Others
        </div>
        <div className="flex justify-evenly">
          <div className="float-left">
            <h3 className="text-lg font-bold">Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="float-left gap-4">
            <h3 className="text-lg font-bold">Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="flex justify-around mt-24">
          <div className="float-left gap-x-8">
            <h3 className="text-lg font-bold">Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="float-left">
            <h3 className="text-lg font-bold">Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex justify-around gap-8 p-12 items-center">
          <Image src={feature} alt="feature" />

          <div>
            <p>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button className="bg-black text-white mt-4">
              See All Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
