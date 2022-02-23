import { GlobalStyles } from './styles/global'
import { Routes, Route } from "react-router-dom"

import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/:id" element={<Dashboard />} />
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
