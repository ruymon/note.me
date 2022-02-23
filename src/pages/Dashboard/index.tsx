import { Sidebar } from './../../components/Sidebar';
import { Container, Wrapper, Greeting } from './styles'

import { Post } from './../../components/Post';

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

        <Post color='yellow' date='Feb, 23 2022'>
          <p>This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍</p>
        </Post>
        
      </Container>
    </Wrapper>
  );
}