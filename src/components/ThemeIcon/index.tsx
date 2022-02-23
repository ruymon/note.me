import { ThemeIconWrapper } from './styles';

import { FiMoon, FiSunset, FiSun } from 'react-icons/fi';

interface ThemeIconProps {
    theme: 'light' | 'hybrid' | 'dark';
}

const iconDictonary = {
    light: FiMoon,
    hybrid: FiSunset,
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