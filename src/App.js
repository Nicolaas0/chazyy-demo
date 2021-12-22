import "./index.css";
import Helmet from "react-helmet";
import SignInPage from "./comp/SignInPage";
import SignUpPage from "./comp/SignUpPage";
import ChazyyMain from "./comp/ChazyyMain";
// eslint-disable-next-line no-unused-vars
import { AuthProvider, useAuth } from "./comp/context/AuthContext";
import { ActivityProvider } from "./comp/context/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as theme from "./config/theme";
import Index from "./comp/Index";
import Profile from "./comp/molecule/Profile";
require('dotenv').config()
// import logo from './assest/logo.png'
// import Profile from './comp/Profile';
// import Loading from './comp/Loading';

function App() {
  // SignIn();

  return (
    <Router>
      <AuthProvider>
        <ActivityProvider>
          <ThemeProvider theme={theme}>
            <>
              <Helmet>
                <title>Chazyy | Demo</title>
                {/* <link rel="icon" type="image/png" href={logo} /> */}
              </Helmet>
              <Switch>
                <Route exact path="/app" component={ChazyyMain} />
                <Route exact path="/signin" component={SignInPage} />
                <Route exact path="/signUp" component={SignUpPage} />
                <Route exact path="/" component={Index} />
                <Route path="/app/profile" component={Profile} />
              </Switch>
            </>
          </ThemeProvider>
        </ActivityProvider>
      </AuthProvider>
    </Router>
  );
}
export default App;
