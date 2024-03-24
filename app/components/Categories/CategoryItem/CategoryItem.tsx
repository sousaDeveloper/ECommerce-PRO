import { useRouter } from "next/navigation";

// Utilities
import Category from "@typescategory.types";

interface CategoryItemsProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemsProps) {
  const router = useRouter();
  const handleRouterCategoryClick = () => router.push(`/pages/category/${category.id}`);

  return (
    <div
      className="flex gap-4 w-full h-full rounded justify-center items-center animate__animated animate__fadeInUp"
      style={{
        backgroundImage: `url('${category.imageUrl}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0.30)",
        backgroundBlendMode: "color",
        boxShadow: "-9px 9px 18px 0px rgba(0, 0, 0, 0.75)",
        WebkitBoxShadow: "-9px 9px 18px 0px rgba(0, 0, 0, 0.75)",
        MozBoxShadow: "-9px 9px 18px 0px rgba(0, 0, 0, 0.75)",
      }}
    >
      <button onClick={handleRouterCategoryClick}>
        <div
          className="category-name cursor-pointer bg-[#8C3A60] text-white rounded px-6 py-2 text-center transition duration-300 hover:text-[#203040]"
          style={{
            boxShadow: "-6px 10px 7px 0px rgba(0,0,0,0.75)",
            WebkitBoxShadow: "-6px 10px 7px 0px rgba(0,0,0,0.75)",
            MozBoxShadow: "-6px 10px 7px 0px rgba(0,0,0,0.75)",
          }}
        >
          <p className="font-bold text-xl">{category.displayName}</p>
          <p>Explorar</p>
        </div>
      </button>
    </div>
  );
}
