import React, { useEffect, AsyncStorage } from "react";
import "./App.css";
import index from "./screens/index";
import Gioithieu from "./screens/gioithieu/Gioithieu";
import Dangnhap from "./screens/dangnhap/Dangnhap";
import Quytrinh from "./screens/quytrinh/Quytrinh";
import Lienhe from "./screens/lienhe/Lienhe";
import Thacmac from "./screens/thacmac/Thacmac";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gvActions } from "./redux/actions";

function RootComp(props) {
  useEffect(() => {
    //props.dispatch({ type: gvActions.PENDING });
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log("Restoring token failed", e);
      }

      //   After restoring token, we may need to validate it in production apps

      //   This will switch to the App screen or Auth screen and this loading
      //   screen will be unmounted and thrown away.

      //   props.dispatch({
      //     type: gvActions.SUCCESSFUL_USERTOKEN,
      //     payload: userToken,
      //   });
    };

    bootstrapAsync();
  }, []);

  useEffect(() => {
    console.log("ut", props.userToken);
  }, [props.userToken]);

  //   if (props.loading) {
  //     return <Loading size="large" />;
  //   }
  return props.userToken == null || props.userToken === "a-way-out" ? (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={index} />
          <Route path="/gioithieu" exact component={Gioithieu} />
          <Route path="/dangnhap" exact component={Dangnhap} />
          <Route path="/quytrinh" exact component={Quytrinh} />
          <Route path="/lienhe" exact component={Lienhe} />
          <Route path="/" exact component={index} />
          <Route path="/thacmac" exact component={Thacmac} />
        </Switch>
      </Router>
    </>
  ) : (
    <Router>
      <Switch>
        <Route path="/" exact component={index} />
      </Switch>
    </Router>
  );
}

export default RootComp;
