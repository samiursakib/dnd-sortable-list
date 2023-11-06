import { useId } from 'react';
import { ColumnType, TaskType } from "./data";
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { DndContext, closestCenter } from "@dnd-kit/core";
import dynamic from 'next/dynamic';

const SortableItem = dynamic(() => import('./SortableUser'), {ssr: false});

const Column = ({ state, setState }: ColumnType ) => {
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if(active.id !== over.id) {
      setState(prev => {
        const oldId = prev.findIndex((t: TaskType) => t.id === active.id);
        const newId = prev.findIndex((t: TaskType) => t.id === over.id);
        return arrayMove(prev, oldId, newId);
      });
    }
  }
  const id = useId();
  return (
    <div className="flex flex-col w-[400px] p-4 space-y-3 bg-[#141414] rounded-md text-center">
      <div className="w-full p-4 bg-[#202020] text-center font-bold">Todos</div>
      <div
        className="flex flex-col space-y-3"
      >
        <DndContext id={id} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={state}>
            {state.map((t: TaskType) => <SortableItem key={t.id} id={t.id} content={t.content} />)}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Column;