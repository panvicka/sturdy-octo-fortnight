import React, { useEffect, useState } from "react";

export default function Images() {
  //const [myInterval, setMyInterval] = useState(null);
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1602172692383-22d396f155d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1602271801894-8be15af5d48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1602320574582-741740d4fcd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  ]);

  const [newImageURL, setnewImageURL] = useState("");

  // component mounting and unmounting
  useEffect(() => {
    console.log("image mounted");
    const interval = setInterval(() => console.log("hello every second"), 1000);

    return () => {
      console.log("image unmount");
      clearInterval(interval);
    };
  }, []);

  function ShowImage() {
    return images.map((image) => {
      console.log("img");
      return (
        <div className="p-2 w-1/3">
          <img src={image} />
        </div>
      );
    });
  }

  function handleAdd() {
    if (newImageURL != "") {
      setImages([...images, newImageURL]);
      setnewImageURL("");
    }
  }

  function handleText(event) {
    setnewImageURL(event.target.value);
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>

      <div className="flex">
        <input
          type="text"
          value={newImageURL}
          className="m-2 p-2 border-2 border-gray-600 rounded"
          onChange={handleText}
        />
        <button className={`m-2 p-2  white ${newImageURL != "" ? "bg-green-600 cursor-pointer" : "bg-green-100 cursor-not-allowed"}`} onClick={handleAdd}>
          Add new
        </button>
      </div>
    </section>
  );
}

/* export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
    };
  }
  render() {
    return (
      <div>
       
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        console.log("log every sec");
      }, 1000),
    });
  }

  componentWillUnmount() {
    console.log("component image unmount");
    clearInterval(this.state.interval);
  }
} */
