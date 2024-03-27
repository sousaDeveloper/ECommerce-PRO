"use client";

import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Utilities
import { auth } from "../../config/firebase.config";
import { UserContext } from "@contexts/user.context";
import { CartContext } from "@contexts/cart.context";

// Components
import Cart from "../cart/Cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Navbar, NavbarBrand, NavbarContent, button } from "@nextui-org/react";

// Styles
import "./Header.scss";

export default function Header() {
  const { isAuthenticated } = useContext(UserContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { clearCart } = useContext(CartContext);

  const router = useRouter();
  const handleRouterLoginClick = () => router.push("/pages/login");
  const handleRouterExploreClick = () => router.push("/pages/explore");
  const handleRouterBackClick = () => router.push("/");

  const handleLogoutClick = () => {
    toast.success("Você deslogou da sua conta com sucesso.");
    return signOut(auth);
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

  return (
    <>
      {windowWidth <= 785 ? (
        <Navbar shouldHideOnScroll className="z-50 sticky font-bold text-[#8c3a60]">
          <NavbarBrand>
            <p className="text-2xl cursor-pointer animate__animated animate__fadeInUp" onClick={handleRouterBackClick}>
              Next Store
            </p>
          </NavbarBrand>
          <NavbarContent className="sm:flex gap-4 pl-5 py-5" justify="center">
            <Cart />
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon size={25} />
              </SheetTrigger>
              <SheetContent className="p-0 text-white content">
                <SheetHeader className="border-b border-slate-800 p-5">
                  <SheetTitle className="font-bold text-2xl text-start mt-1 text-white">Menu</SheetTitle>
                </SheetHeader>
                <nav className="p-5 flex flex-col gap-3 animate__animated animate__fadeInRight">
                  {!isAuthenticated ? (
                    <>
                      <Button
                        className="flex gap-2 font-bold bg-[#283040] hover:bg-[#8C3A60]"
                        onClick={handleRouterLoginClick}
                      >
                        <LogInIcon />
                        Entrar
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="flex gap-2 items-center font-bold bg-[#283040] hover:bg-[#8C3A60] cursor-pointer"
                      onClick={handleLogoutClick}
                    >
                      <p onClick={() => clearCart()} className="flex items-center gap-2">
                        <LogOutIcon />
                        Sair
                      </p>
                    </Button>
                  )}
                  <Button className="font-bold bg-[#283040] hover:bg-[#8C3A60]" onClick={handleRouterExploreClick}>
                    Explorar
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarContent>
        </Navbar>
      ) : (
        <Navbar shouldHideOnScroll className="z-50 sticky font-bold text-[#8c3a60]">
          <NavbarBrand>
            <p className="text-2xl cursor-pointer animate__animated animate__fadeInUp" onClick={handleRouterBackClick}>
              Next Store
            </p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4 pl-7 py-4" justify="center">
            <ul className="flex items-center gap-6 p-2">
              <li className="cursor-pointer" onClick={handleRouterExploreClick}>
                Explorar
              </li>
              {isAuthenticated ? (
                <button onClick={() => clearCart()}>
                  <li onClick={handleLogoutClick} className="flex gap-2 cursor-pointer">
                    {" "}
                    <LogOutIcon /> Sair
                  </li>
                </button>
              ) : (
                <li className="cursor-pointer" onClick={handleRouterLoginClick}>
                  Entrar
                </li>
              )}
              <Cart />
            </ul>
          </NavbarContent>
        </Navbar>
      )}
    </>
  );
}
