import { ReactNode } from "react";
import { Container } from "./styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface PostContainerProps {
  children: ReactNode[];
}

export function PostContainer({ children }: PostContainerProps) {
  return (
    <DragDropContext onDragEnd={() => console.log("drag end")}>
      <Container>
        {/* { 
          children.map((child) => (<Draggable>{child}</Draggable>)) 
        } */}

        {children}
      </Container>
    </DragDropContext>
  );
}
