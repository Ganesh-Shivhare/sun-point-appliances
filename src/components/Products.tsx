import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Home, Utensils } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: <ChefHat className="h-10 w-10 text-primary" />,
      title: "Kitchen Appliances",
      items: [
        "Mixer Grinders",
        "OTGs", 
        "Microwaves",
        "Cookers",
        "Non-stick Cookware",
        "Chimneys",
        "Gas Stoves"
      ]
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Home Essentials", 
      items: [
        "Air Coolers",
        "Ceiling Fans",
        "ROs",
        "Geysers", 
        "Washing Machines",
        "Dishwashers"
      ]
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Tableware & Kitchenware",
      items: [
        "Crockery Sets",
        "Storage Containers", 
        "Cutlery",
        "Pressure Cookers",
        "& more"
      ]
    }
  ];

  return (
    <section id="products" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Our Product Range</h2>
          <div className="w-32 h-1.5 gradient-brand mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our wide selection of appliances designed to simplify your life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 fade-in">
          {productCategories.map((category, index) => (
            <Card key={index} className="hover-lift gradient-card border-0 shadow-elegant">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-6 bg-primary/10 rounded-full w-fit">
                  {category.icon}
                </div>
                <CardTitle className="text-2xl text-gradient">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground hover:text-primary transition-colors text-center text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Looking for something specific? Visit our store or call us for personalized recommendations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;