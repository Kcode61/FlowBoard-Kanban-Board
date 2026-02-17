type props = {
  variant: "Baixa" | "Media" | "Alta" | "Urgente";
  value: number;
};
export function TaskPriorityBox({ variant, value }: props) {
  return (
    <div
      className={`p-6 rounded-xl flex-col gap-2 items-center flex justify-center border-2 bg-gray-200   border-[#E5E7EB] dark:border-[#1D283A] dark:bg-[#0B111E] ${variant === "Baixa" ? "text-green-500" : variant === "Media" ? "text-yellow-500" : variant === "Alta" ? "text-blue-500" : variant === "Urgente" ? " border-[#481A23] text-red-500 bg-[#281520]" : ""}`}
    >
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="text-sm font-bold">{variant}</p>
    </div>
  );
}
