import { create } from "zustand";

export type Task = {
  columnId: string;
  id: string;
  title: string;
  description: string;
  priority: "Baixa" | "Media" | "Alta" | "Urgente";
  color: string;
};

type TaskStore = {
  Tasklist: Task[];
  Addtask: (task: Task) => void;
  removeTask: (id: string) => void;
  setTasks: (tasks: any) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  Tasklist: [
    {
      id: "task-1",
      title: "Explorar o FlowBoard",
      description: "Navegue pelas diferentes páginas e funcionalidades do site",
      priority: "Alta",
      color: "#5593F7",
      columnId: "col-1",
    },
    {
      id: "task-2",
      title: "Criar suas próprias tarefas",
      description: "Clique no botão + para adicionar novas tarefas",
      priority: "Media",
      color: "#9767E4",
      columnId: "col-1",
    },
    {
      id: "task-3",
      title: "Arrastar tarefas entre colunas",
      description: "Use drag & drop para organizar seu fluxo de trabalho",
      priority: "Alta",
      color: "#F76363",
      columnId: "col-2",
    },
  ],
  setTasks: (tasks) => set(() => ({ Tasklist: tasks })),
  Addtask: (task) =>
    set((state) => ({
      Tasklist: [...state.Tasklist, task],
    })),
  removeTask: (id) =>
    set((state) => ({
      Tasklist: state.Tasklist.filter((t) => t.id !== id),
    })),
}));
