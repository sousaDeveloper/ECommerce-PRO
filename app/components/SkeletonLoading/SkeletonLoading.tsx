"use client";

import Aos from "aos";

import "./SkeletonLoading.scss";
import { useEffect } from "react";

export default function SkeletonLoading() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init();
    }
  }, []);

  return (
    <div className="card h-[33rem] rounded" data-aos="fade-up">
      <div className="card__skeleton card__description -mt-10"> </div>
      <div className="card__skeleton card__title w-[80%]"></div>
      <div className="flex items-center justify-between mt-16 rounded">
        <div className="card__skeleton card-price w-[20%]"></div>
        <div className="card__skeleton card-button px-16 py-4"></div>
      </div>
    </div>
  );
}
