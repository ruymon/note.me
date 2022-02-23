import styled from "styled-components";
import { colors } from "../../styles/colors";

interface PostStyleProps {
    color: string;
}

export const Container = styled.div<PostStyleProps>`
    background: ${(props) => props.color};

    width: 15rem;
    height: 15rem;
    
    border-radius: 0.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 80%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    p {
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
        line-height: 25px;
        color: ${colors.primary.midnight}
    }

    span {
        font-size: 0.8rem;
        font-weight: 500;
        color: ${colors.primary.midnight};
        opacity: 0.8;
    }
`;