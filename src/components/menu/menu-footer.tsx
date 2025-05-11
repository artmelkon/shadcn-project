import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import LightDarkToggle from "@/components/ui/light-dark-toggle";
import Link from "next/link";

export const MenuFooter = () => {
  return (
    <footer className="flex gap-2 items-center">
      <Avatar>
        <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
          AM
        </AvatarFallback>
      </Avatar>
      <Link href="/" className="underline">
        Logout
      </Link>
      <LightDarkToggle className="ml-auto" />
    </footer>
  );
};
