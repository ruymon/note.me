import { useState } from "react";

import { Container, Aside, Main, AnonymousInput, ThemeToogle } from "./styles";

import { FaGoogle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

import { LoginButton } from "./../../components/LoginButton";
import { ThemeIcon } from "../../components/ThemeIcon";
import { useTheme } from "styled-components";

export function Login() {
  const [codename, setCodename] = useState("");
  const isDisabled = codename.trim() === "";
  const currentTheme = useTheme();

  return (
    <Container>
      <ThemeToogle>
        <ThemeIcon /> 
      </ThemeToogle>


      <Aside>
        <img src='dude.svg' alt='Man using computer and drinking coffee' />
        <div>
          <h1>Keep life simple</h1>
          <p>
            Store all your notes in a simple and intuitive app that helps you
            enjoy what is most important in life.
          </p>
        </div>
      </Aside>

      <Main>
        
        <img src={`logo_${currentTheme.title}.svg`} alt="Note.me Logo" />

        <LoginButton text='Join with Google' color='red'>
          <FaGoogle />
        </LoginButton>

        <div>or join anonymously</div>

        <AnonymousInput
          placeholder='Type your secret codename'
          onChange={(e) => setCodename(e.target.value)}
          value={codename}
        />

        <LoginButton
          text='Join anonymously'
          color='green'
          disabled={isDisabled}
        >
          <FiLogIn />
        </LoginButton>
      </Main>
    </Container>
  );
}
