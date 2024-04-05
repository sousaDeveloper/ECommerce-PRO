"use client";

import { useEffect, useState } from "react";
import { LogOutIcon, MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import Aos from "aos";

// Utilities
import { auth } from "config/firebase.config";
import { logoutUser } from "store/toolkit/user/user.slice";
import { useAppSelector } from "hooks/redux.hooks";
import { clearCart } from "store/toolkit/cart/cart.slice";

// Components
import Cart from "../cart/Cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import Loading from "@components/Loading/Loading";

// Styles
import "./Header.scss";

Aos.init();

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleShowSidebarClick = () => setIsMenuOpen(!true);
  const { isAuthenticated, currentUser } = useAppSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  const router = useRouter();
  const handleRouterClick = (path: string) => () => {
    setIsLoading(true);
    setTimeout(() => {
      return router.push(path);
    }, 1000);
  };

  const handleLogoutClick = () => {
    toast.success("Você deslogou da sua conta com sucesso.");
    dispatch(clearCart());
    dispatch(logoutUser());
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
        <Navbar shouldHideOnScroll className="z-50 sticky font-bold text-[#fcd4be]">
          <NavbarBrand>
            <p className="text-2xl">Inova Store</p>
          </NavbarBrand>
          <NavbarContent className="sm:flex gap-4 pl-5 py-5" justify="center">
            <Cart />
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon size={25} />
              </SheetTrigger>
              {isMenuOpen && (
                <SheetContent className="p-0 text-white content">
                  <SheetHeader className="border-b border-slate-800 p-5">
                    <SheetTitle
                      className="font-bold text-2xl text-start mt-1 text-white"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="p-5 flex flex-col gap-3" data-aos="fade-up" data-aos-duration="1000">
                    <Button className="buttonMobile" onClick={handleRouterClick("/explore")}>
                      <p onClick={handleShowSidebarClick}>Explorar</p>
                    </Button>
                    {!isAuthenticated ? (
                      <>
                        <Button
                          className="buttonMobile"
                          onClick={handleRouterClick("/login")}
                          data-aos="fade-up"
                          data-aos-duration="1000"
                        >
                          <p className="flex items-center gap-2" onClick={handleShowSidebarClick}>
                            Olá, faça seu login!
                          </p>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button className="buttonMobile" onClick={handleLogoutClick}>
                          <p className="flex items-center gap-2">
                            <LogOutIcon />
                            Sair
                          </p>
                        </Button>
                        <p>Olá, {currentUser?.firstName}!</p>
                      </>
                    )}
                  </nav>
                </SheetContent>
              )}
            </Sheet>
          </NavbarContent>
        </Navbar>
      ) : (
        <Navbar shouldHideOnScroll className="z-50 sticky font-bold">
          <NavbarBrand>
            <p className="text-2xl">Inova Store</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4 pl-7 py-4" justify="center">
            <ul className="flex items-center gap-6 p-2">
              <li className="cursor-pointer" onClick={handleRouterClick("/explore")}>
                Explorar
              </li>
              {isAuthenticated ? (
                <Dropdown className="p-0">
                  <DropdownTrigger>
                    <li className="cursor-pointer">Olá, {currentUser?.firstName}!</li>
                  </DropdownTrigger>
                  <DropdownMenu className="bg-[#283040] rounded border border-solid text-white">
                    <DropdownItem
                      description="Veja seus pedidos."
                      className="px-3 mb-1 border-b outline-none rounded hover:outline-none hover:bg-[#8c3a60] transition-all duration-300"
                    >
                      <p className="font-bold text-lg">Meu Pedidos</p>
                    </DropdownItem>
                    <DropdownItem
                      className="px-3 outline-none rounded hover:outline-none hover:bg-[#8c3a60] transition-all duration-300"
                      description="Sair da conta."
                      onClick={handleLogoutClick}
                    >
                      <p className="font-bold text-lg">Sair</p>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <li className="cursor-pointer" onClick={handleRouterClick("/login")}>
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
