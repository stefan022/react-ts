import { Draggable } from "react-beautiful-dnd";
import { ITask } from "../../ts/interfaces/ITask";

const DndDraggable = ({ state }: { state: any }) => {
	return (
		<>
			{state.items.map((item: ITask, index: any) => {
				return (
					<Draggable key={item.id} draggableId={item.id} index={index}>
						{(provided, snapshot) => {
							return (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									className={`
										select-none p-4 mb-1 min-h-[50px] text-white
										${snapshot.isDragging ? "bg-blue-500" : "bg-blue-400"}
									`}
									style={{...provided.draggableProps.style }}
								>
									<h3>{item.content}</h3>
									<p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, nulla.</p>
								</div>
							);
						}}
					</Draggable>
				);
			})}
		</>
	);
};

export default DndDraggable;