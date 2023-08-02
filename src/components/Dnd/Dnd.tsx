import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { taskStatus } from "./data/taskStatus";
import DndDroppable from "./DndDroppable";
import { onDragEnd } from "../../utils/helpers/onDragAnd";

const Dnd = () => {
	const [columns, setColumns] = useState(taskStatus);

	return (
		<div>
			<div
                className="flex justify-center h-full"
			>
				<DragDropContext
					onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
				>
					{Object.entries(columns).map(([columnId, column], index) => {
						return (
							<div
                                className="flex flex-col items-center"
								key={columnId}
							>
								<h2>{column.name}</h2>
								<div className="m-2">
									<DndDroppable
										state={column}
										droppableId={columnId}
										columnId={columnId}
									/>
								</div>
							</div>
						);
					})}
				</DragDropContext>
			</div>
		</div>
	);
}

export default Dnd;