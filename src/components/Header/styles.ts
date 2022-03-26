import styled from "styled-components";

export const Container = styled.div`
  color: ${props => props.theme.colors.gray[300]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0 1rem 0;
`;

export const Searchbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Input = styled.input`
  border: none;
  font-weight: 500;
  font-size: 0.9rem;
  background: transparent;

  color: ${props => props.theme.colors.gray[300]};

  &:focus {
    outline: none;
  }
`;