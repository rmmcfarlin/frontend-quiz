import logo from './logo.svg';
import './App.css';
import StartMenu from './startmenu';
import ThemeSwitch from './themeswitch';
import { ThemeProvider } from './themeprovider';
import { useEffect } from 'react';
import { useTheme } from "./themeprovider"

function App() {

  return (
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
   );
}

export default App;


function AppWithTheme() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <ThemeSwitch />
      <StartMenu theme={theme}/>
    </div>
  );
}
