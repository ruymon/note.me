import { Sidebar } from './../../components/Sidebar';
import { Container, Wrapper, PostContainer } from './styles'

import { Post } from './../../components/Post';
import { Header } from '../../components/Header';
import { Greeting } from '../../components/Greeting';


export function Dashboard() {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header />

        <Greeting name={'Ruy'} />

        <PostContainer> 
          <Post color='yellow' date='Feb, 23 2022'>
            <p>This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍</p>
          </Post>

          <Post color='green' date='Feb, 23 2022'>
            <p>This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍</p>
          </Post>

          <Post color='cyan' date='Feb, 23 2022'>
            <p>This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍</p>
          </Post>

          <Post color='orange' date='Feb, 23 2022'>
            <p>This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍</p>
          </Post>
        </PostContainer>
        
      </Container>
    </Wrapper>
  );
}