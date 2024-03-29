import { useContext, useEffect, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import Aos from "aos";

// Utilities
import { CategoriesContext } from "@contexts/categories.context";

// Components
import CategoryOverview from "../CategoryOverview/CategoryOverview";
import Footer from "@componentsFooter/Footer";
import { useRouter } from "next/navigation";
import Loading from "@components/Loading/Loading";

Aos.init();

export default function CategoriesOverview() {
  const { categories, fetchCategories } = useContext(CategoriesContext);
  const router = useRouter();
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  const handleSubmitIsLoading = () => {
    setSubmitIsLoading(true);
    return router.push("/");
  };

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  return (
    <>
      {submitIsLoading && <Loading />}
      <div className="mt-7 pl-5">
        <button
          className="flex gap-1 items-center text-[#283040] hover:text-[#8c3a60] transition duration-300"
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
