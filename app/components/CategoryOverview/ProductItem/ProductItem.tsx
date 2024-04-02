import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

// Utilities
import Product from "@typesproduct.types";
import { useDispatch } from "react-redux";
import { addProductToCart } from "store/reducers/cart/cart.actions";

interface IProductProps {
  product: Product;
}

export default function ProductItem({ product }: IProductProps) {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const addProductToCartClick = () => {
    toast.success("Item adicionado ao carrinho.");
    return dispatch(addProductToCart(product));
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
      className="max-w-[20rem] rounded bg-[#283040] bg-clip-border text-white"
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
        <h5 className="mb-2 text-xl font-bold overflow-hidden text-ellipsis whitespace-nowrap">{product.name}</h5>
      </div>
      <div className="flex justify-between items-center p-6 pt-0">
        <span className="font-bold text-lg">R${product.price}</span>
        <button
          className="bg-[#8C3A60] hover:bg-[#f2b6c1] hover:text-[#283040] transition duration-300 text-white rounded p-2 font-bold"
          onClick={addProductToCartClick}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
