import { TaskType } from '@/components/data';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableUser = ({ id, content }: TaskType) => {
  const { attributes, listeners, setNodeRef, transition, transform } = useSortable({
    id,
    transition: {
      duration: 300,
      easing: 'cubic-bezier(0.01,0.5,0,1)'
    }
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }
  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="list-none px-4 py-2 bg-[#252525] hover:cursor-pointer hover:shadow-md hover:shadow-[#000] transition-all duration-300 text-sm"
    >
      {content}
    </li>
  );
}

export default SortableUser;