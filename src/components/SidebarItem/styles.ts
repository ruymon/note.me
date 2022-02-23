import styled from "styled-components";
import { colors } from "../../styles/colors";

interface SidebarItemStyleProps {
  active?: boolean;
}

export const Wrapper = styled.div<SidebarItemStyleProps>`
  color: ${colors.primary.midnight};
  opacity: ${(props) => props.active ? '1' : '0.5'};
  
  transition: all .1s ease-in-out;

  &:hover {
    opacity: 1;
  }
`