import { ThemeIconWrapper } from './styles';

import { FiMoon, FiSun } from 'react-icons/fi';

interface ThemeIconProps {
    theme: 'light' | 'dark';
}

const iconDictonary = {
    light: FiMoon,
    dark: FiSun,
}

export function ThemeIcon({ theme }: ThemeIconProps) {
  const Icon = iconDictonary[theme];

  return (
    <ThemeIconWrapper>
      <Icon />
    </ThemeIconWrapper>
  )
}