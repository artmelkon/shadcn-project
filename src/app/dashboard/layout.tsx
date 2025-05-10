import React from "react";
import { Greeting } from "../../components/greeting";
import { MainMenu } from "../../components/mainmenu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <MainMenu />
      <div className="overflow-auto py-2 px-4">
        <Greeting />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
