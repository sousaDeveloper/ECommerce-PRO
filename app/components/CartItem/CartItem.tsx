import Image from "next/image";

// Utilities
import CartProduct from "../../types/cart.types";

interface ICartItemProps {
  product: CartProduct;
}

export default function CartItem({ product }: ICartItemProps) {
  return (
    <div className="flex justify-between gap-3 mb-3 border border-solid border-[#283040] rounded p-1">
      <div className="flex gap-2">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={150}
          height={0}
          className="rounded object-cover max-h-32 min-h-32 max-w-32 min-w-32"
        />
        <div className="flex flex-col gap-3 justify-center font-bold">
          <div className="flex flex-col">
            <h2 className="text-lg text-[#F2B6C1]">{product.name}</h2>
            <span className="text-lg text-[#8C3A60]">R${product.price}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="cursor-pointer text-xl hover:text-[#8C3A60] transition duration-300">-</span>
            <span className="mt-1 text-lg">{product.quantity}</span>
            <span className="cursor-pointer text-xl hover:text-[#8C3A60] transition duration-300">+</span>
          </div>
        </div>
      </div>
      <span className="text-xl text-end cursor-pointer hover:text-[#8C3A60] transition duration-300 max-h-1">X</span>
    </div>
  );
}
