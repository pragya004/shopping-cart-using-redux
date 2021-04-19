import "./App.css";
import Menubar from "./Components/Menubar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Menubar />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
