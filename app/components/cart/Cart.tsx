import { ShoppingCartIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <li className="cursor-pointer flex items-center mb-1">
          <ShoppingCartIcon />
          <p className="ml-1">5</p>
        </li>
      </SheetTrigger>
      <SheetContent className="p-0 text-white content">
        <SheetHeader className="border-b border-slate-800 p-5">
          <SheetTitle className="font-bold text-2xl text-start mt-1 text-white">Seu Carrinho</SheetTitle>
        </SheetHeader>

      </SheetContent>
    </Sheet>
  );
}
