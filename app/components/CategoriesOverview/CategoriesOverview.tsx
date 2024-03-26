import { useContext, useEffect } from "react";

// Utilties
import { CategoriesContext } from "@contexts/categories.context";

// Components
import CategoryOverview from "../CategoryOverview/CategoryOverview";
import Footer from "@componentsFooter/Footer";

export default function CategoriesOverview() {
  const { categories, fetchCategories } = useContext(CategoriesContext);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  return (
    <>
      <section className="pt-0 sm:p-0">
        {categories.map((category) => (
          <CategoryOverview category={category} key={category.id} />
        ))}
      </section>
      <Footer />
    </>
  );
}
