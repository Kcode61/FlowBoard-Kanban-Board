"use client";
import { useTaskStore } from "@/store/TaskStore";
import { Edit, Ellipsis, Plus, Trash2 } from "lucide-react";
import { TaskCard } from "../TaskCard";
import { useColumnStore } from "@/store/ColumStore";
import { useState } from "react";

import { Droppable } from "@hello-pangea/dnd";

export function Column({
  onOpen,
  columnId,
}: {
  onOpen: () => void;
  columnId: string;
}) {
  const tasklist = useTaskStore((state) => state.Tasklist);

  const [menuOpen, setMenuOpen] = useState(false);
  const [editingTitle, setEditingTitle] = useState(false);
  const [title, setTitle] = useState("");
  const updateColumnTitle = useColumnStore((state) => state.updateColumnTitle);
  const columntitle = useColumnStore(
    (state) => state.ColumList.find((c) => c.id === columnId)?.title,
  );
  const removeTask = useTaskStore((state) => state.removeTask);
  const removeColumn = useColumnStore((state) => state.RemoveColumn);
  const filteredTasks = tasklist.filter((task) => task.columnId === columnId);
  return (
    <div className="flex bg-white dark:bg-[#131A28] flex-col  p-4 rounded-2xl border-2 border-[#E5E7EB] dark:border-[#1D283A] w-sm gap-4">
      {editingTitle && (
        <div className="flex flex-col gap-2">
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateColumnTitle(columnId, title);
                setEditingTitle(false);
              }
              if (e.key === "Escape") {
                setEditingTitle(false);
              }
            }}
            className="dark:bg-[#131A28] dark:text-white  py-1 px-2 rounded-lg"
          />

          <button
            className="py-2 px-4 rounded-lg dark:hover:bg-[#1D283A] hover:bg-gray-200 cursor-pointer transition hover:scale-95 duration-300  text-slate-500 dark:text-[#90A3B8] "
            onClick={() => {
              updateColumnTitle(columnId, title);
              setEditingTitle(false);
            }}
          >
            confirmar
          </button>
        </div>
      )}

      <div className="flex flex-col gap-4 flex-1">
        <div className="flex relative justify-between items-center">
          <div className="flex  gap-2 items-center">
            <p className="dark:text-white text-black  font-bold">
              {columntitle}
            </p>
            <div className="rounded-full font-bold items-center flex justify-center w-5 text-xs h-5 dark:bg-[#1D283A] bg-gray-200  text-[#90A3B8] ">
              {filteredTasks.length}
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className=" text-black dark:text-white h-8 cursor-pointer w-8 hover:bg-gray-200 dark:hover:bg-[#1D283A] rounded-full flex items-center justify-center transition hover:scale-95 duration-300"
          >
            <Ellipsis />
          </button>
          {menuOpen && (
            <div className="absolute z-10  bg-white dark:bg-[#0B111E] border-2 p-2 border-gray-300 dark:border-white rounded-lg  top-8 right-5">
              <button
                className="flex gap-4  py-1 px-2 rounded cursor-pointer hover:scale-95 transition ease duration-300 text-xs  font-medium items-center text-red-400 hover:bg-gray-200 dark:hover:bg-[#131A28]"
                onClick={() => removeColumn(columnId)}
              >
                <Trash2 size={18} />
                Excluir
              </button>
              <button
                onClick={() => {
                  setTitle(columntitle ?? "");
                  setEditingTitle(true);
                  setMenuOpen(false);
                }}
                className="flex gap-4  py-1 px-2 rounded cursor-pointer hover:scale-95 transition ease duration-300 text-xs  font-medium items-center text-slate-400 hover:bg-gray-200 dark:hover:bg-[#131A28]"
              >
                <Edit size={18} />
                Editar
              </button>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto mt-4">
          <Droppable droppableId={columnId} direction="vertical" type="task">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-col gap-4 min-h-[2rem]  flex-1"
              >
                {filteredTasks.map((task, index) => (
                  <TaskCard
                    index={index}
                    key={task.id}
                    task={task}
                    removeTask={removeTask}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <button
          onClick={onOpen}
          className="py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-[#1D283A] cursor-pointer transition hover:scale-95 duration-300 flex gap-4 items-center text-[#1D283A] font-medium dark:text-[#90A3B8] "
        >
          <Plus size={18} />
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}
