import styled from "styled-components";
import { colors } from "../../styles/colors";

interface SidebarItemStyleProps {
  active?: boolean;
}

export const Wrapper = styled.div<SidebarItemStyleProps>`
  color: ${colors.primary.midnight};
  opacity: ${(props) => props.active ? '1' : '0.5'};
  
  transition: all .1s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &:hover {
    opacity: 1;
  }
`
// export const ActiveBar = styled.div`
//   width: 4px;
//   height: 100%;
//   background: ${colors.primary.midnight};

//   border-radius: 0 0.5rem 0.5rem 0;
// `;