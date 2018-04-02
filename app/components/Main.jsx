var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

{/* You cannot return more than one root elements from render function.
  Therefore, wrapping all elements in a div and returning them will work. */}
module.exports = Main;
