import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Expandable from "./Expandable/Expandable";

const App = () => (
  <div>
    <Expandable initialHeight={70}>
      <h2>
        Well well... <small>Click me</small>
      </h2>
      <button>expand</button>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
    </Expandable>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
