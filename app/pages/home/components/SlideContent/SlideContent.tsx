import { useMediaQuery } from "react-responsive";

// Styles
import "./SlideContent.scss";

export default function SlideContent() {
  const isLargeScreen = useMediaQuery({ maxWidth: 525 });

  return (
    <>
      {isLargeScreen ? (
        <h1 className="bg-[#283040] p-2 text-2xl text-[#8C3A60] font-bold mt-2">
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
        <div className="slide-container bg-[#283040] p-2 mt-3">
          <div className="contentSlide flex gap-32 text-[#8C3A60]">
            <h1 className="slide-text font-bold text-2xl">Seja bem-vindo à Next Store</h1>
            <h1 className="slide-text font-bold text-2xl">Entrega grátis acima de R$500,00</h1>
            <h1 className="slide-text font-bold text-2xl">Entregamos para todo Brasil</h1>
            <h1 className="slide-text font-bold text-2xl">Ganhe 20% OFF na primeira compra com o cupom PRIMEIRA20</h1>
          </div>
        </div>
      )}
    </>
  );
}
