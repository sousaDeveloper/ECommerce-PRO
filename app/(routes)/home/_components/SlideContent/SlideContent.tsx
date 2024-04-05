import { useMediaQuery } from "react-responsive";

// Styles
import "./SlideContent.scss";

export default function SlideContent() {
  const isLargeScreen = useMediaQuery({ maxWidth: 625 });

  return (
    <>
      {isLargeScreen ? (
        <h1 className="bg-[#283040] p-2 text-xl text-[#fcd4be] font-bold mt-2">
          <span>
            <span>Seja bem-vindo à Next Store</span>
            <span>Envio para todo o Brasil</span>
            <span>Parcelamos suas compras</span>
            <span>Compre com segurança</span>
            <span></span>
          </span>
        </h1>
      ) : (
        <div className="bg-[#283040] text-[#fcd4be] mx-20 my-14 p-5 rounded card min-w-[91%]">
          <div className="flex items-center gap-4">
            <svg className="w-8 svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                d="M624 368h-16V251.9c0-19-7.7-37.5-21.1-50.9L503 117.1C489.6 103.7 471 96 452.1 96H416V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56v304c0 30.9 25.1 56 56 56h8c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-464 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm208-96H242.7c-16.6-28.6-47.2-48-82.7-48s-66.1 19.4-82.7 48H56c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v312zm48-224h36.1c6.3 0 12.5 2.6 17 7l73 73H416v-80zm64 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-100.9c-17.2-25.9-46.6-43.1-80-43.1-24.7 0-47 9.6-64 24.9V272h144v91.1z"
                fill="#fff"
              ></path>
            </svg>
            <div>
              <h2 className="font-bold text-xl mainTitle">ENVIO PARA TODO O BRASIL</h2>
              <p className="mainDescription">compre no conforto da sua casa</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <svg className="w-8 svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zm-6 400H54.1c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h467.8c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6zM192 364v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                fill="#fff"
              ></path>
            </svg>
            <div>
              <h2 className="font-bold text-xl mainTitle">PARCELAMOS SUAS COMPRAS</h2>
              <p className="mainDescription">em até 6x sem juros</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <svg className="w-8 svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z"
                fill="#fff"
              ></path>
            </svg>
            <div>
              <h2 className="font-bold text-xl mainTitle">COMPRE COM SEGURANÇA</h2>
              <p className="mainDescription">seus dados sempre protegidos</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
