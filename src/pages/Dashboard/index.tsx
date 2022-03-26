import { Sidebar } from './../../components/Sidebar';
import { Container, Wrapper } from './styles'

import { Post } from './../../components/Post';
import { Header } from '../../components/Header';
import { Greeting } from '../../components/Greeting';
import { PostContainer } from '../../components/PostContainer';

import { postData } from './../../mocks/posts';


export function Dashboard() {
  const posts = postData.posts.sort((a, b) => b.date - a.date);

  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header />

        <Greeting name={'Ruy'} />

        <PostContainer> 
          { 
            posts.map((post: any) => <Post color={post.color} date={post.date}>{post.content}
            </Post>
            )
          }
        </PostContainer>
        
      </Container>
    </Wrapper>
  );
}