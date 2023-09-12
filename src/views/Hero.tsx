import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import HeroImage from "/public/header.webp";
import f1 from "/public/Featured1.webp";
import f2 from "/public/Featured2.webp";
import f3 from "/public/Featured3.webp";
import f4 from "/public/Featured4.webp";
import Image from "next/image";
import ProductList from "./ProductList";
export default function Hero() {
  return (
    <section className="flex justify-between">
      {/* Left Div */}
      <div className="flex-1 p-10">
        <Badge className="py-2 px-8 rounded-xl bg-blue-200 text-lg text-blue-600 mt-2 hover:bg-blue-300">
          Sale 70%
        </Badge>

        <h1 className="text-7xl font-bold mt-4">
          An Industrial Take on Streetwear
        </h1>
        <p className="mt-4">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="bg-black text-white px-10 py-6 mt-4 gap-2">
          <ShoppingCart /> Start Shopping
        </Button>

        <ul className="flex justify-between mt-20 items-center">
          <li>
            <Image src={f1} alt="Featured1" />
          </li>
          <li>
            <Image src={f2} alt="Featured2" />
          </li>
          <li>
            <Image src={f3} alt="Featured3" />
          </li>
          <li>
            <Image src={f4} alt="Featured4" />
          </li>
        </ul>
      </div>
      {/* Right Div */}

      <div className="p-12">
        <div className="w-[32rem] h-[32rem] bg-orange-50 rounded-full">
          <Image
            src={HeroImage}
            alt="heroImage"
            className="absolute right-4 top-10"
          />
        </div>
      </div>
    </section>
  );
}
