import React from "react";
import ReactDOM from "react-dom/client";

// create a nested header element using React.createElement(h1,h2,h3 inside a div with class "title")

// const heading = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "Namaste React1"),
//   React.createElement("h2", {}, "Namaste React2"),
//   React.createElement("h3", {}, "Namaste React3"),
// ]);

// create a same element using jsx

// const heading = (
//   <div>
//     <h1>Namaste React1</h1>
//     <h2>Namaste React2</h2>
//     <h3>Namaste React3</h3>
//   </div>
// );

// create a functional component of the same with jsx
// always component name should be capital letter
// we can define functional component in a two ways both are valid
// 1st  way is defining functional component

// pass attributes into the tag in jsx
// Ex:-
let xyz = 10;

// Composition of Component(Add a component inside another)
// Ex:-
const Head = () => {
  return <h1>Composition of Component</h1>;
};

const HeaderComponent = () => {
  return (
    <div>
      {xyz}
      <Head />
      <h1>Namaste React1</h1>
      <h2>Namaste React2</h2>
      <h3>Namaste React3</h3>
    </div>
  );
};

// 2nd  way is defining functional component
// const HeaderComponent2 = () => (
//   <div>
//     <h1>Namaste React1</h1>
//     <h2>Namaste React2</h2>
//     <h3>Namaste React3</h3>
//   </div>
// );

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
