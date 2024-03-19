import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Image from "next/image";

// Utilities
import Product from "../../../types/product.types";
import { CartContext } from "../../../contexts/cart.context";
import { UserContext } from "../../../contexts/user.context";

interface IProductProps {
  product: Product;
}

export default function ProductItem({ product }: IProductProps) {
  const { addProductToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(UserContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const addProductToCartClick = () => {
    if (isAuthenticated === false) {
      toast.info("Primeiro faça seu login.");
      return navigate("/login");
    } else {
      toast.success("Item adicionado ao carrinho.");
      return addProductToCart(product);
    }
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

  return (
    <div
      className="max-w-[20rem] rounded bg-[#8C3A60] bg-clip-border text-white"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      key={product.id}
    >
      <div className="mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={0}
          style={{
            objectFit: "cover",
            height: "25rem",
          }}
          className={`${windowWidth <= 450 ? "h-72" : "h-96"}`}
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-bold">{product.name}</h5>
      </div>
      <div className="flex justify-between items-center p-6 pt-0">
        <span className="font-bold">R${product.price}</span>
        <button
          className="bg-[#fff] hover:bg-[#283040] hover:text-[#F2B6C1] transition duration-300 text-[#283040] rounded p-2 font-bold"
          onClick={addProductToCartClick}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
