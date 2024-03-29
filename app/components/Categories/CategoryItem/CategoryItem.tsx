import { useRouter } from "next/navigation";

// Utilities
import Category from "@typescategory.types";
import { useState } from "react";

// Components
import { Loader2 } from "lucide-react";

interface CategoryItemsProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemsProps) {
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  const router = useRouter();
  const handleRouterCategoryClick = () => {
    setTimeout(() => {
      return router.push(`/pages/category/${category.id}`);
    }, 1000);
  };

  const handleProductSubmit = () => {
    return setSubmitIsLoading(true);
  };

  return (
    <>
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
          {submitIsLoading ? (
            <button className="bg-[#8C3A60] rounded px-12 py-6">
              <Loader2 size={50} className="mr-2 h-4 animate-spin text-white w-10" />
            </button>
          ) : (
            <div
              className="category-name cursor-pointer bg-[#8C3A60] text-white rounded px-6 py-2 text-center transition duration-300 hover:text-[#203040]"
              style={{
                boxShadow: "-6px 10px 7px 0px rgba(0,0,0,0.75)",
                WebkitBoxShadow: "-6px 10px 7px 0px rgba(0,0,0,0.75)",
                MozBoxShadow: "-6px 10px 7px 0px rgba(0,0,0,0.75)",
              }}
              onClick={handleProductSubmit}
            >
              <p className="font-bold text-xl">{category.displayName}</p>
              <p>Explorar</p>
            </div>
          )}
        </button>
      </div>
    </>
  );
}
