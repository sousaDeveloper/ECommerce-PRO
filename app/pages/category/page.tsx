import { useParams } from "next/navigation";

// Components
import CategoryDetails from "../../components/CategoriesDetails/CategoriesDetails";
import Header from "../../components/Header/Header";

export default function CategoryDetailsPage() {
  const { id } = useParams();

  if (!id) return null;

  const categoryId = Array.isArray(id) ? id[0] : id;

  return (
    <>
      <Header />
      <CategoryDetails categoryId={categoryId} />
    </>
  );
}
