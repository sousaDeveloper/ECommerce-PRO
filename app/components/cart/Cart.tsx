import { ShoppingCartIcon } from "lucide-react";
import { useContext, useMemo, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

// Utilities
import { CartContext } from "../../contexts/cart.context";

// Components
import CartItem from "../CartItem/CartItem";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Cart() {
  const { products, formattedPrice } = useContext(CartContext);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  const totalItemsInCart = useMemo(() => products.reduce((accum, num) => accum + num.quantity, 0), [products]);

  const handleFinishPurchaseClick = async () => {
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/create-checkout-session`, { products });
      return (window.location.href = data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookingSubmit = async () => {
    setSubmitIsLoading(true);
  };

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
              <button
                className="flex gap-2 items-center justify-center w-full rounded bg-[#8C3A60] hover:bg-[#283040] hover:text-[#f2b6c1] transition duration-300 p-2"
                onClick={handleFinishPurchaseClick}
              >
                <p onClick={handleBookingSubmit} className="flex gap-2">
                  <ShoppingCartIcon /> Ir para o pagamento
                </p>
                {submitIsLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
