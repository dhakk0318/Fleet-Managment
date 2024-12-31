// "use client";
// import React from "react";
// import Link from "next/link";
// import { cn } from "@/utils/cn";
// import { Button } from "./ui/moving-border";

// function HeroSection() {
//   return (
//     <div className="h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
//       {/* Spotlight Background */}
//       <svg
//         className={cn(
//           "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-100 -top-40 left-0 md:left-60 md:-top-20"
//         )}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 3787 2842"
//         fill="none"
//       >
//         <g filter="url(#filter)">
//           <ellipse
//             cx="1924.71"
//             cy="273.501"
//             rx="1924.71"
//             ry="273.501"
//             transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
//             fill="red"
//             fillOpacity="0.21"
//           ></ellipse>
//         </g>
//         <defs>
//           <filter
//             id="filter"
//             x="0.860352"
//             y="0.838989"
//             width="3785.16"
//             height="2840.26"
//             filterUnits="userSpaceOnUse"
//             colorInterpolationFilters="sRGB"
//           >
//             <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//             <feBlend
//               mode="normal"
//               in="SourceGraphic"
//               in2="BackgroundImageFix"
//               result="shape"
//             ></feBlend>
//             <feGaussianBlur
//               stdDeviation="151"
//               result="effect1_foregroundBlur_1065_8"
//             ></feGaussianBlur>
//           </filter>
//         </defs>
//       </svg>

//       {/* Hero Content */}
//       <div className="p-4 relative z-10 w-full text-center">
//         <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-600 via-blue-600 to-yellow-600">
//         TNP Logistics Fleet Management
//         </h1>
//         <p className="mt-8  first-line:text-xl text-neutral-300 font-sans max-w-lg mx-auto">
//         Our platform enables data-driven decisions, cost reduction, and enhanced efficiency. Whether managing a few vehicles or a large fleet, we provide the solutions to keep you ahead of the competition.
//         </p>
//         <div className="mt-8">
//           <Link href={"/features"}>
//             <Button
//               borderRadius="1.75rem"
//               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
//             >
//               Explore
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/moving-border";

function HeroSection() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col items-center justify-center antialiased">
      {/* Hero Content */}
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-600 via-blue-600 to-yellow-600">
          TNP Logistics Fleet Management
        </h1>
        <p className="mt-8 first-line:text-xl text-neutral-300 font-sans max-w-lg mx-auto">
          Our platform enables data-driven decisions, cost reduction, and enhanced efficiency. Whether managing a few vehicles or a large fleet, we provide the solutions to keep you ahead of the competition.
        </p>
        <div className="mt-8">
          <Link href={"/features"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>

      {/* Background Gradient with Spotlight Effect */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-black via-transparent to-transparent">
        {/* Adding a radial gradient to create the spotlight effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,_255,_255,_0.1),_rgba(0,_0,_0,_1))] opacity-50"></div>
      </div>
    </div>
  );
}

export default HeroSection;
