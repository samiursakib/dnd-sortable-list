"use client";

import { useState } from "react";
import { tasks } from "@/components/data";
import Column from "@/components/Column";


const Wrapper = () => {
  const [state, setState] = useState(tasks);
  return (
    <main className="h-full bg-[#010101] p-16 flex text-[#ddd] justify-center flex-col">
      <div className="text-center mb-8">
        <p className="text-2xl font-extralight">React Drag & Drop</p>
        <p className="text-sm font-bold">react-beautiful-dnd</p>
      </div>
      <div className="flex w-full justify-center space-x-4">
        <Column
          state={state}
          setState={setState}
        />
      </div>
    </main>
  );
};

export default Wrapper;
