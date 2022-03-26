import styled from "styled-components";

export const ThemeIconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all .2s ease-in-out;
  transform: scale(1.1);

  svg {
    color: ${props => props.theme.colors.texts.secondary};
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
    transform: scale(1.2);
  }
`;