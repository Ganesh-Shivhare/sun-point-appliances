import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Home, Utensils } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: <ChefHat className="h-8 w-8 text-primary" />,
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
      icon: <Home className="h-8 w-8 text-primary" />,
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
      icon: <Utensils className="h-8 w-8 text-primary" />,
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
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Product Range</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our wide selection of appliances designed to simplify your life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Looking for something specific? Visit our store or call us for personalized recommendations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;