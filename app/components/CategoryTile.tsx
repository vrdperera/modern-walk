import Link from "next/link";

interface CategoryTileProps {
  title: string;
  link: string;
  color: "green" | "pink";
}

const CategoryTile: React.FC<CategoryTileProps> = ({ title, link, color }) => {
  // Map color prop to Tailwind background class
  const bgColor = color === "green" ? "bg-[#2AD4A8]" : "bg-[#FF5C8A]";

  return (
    <Link href={link} className="w-full">
      <div
        className={`flex items-center justify-center w-full h-[150px] sm:h-[200px] 
                   text-white font-extrabold text-2xl sm:text-3xl 
                   rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.2)] 
                   transition-transform duration-300 hover:scale-105 ${bgColor}`}
      >
        {title}
      </div>
    </Link>
  );
};

export default CategoryTile;
