"use client";
import { InsightsBox } from "@/components/InsightsBox";
import { SectionHeader } from "@/components/sectionHeader";
import { TaskPriorityBox } from "@/components/TaskPriorityBox";
import { useColumnStore } from "@/store/ColumStore";
import { useTaskStore } from "@/store/TaskStore";
import {
  ChartColumn,
  Hash,
  Layers,
  LayoutDashboard,
  LayoutList,
  TriangleAlert,
} from "lucide-react";

export default function Insights() {
  const ColumnList = useColumnStore((state) => state.ColumList);
  const TaskList = useTaskStore((state) => state.Tasklist);

  const TaskHigtPriority = TaskList.filter(
    (t) => t.priority === "Urgente" || t.priority === "Alta",
  );
  const taskPriority = {
    Baixa: TaskList.filter((t) => t.priority === "Baixa").length,
    Media: TaskList.filter((t) => t.priority === "Media").length,
    Alta: TaskList.filter((t) => t.priority === "Alta").length,
    Urgente: TaskList.filter((t) => t.priority === "Urgente").length,
  };

  return (
    <section className="min-h-dvh">
      <SectionHeader title="Insights" icon={<ChartColumn />} />
      <div className="py-10  flex flex-col gap-4 overflow-x-hidden max-w-7xl mx-auto  relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          <InsightsBox
            title="Total de Tarefas"
            value={TaskList.length}
            icon={<LayoutDashboard size={24} />}
            variant="purple"
          />
          <InsightsBox
            title="Total de Colunas"
            value={ColumnList.length}
            icon={<Layers size={24} />}
            variant="lightblue"
          />
          <InsightsBox
            title="Alta prioridade"
            value={TaskHigtPriority.length}
            icon={<TriangleAlert size={24} />}
            variant="red"
          />
        </div>

        <div className="flex flex-col  dark:bg-[#0B111E] bg-white border-2 border-[#E5E7EB]  dark:border-[#1D283A] gap-4  rounded-xl p-6 ">
          <div className="flex gap-2 items-center">
            <Hash size={20} className="dark:text-white/70 text-gray-400" />
            <p className="text-lg dark:text-white text-black font-bold">
              Distribuição por Prioridade
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <TaskPriorityBox variant="Baixa" value={taskPriority.Baixa} />
            <TaskPriorityBox variant="Media" value={taskPriority.Media} />
            <TaskPriorityBox variant="Alta" value={taskPriority.Alta} />
            <TaskPriorityBox variant="Urgente" value={taskPriority.Urgente} />
          </div>
        </div>
      </div>
    </section>
  );
}
