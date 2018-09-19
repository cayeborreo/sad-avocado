import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const options = {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit"
    };
    let greeting = "";
    let reminder = "";
    const hourPeriod = new Date().getHours();
    if (hourPeriod < 12 && hourPeriod > 6) {
      greeting = "morning";
      reminder = "Let's have a productive day ahead.";
    } else if (hourPeriod >= 12 && hourPeriod < 18) {
      greeting = "afternoon";
      reminder = "Let's get these tasks done.";
    } else if (hourPeriod >= 18) {
      greeting = "evening";
      reminder = "Let's chill a bit before doing the extra mile.";
    } else {
      greeting = "day";
      reminder = "Shouldn't you be asleep?";
    }

    return (
      <div className="columns">
        <div className="column is-fullwidth">
          <div className="clock is-size-1">Good {greeting}, Caye.</div>
          <div className="h1 is-size-6">{reminder}</div>
          <div className="clock has-text-weight-bold">
            {this.state.date.toLocaleTimeString("en-US", options)}
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
