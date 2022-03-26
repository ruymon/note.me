import { ThemeIconWrapper } from './styles';

import { FiMoon, FiSun } from 'react-icons/fi';
import { useCustomTheme } from '../../hooks/useCustomTheme';

interface IconDictonaryTypes {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}

const iconDictonary: IconDictonaryTypes = {
    light: FiMoon,
    dark: FiSun,
}

export function ThemeIcon() {
  const { toggleTheme, theme } = useCustomTheme();
  const Icon = iconDictonary[theme.title];

  return (
    <ThemeIconWrapper onClick={toggleTheme}>
      <Icon />
    </ThemeIconWrapper>
  )
}