import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Home, Utensils } from "lucide-react";
import React from "react";

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
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--brand-orange)) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--brand-red)) 0%, transparent 50%)'
      }}></div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-4">Our Product Range</h2>
            <div className="h-2 w-32 mx-auto rounded-full animate-gradient" style={{ background: 'var(--gradient-brand)' }}></div>
          </div>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our <span className="gradient-text font-bold">wide selection</span> of appliances designed to simplify your life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {productCategories.map((category, index) => (
            <Card key={index} className="text-center floating-card group border-2 hover:border-brand-orange/30 transition-all duration-500 transform hover:scale-105">
              <CardHeader className="pb-6 relative">
                <div className="mx-auto mb-6 p-6 rounded-2xl w-fit relative overflow-hidden group-hover:scale-110 transition-transform duration-300" 
                     style={{ background: 'var(--gradient-brand)' }}>
                  <div className="relative z-10">
                    {React.cloneElement(category.icon, { className: "h-10 w-10 text-white" })}
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{ background: 'var(--gradient-glow)' }}></div>
                </div>
                <CardTitle className="text-2xl font-bold gradient-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-lg text-muted-foreground hover:text-brand-orange transition-colors duration-300 p-2 rounded-lg hover:bg-brand-orange/5 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="p-8 rounded-3xl relative overflow-hidden" style={{ background: 'var(--gradient-mesh)' }}>
            <div className="relative z-10">
              <p className="text-2xl text-foreground font-semibold mb-4">
                Looking for something specific?
              </p>
              <p className="text-xl text-muted-foreground">
                Visit our store or call us for <span className="gradient-text font-bold">personalized recommendations</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;