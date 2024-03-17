import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";

// Utilities
import { CardContext } from "../../contexts/cart.context";

// Components
import CartItem from "../CartItem/CartItem";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Cart() {
  const { products } = useContext(CardContext);

  const formatPrice = products.reduce((accum, sum) => accum + sum.price, 0);

  const formattedPrice = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(formatPrice);

  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <li className="cursor-pointer flex items-center mb-1">
          <ShoppingCartIcon />
          <p className="ml-1">{products.length}</p>
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
                <ShoppingCartIcon /> Ir para o checkout
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
