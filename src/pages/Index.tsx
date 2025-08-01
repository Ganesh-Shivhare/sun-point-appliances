import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <About />
        <Products />
        <Brands />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
