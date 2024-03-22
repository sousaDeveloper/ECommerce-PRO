import { useParams } from "react-router-dom";

// Components
import CategoryDetails from "../../components/CategoriesDetails/CategoriesDetails";
import Header from "../../components/Header/Header";

export default function CategoryDetailsPage() {
  const { id } = useParams();

  if (!id) return null;

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  );
}
