import "./index.css";
import Helmet from "react-helmet";
import SignInPage from "./comp/SignInPage";
import SignUpPage from "./comp/SignUpPage";
import ChazyyMain from "./comp/ChazyyMain";
// eslint-disable-next-line no-unused-vars
import { UserProvider } from "./comp/context/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as theme from "./config/theme";
import Index from "./comp/Index";
import Profile from "./comp/molecule/Profile";
require('dotenv').config()

function App() {

  return (
    <Router>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <>
            <Helmet>
              <title>Chazyy | Demo</title>
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
      </UserProvider>
    </Router>
  );
}
export default App;
