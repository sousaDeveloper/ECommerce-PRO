"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

// Utilities
import { clearCart } from "store/toolkit/cart/cart.slice";

// Components
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import PaymentStatus from "@components/PaymentStatus/PaymentStatus";

export default function PaymentConfirmation() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();

  const status = searchParams.get("success");
  const isCanceled = searchParams.get("canceled") === "true";

  useEffect(() => {
    if (status === "true" || status === "false") {
      setTimeout(() => {
        router.push("/");
        return dispatch(clearCart());
      }, 4000);
    }
    if (isCanceled) {
      setTimeout(() => {
        return router.push("/");
      }, 4000);
    }
  }, [searchParams]);

  return (
    <>
      <Header />
      <div className="grid place-content-center place-items-center min-h-[79vh]">
        {status === "true" && (
          <PaymentStatus>
            <div className="content text-[#8c3a60]">
              <span className="title font-bold text-2xl">Pedido feito.</span>
              <p className="message font-bold text-lg">Obrigado pela preferência. Em breve o seu pedido será entregue!</p>
            </div>
          </PaymentStatus>
        )}
        {status === "false" && (
          <PaymentStatus>
            <div className="content text-[#8c3a60]">
              <span className="title font-bold text-2xl">Pedido negado.</span>
              <p className="message font-bold text-lg">Revise seus dados, o pagamento foi negado!</p>
            </div>
          </PaymentStatus>
        )}
        {isCanceled && (
          <PaymentStatus>
            <div className="content text-[#8c3a60]">
              <span className="title font-bold text-2xl">Pedido cancelado.</span>
              <p className="message font-bold text-lg">Seu pedido foi cancelado, mas não deixe de comprar!</p>
            </div>
          </PaymentStatus>
        )}
      </div>
      <Footer />
    </>
  );
}
