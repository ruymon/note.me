import { ReactNode } from "react";
import { Wrapper } from './styles';

interface SidebarItemProps {
  children: ReactNode,
  active?: boolean
}

export function SidebarItem(props: SidebarItemProps) {
  return (
    <Wrapper active={props.active}>
      {/*  TODO Active side  */}
      
      {props.children}
    </Wrapper>
  )
}