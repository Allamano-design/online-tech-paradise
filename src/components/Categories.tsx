import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Laptop, 
  Gamepad2, 
  Briefcase, 
  GraduationCap, 
  Palette, 
  Zap,
  ArrowRight 
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "gaming",
      name: "Gaming Laptops",
      description: "High-performance machines for gaming enthusiasts",
      icon: Gamepad2,
      color: "text-red-500",
      bgColor: "bg-red-50",
      count: "25+ models"
    },
    {
      id: "business",
      name: "Business Laptops",
      description: "Professional grade laptops for work",
      icon: Briefcase,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      count: "18+ models"
    },
    {
      id: "student",
      name: "Student Laptops",
      description: "Affordable and reliable for education",
      icon: GraduationCap,
      color: "text-green-500",
      bgColor: "bg-green-50",
      count: "15+ models"
    },
    {
      id: "creative",
      name: "Creative Workstations",
      description: "For designers, video editors and creators",
      icon: Palette,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      count: "12+ models"
    },
    {
      id: "ultrabook",
      name: "Ultrabooks",
      description: "Thin, light and powerful portable laptops",
      icon: Laptop,
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      count: "20+ models"
    },
    {
      id: "performance",
      name: "High Performance",
      description: "Maximum power for demanding applications",
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      count: "10+ models"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect laptop for your specific needs and use case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-muted-foreground">
                          {category.count}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary-glow shadow-soft hover:shadow-glow transition-all duration-300">
            Explore All Categories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;