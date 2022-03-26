import { Route, Routes } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from 'styled-components';

import usePersistedState from './hooks/usePersistedState';

import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';

import { GlobalStyles } from './styles/global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';


// TODO Add Lint URGENT!

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  // Deve refatorar com o useCallback
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };


  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/:id" element={<Dashboard />} />
        {/* TODO 404 Page */}
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
