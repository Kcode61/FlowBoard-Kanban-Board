"use client";

import { SectionHeader } from "@/components/sectionHeader";
import { useState } from "react";
import { useColumnStore } from "@/store/ColumStore";
import { Column } from "@/components/ColumnCard";
import { CreateTaskCard } from "@/components/CreateTaskCard";
import { CreateColumn } from "@/components/CreateColumn";
import { useTaskStore } from "@/store/TaskStore";

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { AddColumn } from "@/components/AddColumn";
export default function Home() {
  const ColumnList = useColumnStore((state) => state.ColumList);
  const setColumns = useColumnStore((state) => state.setColumns);
  const TaskList = useTaskStore((state) => state.Tasklist);
  const setTasks = useTaskStore((state) => state.setTasks);
  const [taskisOppen, SetTaskisOppen] = useState(false);
  const [ColumnisOppen, SetColumnisOppen] = useState(false);
  const [activeColumnId, SetActiveColumnId] = useState<string>("");

  function reoder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }
  function onDragEnd(result: any) {
    const { source, destination, type } = result;

    if (!result.destination) return;
    if (type === "column") {
      const items = reoder(ColumnList, source.index, destination.index);
      setColumns(items);
      return;
    }
    if (type === "task") {
      const sourceColumnId = source.droppableId;
      const destinationColumnId = destination.droppableId;

      if (!destination) return;

      if (sourceColumnId === destinationColumnId) {
        const columnTasks = TaskList.filter(
          (task) => task.columnId === sourceColumnId,
        );

        const reordered = reoder(columnTasks, source.index, destination.index);

        const newTasks = TaskList.filter(
          (task) => task.columnId !== sourceColumnId,
        ).concat(reordered);

        setTasks(newTasks);
      } else {
        const sourceTasks = TaskList.filter(
          (task) => task.columnId === sourceColumnId,
        );

        const destinationTasks = TaskList.filter(
          (task) => task.columnId === destinationColumnId,
        );

        const [movedTask] = sourceTasks.splice(source.index, 1);

        destinationTasks.splice(destination.index, 0, {
          ...movedTask,
          columnId: destinationColumnId,
        });

        const newTasks = TaskList.filter(
          (task) =>
            task.columnId !== sourceColumnId &&
            task.columnId !== destinationColumnId,
        )
          .concat(sourceTasks)
          .concat(destinationTasks);

        setTasks(newTasks);
      }
    }
  }

  return (
    <section className="flex  flex-col  bg-white dark:bg-[#080C16]">
      <SectionHeader title="FlowBoard" onOppen={() => SetColumnisOppen(true)} />
      <div className="py-10   overflow-x-hidden max-w-7xl mx-auto  relative">
        {taskisOppen && (
          <CreateTaskCard
            columnId={activeColumnId}
            onClose={() => {
              SetTaskisOppen(false);
              SetActiveColumnId("");
            }}
          />
        )}
        {ColumnisOppen && (
          <CreateColumn onClose={() => SetColumnisOppen(false)} />
        )}
        <div className="flex flex-col  md:items-center gap-4 max-w-[100vw]">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              droppableId="columns"
              direction="horizontal"
              type="column"
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex h-[calc(100vh-6rem)] max-w-7xl gap-4 py-5 overflow-x-auto"
                >
                  {ColumnList.map((column, index) => (
                    <Draggable
                      key={column.id}
                      draggableId={column.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={provided.draggableProps.style}
                        >
                          <Column
                            columnId={column.id}
                            onOpen={() => {
                              SetActiveColumnId(column.id);
                              SetTaskisOppen(true);
                            }}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <AddColumn OnClick={() => SetColumnisOppen(true)} />
        </div>
      </div>
    </section>
  );
}
