import { ShoppingCartIcon } from "lucide-react";
import { useContext, useMemo } from "react";

// Utilities
import { CartContext } from "../../contexts/cart.context";

// Components
import CartItem from "../CartItem/CartItem";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router-dom";

export default function Cart() {
  const { products, formattedPrice } = useContext(CartContext);

  const totalItemsInCart = useMemo(() => products.reduce((accum, num) => accum + num.quantity, 0), [products]);

  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <li className="cursor-pointer flex items-center">
          <ShoppingCartIcon />
          <p className="ml-1">{totalItemsInCart}</p>
        </li>
      </SheetTrigger>
      <SheetContent className="p-0 text-white content" style={{ overflowY: "auto" }}>
        <SheetHeader className="border-b border-slate-800 p-5">
          <SheetTitle className="font-bold text-2xl text-start mt-1 text-white">Seu Carrinho</SheetTitle>
        </SheetHeader>

        {products.length === 0 ? (
          <h1 className="p-5 font-bold text-xl">Carrinho vazio.</h1>
        ) : (
          <div className="p-4">
            {products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}

            <div className="pt-5 font-bold">
              <h1>Total: {formattedPrice}</h1>
              <button className="flex gap-2 items-center justify-center w-full rounded bg-[#8C3A60] hover:bg-[#283040] hover:text-[#f2b6c1] transition duration-300 p-2">
                <ShoppingCartIcon /> Ir para o pagamento
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
