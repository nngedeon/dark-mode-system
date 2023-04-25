// import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import CardFile from "./components/CardFile";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const useTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    },
  });
  const changeMode = ()=>{
    setDarkMode(!darkMode)
    
  }
  return (
    <div>
      <ThemeProvider theme={useTheme}>
        <CssBaseline />
        <NavBar changeMode={changeMode}/>
        <CardFile />
      </ThemeProvider>
    </div>
  );
};
export default App;
