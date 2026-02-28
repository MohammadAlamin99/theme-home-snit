

export interface Category {
  id: number;
  name: string;
    icon: string; 
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div>
     <div className="flex flex-col items-center gap-2 p-5 cursor-pointer w-full rounded-2xl bg-[#F9F9F9]">
    <div className="w-full aspect-square max-w-[170px] rounded-2xl flex items-center justify-center text-gray-700">
      {/* {category.icon} */}
      <img src={category.icon} alt={category.name} className="w-full h-full object-contain" />
    </div>
    <span className="text-xs sm:text-sm font-inter font-medium text-gray-500 text-center">
      {category.name}
    </span>
  </div>
    </div>
  )
}
