import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Authors and Books</h1>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
