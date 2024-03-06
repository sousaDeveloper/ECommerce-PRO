import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import "./Header.scss";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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
    <header className="p-4 px-7 flex items-center justify-between font-bold text-white top-0 sticky mb-2">
      <h1 className="text-2xl">Next Store</h1>

      {windowWidth <= 645 ? (
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon size={25} />
          </SheetTrigger>
          <SheetContent className="p-0 text-white content">
            <SheetHeader className="border-b border-slate-800 p-5 ">
              <SheetTitle className="font-bold text-2xl text-start mt-1 text-white">Menu</SheetTitle>
            </SheetHeader>
            <nav className="p-5 flex flex-col gap-3">
              <Button className="font-bold bg-[#283040]">Login</Button>
              <Button className="font-bold bg-[#283040]">Registrar</Button>
              <Button className="font-bold bg-[#283040]">Ver Carrinho</Button>
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
        <nav>
          <ul className="flex gap-6 p-2">
            <li className="cursor-pointer">Explorar</li>
            <li className="cursor-pointer">Login</li>
            <li className="cursor-pointer">Registrar</li>
            <Sheet>
              <SheetTrigger>
                {" "}
                <li className="cursor-pointer flex items-center">
                  <ShoppingCartIcon />
                  <p className="ml-1">5</p>
                </li>
              </SheetTrigger>
              <SheetContent className="p-0 text-white">
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
