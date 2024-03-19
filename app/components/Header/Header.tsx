import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";

// Utilities
import { auth } from "../../config/firebase.config";
import { UserContext } from "../../contexts/user.context";

// Components
import Cart from "../cart/Cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

// Styles
import "./Header.scss";

export default function Header() {
  const { isAuthenticated } = useContext(UserContext);
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
        <div className="flex gap-4 items-center">
          <Cart />
          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon size={25} />
            </SheetTrigger>
            <SheetContent className="p-0 text-white content">
              <SheetHeader className="border-b border-slate-800 p-5 ">
                <SheetTitle className="font-bold text-2xl text-start mt-1 text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="p-5 flex flex-col gap-3">
                {!isAuthenticated ? (
                  <>
                    <Button className="font-bold bg-[#283040] hover:bg-[#8C3A60]">
                      <Link to="/login" className="flex items-center gap-2">
                        <LogInIcon />
                        Login
                      </Link>
                    </Button>
                    <Button className="font-bold bg-[#283040] hover:bg-[#8C3A60]">
                      <Link to="/register">Registrar</Link>
                    </Button>
                  </>
                ) : (
                  <Button
                    className="flex gap-2 items-center font-bold bg-[#283040] hover:bg-[#8C3A60]"
                    onClick={() => signOut(auth)}
                  >
                    <LogOutIcon />
                    Sair
                  </Button>
                )}
                <Button className="font-bold bg-[#283040] hover:bg-[#8C3A60]">
                  <Link to="/explore">Explorar</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        <nav>
          <ul className="flex items-center gap-6 p-2">
            <li className="cursor-pointer">
              <Link to="/explore">Explorar</Link>
            </li>

            {isAuthenticated ? (
              <li
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => {
                  signOut(auth);
                }}
              >
                <LogOutIcon />
                Sair
              </li>
            ) : (
              <>
                <li className="cursor-pointer">
                  <Link to="/login">Login</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/register">Registrar</Link>
                </li>
              </>
            )}
            <Cart />
          </ul>
        </nav>
      )}
    </header>
  );
}
