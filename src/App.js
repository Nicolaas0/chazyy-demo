import "./index.css";
import Helmet from "react-helmet";
import SignInPage from "./comp/SignInPage";
import SignUpPage from "./comp/SignUpPage";
import ChazyyMain from './comp/ChazyyMain';
import { AuthProvider } from "./comp/context/AuthContext";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import logo from './assest/logo.png'
// import Profile from './comp/Profile';
// import Loading from './comp/Loading';

function App() {
  // SignIn();

  return (
    <Router>
      <AuthProvider>
        <>
          <Helmet>
            <title>Chazyy | Demo</title>
            {/* <link rel="icon" type="image/png" href={logo} /> */}
          </Helmet>
          <Switch>
            <Route exact path="/" component={ChazyyMain}/>
            <Route path="/SignIn" component={SignInPage}/>
            <Route path="/SignUp" component={SignUpPage}/>
          </Switch>
        </>
      </AuthProvider>
    </Router>
  );
}
export default App;
