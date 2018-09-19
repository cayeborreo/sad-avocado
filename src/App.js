import React from "react";
import "./assets/stylesheets/scss/index.scss";
import axios from "axios";
import Background from "./components/Background/Background";
import Content from "./components/UIKit/Content";
import Quotes from "./components/Background/Quotes";
import Clock from "./components/Clock/Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      imageLoaded: false,
      randomNumber: Math.floor(Math.random() * Math.floor(326))
    };
    this.ironImageHd = null;

    this.handleImageLoader = this.handleImageLoader.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes/1")
      .then(response => {
        this.setState({
          quote: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleImageLoader = () => {
    console.log("Image is loaded!");
    this.setState({
      imageLoaded: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <Background
          handleImageLoader={this.handleImageLoader}
          randomNumber={this.state.randomNumber}
          imageLoaded={this.state.imageLoaded}
        />
        <div
          // className={
          //   this.state.imageLoaded
          //     ? "background-loaded background-fade-in"
          //     : "background-loaded"
          // }
          className="background-loaded background-fade-in"
        >
          <Content>
            <Clock />
            {this.state.quote.length !== 0 ? (
              <Quotes quote={this.state.quote} />
            ) : (
              ""
            )}
          </Content>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
