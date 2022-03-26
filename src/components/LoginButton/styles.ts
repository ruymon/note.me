import styled from "styled-components";

interface ButtonStyleProps {
  color: string[];
}

export const Button = styled.button<ButtonStyleProps>`
  width: 20rem;
  height: 3rem;

  border: none;
  border-radius: 0.5rem;

  background: ${(props) => props.color[0]};
  color: ${props => props.theme.colors.primary.white};

  transition: all 0.2s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  span {
    font-weight: 500;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.color[1]};
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`