import { I18nextProvider } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "./hooks/useCustomTheme";

import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";

import { GlobalStyles } from "./styles/global";

// TODO Add Lint URGENT!

function App() {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/app/:id' element={<Dashboard />} />
        {/* TODO 404 Page */}
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
