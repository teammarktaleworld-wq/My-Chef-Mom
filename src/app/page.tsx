// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import HeroSection from "@/components/home/HeroSection";
// import AboutSection from "@/components/home/AboutSection";
// import HowItWorks from "@/components/home/HowItWorks";
// import MealPlans from "@/components/home/MealPlans";
// import FloatingWhatsApp from "@/components/home/FloatingWhatsApp";

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <HeroSection />
//         <AboutSection />
//         <HowItWorks />
//         <MealPlans />
//       </main>

//       <Footer />

//       <FloatingWhatsApp />
//     </>
//   );
// }














import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import HowItWorks from "@/components/home/HowItWorks";
import MealPlans from "@/components/home/MealPlans";
import ReviewsSection from "@/components/home/ReviewsSection";
import FloatingWhatsApp from "@/components/home/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorks />
        <MealPlans />
        <ReviewsSection />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}