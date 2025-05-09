"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export const PasswordInput = (
  { className, ...props }: React.ComponentProps<"input">,
  ref
) => {
  const [shoewPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Input
        type={shoewPassword ? "text" : "password"}
        {...props}
        ref={ref}
        className={cn("pr-10", className)}
      />
      <span className="absolute top-[7px] right-1 cursor-pointer select-none">
        {shoewPassword ? (
          <EyeIcon onClick={() => setShowPassword(false)} />
        ) : (
          <EyeOffIcon onClick={() => setShowPassword(true)} />
        )}
      </span>
    </div>
  );
};
