type props = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  variant?: "purple" | "lightblue" | "red";
};
export function InsightsBox({ title, value, icon, variant }: props) {
  return (
    <div className="flex dark:bg-[#0B111E] bg-white border-2 dark:border-[#1D283A] border-[#E5E7EB] gap-4 items-center rounded-xl p-6 ">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-xl ${variant === "purple" ? "text-[#606FF6] dark:bg-[#131A33] bg-[#131A33]/10" : variant === "lightblue" ? "text-[#26B2F2] dark:bg-[#0D2133] bg-[#0D2133]/10" : variant === "red" ? "text-[#B82C2D] dark:bg-[#1E141F] bg-[#1E141F]/10" : "text-gray-500 bg-gray-200"}`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium dark:text-[#88A3B8] text-zinc-500">
          {title}
        </p>
        <p className="text-4xl font-bold text-black dark:text-white">{value}</p>
      </div>
    </div>
  );
}
