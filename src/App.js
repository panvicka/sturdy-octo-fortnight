import React from "react";
import "./assets/css/style.css"

/* class App extends React.Component {
  constructor(props) {
      super(props); // call constructor of super class 
      this.state = {
          title: "hello 2 "
      }
  }

  render() {
    return <div>{this.state.title}</div>;
  }
} */

function App({ title }) {
  return (
    <div>
      <div className="box">
        Hello {title}
      </div>
    </div>
  );
}

export default App;
