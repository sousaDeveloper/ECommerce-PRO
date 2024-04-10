"use client";

import Aos from "aos";
import { useEffect } from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonLoading() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init();
    }
  }, []);

  return (
    <Card className="w-[300px] h-[500px] space-y-5 p-4 rounded">
      <Skeleton className="rounded">
        <div className="h-96 -mt-6 rounded bg-default-300"></div>
      </Skeleton>
      <div className="space-y-7">
        <Skeleton className="w-3/5 rounded">
          <div className="h-3 w-4/5 rounded bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded mt-14">
          <div className="h-3 w-2/5 rounded bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
