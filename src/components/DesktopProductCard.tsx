import { Heart } from "lucide-react";
import { useState } from "react";

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

export default function DesktopProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
      {/* Image */}
      <div className="relative bg-[#222] rounded-xl m-2 mb-0 overflow-hidden">
        {/* Discount badge */}
        <div className="absolute rounded-[8px]  md:text-xl top-2 right-2 z-10 bg-[#FF3C3C] font-inter text-white text-xs lg:text-2xl font-bold px-2 py-1 rounded-full">
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
        {/* rating */}
        <div>
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.04449 0.207218C6.13429 -0.0691755 6.52532 -0.0691763 6.61512 0.207217L7.90372 4.17312C7.94388 4.29673 8.05907 4.38042 8.18904 4.38042H12.359C12.6497 4.38042 12.7705 4.7523 12.5354 4.92312L9.16177 7.37419C9.05663 7.45058 9.01263 7.58599 9.05279 7.7096L10.3414 11.6755C10.4312 11.9519 10.1149 12.1817 9.87974 12.0109L6.50614 9.55985C6.40099 9.48346 6.25862 9.48346 6.15347 9.55985L2.77987 12.0109C2.54475 12.1817 2.22841 11.9519 2.31821 11.6755L3.60682 7.7096C3.64698 7.58599 3.60298 7.45058 3.49783 7.37419L0.124234 4.92312C-0.11088 4.7523 0.00995171 4.38042 0.300569 4.38042H4.47057C4.60054 4.38042 4.71572 4.29673 4.75589 4.17312L6.04449 0.207218Z" fill="#15A4EC" />
                </svg>
              </span>
              <h4 className="text-[#1AA5EB] font-inter font-normal text-xs lg:text-[16px]">4.5 <span className="text-[#727272]">(68)</span></h4>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="8" viewBox="0 0 1 8" fill="none">
              <path d="M0.150024 0.149902L0.150025 6.9173" stroke="#E72960" strokeWidth="0.3" strokeLinecap="round" />
            </svg>

            <div>
              <h4 className="text-[#727272] font-inter font-normal text-xs lg:text-[16px]">104 Sold</h4>
            </div>
          </div>
        </div>
        {/* heading */}
        <h3 className="text-black text-sm font-inter lg:text-2xl font-semibold truncate mb-1">
          {product.title}
        </h3>
        <div className="flex items-center justify-between flex-wrap gap-y-1">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-[#2F3485] font-bold text-base lg:text-2xl font-inter">
              ৳{product.salePrice.toFixed(2)}
            </span>
            <span className="text-[#666] text-xs lg:text-[16px] line-through font-inter">
              ৳{product.originalPrice.toFixed(2)}
            </span>
            <span className="text-[#15A4EC] text-xs lg:text-[16px] font-semibold whitespace-nowrap font-inter">
              Get {product.coins} Coins
            </span>
          </div>

          {/* atc & Buy button */}
          <div className="flex flex-wrap items-center justify-between w-full sm:flex-wrap gap-2.5">
            <button className="max-[1710px]:w-full max-[575px]:w-full px-4 py-1.5 flex items-center justify-center gap-1.5 rounded-[4px] bg-gradient-to-b from-[#FF9D1B] to-[#FF6C01] font-inter text-[10px] md:text-xs text-white lg:text-xl font-bold cursor-pointer">Cart
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.71 5.4H18.924C20.302 5.4 21.297 6.67 20.919 7.948L19.265 13.548C19.01 14.408 18.196 15 17.27 15H8.112C7.185 15 6.37 14.407 6.116 13.548L3.71 5.4ZM3.71 5.4L3 3M16.5 21C16.8978 21 17.2794 20.842 17.5607 20.5607C17.842 20.2794 18 19.8978 18 19.5C18 19.1022 17.842 18.7206 17.5607 18.4393C17.2794 18.158 16.8978 18 16.5 18C16.1022 18 15.7206 18.158 15.4393 18.4393C15.158 18.7206 15 19.1022 15 19.5C15 19.8978 15.158 20.2794 15.4393 20.5607C15.7206 20.842 16.1022 21 16.5 21ZM8.5 21C8.89782 21 9.27936 20.842 9.56066 20.5607C9.84197 20.2794 10 19.8978 10 19.5C10 19.1022 9.84197 18.7206 9.56066 18.4393C9.27936 18.158 8.89782 18 8.5 18C8.10218 18 7.72064 18.158 7.43934 18.4393C7.15803 18.7206 7 19.1022 7 19.5C7 19.8978 7.15803 20.2794 7.43934 20.5607C7.72064 20.842 8.10218 21 8.5 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="max-[1710px]:w-full max-[575px]:w-full px-4 py-1.5 rounded-[4px] bg-gradient-to-r from-[#38BDF8] to-[#1E90FF] font-inter text-[10px] md:text-xs text-white lg:text-xl font-bold cursor-pointer">Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};