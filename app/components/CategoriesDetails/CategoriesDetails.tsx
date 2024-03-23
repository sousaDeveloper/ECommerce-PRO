import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";

// Utilties
import { db } from "../../config/firebase.config";
import Category from "@typescategory.types";
import { categoryConverter } from "@converters/firestore.converters";

// Components
import ProductItem from "../CategoryOverview/ProductItem/ProductItem";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import SkeletonLoading from "@componentsSkeletonLoading/SkeletonLoading";

interface ICategoryDetailsProps {
  categoryId: string;
}

export default function CategoryDetails({ categoryId }: ICategoryDetailsProps) {
  const router = useRouter();
  const [skeletonLoading, setSkeletonLoading] = useState(true);
  const handleRouterBackClick = () => router.back();
  const [category, setCategory] = useState<Category | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "categories").withConverter(categoryConverter), where("id", "==", categoryId))
      );

      const category = querySnapshot.docs[0]?.data();

      setCategory(category);
      setSkeletonLoading(false);
    };

    setTimeout(() => {
      fetchCategories();
    }, 1500);
  }, []);

  return (
    <main className="px-5">
      <div className="text-white mb-5">
        <button
          className="flex gap-1 items-center hover:text-[#F2B6C1] transition duration-300"
          onClick={handleRouterBackClick}
        >
          <ChevronLeftIcon size={25} />
          <h1 className="font-bold text-xl">Explorar {category?.displayName}</h1>
        </button>
      </div>
      {skeletonLoading ? (
        <div className="flex flex-wrap justify-center gap-2 p-1">
          <div className="grid grid-cols-3 gap-8">
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-2 p-1">
          {windowWidth <= 874 ? (
            <ScrollArea className="rounded-md">
              <div className="flex w-max space-x-4 p-4">
                {category?.products.map((product) => (
                  <ProductItem product={product} key={product.id} />
                ))}
              </div>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          ) : (
            <div className="grid grid-cols-3 p-4 gap-8">
              {category?.products.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
