import React from "react";
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props); // call constructor of super class

    //states are immnutable
    this.state = {
      title: "hello 2 ",
      isShowing: false,
    };
  }

  render() {
    return (
      <section className="flex justify-center border">
        <div className="w-1/2 text-center">
          <div className="my-4">
            {this.state.title}
            <div>
              <button className="p-1 bg-blue-700 text-white my-2" onClick={() => this.setState({isShowing:true})}>
                Togle Image
              </button>
              {this.state.isShowing ? (
                <img src="https://images.unsplash.com/photo-1602172692383-22d396f155d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
              ) : null
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/* function App({ title }) {
  return (
    <div>
      <div class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Hello asdasd {title}
      </div>
    </div>
  );
} */

export default App;
