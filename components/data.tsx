import { Dispatch, SetStateAction } from 'react';

export const tasks: TaskType[] = [{
  id: 1,
  content: "configure tailwind",
}, {
  id: 2,
  content: "setup GPU",
}, {
  id: 3,
  content: "sleep timely",
}, {
  id: 4,
  content: "make tea",
}, {
  id: 5,
  content: "learn coding",
}, {
  id: 6,
  content: "grow up",
}, {
  id: 7,
  content: "be responsible",
}];

export type TaskType = {
  id: number;
  content: string;
};

export type ColumnType = {
  state: TaskType[];
  setState: Dispatch<SetStateAction<TaskType[]>>
};