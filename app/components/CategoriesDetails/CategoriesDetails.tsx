import { useEffect, useState } from "react";
import Category from "../../types/category.types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { categoryConverter } from "../../converters/firestore.converters";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import ProductItem from "../CategoryOverview/ProductItem/ProductItem";

interface ICategoryDetailsProps {
  categoryId: string;
}

export default function CategoryDetails({ categoryId }: ICategoryDetailsProps) {
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
    };

    fetchCategories();
  }, []);

  return (
    <main className="px-5">
      <div className="text-white mb-5">
        <Link to="/" className="flex gap-1 items-center hover:text-[#F2B6C1] transition duration-300">
          <ChevronLeftIcon size={25} />
          <h1 className="font-bold text-xl">Explorar {category?.displayName}</h1>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-2 p-1 ">
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
          <div className="flex flex-wrap p-4 gap-8">
            {category?.products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
