import { ReactNode } from "react";
import { Wrapper, ActiveBar } from './styles';

interface SidebarItemProps {
  children: ReactNode,
  active?: boolean
}

export function SidebarItem(props: SidebarItemProps) {
  return (
    <Wrapper active={props.active}>
      
      { props.active ? <ActiveBar /> : null }
      
      {props.children}
    </Wrapper>
  )
}
