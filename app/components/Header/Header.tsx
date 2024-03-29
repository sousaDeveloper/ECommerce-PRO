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
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Loading from "@components/Loading/Loading";

// Styles
import "./Header.scss";

export default function Header() {
  const { isAuthenticated } = useContext(UserContext);
  const { clearCart } = useContext(CartContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleShowSidebarClick = () => setIsMenuOpen(!true);

  const router = useRouter();
  const handleRouterClick = (path: string) => () => {
    setIsLoading(true);
    setTimeout(() => {
      return router.push(path);
    }, 1000);
  };

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
      {isLoading && <Loading />}
      {windowWidth <= 785 ? (
        <Navbar shouldHideOnScroll className="z-50 sticky font-bold text-[#8c3a60]">
          <NavbarBrand>
            <p className="text-2xl cursor-pointer animate__animated animate__fadeInUp" onClick={handleRouterClick("/")}>
              Next Store
            </p>
          </NavbarBrand>
          <NavbarContent className="sm:flex gap-4 pl-5 py-5 animate__animated animate__fadeInUp" justify="center">
            <Cart />
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon size={25} />
              </SheetTrigger>
              {isMenuOpen && (
                <SheetContent className="p-0 text-white content">
                  <SheetHeader className="border-b border-slate-800 p-5">
                    <SheetTitle className="font-bold text-2xl text-start mt-1 text-white">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="p-5 flex flex-col gap-3 animate__animated animate__fadeInRight">
                    {!isAuthenticated ? (
                      <>
                        <Button className=" font-bold buttonMobile" onClick={handleRouterClick("/pages/login")}>
                          <p className="flex gap-2" onClick={handleShowSidebarClick}>
                            <LogInIcon />
                            Entrar
                          </p>
                        </Button>
                      </>
                    ) : (
                      <Button className="flex gap-2 items-center font-bold cursor-pointer" onClick={handleLogoutClick}>
                        <p onClick={() => clearCart()} className="flex items-center gap-2">
                          <LogOutIcon />
                          Sair
                        </p>
                      </Button>
                    )}
                    <Button className="font-bold buttonMobile" onClick={handleRouterClick("/pages/explore")}>
                      <p onClick={handleShowSidebarClick}>Explorar</p>
                    </Button>
                  </nav>
                </SheetContent>
              )}
            </Sheet>
          </NavbarContent>
        </Navbar>
      ) : (
        <Navbar shouldHideOnScroll className="z-50 sticky font-bold text-[#8c3a60]">
          <NavbarBrand>
            <p className="text-2xl cursor-pointer animate__animated animate__fadeInUp" onClick={handleRouterClick("/")}>
              Next Store
            </p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4 pl-7 py-4" justify="center">
            <ul className="flex items-center gap-6 p-2 animate__animated animate__fadeInUp">
              <li className="cursor-pointer" onClick={handleRouterClick("/pages/explore")}>
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
                <li className="cursor-pointer" onClick={handleRouterClick("/pages/login")}>
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
