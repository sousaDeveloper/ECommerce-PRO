import { useMediaQuery } from "react-responsive";

// Styles
import "./SlideContent.scss";

export default function SlideContent() {
  const isLargeScreen = useMediaQuery({ maxWidth: 525 });

  return (
    <>
      {isLargeScreen ? (
        <h1 className="bg-[#283040] p-2 text-2xl text-[#fcd4be] font-bold mt-2">
          <span>
            <span>Seja bem-vindo à Next Store</span>
            <span>Entrega grátis acima de R$500,00</span>
            <span>Entregamos para todo Brasil</span>
            <span>-20% OFF na primeira compra</span>
            <span>com o cupom PRIMEIRA20</span>
            <span></span>
          </span>
        </h1>
      ) : (
        <div className="brands-list bg-[#283040] text-[#fcd4be]">
          <div className="wrapper">
            <h1 className="font-bold text-2xl min-w-full">Seja bem-vindo à Next Store</h1>
            <h1 className="font-bold text-2xl min-w-full">Entrega grátis acima de R$500,00</h1>
            <h1 className="font-bold text-2xl min-w-full">Entregamos para todo Brasil</h1>
            <h1 className="font-bold text-xl min-w-full">-20% OFF na primeira compra com o cupom PRIMEIRA20</h1>
            <h1 className="font-bold text-2xl min-w-full">Seja bem-vindo à Next Store</h1>
            <h1 className="font-bold text-2xl min-w-full">Entrega grátis acima de R$500,00</h1>
            <h1 className="font-bold text-2xl min-w-full">Entregamos para todo Brasil</h1>
            <h1 className="font-bold text-xl min-w-full">-20% OFF na primeira compra com o cupom PRIMEIRA20</h1>
            <h1 className="font-bold text-2xl min-w-full">Seja bem-vindo à Next Store</h1>
            <h1 className="font-bold text-2xl min-w-full">Entrega grátis acima de R$500,00</h1>
            <h1 className="font-bold text-2xl min-w-full">Entregamos para todo Brasil</h1>
            <h1 className="font-bold text-xl min-w-full">-20% OFF na primeira compra com o cupom PRIMEIRA20</h1>
          </div>
        </div>
      )}
    </>
  );
}
