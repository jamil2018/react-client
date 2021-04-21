import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import theme from "./theme/applicationTheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/about" component={AboutScreen} />
          <Route exact path="/" component={HomeScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
