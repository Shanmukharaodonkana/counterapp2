import { Component } from "react";
class App extends Component {
  state = { changeText: 0 };

  onincrease = () => {
    this.setState((perv) => ({ changeText: perv.changeText + 1 }));
  };

  ondecrease = () => {
    this.setState((perv) => ({ changeText: perv.changeText - 1 }));
  };

  render() {
    const { changeText } = this.state;
    return (
      <div>
        <h1>{changeText}</h1>

        <button onClick={this.onincrease} type="button">
          increase
        </button>

        <button onClick={this.ondecrease} type="button">
          decrease
        </button>
      </div>
    );
  }
}
export default App;
