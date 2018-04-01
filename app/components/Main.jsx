var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <div>
        <Navigation />
        <p>Main.jsx Rendered</p>
        {props.children}
      </div>
    </div>
  );
}

{/* You cannot return more than one root elements from render function.
  Therefore, wrapping all elements in a div and returning them will work. */}
module.exports = Main;
