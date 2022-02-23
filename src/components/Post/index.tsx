import { ReactNode } from "react";
import { Container, Content } from "./styles";

import { colors } from '../../styles/colors';

interface PostProps {
    color: 'yellow' | 'orange' | 'lilac' | 'green' | 'cyan';
    children: ReactNode;
    date: string;
}

const postColorDictionary = {
    'yellow': colors.post.opaqueLightYellow,
    'orange': colors.post.opaqueRedOrange,
    'lilac': colors.post.opaqueLilac,
    'green': colors.post.opaqueGreenCyan,
    'cyan': colors.post.opaqueLightCyan,
};

export function Post(props: PostProps) {
    return(
        <Container color={postColorDictionary[props.color]}>
            <Content>
                {props.children}
                <span>{props.date}</span>
            </Content>
        </Container>
    )
}