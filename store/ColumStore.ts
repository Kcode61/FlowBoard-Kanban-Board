import { create } from "zustand";

export type Column = {
  id: string;
  title: string;
};

type ColumnStore = {
  ColumList: Column[];
  AddColumn: (column: Column) => void;
  RemoveColumn: (id: string) => void;
  updateColumnTitle: (columnId: string, newTitle: string) => void;
  setColumns: (columns: any) => void;
};

export const useColumnStore = create<ColumnStore>((set) => ({
  ColumList: [
    {
      id: "col-1",
      title: "A fazer",
    },
    {
      id: "col-2",
      title: "Em progresso",
    },
    {
      id: "col-3",
      title: "Concluído",
    },
  ],
  setColumns: (columns) => set(() => ({ ColumList: columns })),
  updateColumnTitle: (columnId, newTitle) =>
    set((state) => ({
      ColumList: state.ColumList.map((column) =>
        column.id === columnId ? { ...column, title: newTitle } : column,
      ),
    })),

  AddColumn: (column) =>
    set((state) => ({
      ColumList: [...state.ColumList, column],
    })),
  RemoveColumn: (id) =>
    set((state) => ({
      ColumList: state.ColumList.filter((t) => t.id !== id),
    })),
}));
