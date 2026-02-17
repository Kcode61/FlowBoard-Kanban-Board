"use client";

import { FolderKanban, History, LayoutDashboard, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(path: string) {
    return pathname === path;
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`md:hidden py-2 px-4  absolute top-3.5 bg-white border-[#E5E7EB] dark:bg-[#080C16]  dark:border-[#1D283A] ${pathname === "/" ? "right-20" : "right-5"} z-30  rounded-lg  border `}
      >
        <Menu size={18} />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static z-50 bg-white h-dvh md:h-auto
           w-64 dark:bg-[#0B111E] border-r border-[#E5E7EB] dark:border-[#1D283A]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex  justify-between items-center px-4 h-16">
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 bg-[#606FF6] flex items-center justify-center rounded-lg">
              <h2 className="font-bold text-white dark:text-[#080C16]">F</h2>
            </div>
            <h1 className="text-xl text-black dark:text-white font-bold">
              FlowBoard
            </h1>
          </div>

          <button onClick={() => setOpen(false)} className="md:hidden">
            <X />
          </button>
        </div>

        <div className="h-px dark:bg-[#1D283A] bg-[#E5E7EB]" />

        <nav className="px-4 flex-1 py-4 flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`${isActive("/") ? "bg-gradient-to-r from-[#606FF6] to-[#5666f5] dark:text-[#080C16] text-white" : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#162231]"} py-2 hover:scale-95 transition ease duration-300 px-4 rounded-xl flex gap-4 items-center font-bold`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Board
          </Link>

          <Link
            href="/Insights"
            onClick={() => setOpen(false)}
            className={`${isActive("/Insights") ? "bg-gradient-to-r from-[#606FF6] to-[#5666f5] dark:text-[#080C16] text-white" : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#162231]"} py-2 hover:scale-95 transition ease duration-300 px-4 rounded-xl flex gap-4 items-center font-bold`}
          >
            <FolderKanban className="w-5 h-5" />
            Insights
          </Link>
        </nav>
      </aside>
    </>
  );
}
