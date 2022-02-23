import { Sidebar } from './../../components/Sidebar';
import { Container, Wrapper, Greeting } from './styles'

export function Dashboard() {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        {/* Search */}

        <Greeting>
          <h1>Hello, <strong>Ruy</strong>! 👋🏼</h1>
          <h2>All your notes are here, in one place!</h2>
        </Greeting>
      </Container>
    </Wrapper>
  );
}