import { Container, Aside, Main, AnonymousInput } from './styles';

import { FaGoogle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

import { LoginButton } from './../../components/LoginButton';

export function Login() {
  return (
    <Container>
      <Aside>
        <img src="dude.svg" alt="Man using computer and drinking coffee"/>
        <div>
          <h1>Keep life simple</h1>
          <p>Store all your notes in a simple and intuitive app that helps you enjoy what is most important in life.</p>
        </div>
      </Aside>

      <Main>
        <img src="logo_light.svg" alt="Note.me logo" />

        <LoginButton text="Join with Google" color="red">
          <FaGoogle />
        </LoginButton>

        <div>
          or join anonymously  
        </div>

        <AnonymousInput placeholder="Type your secret codename"/>

        <LoginButton text="Join anonymously" color="green">
          <FiLogIn />
        </LoginButton>


      </Main>
    </Container>
  )
}