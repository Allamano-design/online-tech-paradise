import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  // Mock product data
  const featuredProducts = [
    {
      id: "1",
      name: "MacBook Pro 16-inch M3 Max",
      price: 3499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      rating: 4.9,
      reviewCount: 284,
      processor: "Apple M3 Max",
      ram: "32GB",
      storage: "1TB SSD",
      isOnSale: true,
      isFeatured: true
    },
    {
      id: "2",
      name: "Dell XPS 13 Plus",
      price: 1299,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      rating: 4.7,
      reviewCount: 156,
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      isFeatured: true
    },
    {
      id: "3",
      name: "ASUS ROG Strix G15",
      price: 1599,
      originalPrice: 1899,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      rating: 4.6,
      reviewCount: 203,
      processor: "AMD Ryzen 9",
      ram: "32GB",
      storage: "1TB SSD",
      isOnSale: true,
      isFeatured: true
    },
    {
      id: "4",
      name: "ThinkPad X1 Carbon Gen 11",
      price: 1849,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      rating: 4.8,
      reviewCount: 127,
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      isFeatured: true
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Featured Laptops
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of premium laptops with the latest technology and best performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;