import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

// Utilities
import Product from "@typesproduct.types";
import { CartContext } from "@contexts/cart.context";

interface IProductWithDiscountProp {
  product: Product;
}

export default function ProductWithDiscount({ product }: IProductWithDiscountProp) {
  const { addProductToCart } = useContext(CartContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const addProductToCartClick = () => {
    toast.success("Item adicionado ao carrinho.");
    const productWithDiscount = { ...product, price: discountPrice };
    return addProductToCart(productWithDiscount);
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

  const discountPrice = product.price * 0.8;

  const formattedPrice = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(discountPrice);

  return (
    <div
      className="max-w-[20rem] rounded bg-[#283040] bg-clip-border text-white animate__animated animate__fadeInUp"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      key={product.id}
    >
      <h1 className="relative flex items-center">
        <span className="absolute font-bold -top-3 -right-1 bg-red-500 text-white rounded-full px-1 pb-5 pt-2 text-xs">
          -20%
        </span>
      </h1>
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
      <div className="flex justify-between gap-1 items-center pl-3 p-6 pt-0 pb-4">
        <div className="flex flex-col">
          <span className="font-bold line-through text-red-500">R${product.price}</span>
          <span className="font-bold text-xl text-green-700">{formattedPrice}</span>
        </div>

        <button
          className="bg-[#8C3A60] hover:bg-[#f2b6c1] hover:text-[#283040] transition duration-300 text-white rounded p-2 font-bold whitespace-nowrap"
          onClick={addProductToCartClick}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
