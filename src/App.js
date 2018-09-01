import React, { Component } from "react";
import "./assets/stylesheets/scss/index.scss";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
  }

  componentWillMount() {
    axios
      .get("https://picsum.photos/list")
      .then(response => {
        getRandomIntInclusive = (min, max) => {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
        };

        console.log(getRandomIntInclusive(100));
        this.setState({
          image: response.data[getRandomIntInclusive(100)]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // randomizer = () => {
  //   return Math.random();
  // };

  render() {
    return (
      <React.Fragment>
        <img
          src={`http://picsum.photos/${this.state.image.width}/${
            this.state.image.height
          }?image=${this.state.image.id}`}
        />
      </React.Fragment>
    );
  }
}

export default App;
