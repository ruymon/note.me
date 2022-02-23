import { Container } from "./styles";

interface GreetingProps {
  name: string;
}

export function Greeting({ name }: GreetingProps) {
  return (
    <Container>
      <h1>Hello, <strong>{ name }</strong>! 👋🏼</h1>
      <h2>All your notes are here, in one place!</h2>
    </Container>
  )
}