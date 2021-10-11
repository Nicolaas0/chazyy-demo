import "./index.css";
import Helmet from "react-helmet";
import SignInPage from "./comp/SignInPage";
import SignUpPage from "./comp/SignUpPage";
import ChazyyMain from "./comp/ChazyyMain";
// eslint-disable-next-line no-unused-vars
import { AuthProvider, useAuth } from "./comp/context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { ThemeProvider } from "styled-components";
import * as theme from "./config/theme";
import Index from "./comp/Index";
import Profile from "./comp/molecule/Profile";
// import logo from './assest/logo.png'
// import Profile from './comp/Profile';
// import Loading from './comp/Loading';

function App() {
  // SignIn();

  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <>
            <Helmet>
              <title>Chazyy | Demo</title>
              {/* <link rel="icon" type="image/png" href={logo} /> */}
            </Helmet>
            <Switch>
              <Route exact path="/Chazyy/" component={ChazyyMain} />
              <PrivateRoute exact path="/private" component={ChazyyMain} />
              <Route path="/SignIn" component={SignInPage} />
              <Route path="/SignUp" component={SignUpPage} />
              <Route exact path="/" component={Index} />
              <Route path="/Chazyy/Profile/" component={Profile} />
            </Switch>
          </>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}
export default App;
