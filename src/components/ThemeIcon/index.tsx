import { ThemeIconWrapper } from './styles';

import { FiMoon, FiSun } from 'react-icons/fi';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <ThemeIconWrapper onClick={toggleTheme} title={ t('app.themeToogle') }>
      <Icon />
    </ThemeIconWrapper>
  )
}