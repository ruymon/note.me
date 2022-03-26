import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { Container, Content } from "./styles";

interface PostProps {
  color: "yellow" | "orange" | "lilac" | "green" | "cyan";
  children: ReactNode;
  date: string;
}

export function Post(props: PostProps) {
  const currentTheme = useTheme();

  const postColorDictionary = {
    yellow: currentTheme.colors.post.opaqueLightYellow,
    orange: currentTheme.colors.post.opaqueRedOrange,
    lilac: currentTheme.colors.post.opaqueLilac,
    green: currentTheme.colors.post.opaqueGreenCyan,
    cyan: currentTheme.colors.post.opaqueLightCyan,
  };

  return (
    <Container color={postColorDictionary[props.color]}>
      <Content>
        {props.children}
        <span>{props.date}</span>
      </Content>
    </Container>
  );
}
