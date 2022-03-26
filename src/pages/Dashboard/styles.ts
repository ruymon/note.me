import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display:flex;
  align-items: space-between;
`

export const Container = styled.main`
  height: 100vh;
  overflow: hidden;

  background: ${props => props.theme.colors.primary.background};
  margin: 0 auto;

  flex: 1;

  padding: 0 4rem;
`
