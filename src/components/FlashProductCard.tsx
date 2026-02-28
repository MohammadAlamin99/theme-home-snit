import { Heart } from "lucide-react";
import { useState } from "react";
interface Product {
  id: number;
  title: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  coins: number;
  wishlisted?: boolean;
}
export default function FlashProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(product.wishlisted ?? false);

  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer group">
      {/* Image area */}
      <div className="relative bg-[#222] rounded-xl m-2 mb-0 overflow-hidden">
        {/* Discount badge */}
        <div className="absolute rounded-[8px] top-2 right-2 z-10 bg-[#FF3C3C] font-inter text-white text-xs md:text-xl lg:text-2xl font-bold px-2 py-1 rounded-full">
          -{product.discount}%
        </div>

        {/* Wishlist button */}
        <button
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          className="absolute top-2 left-2 z-10 w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <Heart color="#E72960" className="w-4 h-4 lg:h-9 lg:w-9" />
        </button>

        {/* Book image */}
        <div className="w-full aspect-[3/4] bg-white flex items-center justify-center">
          <img src="/images/product.png" alt="" />
        </div>
      </div>

      {/* Info */}
      <div className="px-3 pt-3 pb-4">
        <h3 className="text-white text-sm font-inter lg:text-2xl font-semibold truncate mb-1">
          {product.title}
        </h3>
        <div className="flex items-center justify-between flex-wrap gap-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[#A1A1A1] text-xs lg:text-2xl line-through font-inter">
              ৳{product.originalPrice.toFixed(2)}
            </span>
            <span className="text-[#FF9F1C] font-bold text-base lg:text-3xl font-inter">
              ৳{product.salePrice.toFixed(2)}
            </span>
          </div>
          <span className="text-[#15A4EC] text-xs lg:text-[16px] font-semibold whitespace-nowrap font-inter">
            Get {product.coins} Coins
          </span>
        </div>
      </div>
    </div>
  );
};