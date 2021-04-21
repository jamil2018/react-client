import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={AboutScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default App;
