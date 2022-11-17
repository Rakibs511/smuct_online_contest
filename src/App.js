import { ThemeProvider } from "@mui/material";
import Protected from "./components/Protected";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {theme,darkTheme} from "./config/muiConfig";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./components/NotFound";
function App() {
    
   const isDarkMood= useSelector((state)=>state.themeMoodSlice.isDarkMood);
    const isDark = localStorage.getItem("dm");
  return (
    <ThemeProvider theme={isDarkMood | isDark==='true'?darkTheme:theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

          {/* Protected Routes */}
          <Route path="/" element={<Protected Pages={Home} />} />
          <Route path="/home" element={<Protected Pages={Home} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
