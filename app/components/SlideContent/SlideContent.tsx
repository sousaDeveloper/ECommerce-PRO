import { useMediaQuery } from "react-responsive";

// Styles
import "./SlideContent.scss";

export default function SlideContent() {
  const isLargeScreen = useMediaQuery({ maxWidth: 525 });

  return (
    <>
      {isLargeScreen ? (
        <h1 className="bg-[#283040] p-2 text-2xl text-[#8C3A60] font-bold">
          <span>
            <span>Seja bem-vindo à Next Store</span>
            <span>Entrega grátis acima de R$500,00</span>
            <span>Entregamos para todo Brasil</span>
            <span>Ganhe +20% OFF na primeira </span>
            <span>compra com o cupom PRIMEIRA20</span>
            <span></span>
          </span>
        </h1>
      ) : (
        <div className="slide-container bg-[#283040] p-2">
          <div className="contentSlide flex gap-20 text-[#8C3A60]">
            <h1 className="slide-text font-bold text-2xl border border-solid border-[#f2b6c1] rounded px-2">
              Seja bem-vindo à Next Store
            </h1>
            <h1 className="slide-text font-bold text-2xl border border-solid border-[#f2b6c1] rounded px-2">
              Entrega grátis acima de R$500,00
            </h1>
            <h1 className="slide-text font-bold text-2xl border border-solid border-[#f2b6c1] rounded px-2">
              Entregamos para todo Brasil
            </h1>
            <h1 className="slide-text font-bold text-2xl border border-solid border-[#f2b6c1] rounded px-2">
              Ganhe +20% OFF na primeira compra com o cupom PRIMEIRA20
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
