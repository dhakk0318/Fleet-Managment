// "use client";
// import LoginForm from "./pages/login";

// export default function Home() {
//   return (
//     <div>

//       <LoginForm/>
//     </div>
//   );
// }

import Navbar from "./components/Navbar";
import FeaturedCourses from "./components/Featured";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <Footer />
    </main>
  );
}

