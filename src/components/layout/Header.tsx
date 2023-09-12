import React from "react";
import Logo from "/public/Logo.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";

const Header = () => {
  return (
    <div className="flex justify-around items-center py-4 ">
      <Image src={Logo} alt="Logo" className="w-40" />
      <ul className="list-none flex gap-x-10 text-lg">
        <li>
          <Link href={"/collection/male"}>Male</Link>
        </li>
        <li>
          <Link href={"/collection/female"}>Female</Link>
        </li>
        <li>
          <Link href={"/collection/kids"}>Kids</Link>
        </li>
        <li>
          <Link href={"/collection/sports"}>Sports</Link>
        </li>
        <li>
          <Link href={"/collection/all"}>All</Link>
        </li>
      </ul>
      <Input
        name="searchBar"
        className="w-72 h-8"
        placeholder="What you're looking for?"
      />
      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
        <ShoppingCart className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Header;
