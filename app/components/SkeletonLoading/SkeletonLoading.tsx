import "./SkeletonLoading.scss";

export default function SkeletonLoading() {
  return (
    <div className="card h-[33rem] rounded animate__animated animate__fadeInUp">
      <div className="card__skeleton card__description -mt-10"> </div>
      <div className="card__skeleton card__title w-[80%]"></div>
      <div className="flex items-center justify-between mt-16 rounded">
        <div className="card__skeleton card-price w-[20%]"></div>
        <div className="card__skeleton card-button px-16 py-4"></div>
      </div>
    </div>
  );
}
