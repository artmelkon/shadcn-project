"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href: string;
};

export const MenuItem: React.FC<Props> = ({ children, href }) => {
  const pathName = usePathname();
  const isActive: boolean = pathName === href;

  return (
    <Link
      className={cn(
        "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-formground",
        isActive &&
          "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-foreground text-primary-foreground"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
