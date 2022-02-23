import { ReactNode } from "react";
import { Button } from "./styles"

import { colors } from './../../styles/colors'

interface LoginButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
  color: 'green' | 'red';
}

// TODO Remove this any... PLEASE!
const colorDictionary: any = {
  green: [colors.semantic.green, colors.semantic.opaqueGreen],
  red: [colors.semantic.red, colors.semantic.opaqueRed],
}

export function LoginButton(props: LoginButtonProps) {
  return (
    <Button {...props} color={colorDictionary[props.color]}>
      {props.children}
      <span>{props.text}</span>
    </Button>
  );
}