export default function SkeletonLoading() {
  return (
    <div className="w-[20rem] h-[32rem] animate-pulse rounded p-4 bg-[#8C3A60] bg-clip-border text-white">
      <div className="bg-neutral-400/50 w-full animate-pulse rounded-md"></div>
      <div className="flex flex-col gap-2 ">
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
}
