import React, { Component } from "react";
import "./assets/stylesheets/scss/index.scss";
// import axios from "axios";
import Background from "./components/Background/Background";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {}
    };
  }

  // componentDidMount() {
  //   const randomNumber = Math.floor(Math.random() * 100) + 0;
  //   axios
  //     .get("https://picsum.photos/list")
  //     .then(response =>
  //       this.setState({
  //         image: response.data[randomNumber]
  //       })
  //     )
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    return <Background />;
  }
}

export default App;
