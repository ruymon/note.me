import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  color: ${colors.gray[300]};

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Input = styled.input`
  border: none;
  font-weight: 500;
  font-size: 0.9rem;

  color: ${colors.gray[300]};

  &:focus {
    outline: none;
  }
`;	