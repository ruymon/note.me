import { useTheme } from 'styled-components';

export function LogoIcon() {
  const currentTheme = useTheme();

  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 40H42" stroke="#FDBAA3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33 7C33.7956 6.20435 34.8748 5.75735 36 5.75735C36.5572 5.75735 37.1088 5.86709 37.6236 6.08031C38.1383 6.29352 38.606 6.60603 39 7C39.394 7.39396 39.7065 7.86167 39.9197 8.37641C40.1329 8.89115 40.2426 9.44284 40.2426 10C40.2426 10.5571 40.1329 11.1088 39.9197 11.6236C39.7065 12.1383 39.394 12.606 39 13L14 38L6 40L8 32L33 7Z" stroke={currentTheme.colors.primary.main} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}