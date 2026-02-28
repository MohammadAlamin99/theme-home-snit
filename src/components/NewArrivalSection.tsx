"use client";
import DesktopProductCard from "./DesktopProductCard";
import { ChevronRight } from "lucide-react";

interface Product {
  id: number;
  title: string;
  image?: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  coins: number;
  rating: number;
  reviews: number;
  sold: number;
}

const products: Product[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "A Kids Book About Yoga",
  originalPrice: 5.0,
  salePrice: 4.53,
  discount: 10,
  coins: 10,
  rating: 4.5,
  reviews: 68,
  sold: 104,
}));

const NewArrivalSection = () => {
  return (
    <section className="w-full py-6 sm:py-8">
      <div className="mx-auto px-4 sm:px-6 bg-white max-w-[1720px]">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#3F3F3F] font-inter text-xs lg:text-[32px] sm:text-2xl font-bold tracking-tight">
            New Arrival
          </h2>

          <div className="flex items-center gap-4">
             <button className="cursor-pointer flex items-center gap-1 text-xs sm:text-[16px] font-lato font-medium text-[#0F0E0E] group">
            View More
            <ChevronRight width={12} height={12} color="#1E90FF"/>
          </button>
          </div>
        </div>

        {/* product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 md:gap-4 xl:gap-5">
  {products.map((product) => (
    <DesktopProductCard key={product.id} product={product} />
  ))}
</div>

      </div>
    </section>
  );
};

export default NewArrivalSection;