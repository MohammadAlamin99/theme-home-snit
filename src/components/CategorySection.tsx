"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { Category } from "./CategoryCard";
import CategoryCard from "./CategoryCard";
import { ChevronRight } from "lucide-react";

const categories: Category[] = [
  { id: 1, name: "Smart Watch", icon: '/images/cat1.png' },
  { id: 2, name: "Headphones", icon: '/images/cat2.png' },
  { id: 3, name: "Power Banks", icon: '/images/cat3.png' },
  { id: 4, name: "Chargers", icon: '/images/cat4.png' },
  { id: 5, name: "Keyboards", icon: '/images/cat5.png' },
  { id: 6, name: "Innovation", icon: '/images/cat6.png' },
  { id: 7, name: "Smart Tech", icon: '/images/cat1.png' },
  { id: 8, name: "IoT Devices", icon: '/images/cat2.png' },
  { id: 9, name: "AI Gadgets", icon: '/images/cat3.png' },
];

const CategorySection = () => {
  return (
    <section className="w-full py-8 sm:py-10">
      <div className="mx-auto px-4 sm:px-6 max-w-[1720px] bg-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-[32px] font-bold text-[#3F3F3F] font-inter tracking-tight">
            Category
          </h2>
          <button className="cursor-pointer flex items-center gap-1 text-xs sm:text-[16px] font-lato font-medium text-[#0F0E0E] hover:text-gray-900 transition-colors duration-200 group">
            View More
            <ChevronRight width={12} height={12} color="#1E90FF"/>
          </button>
        </div>

        {/* desktop version category */}
        <div className="hidden lg:flex items-start gap-5 xl:gap-5">
          {categories.map((category) => (
            <div key={category.id} className="flex-1 min-w-0 bg-[#F9F9F9]">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>

       {/* mobile version category */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={12}
            slidesPerView={3}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 18,
              },
              900: {
                slidesPerView: 6,
                spaceBetween: 18,
              },
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default CategorySection;