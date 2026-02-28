"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronRight } from "lucide-react";
import CountdownTimer from "./CountDownTimer";
import FlashProductCard from "./FlashProductCard";
import UserCountdown from "./UserCountdown";
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

const products: Product[] = [
  { id: 1, title: "A Kids Book About Yoga", image: "/images/product.png", originalPrice: 5.0, salePrice: 4.53, discount: 10, coins: 10 },
  { id: 2, title: "A Kids Book About Yoga", image: "/images/product.png", originalPrice: 5.0, salePrice: 4.53, discount: 10, coins: 10 },
  { id: 3, title: "A Kids Book About Yoga", image: "/images/product.png", originalPrice: 5.0, salePrice: 4.53, discount: 10, coins: 10 },
  { id: 4, title: "A Kids Book About Yoga", image: "/images/product.png", originalPrice: 5.0, salePrice: 4.53, discount: 10, coins: 10 },
  { id: 5, title: "A Kids Book About Yoga", image: "/images/product.png", originalPrice: 5.0, salePrice: 4.53, discount: 10, coins: 10 },
  { id: 6, title: "A Kids Book About Yoga", image: "/images/product.png", originalPrice: 5.0, salePrice: 4.53, discount: 10, coins: 10 },
  { id: 7, title: "A Kids Book About Yoga", image: "/images/product.png", originalPrice: 5.0, salePrice: 4.53, discount: 10, coins: 10 },
  { id: 8, title: "A Kids Book About Yoga", image: "/images/product.png", originalPrice: 5.0, salePrice: 4.53, discount: 10, coins: 10 },
];

const FlashSaleSection = () => {
  const { hours, minutes, seconds } = UserCountdown(71 * 3600 + 54 * 60 + 23);

  return (
    <section className="w-ful py-6 sm:py-8 flashBannerSection">
      <div className="mx-auto px-4 sm:px-6 bg-white max-w-[1720px] rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#3F3F3F] font-inter text-xs lg:text-[32px] sm:text-2xl font-bold tracking-tight">
            Flash Sale
          </h2>

            <CountdownTimer hours={hours} minutes={minutes} seconds={seconds} />
          <div className="flex items-center gap-4">
             <button className="cursor-pointer flex items-center gap-1 text-xs sm:text-[16px] font-lato font-medium text-[#0F0E0E] group">
            View More
            <ChevronRight width={12} height={12} color="#1E90FF"/>
          </button>
          </div>
        </div>

        <div className="bg-black rounded-xl">
          {/* flash banner */}
        <div className="w-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-[8px] flex items-center justify-center py-4 sm:py-14">
          <h3 className="text-white text-[20px] font-inter sm:text-3xl font-bold tracking-wide">
            Flash Sale
          </h3>
        </div>

       {/* product slider */}
        <div className="relative">

          {/* Left shadow */}
          <div
            className="absolute rounded-[8px] left-0 top-0 h-full w-4 sm:w-5 lg:w-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(60deg, rgba(0, 0, 0, 0.82) 18.75%, rgba(0, 0, 0, 0.00) 70.04%)",
            }}
          />

          {/* Right shadow */}
          <div
            className="absolute rounded-[8px] right-0 top-0 h-full w-4 sm:w-5 lg:w-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(-60deg, rgba(0, 0, 0, 0.82) 18.75%, rgba(0, 0, 0, 0.00) 70.04%)",
            }}
          />

          <Swiper
            navigation
            pagination={{ clickable: true }}
            spaceBetween={12}
            slidesPerView={2}
            breakpoints={{
              480:  { slidesPerView: 2, spaceBetween: 12 },
              640:  { slidesPerView: 3, spaceBetween: 12 },
              768:  { slidesPerView: 3, spaceBetween: 12 },
              1024: { slidesPerView: 3.7, spaceBetween: 12 },
              1280: { slidesPerView: 4.7, spaceBetween: 12 },
              1536: { slidesPerView: 4.7, spaceBetween: 12 },
            }}
            style={
              {
                "--swiper-navigation-color": "#f97316",
                "--swiper-navigation-size": "20px",
                "--swiper-pagination-color": "#f97316",
                "--swiper-pagination-bullet-inactive-color": "#4b5563",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                paddingBottom: "44px",
              } as React.CSSProperties
            }
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <FlashProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;