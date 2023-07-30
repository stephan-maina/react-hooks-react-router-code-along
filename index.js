import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <div>
            <h1>Home</h1>
            <p>The count is {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        </Route>
        <Route path="/about" exact={true}>
          <div>
            <h1>About</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
