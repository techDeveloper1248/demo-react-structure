import React from "react";
import App from "../App";
import HomePage from "../components/Home";
import Advertise from "../components/Advertise";
import AccountDetails from "../components/AccountDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const type = null;
  const manageRedirect = (type, props) => {
    const { pathname } = props.location;

    if (type) {
      if (type === "user" && pathname.includes("agent")) {
        return <Redirect to="/user-dashboard" />;
      } else if (type === "agent" && pathname.includes("user")) {
        return <Redirect to="/agent-dashboard" />;
      } else {
        return <Component {...props} />;
      }
    }
    return <Redirect to="/" />;
  };

  return <Route {...rest} render={props => manageRedirect(type, props)} />;
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const type = null;

  return (
    <Route
      {...rest}
      render={props =>
        type && restricted ? (
          <Redirect
            to={`${type === "user" ? "/user-dashboard" : "/agent-dashboard"}`}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={true} component={App} path="/" exact />

        <PublicRoute
          restricted={true}
          component={HomePage}
          path="/user/homePage"
          exact
        />

        <PublicRoute
          restricted={true}
          component={Advertise}
          path="/advertise"
          exact
        />

        <PublicRoute
          restricted={true}
          component={AccountDetails}
          path="/AccountDetails"
          exact
        />
        {/* <PublicRoute restricted={ true } component={ UserSignUp }  path="/users/signup" exact />
        <PublicRoute restricted={ true } component={ AgentSignUp }  path="/agents/signup" exact />
        <PublicRoute restricted={ true } component={ AgentSignIn }  path="/agents/signin" exact />
        <PublicRoute restricted={ true } component={ UserSignIn }  path="/users/signin" exact />
        <PrivateRoute component={ ChatList } path="/chats" exact />
        <PrivateRoute component={ Chat } path="/chats/:id" exact />
        <PrivateRoute component={ Chat } path="/chats/new" exact />
        <PrivateRoute component={ AgentProfile } path="/agents/profile" exact />
        <PrivateRoute component={ Home } path="/user-dashboard/" exact />
        <PrivateRoute component={ OnBoarding } path="/user-dashboard/onboarding" exact />
        <PrivateRoute component={ UserHouseDetails } path="/user-dashboard/houses" exact />
        <PrivateRoute component={ HouseImage } path="/user-dashboard/houses/:id/houseImages" exact />
        <PrivateRoute component={ OnBoardingCompletion } path="/user-dashboard/onboarding/finalize" exact />
        <PrivateRoute component={ CombinedEstimate } path="/user-dashboard/combined-estimate" exact />
        <PrivateRoute component={ GuessEstimatesList } path="/user-dashboard/guess-estimates" exact />
        <PrivateRoute component={ GuessEstimateDetails } path="/user-dashboard/guess-estimates/:id" exact />
        <PrivateRoute component={ AgentHome } path="/agent-dashboard" exact />
        <PrivateRoute component={ HousesList } path="/agent-dashboard/houses" exact />
        <PrivateRoute component={ HouseDetails } path="/agent-dashboard/houses/:id" exact /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
