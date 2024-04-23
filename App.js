import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

// React.createElement =>reactElement - JS Object => html Element (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to the app"
);

//JSX => React.createElement =>reactElement - JS Object => html Element (render)

const Title = () => {
  return (
    <h1 className="head" tabIndex={1}>
      heading using jsx
    </h1>
  );
};

const Headingcomponet = () => (
  <div>
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">heading componet using function component</h1>
  </div>
);

const elemrnt = (
  <div>
    <h1>hello</h1>
    {Headingcomponet()}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elemrnt);
