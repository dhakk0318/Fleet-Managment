"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <nav
        onMouseLeave={() => setActive(null)} // Reset state on mouse leave
        className="relative rounded-full border border-transparent bg-[rgba(0,0,255,0.2)] dark:bg-[rgba(80,80,82,0.3)] backdrop-blur-sm shadow-none flex justify-center space-x-4 px-8 py-6"
      >
        {/* Home */}
        <Link href="/">
          <div
            onMouseEnter={() => setActive("Home")}
            className="relative cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
          >
            Home
          </div>
        </Link>

        {/* Our Features */}
        <div
          onMouseEnter={() => setActive("Our Features")}
          className="relative cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          Features
          {active === "Our Features" && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2 bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
              <div className="w-max h-full p-4 flex flex-col space-y-4 text-sm">
                <Link
                  href="/features"
                  className="text-neutral-700 dark:text-neutral-200 hover:text-black"
                >
                  Why Choose Us
                </Link>
                <Link
                  href="/features/basic-music-theory"
                  className="text-neutral-700 dark:text-neutral-200 hover:text-black"
                >
                  About
                </Link>
                <Link
                  href="/features/songwriting"
                  className="text-neutral-700 dark:text-neutral-200 hover:text-black"
                >
                  Songwriting
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Contact Us */}
        <Link href="/contact">
          <div
            onMouseEnter={() => setActive("Contact Us")}
            className="relative cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
          >
            Contact
          </div>
        </Link>

        {/* Sign In/Sign Out Dropdown */}
        <div
          onMouseEnter={() => setActive("Account")}
          className="relative cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          Account
          {active === "Account" && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2 bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
              <div className="w-max h-full p-4 flex flex-col space-y-4 text-sm">
                <Link
                  href="/login"
                  className="text-neutral-700 dark:text-neutral-200 hover:text-black"
                >
                  Sign In
                </Link>
                <Link
                  href="/signout"
                  className="text-neutral-700 dark:text-neutral-200 hover:text-black"
                >
                  SignUp
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
