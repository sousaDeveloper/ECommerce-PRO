import "./PaymentConfirmed.scss";

export default function PaymentConfirmed() {
  return (
    <div className="card mt-60">
      <div className="header">
        <div className="image">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#000000"
                d="M20 7L9.00004 18L3.99994 13"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="content">
          <span className="title font-bold text-2xl">Pedido feito.</span>
          <p className="message font-bold text-lg">Obrigado pela preferência. Em breve o seu pedido será entregue!</p>
        </div>
      </div>
      <p className="font-bold mt-1 text-center text-white">Redirecionando à tela principal em instantes...</p>
    </div>
  );
}
