import { MenuTitle } from "./menu-title";
import { MenuItem } from "./menu-item";
import { MenuFooter } from "./menu-footer";

export const MainMenu = () => {
  return (
    <header className="bg-muted overflow-auto p-4 flex flex-col">
      <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </div>
      <nav className="py-4 grow">
        <MenuItem href="/dashboard">My Dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </nav>
      <MenuFooter />
    </header>
  );
};
