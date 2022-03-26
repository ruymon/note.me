import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FaGoogle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

import { ThemeIcon } from "../../components/ThemeIcon";
import { LoginButton } from "./../../components/LoginButton";

import { AnonymousInput, Aside, Container, Main, ThemeToogle } from "./styles";


export function Login() {
  const [codename, setCodename] = useState("");
  const isDisabled = codename.trim() === "";
  const currentTheme = useTheme();
  const { t } = useTranslation();

  return (
    <Container>
      <ThemeToogle>
        <ThemeIcon /> 
      </ThemeToogle>


      <Aside>
        <img src='dude.svg' alt='Man using computer and drinking coffee' />
        <div>
          <h1>{ t('login.hero')}</h1>
          <p>{ t('login.subtitle')}</p>
        </div>
      </Aside>

      <Main>
        
        <img src={`logo_${currentTheme.title}.svg`} alt="Note.me Logo" />

        <LoginButton text={ t('login.joinWithGoogle')} color='red'>
          <FaGoogle />
        </LoginButton>

        <div>{ t('login.joinAnonymous')}</div>

        <AnonymousInput
          placeholder={ t('login.typeCodename')}
          onChange={(e) => setCodename(e.target.value)}
          value={codename}
        />

        <LoginButton
          text={ t('login.joinAnonymouslyButton')}
          color='green'
          disabled={isDisabled}
        >
          <FiLogIn />
        </LoginButton>
      </Main>
    </Container>
  );
}
