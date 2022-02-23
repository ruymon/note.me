import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    color: ${colors.gray[900]};
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.gray[600]};
  }

  margin-bottom: 3rem;
`;