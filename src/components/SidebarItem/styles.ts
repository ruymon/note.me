import styled from "styled-components";

interface SidebarItemStyleProps {
  active?: boolean;
}

export const Wrapper = styled.div<SidebarItemStyleProps>`
  color: ${props => props.theme.colors.primary.main};
  opacity: ${(props) => props.active ? '1' : '0.5'};
  
  transition: all .1s ease-in-out;

  width: 5rem;
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  position: relative;
`
export const ActiveBar = styled.div`
  width: 4px;
  height: 100%;
  background: ${props => props.theme.colors.primary.main};

  border-radius: 0 1rem 1rem 0;

  position: absolute;
  top: 0;
  left: 0;
`;