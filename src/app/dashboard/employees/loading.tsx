import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
        <CardContent className="grid grid-cols-[60px_1fr_1fr_1fr_1fr] gap-4 items-center">
          <Skeleton className="size-10 rounded-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="size-10 rounded-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default Loading;
