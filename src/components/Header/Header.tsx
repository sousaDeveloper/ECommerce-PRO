import { ShoppingCartIcon } from "lucide-react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="p-4 px-7 flex items-center justify-between font-bold text-white">
      <h1 className="text-2xl">NextWave Store</h1>
      <nav>
        <ul className="flex gap-6 p-2">
          <li className="cursor-pointer">Explorar</li>
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Registrar</li>
          <li className="cursor-pointer flex items-center">
            <ShoppingCartIcon />
            <p className="ml-1">5</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
