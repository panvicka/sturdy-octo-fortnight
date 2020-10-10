import React, { useEffect, useState, useRef } from "react";
import Images from "./components/Images";
import "./assets/css/style.css";

/* class App extends React.Component {
  constructor(props) {
    super(props); // call constructor of super class

    //states are immnutable
    this.state = {
      title: "hello 2 ",
      isShowing: false,
    };

    console.log("component constructor");

  }


  componentDidMount() {
    console.log("component mount");
    this.setState({title: "hello 3"});
  }

  componentDidUpdate() {
    console.log("component updated");


  }



  render() {
    console.log("component render");

    return (
      <section className="flex justify-center border">
        <div className="w-1/2 text-center">
          <div className="my-4">
            {this.state.title}
            <div>
              <button className="p-1 bg-blue-700 text-white my-2" onClick={() => this.setState({isShowing:!this.state.isShowing})}>
                Togle Image
              </button>
              {this.state.isShowing ? (
               <Images />
              ) : null
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
} */

function App() {
  const [title, setTitle] = useState("title");
  const [isShowing, setIsShowing] = useState(null);

  const mountRef = useRef(false);

  // component mounting only
  useEffect(() => {
    console.log("app mounted");
  }, []);

  //component update only
  useEffect(() => {
    if (mountRef.current) {
      console.log("app updated");
    } else {
      mountRef.current = true;
    }
  }, [isShowing]);

  return (
    <section className="flex justify-center border">
      {console.log("app rendered")}
      <div className="w-10/12 text-center">
        <div className="my-4">
          {title}
          <div>
            <button
              className="p-1 bg-blue-700 text-white my-2"
              onClick={() => setIsShowing(!isShowing)}
            >
              Togle Image
            </button>
            {isShowing ? <Images /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
