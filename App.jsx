import React from "react";
import ReactDOM from "react-dom/client";

// 1) JSX Element
const jsxHeading = ( <h2 className = "heading" > 
Jsx Heading 
</h2>)

// 2) React Element
const heading = React.createElement('h1', {}, "Hello from heading");

// 3)Functional Component
const TitleComponent = ()=>{
    return <h1>Its a title functoinal component</h1>
}

const number = 1000;

// 4)Functional Component
const HeadingComponent = ()=>( <div className="container">
    {heading}
    <TitleComponent/>
    <h1>{number} {500+200} Its a heading functoinal component</h1>
</div>)

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(jsxHeading);
root.render(heading);
root.render(<HeadingComponent/>);
