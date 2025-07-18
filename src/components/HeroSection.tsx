import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-laptop.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Tech Paradise
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-md">
                Discover the latest laptops with cutting-edge technology, premium quality, and unbeatable prices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-glow shadow-glow hover:shadow-lg transition-all duration-300">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Categories
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-blue-400" />
                <span>Free Shipping</span>
              </div>
            </div>
          </div>

          <div className="relative lg:block animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Premium laptop showcase"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-300">Laptop Models</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;