import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    color: ${props => props.theme.colors.texts.primary};
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.colors.texts.secondary};
  }

  margin-bottom: 3rem;
`;