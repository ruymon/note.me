import { ReactNode } from "react";
import { useTheme } from "styled-components";

import { formatTimestamp } from "../../utils/formatTimestamp";

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

  const formatedTime = formatTimestamp(props.date);

  return (
    <Container color={postColorDictionary[props.color]}>
      <Content>
        <p>{props.children}</p>
        <span>{formatedTime}</span>
      </Content>
    </Container>
  );
}
