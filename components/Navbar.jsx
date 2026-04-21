"use client";

import { Search, Gift, Zap, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0b1c2c] text-white px-6 py-3 flex items-center justify-between">
      {/* LEFT: Logo */}
      <div className="flex items-center">
        <Image src="/asian-shop.png" alt="Asian Shop" width={100} height={30} />
      </div>

      {/* CENTER: Search Bar */}
      <div className="flex-1 mx-6">
        <div className="flex items-center bg-white rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search entire store here ..."
            className="w-full px-4 py-2 text-black outline-none"
          />
          <button className="px-4 text-orange-500">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* RIGHT: Menu */}
      <div className="flex items-center gap-6 text-sm">
        <Link href="/offers">
          <div className="flex items-center gap-2 cursor-pointer">
            <Gift size={18} />
            <div>
              <p className="font-semibold">Offers</p>
              <p className="text-xs text-gray-300">Latest Offers</p>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2 cursor-pointer">
          <Zap size={18} />
          <div>
            <p className="font-semibold">Happy Hour</p>
            <p className="text-xs text-gray-300">Special Deals</p>
          </div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <User size={18} />
          <div>
            <p className="font-semibold">Account</p>
            <p className="text-xs text-gray-300">Register or Login</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/pc-builder">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-md font-semibold">
            POP Builder
          </button>
        </Link>
      </div>
    </nav>
  );
}
