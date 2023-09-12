import React from "react";
import Image from "next/image";
import Logo from "/public/Logo.webp";
import { Badge } from "@/components/ui/badge";
import { TwitterIcon, FacebookIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import Footer from "./Footer";
export default function Support() {
  return (
    <section className="mt-16">
      <div className="flex justify-around">
        {/* First Col */}
        <div className="flex items-start flex-col gap-5 p-12">
          {/* Logo */}
          <Image src={Logo} alt="" />
          {/* Text */}
          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          {/* Social Badges */}
          <div className="flex gap-4">
            <Badge className="bg-gray-300 rounded-xl p-2">
              <TwitterIcon />
            </Badge>
            <Badge className="bg-gray-300 rounded-xl p-2">
              <FacebookIcon />
            </Badge>
            <Badge className="bg-gray-300 rounded-xl p-2">
              <LinkedinIcon />
            </Badge>
          </div>
        </div>
        {/* Second Col */}
        <div>
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Terms of Use</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>How it Works</Link>
            </li>
            <li>
              <Link href={"/"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* Third Col */}
        <div>
          <h3 className="font-bold text-lg mb-2">Support</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>Support Center</Link>
            </li>
            <li>
              <Link href={"/"}>24h Service</Link>
            </li>
            <li>
              <Link href={"/"}>Quick chat</Link>
            </li>
          </ul>
        </div>
        {/* Fourth Col */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>Whatsapp</Link>
            </li>
            <li>
              <Link href={"/"}>Support 24h</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
}
