import styled from "styled-components";
import { colors } from './../../styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  background: ${colors.primary.creamWhite};
`

export const Aside = styled.aside`
  width: 40%;
  height: 100%;
  background-color: ${colors.primary.white};

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
      color: ${colors.gray[900]};
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.5rem;
      color: ${colors.gray[400]};
    }
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60%;

  gap: 1.5rem;

  img {
    margin-bottom: 2rem;
  }

  div {
    width: 20rem;
    color: ${colors.gray[300]};
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
      background: ${colors.gray[300]} none repeat scroll 0% 0%;
    }
  }
`

export const AnonymousInput = styled.input`
  width: 17.9rem;
  height: 3rem;

  border: 1px solid ${colors.gray[300]};
  border-radius: 0.5rem;

  color: ${colors.gray[300]};

  padding: 0rem 1rem;

  &::placeholder {
    filter: opacity(0.8);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.gray[200]};	
  }
`