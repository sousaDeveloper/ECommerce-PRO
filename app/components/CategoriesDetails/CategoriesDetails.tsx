import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Aos from "aos";

// Utilities
import { db } from "../../config/firebase.config";
import Category from "@typescategory.types";
import { categoryConverter } from "@converters/firestore.converters";

// Components
import ProductItem from "../CategoryOverview/ProductItem/ProductItem";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import SkeletonLoading from "@componentsSkeletonLoading/SkeletonLoading";
import Footer from "@components/Footer/Footer";
import Loading from "@components/Loading/Loading";

interface ICategoryDetailsProps {
  categoryId: string;
}

Aos.init();

export default function CategoryDetails({ categoryId }: ICategoryDetailsProps) {
  const [category, setCategory] = useState<Category | null>(null);
  const [skeletonLoading, setSkeletonLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleRouterHomeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      return router.push("/");
    }, 1000);
  };

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

  const renderProductItems = () => {
    return category?.products.map((product) => <ProductItem product={product} key={product.id} />);
  };

  return (
    <>
      {isLoading && <Loading />}
      <main className="px-5">
        <div className="mb-5 mt-7">
          <button
            className="flex gap-1 items-center text-[#283040] hover:text-[#8c3a60] transition duration-300"
            data-aos="fade-right"
            onClick={handleRouterHomeClick}
          >
            <ChevronLeftIcon size={25} />
            <h1 className="font-bold text-xl">Voltar</h1>
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
                <div className="flex w-max space-x-4 p-4 pl-0">{renderProductItems()}</div>

                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            ) : (
              <div className="grid grid-cols-3 p-4 gap-8">{renderProductItems()}</div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
