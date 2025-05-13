"use client";

import React, { useState } from "react";
import { Greeting } from "../../components/greeting";
import { MainMenu } from "../../components/menu/main-menu";
import { MenuTitle } from "@/components/menu/menu-title";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && (
        <div className="p-4 flex justify-between items-center md:hidden sticky top-0 left-0 bg-background border-border">
          <MenuTitle />
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-auto py-2 px-4">
        <Greeting />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
