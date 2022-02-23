import { GlobalStyles } from './styles/global'
import { Routes, Route } from "react-router-dom"

import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { ThemeProvider } from './contexts/ThemeContext';

// TODO Add Lint URGENT!

function App() {
  return (
    <ThemeProvider>
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
