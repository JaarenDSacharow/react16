
//all this does is return its children; use this to avoiud needing to wrap adjacent
// JSX elements in a div tag.  see Main/Main.js's return statement.

const aux = (props) => props.children;

export default aux;