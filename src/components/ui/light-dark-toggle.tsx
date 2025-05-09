"use client";

import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  className?: string;
};
const LightDarkToggle: React.FC<Props> = ({ className }) => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          <Button variant="outline">
            <SunIcon className="block dark:hidden" />
            <MoonIcon className="hidden dark:block" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="hidden dark:inline">Enable light mode</span>
          <span className="inline dark:hidden ">Enable dark mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LightDarkToggle;
