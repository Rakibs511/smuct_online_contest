import { ThemeProvider } from "@mui/material";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {theme,darkTheme} from "./config/muiConfig";
import Home from "./pages/home";
import Login from "./pages/login";
function App() {
    
   const isDarkMood= useSelector((state)=>state.themeMoodSlice.isDarkMood);
    const isDark = localStorage.getItem("dm");
  return (
    <ThemeProvider theme={isDarkMood | isDark==='true'?darkTheme:theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
