import { cn } from "@/lib/utils";
import { AlignRight, Bolt, LayoutDashboard, LogOut, X } from "lucide-react";
import { useState } from "react";

const listNav = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={22} />,
    href: "/youtube",
  },
  { name: "Configurações", icon: <Bolt size={22} />, href: "/youtube" },
  { name: "Sair", icon: <LogOut size={22} />, href: "/youtube" },
];

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  function handleSwitchMenu() {
    setOpen(!open);
  }

  return (
    <header>
      <nav className=" flex justify-between ">
        <h1 className="text-emerald-500 font-semibold text-lg ">
          Garupa<span className="text-white">Pay</span>
        </h1>
        <button className="bg-transparent" onClick={handleSwitchMenu}>
          <AlignRight className={cn("text-emerald-500", open && "hidden")} />
        </button>
        <div
          className={cn(
            "hidden",
            open && "block absolute w-full left-0   bg-gray-900"
          )}>
          <button
            onClick={handleSwitchMenu}
            className="w-full flex justify-end  ">
            <X className={cn("text-emerald-500 hidden", open && "block")} />
          </button>
          <ul>
            {listNav.map((value) => (
              <li className="hover:bg-emerald-500 ease-in-out duration-200 cursor-pointer p-1 rounded flex gap-2 items-center group text-white ">
                <span className="text-white">{value.icon}</span>
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
