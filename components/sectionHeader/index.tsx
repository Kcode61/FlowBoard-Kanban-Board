"use client";

import { Moon, Plus, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SectionHeader(props: {
  title: string;
  icon?: React.ReactNode;
  onOppen?: () => void;
}) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [spinKey, setSpinKey] = useState(0);

  const HandleClick = () => {
    setSpinKey((k) => k + 1);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex flex-col ">
      <div className="flex h-16 px-4 justify-between items-center  bg-white dark:bg-[#080C16]">
        <div className="flex   gap-2 items-center text-black dark:text-white">
          <button
            key={spinKey}
            onClick={HandleClick}
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#E5E7EB] hover:bg-[#d4d7de] dark:hover:bg-[#131A28] dark:bg-[#1D283A]  hover:scale-95 transition ease duration-300 cursor-pointer [animation:spin_0.7s_linear_1]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {props.icon}

          <h2 className="font-bold text-lg md:text-2xl  truncate">
            {props.title}
          </h2>
        </div>

        {pathname === "/" && (
          <button
            onClick={props.onOppen}
            className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg bg-white border-[#E5E7EB] dark:bg-[#080C16] border dark:border-[#1D283A] hover:scale-95 transition ease duration-300"
          >
            <Plus size={18} />
            <span className="hidden md:inline text-black dark:text-white font-medium">
              Nova coluna
            </span>
          </button>
        )}
      </div>

      <div className="h-px dark:bg-[#1D283A] bg-[#E5E7EB] w-full" />
    </div>
  );
}
