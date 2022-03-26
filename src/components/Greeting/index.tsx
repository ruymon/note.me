import { useTranslation } from "react-i18next";
import { Container } from "./styles";

interface GreetingProps {
  name: string;
}

export function Greeting({ name }: GreetingProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{ t('app.greeting')}, <strong>{ name }</strong>! 👋🏼</h1>
      <h2>{ t('app.subtitle') }</h2>
    </Container>
  )
}