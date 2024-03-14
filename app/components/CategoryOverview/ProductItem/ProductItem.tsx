import { useEffect, useState } from "react";
import Image from "next/image";

// Utilities
import Product from "../../../types/product.types";

interface IProductProps {
  product: Product;
}

export default function ProductItem({ product }: IProductProps) {
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

  return (
    <div className="max-w-[20rem] rounded bg-[#8C3A60] bg-clip-border text-white shadow-md" key={product.id}>
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
        <button className="bg-[#fff] hover:bg-[#283040] hover:text-white transition duration-300 text-[#283040] rounded p-2 font-bold">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
