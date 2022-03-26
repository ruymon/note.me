import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  background: ${props => props.theme.colors.primary.background};
`
export const ThemeToogle = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

export const Aside = styled.aside`
  width: 50%;
  height: 100%;
  background-color: ${props => props.theme.colors.primary.sidebar};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }

  div {
    width: 70%;

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: ${props => props.theme.colors.texts.primary};
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.5rem;
      color: ${props => props.theme.colors.texts.secondary};
    }
  }

  @media (max-width: 580px) {
    display: none;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;

  gap: 1.5rem;

  img {
    margin-bottom: 2rem;
  }

  div {
    width: 20rem;
    color: ${props => props.theme.colors.gray[300]};
    font-size: 0.8rem;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 1rem;

    &::before,
    &::after {
      content: " ";
      flex: 1 1 0%;
      height: 1px;
      background: ${props => props.theme.colors.gray[300]} none repeat scroll 0% 0%;
    }
  }

  @media (max-width: 580px) {
    width: 100%;
  }
`

export const AnonymousInput = styled.input`
  width: 17.9rem;
  height: 3rem;

  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-radius: 0.5rem;

  color: ${props => props.theme.colors.gray[300]};
  background: transparent;

  padding: 0rem 1rem;

  &::placeholder {
    filter: opacity(0.8);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.gray[200]};	
  }
`