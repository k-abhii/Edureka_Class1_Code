
import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

// simple rendering of react element without jsx
root.render(React.createElement('h1',null,'welcome to react js training without jsx'))
// simple rendering  with attribute without jsx
root.render(React.createElement('h1', { greet: "hello", title: "title1" },'welcome to react js training without jsx'))

const user = "david";

// simple rendering with template string without attribute without jsx
root.render(React.createElement('h1',null,`welcome to react js training day2 ${user}`))

// multiple rendering of react element without jsx
const title1 = React.createElement('h1', null, `title1`)
const title2 = React.createElement('h1', null, `title2`)
const parentElement = React.createElement('div', null, [title1, title2])
root.render(parentElement);


root.render(<h1>welcome to react js training day1 with jsx</h1>)

// multiple element rendering with jsx
root.render(
    <div>
        <h1>Welcome to day1 training in react with jsx </h1>
        <h1>Welcome to day1 training in react with jsx </h1>
</div>);
// multiple element rendering with jsx adding variable
const name ="david";

root.render(
    <div>
        <h1>Welcome to day1 training in react with jsx {name} </h1>
        <h1>Welcome to day1 training in react with jsx </h1>
</div>);

