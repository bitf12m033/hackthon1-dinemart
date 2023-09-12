import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export default function AddToCart() {
  return (
    <div>
      <Button className="bg-black text-white">
        <ShoppingCart className="h-5 w-5" /> Add To Cart
      </Button>
    </div>
  );
}
