import React from "react";

const sideItems = [
  {
    id: 1,
    img: "images/subbanner1.png",
    title: "Get the best for less.",
    bg: "bg-[#1a1a1a]",
  },
  {
    id: 2,
   img: "images/subbanner2.png",
    title: "Best Gift Shop for You.",
    bg: "bg-[#1a1a1a]",
  },
  {
    id: 3,
   img: "images/subbanner3.png",
    title: "RC Robot Dog",
    bg: "bg-[#1a1a1a]",
  },
  {
    id: 4,
    img: "images/subbanner4.png",
    title: "Toy Corner for You.",
    bg: "bg-[#1a1a1a]",
  },
];


const BannerSection: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-4 lg:px-6 py-3 sm:py-4">
      <div className="mx-auto max-w-[1720px]">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
          <div className="rounded-[20px] relative w-full lg:flex-1 overflow-hidden">
            <img src="/images/bannerImage.png" className="h-full object-cover" alt="banner-image" />
          </div>
          {/* side cards */}
          <div className="flex bg-black p-3 rounded-[20px] flex-wrap flex-row lg:flex-col gap-2 sm:gap-3 lg:w-48 xl:w-56 2xl:w-64">
            {sideItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 sm:gap-3 bg-[rgba(255,255,255,0.13)] rounded-xl cursor-pointer
                           hover:bg-[#2a2a2a] transition-colors duration-200 flex-1 lg:flex-none
                           px-2 sm:px-3 py-2 sm:py-3"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg object-cover w-24 h-auto aspect-square flex-shrink-0"
                />
                <span
                  className="text-white font-semibold leading-tight font-lato"
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;