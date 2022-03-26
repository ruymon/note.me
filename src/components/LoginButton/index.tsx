import { ReactNode, HTMLAttributes } from "react";
import { useTheme } from "styled-components";
import { Button } from "./styles"

interface LoginButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
  color: 'green' | 'red';
  disabled?: boolean; // This is not ideal cu'z I am extending the button props, but works.
}

export function LoginButton(props: LoginButtonProps) {
  const currentTheme = useTheme();
  const colorDictionary: any = {
    green: [currentTheme.colors.semantic.green, currentTheme.colors.semantic.opaqueGreen],
    red: [currentTheme.colors.semantic.red, currentTheme.colors.semantic.opaqueRed],
  }

  return (
    <Button {...props} color={colorDictionary[props.color]}>
      {props.children}
      <span>{props.text}</span>
    </Button>
  );
}