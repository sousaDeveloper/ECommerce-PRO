"use client";

import Aos from "aos";
import Image from "next/image";

import "./SinceInova.scss";
import { useEffect, useState } from "react";

export default function SinceInova() {
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init();
    }
  }, []);

  return (
    <section className="relative py-6 px-6 rounded mainContent">
      <div
        className="inset-0 absolute w-[33%]"
        style={{
          backgroundColor: "#8c3a60",
          filter: "blur(100px)",
          opacity: "1",
        }}
      />
      <div className="flex justify-between relative contentSince">
        <div className="flex gap-2 relative">
          <Image
            src="/imageSince.avif"
            alt="imageSince"
            width={300}
            height={150}
            className="z-1 imageContent rounded object-cover"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <Image
            src="/imageSinceTwo.jpg"
            alt="imageSince"
            width={300}
            height={150}
            className="rounded left-40 bottom-20 absolute object-cover imageContent imageTwo"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="flex flex-col justify-center items-center textContent w-[50%] relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="font-bold text-2xl flex gap-1 titleOfSince">Descubra o Novo Padrão de Estilo com a Inova Store</h1>
          <h1 className="font-bold text-[#283040]">Inovando na Moda desde 1995</h1>
          <p className="text-xl text-center min-w-[85%] mt-4 text-[#283040] ">
            Na Inova Store, acreditamos que a moda é mais do que apenas roupas - é uma expressão de individualidade e
            criatividade. Desde 1995, temos nos dedicado a trazer para você as últimas tendências, combinando estilo
            contemporâneo com uma abordagem única. Nossa coleção exclusiva é cuidadosamente selecionada para refletir a
            diversidade e a autenticidade de nossos clientes. Explore nossa loja e descubra peças que inspiram e elevam seu
            estilo a novos patamares. Seja você mesmo, seja Inova.
          </p>
          {windowWidth <= 600 && (
            <div
              className="inset-0 absolute w-[100%]"
              style={{
                backgroundColor: "#8c3a60",
                filter: "blur(200px)",
                opacity: "1",
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
