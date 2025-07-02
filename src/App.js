import logo from './logo.svg';
import './App.css';
import StartMenu from './startmenu';
import ThemeSwitch from './themeswitch';
import { ThemeProvider } from './themeprovider';
import { useEffect, useState } from 'react';
import { useTheme } from "./themeprovider"
import MenuText from './menutext';
import QuizSelection from './menubuttons';
import AppSkeleton from './skeleton';

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

  const [leftContent, setLeftContent] = useState(() => MenuText)
  const [rightContent, setRightContent] = useState(() => QuizSelection)
  

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <ThemeSwitch />
      <AppSkeleton theme={theme} leftContent={leftContent} rightContent={rightContent}/>
    </div>
  );
}
