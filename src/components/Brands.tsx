import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Brands = () => {
  const brandCategories = [
    {
      category: "Kitchen Appliances",
      brands: ["Prestige", "Pigeon", "Hawkins", "Butterfly", "Bajaj", "Morphy Richards"]
    },
    {
      category: "Home Appliances", 
      brands: ["LG", "Samsung", "Godrej", "Whirlpool", "Haier", "Voltas"]
    },
    {
      category: "Cookware & Kitchen",
      brands: ["Wonderchef", "Meyer", "Solimo", "Amazon Brand", "Sumeet", "Vinod"]
    },
    {
      category: "Small Appliances",
      brands: ["Philips", "Panasonic", "Black+Decker", "Inalsa", "Crompton", "Orient"]
    }
  ];

  return (
    <section id="brands" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Top Brands We Deal In</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            We stock 100% genuine products from India's most trusted brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {brandCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-center text-primary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.brands.map((brand, brandIndex) => (
                    <Badge 
                      key={brandIndex} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {brand}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-card rounded-lg shadow-sm">
          <p className="text-lg font-semibold text-foreground mb-2">
            Authorized Dealer & Service Center
          </p>
          <p className="text-muted-foreground">
            All products come with manufacturer warranty and genuine after-sales support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brands;