import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import Aos from "aos";

// Utilities
import Category from "@typescategory.types";
import { fetchCategories } from "store/toolkit/categories/categories.slice";
import { useAppSelector } from "hooks/redux.hooks";

// Components
import CategoryOverview from "../CategoryOverview/CategoryOverview";
import Footer from "@componentsFooter/Footer";
import Loading from "@components/Loading/Loading";

Aos.init();

export default function CategoriesOverview() {
  const dispatch = useDispatch();
  const { categories } = useAppSelector((rootReducer) => rootReducer.categoryReducer) as { categories: Category[] };
  const router = useRouter();
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  const handleSubmitIsLoading = () => {
    setSubmitIsLoading(true);
    return router.push("/");
  };

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories() as any);
    }
  }, []);

  return (
    <>
      {submitIsLoading && <Loading />}
      <div className="mt-7 pl-5">
        <button
          className="flex gap-1 items-center text-[#8c3a60] hover:text-[#283040] transition duration-300"
          data-aos="fade-right"
          onClick={handleSubmitIsLoading}
        >
          <ChevronLeftIcon size={25} />
          <Link href="/">
            <h1 className="font-bold text-xl" data-aos="fade-right">
              Voltar
            </h1>
          </Link>
        </button>
      </div>
      <section className="pt-0 sm:p-0">
        {categories.map((category) => (
          <CategoryOverview category={category} key={category.id} />
        ))}
      </section>
      <Footer />
    </>
  );
}
