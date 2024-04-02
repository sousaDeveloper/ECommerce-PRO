import Aos from "aos";
import { ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

// Utilities
import { useAppSelector } from "hooks/redux.hooks";
import { selectProductsTotalCart, selectProductsTotalPrice } from "store/reducers/cart/cart.selectors";
import { CartActions, clearCart } from "store/reducers/cart/cart.actions";

// Components
import CartItem from "../CartItem/CartItem";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

Aos.init();

export default function Cart() {
  const { products } = useAppSelector((rootState) => rootState.cartReducer);
  const dispatch: Dispatch<CartActions> = useDispatch();
  const producsTotalPrice = useAppSelector(selectProductsTotalPrice);
  const productsCount = useAppSelector(selectProductsTotalCart);

  const { isAuthenticated } = useAppSelector((rootReducer) => rootReducer.userReducer);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const router = useRouter();

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
    return dispatch(clearCart());
  };

  const handlePaymentSubmit = () => {
    return setSubmitIsLoading(true);
  };

  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <li className="cursor-pointer relative flex items-center hover:text-[#8C3A60]">
          <ShoppingCartIcon />
          <span className="absolute -top-1 -right-1 bg-[#304060] text-[#fcd4be] rounded-full px-1 text-xs">
            {productsCount}
          </span>
        </li>
      </SheetTrigger>
      <SheetContent className="p-0 text-white" style={{ overflowY: "auto" }}>
        <SheetHeader className="border-b border-slate-800 p-5">
          <SheetTitle
            className="font-bold text-2xl mt-1 text-start text-white"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {products.length === 0 ? (
          <h1 className="p-5 font-bold text-xl text-start">Carrinho vazio.</h1>
        ) : (
          <div className="p-4 text-start" data-aos="fade-up" data-aos-duration="1000">
            {products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
            <button onClick={handleClearCartClick} className="font-bold hover:text-[#8C3A60] transition duration-300">
              Limpar Carrinho
            </button>

            <div className="pt-5 font-bold">
              <h1 className="text-start">Total: {producsTotalPrice}</h1>
              <button
                className="flex gap-2 items-center justify-center w-full rounded bg-[#8C3A60] hover:bg-[#283040] hover:text-[#f2b6c1] transition duration-300 p-2"
                onClick={handleFinishPurchaseClick}
              >
                <p onClick={handlePaymentSubmit} className="flex gap-2">
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
