import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={AboutScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </Router>
  );
};

export default App;
