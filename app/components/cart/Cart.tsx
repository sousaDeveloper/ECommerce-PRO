import "animate.css";
import { ShoppingCartIcon } from "lucide-react";
import { useContext, useMemo, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Utilities
import { CartContext } from "@contexts/cart.context";
import { UserContext } from "@contexts/user.context";

// Components
import CartItem from "../CartItem/CartItem";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Cart() {
  const { products, formattedPrice, clearCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(UserContext);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const router = useRouter();

  const totalItemsInCart = useMemo(() => products.reduce((accum, num) => accum + num.quantity, 0), [products]);

  const handleFinishPurchaseClick = async () => {
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/create-checkout-session`, { products });
      if (!isAuthenticated) {
        toast.info("Primeiro realize seu login.");
        return router.push("/pages/login");
      } else {
        return (window.location.href = data.url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearCartClick = () => {
    toast.success("Carrinho limpo com sucesso.");
    return clearCart();
  };

  const handleBookingSubmit = () => {
    return setSubmitIsLoading(true);
  };

  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <li className="cursor-pointer relative flex items-center hover:text-[#fcd4be]">
          <ShoppingCartIcon />
          <span className="absolute -top-1 -right-1 bg-[#304060] text-white rounded-full px-1 text-xs">
            {totalItemsInCart}
          </span>
        </li>
      </SheetTrigger>
      <SheetContent className="p-0 text-white" style={{ overflowY: "auto" }}>
        <SheetHeader className="border-b border-slate-800 p-5">
          <SheetTitle className="font-bold text-2xl mt-1 text-start text-white animate__animated animate__fadeInRight">
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {products.length === 0 ? (
          <h1 className="p-5 font-bold text-xl text-start">Carrinho vazio.</h1>
        ) : (
          <div className="p-4 text-start">
            {products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
            <button
              onClick={handleClearCartClick}
              className="font-bold hover:text-[#8C3A60] transition duration-300 animate__animated animate__fadeInRight"
            >
              Limpar Carrinho
            </button>

            <div className="pt-5 font-bold animate__animated animate__fadeInRight">
              <h1 className="text-start">Total: {formattedPrice}</h1>
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
