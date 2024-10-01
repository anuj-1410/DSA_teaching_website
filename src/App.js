import Navbar from './components/Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <>
    <Navbar theme={[isDark, setIsDark]} />
    <Outlet context={[isDark, setIsDark]} />
    </>
  );
}
export default App;
