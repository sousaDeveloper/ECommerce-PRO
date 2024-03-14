import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

export default function CategoriesOverview() {
  const { categories, fetchCategories } = useContext(CategoriesContext);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  return (
    <section>
      {categories.map((category) => (
        <p>{category.name}</p>
      ))}
    </section>
  );
}
