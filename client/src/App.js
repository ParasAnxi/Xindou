//** IMPORTS */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useMemo } from "react";
//** MUI */
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme/theme";
//** REDUX */
import { useSelector } from "react-redux";
//** COMPONENTS */
import Navbar from "scenes/bar/navbar/NavBar";
import Register from "scenes/auth/register/Register";

function App() {
  const mode = useSelector((state) => state.user.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme = {theme}>
          <CssBaseline/>
          <Routes>
            <Route path = "/" element = {<Navbar/>}/>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
