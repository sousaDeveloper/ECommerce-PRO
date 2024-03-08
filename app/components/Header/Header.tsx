import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

// Styles
import "./Header.scss";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <header className="p-4 px-7 flex items-center justify-between font-bold text-white top-0 z-50 sticky mb-2">
      <h1 className="text-2xl cursor-default">
        <Link to="/">Next Store</Link>
      </h1>

      {windowWidth <= 785 ? (
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon size={25} />
          </SheetTrigger>
          <SheetContent className="p-0 text-white content">
            <SheetHeader className="border-b border-slate-800 p-5 ">
              <SheetTitle className="font-bold text-2xl text-start mt-1 text-white">Menu</SheetTitle>
            </SheetHeader>
            <nav className="p-5 flex flex-col gap-3">
              <Button className="font-bold bg-[#283040] hover:bg-[#8C3A60]">
                <Link to="/login">Login</Link>
              </Button>
              <Button className="font-bold bg-[#283040] hover:bg-[#8C3A60]">
                <Link to="/register">Registrar</Link>
              </Button>
              <Button className="font-bold bg-[#283040] hover:bg-[#8C3A60]">Ver Carrinho</Button>
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
        <nav>
          <ul className="flex gap-6 p-2">
            <li className="cursor-pointer">Explorar</li>
            <li className="cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/register">Registrar</Link>
            </li>
            <Sheet>
              <SheetTrigger>
                {" "}
                <li className="cursor-pointer flex items-center">
                  <ShoppingCartIcon />
                  <p className="ml-1">5</p>
                </li>
              </SheetTrigger>
              <SheetContent className="p-0 text-white content">
                <SheetHeader className="border-b border-slate-800 p-5">
                  <SheetTitle className="font-bold text-2xl text-start mt-1 text-white">Carrinho</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </ul>
        </nav>
      )}
    </header>
  );
}
