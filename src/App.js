import { ThemeProvider } from "@mui/material";
import Protected from "./components/Protected";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme, darkTheme } from "./config/muiConfig";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./components/NotFound";
import Result from "./pages/home/pages/Result";
import NavBar from "./pages/home/components/NavBar";
import Problems from "./pages/home/pages/Problems";
import Private from "./components/Private";
import Registration from "./pages/home/pages/Registration";
import CreateProblem from "./pages/home/pages/CreateProblems";
import ViewSolved from "./pages/home/pages/ViewSolved";
import AllUser from "./pages/home/pages/AllUser";
import CreateAccount from "./pages/home/pages/CreateAccount";
import Profile from "./pages/home/pages/Profile";
// import React, { useLayoutEffect, useState } from "react";
// const Result = React.lazy(() => import("./pages/home/pages/Result"));
// const NotFound = React.lazy(() => import("./components/NotFound"));
function App() {
  const isDarkMood = useSelector((state) => state.themeMoodSlice.isDarkMood);
  const setIsNavBarSHow = useSelector(
    (state) => state.themeMoodSlice.isNavBarSHow
  );
  const isDark = localStorage.getItem("dm");
  //   const [loginUrl, setLoginUrl] = useState(null);
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  //   useLayoutEffect(() => {
  //     setLoginUrl(window.location.pathname);
  //     console.log(" from useEffect");
  //   });

  return (
    <>
      <ThemeProvider
        theme={isDarkMood | (isDark === "true") ? darkTheme : theme}
      >
        <BrowserRouter>
          {setIsNavBarSHow !== "/login" ? <NavBar /> : null}
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* Protected Routes */}
            <Route path="/" exact element={<Protected Pages={Home} />} />
            <Route path="/home" exact element={<Protected Pages={Home} />} />
            <Route
              path="/problems"
              exact
              element={<Protected Pages={Problems} />}
            />
            <Route
              path="/result"
              exact
              element={<Protected Pages={Result} />}
            />
            <Route path="/profile" element={<Protected Pages={Profile} />} />
            <Route path="*" element={<Protected Pages={NotFound} />} />

            {/* Private Routes */}
            <Route
              path="/Registration"
              element={<Private Pages={Registration} />}
            />
            <Route
              path="/CreateProblem"
              element={<Private Pages={CreateProblem} />}
            />
            <Route
              path="/ViewSolved"
              element={<Private Pages={ViewSolved} />}
            />
            <Route path="/AllUser" element={<Private Pages={AllUser} />} />
            <Route
              path="/CreateAccount"
              element={<Private Pages={CreateAccount} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
