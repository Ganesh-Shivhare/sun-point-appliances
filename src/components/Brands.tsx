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
    <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'var(--gradient-mesh)' }}>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 animate-float" style={{ background: 'var(--gradient-glow)' }}></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 animate-bounce-slow" style={{ background: 'var(--gradient-glow)' }}></div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-4">Top Brands We Deal In</h2>
            <div className="h-2 w-40 mx-auto rounded-full animate-gradient" style={{ background: 'var(--gradient-brand)' }}></div>
          </div>
          <p className="text-2xl text-muted-foreground font-medium">
            We stock <span className="gradient-text font-bold">100% genuine products</span> from India's most trusted brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {brandCategories.map((category, index) => (
            <Card key={index} className="floating-card group border-2 hover:border-brand-orange/40 transition-all duration-500 transform hover:scale-105">
              <CardHeader className="pb-6">
                <div className="text-center mb-4">
                  <CardTitle className="text-2xl font-bold gradient-text relative inline-block">
                    {category.category}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ background: 'var(--gradient-brand)' }}></div>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.brands.map((brand, brandIndex) => (
                    <Badge 
                      key={brandIndex} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-semibold border-2 border-transparent hover:border-brand-orange hover:scale-110 transition-all duration-300 cursor-pointer glow-effect"
                      style={{ 
                        background: 'linear-gradient(white, white) padding-box, var(--gradient-brand) border-box',
                        color: 'hsl(var(--foreground))'
                      }}
                    >
                      {brand}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="floating-card p-10 rounded-3xl border-2 border-brand-orange/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ background: 'var(--gradient-brand)' }}></div>
            <div className="relative z-10">
              <div className="mb-4">
                <h3 className="text-3xl font-bold gradient-text mb-2">Authorized Dealer & Service Center</h3>
                <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-brand)' }}></div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                All products come with <span className="gradient-text font-bold">manufacturer warranty</span> and genuine after-sales support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;