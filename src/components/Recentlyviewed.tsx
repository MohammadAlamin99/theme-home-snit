import { ChevronRight } from "lucide-react";
import React from "react";

interface Book {
  id: number;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  coins: number;
  coverImage: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "A Kids Book About Yoga",
    originalPrice: 5.0,
    discountedPrice: 4.53,
    discountPercent: 10,
    coins: 10,
    coverImage: "/images/product.png",
  },
  {
    id: 2,
    title: "A Kids Book About Yoga",
    originalPrice: 5.0,
    discountedPrice: 4.53,
    discountPercent: 10,
    coins: 10,
    coverImage: "/images/product.png",
  },
  {
    id: 3,
    title: "A Kids Book About Yoga",
    originalPrice: 5.0,
    discountedPrice: 4.53,
    discountPercent: 10,
    coins: 10,
    coverImage: "/images/product.png",
  },
  {
    id: 4,
    title: "A Kids Book About Yoga",
    originalPrice: 5.0,
    discountedPrice: 4.53,
    discountPercent: 10,
    coins: 10,
    coverImage: "/images/product.png",
  },
];

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="relative flex flex-row items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer flex-1 min-w-0">
      {/* Discount badge */}
      <div className="absolute rounded-[8px]  md:text-xl top-2 right-2 z-10 bg-[#FF3C3C26] font-inter text-[#DA0000] text-xs lg:text-2xl font-bold px-2 py-1 rounded-full">
        -{book.discountPercent}%
      </div>

      {/* Book Cover */}
      <div className="flex-shrink-0 w-20 h-28 rounded-lg overflow-hidden shadow-md">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Book Info */}
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="text-sm font-inter font-semibold text-gray-800 leading-snug line-clamp-2">
          {book.title}
        </h3>

        <div className="flex flex-row items-center gap-2 flex-wrap mt-1">
          <span className="text-[#2F3485] font-inter font-bold text-base">
            ${book.discountedPrice.toFixed(2)}
          </span>
          <span className="text-[#666] font-inter text-sm line-through">
            ${book.originalPrice.toFixed(2)}
          </span>
          <span className="text-[#15A4EC] font-inter text-xs font-medium whitespace-nowrap">
            Get {book.coins} Coins
          </span>
        </div>
      </div>
    </div>
  );
};

const RecentlyViewed: React.FC = () => {
  return (
    <section className="w-full bg-white py-6 px-4">
      <div className="mx-auto w-full max-w-[1720px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#3F3F3F] font-inter text-xs lg:text-[32px] sm:text-2xl font-bold tracking-tight">
            Recently View
          </h2>

          <div className="flex items-center gap-4">
            <button className="cursor-pointer flex items-center gap-1 text-xs sm:text-[16px] font-lato font-medium text-[#0F0E0E] group">
              View More
              <ChevronRight width={12} height={12} color="#1E90FF" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;