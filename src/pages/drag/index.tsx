import { NextPage } from "next";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div>
        <Droppable droppableId="one">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    // {...provided.dragHandleProps}
                  >
                    <span {...provided.dragHandleProps}>fire</span>
                    Hello
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    Hello2
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Index;
