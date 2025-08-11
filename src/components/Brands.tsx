import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Brands = () => {
  const allBrands = [
    { name: "Prestige", logo: "/brand_logos/Prestige.png" },
    { name: "Pigeon", logo: "/brand_logos/Pigeon.png" },
    { name: "Butterfly", logo: "/brand_logos/Butterfly.png" },
    { name: "Bajaj", logo: "/brand_logos/Bajaj.jpeg" },
    { name: "Morphy Richards", logo: "/brand_logos/Morphy Richards.png" },
    { name: "Wonderchef", logo: "/brand_logos/Wonderchef.webp" },
    { name: "Milton", logo: "/brand_logos/Milton.jpeg" },
    { name: "Sujata", logo: "/brand_logos/Sujata.png" },
    { name: "LG", logo: "/brand_logos/LG.png" },
    { name: "Samsung", logo: "/brand_logos/Samsung.webp" },
    { name: "Godrej", logo: "/brand_logos/Godrej.png" },
    { name: "Whirlpool", logo: "/brand_logos/Whirlpool.png" },
    { name: "Voltas", logo: "/brand_logos/Voltas.png" },
    { name: "Bosch", logo: "/brand_logos/Bosch.jpg" },
    { name: "IFB", logo: "/brand_logos/IFB.png" },
    { name: "Siemens", logo: "/brand_logos/Siemens.jpg" },
    { name: "Elica", logo: "/brand_logos/Elica.jpg" },
    { name: "Faber", logo: "/brand_logos/Faber.webp" },
    { name: "Glen", logo: "/brand_logos/Glen.png" },
    { name: "Kaff", logo: "/brand_logos/Kaff.jpeg" },
    { name: "Agaro", logo: "/brand_logos/Agaro.webp" },
    { name: "Cello", logo: "/brand_logos/Cello.png" },
    { name: "Eureka Forbes", logo: "/brand_logos/Eureka Forbes.png" },
    { name: "Bluestar", logo: "/brand_logos/Bluestar.png" },
    { name: "Philips", logo: "/brand_logos/Philips.png" },
    { name: "Usha", logo: "/brand_logos/Usha.png" },
    { name: "Milcent", logo: "/brand_logos/Milcent.png" },
    { name: "Atomberg", logo: "/brand_logos/Atomberg.png" },
    { name: "Karcher", logo: "/brand_logos/Karcher.png" },
    { name: "Benchmark", logo: "/brand_logos/Benchmark.png" },
    { name: "A O Smith", logo: "/brand_logos/A O Smith.png" }
  ];

  return (
    <section id="brands" className="py-12 sm:py-16 lg:py-24 gradient-accent ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-gradient">Top Brands We Deal In</h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 gradient-brand mx-auto mb-4 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
            We stock 100% genuine products from India's most trusted brands
          </p>
        </div>

        <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 sm:px-6 py-3 sm:py-4">
            <CardTitle className="text-base sm:text-lg text-center text-primary font-bold">
              Our Premium Brand Collection
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <BrandScroller brands={allBrands} />
          </CardContent>
        </Card>

        <div className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-card rounded-lg shadow-sm border border-gray-200 mx-4 sm:mx-0">
          <p className="text-base sm:text-lg font-semibold text-foreground mb-2">
            Authorized Dealer & Service Center
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            All products come with manufacturer warranty and genuine after-sales support
          </p>
        </div>
      </div>
    </section>
  );
};

// Brand Scroller Component
const BrandScroller: React.FC<{ brands: { name: string; logo: string }[] }> = ({ brands }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const isUserInteracting = useRef(false);
  const scrollSpeed = 0.8; // pixels per frame

  const LOOP_WIDTH = brands.length * 80; // Adjust based on brand card width

  // Auto-scroll loop
  const startAutoScroll = () => {
    if (!containerRef.current) return;

    const scroll = () => {
      if (!containerRef.current || isUserInteracting.current) {
        animationRef.current = requestAnimationFrame(scroll);
        return;
      }

      containerRef.current.scrollLeft += scrollSpeed;

      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      // Loop when at end
      if (scrollLeft >= scrollWidth - clientWidth - 1) {
        containerRef.current.scrollLeft = scrollLeft - LOOP_WIDTH;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const startOffset = container.scrollWidth / 3;
    container.scrollLeft = startOffset;

    startAutoScroll();

    const stopInteraction = () => {
      isUserInteracting.current = false;
    };

    const startInteraction = () => {
      isUserInteracting.current = true;
    };

    // Detect touch and mouse drag start/end
    container.addEventListener("mousedown", startInteraction);
    container.addEventListener("touchstart", startInteraction);

    container.addEventListener("mouseup", stopInteraction);
    container.addEventListener("mouseleave", stopInteraction);
    container.addEventListener("touchend", stopInteraction);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      container.removeEventListener("mousedown", startInteraction);
      container.removeEventListener("touchstart", startInteraction);
      container.removeEventListener("mouseup", stopInteraction);
      container.removeEventListener("mouseleave", stopInteraction);
      container.removeEventListener("touchend", stopInteraction);
    };
  }, [brands.length]);

  const loopedBrands = [...brands, ...brands, ...brands];

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div className="flex gap-2 sm:gap-3">
        {loopedBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group flex-shrink-0 w-[70px] sm:w-[80px] lg:w-[100px]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-1 sm:mb-2 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 p-1 sm:p-2 group-hover:shadow-md transition-shadow">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-xs text-gray-500 font-medium text-center">
                {brand.name}
              </span>
            </div>
            <span className="text-xs text-gray-600 font-medium text-center leading-tight max-w-full truncate">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;