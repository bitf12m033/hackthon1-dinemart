import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Subscribe() {
  return (
    <section className="mt-24 text-center flex items-center justify-center">
      <div className="text-9xl font-bold opacity-10 absolute text-gray-300">
        Newsletter
      </div>
      <div className="flex flex-col gap-y-6">
        <h1 className="capitalize font-extrabold text-3xl">
          Subscribe Our Newsletter
        </h1>
        <p className="capitalize text-base text-gray-500 font-thin">
          Get the latest information and promo offers directly
        </p>
        <div className="flex gap-8">
          <Input placeholder="Input email address" />
          <Button className=" bg-black text-white px-12 rounded-2xl">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
