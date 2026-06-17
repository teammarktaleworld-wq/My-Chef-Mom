







import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import MealPlans from "@/components/home/MealPlans";
import ReviewsSection from "@/components/home/ReviewsSection";
import FloatingWhatsApp from "@/components/home/FloatingWhatsApp";
import FounderSection from "@/components/home/AboutSection";
import DeliverySection from "@/components/home/Deliverysection ";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <FounderSection />
        <HowItWorks />
        <MealPlans />
        <DeliverySection />
        <ReviewsSection />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}