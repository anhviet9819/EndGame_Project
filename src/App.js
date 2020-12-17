import "./App.css";
// import index from "./screens/index";
// import Gioithieu from "./screens/gioithieu/Gioithieu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Dangnhap from "./screens/dangnhap/Dangnhap";
import { Provider } from "react-redux";
import store from "./redux/store/configureStore";
import RootComp from "./RootComp";

function App() {
  return (
    <Provider store={store}>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={index} />
          <Route path="/dangnhap" exact component={Dangnhap} />
          <Route path="/quytrinh" exact component={Gioithieu} />
          <Route path="/lienhe" exact component={Gioithieu} />
          <Route path="/huongdansudung" exact component={Gioithieu} />
          <Route path="/thacmac" exact component={Gioithieu} />
        </Switch>
      </Router> */}
      <RootComp />
    </Provider>
  );
}

export default App;
