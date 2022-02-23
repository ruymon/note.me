import { ReactNode, HTMLAttributes } from "react";
import { Button } from "./styles"

import { colors } from './../../styles/colors'

interface LoginButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
  color: 'green' | 'red';
  disabled?: boolean; // This is not ideal cu'z I am extending the button props, but works.
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