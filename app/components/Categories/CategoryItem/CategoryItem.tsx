import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { useState } from "react";
import Aos from "aos";

// Utilities
import Category from "@typescategory.types";

interface CategoryItemsProps {
  category: Category;
}

Aos.init();

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
        className="flex gap-4 w-full h-full rounded justify-center items-center"
        data-aos="fade-up"
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
            <div className="bg-[#8C3A60] rounded px-10 py-6">
              <Loader size={50} className="mr-2 h-4 animate-spin text-[#fcd4be] w-10" />
            </div>
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
