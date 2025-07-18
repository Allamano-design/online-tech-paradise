import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  processor: string;
  ram: string;
  storage: string;
  isOnSale?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  processor,
  ram,
  storage,
  isOnSale,
  isFeatured
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:scale-[1.02] bg-gradient-card border-border/50">
      <div className="relative overflow-hidden rounded-t-lg">
        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isFeatured && (
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          )}
          {isOnSale && (
            <Badge variant="destructive">Sale</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart 
            className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </Button>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Product Name */}
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} ({reviewCount})
          </span>
        </div>

        {/* Specs */}
        <div className="space-y-1 text-sm text-muted-foreground">
          <div>{processor}</div>
          <div>{ram} | {storage}</div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary-glow shadow-soft hover:shadow-glow transition-all duration-300">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;