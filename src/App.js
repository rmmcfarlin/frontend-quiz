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
import Quiz from './quiz';

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

  const [content, setContent] = useState(() => StartMenu)
  const [quizName, setQuizName] = useState(null) 
  
  const handleQuizSelect = (name) => {
    console.log(name)
  setQuizName(name);
}; 

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <ThemeSwitch />
      <AppSkeleton theme={theme} content={content}>
        {quizName ? (
          <Quiz theme={theme} title={quizName} />
        ) : (
         <StartMenu theme={theme} onSelect={handleQuizSelect} />
        )}
        </AppSkeleton>
    </div>
  );
}
