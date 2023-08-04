import { Droppable } from "react-beautiful-dnd";
import DndDraggable from "./DndDraggable";
import { ITask } from "../../ts/interfaces/IDnd/ITask";

const DndDroppable = ({
	state,
	droppableId,
	columnId,
}: {
	state: ITask;
	droppableId: string;
	columnId: string;
}) => {
	return (
		<Droppable droppableId={droppableId} key={columnId}>
			{(provided, snapshot) => {
				return (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						className={`
							p-1 w-[250px] min-h-[500px] transition-all
							${snapshot.isDraggingOver ? "bg-gray-200" : "bg-gray-100"}
						`}
					>
						<DndDraggable state={state} />
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
};

export default DndDroppable;