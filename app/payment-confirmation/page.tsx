"use client";

import { useContext, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Utilities
import { CartContext } from "@contexts/cart.context";

// Components
import Header from "@components/Header/Header";
import PaymentConfirmed from "@components/PaymentConfirmed/PaymentConfirmed";
import Footer from "@componentsFooter/Footer";

export default function PaymentConfirmation() {
  const router = useRouter();
  const { clearCart } = useContext(CartContext);
  const searchParams = useSearchParams();

  const status = searchParams.get("success");

  useEffect(() => {
    if (status === "true") {
      setTimeout(() => {
        router.push("/");
        return clearCart();
      }, 3000);
    }
  }, [searchParams]);

  return (
    <>
      <Header />
      <div className="grid place-content-center place-items-center">{status === "true" && <PaymentConfirmed />}</div>
      <h1>{status === "false" && "Compra Negada!"}</h1>
      <Footer />
    </>
  );
}
