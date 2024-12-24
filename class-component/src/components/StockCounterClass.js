import React, { Component } from "react";

export default class StockCounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      quantity: 0,
      status: "",
    };
  }

  componentDidMount() {
    this.setState({ status: "Stock Counter Loaded." });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Prevent re-render if price and quantity haven't changed
    if (
      nextState.price === this.state.price &&
      nextState.quantity === this.state.quantity
    ) {
      return false; // Don't re-render
    }
    return true; // Re-render if there's a change
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.price !== this.state.price ||
      prevState.quantity !== this.state.quantity
    ) {
      this.setState({
        status: `Price or Quantity changed: Price = $${this.state.price}, Quantity = ${this.state.quantity}`,
      });
    }
  }

  componentWillUnmount() {
    this.setState({ status: "Stock Counter Unloaded." });
  }

  render() {
    const { price, quantity, status } = this.state;
    const email = process.env.REACT_APP_EMAIL;
    const website = process.env.REACT_APP_WEBSITE;

    return (
      <div className="counter">
        <h1>Stock Counter (Class-based)</h1>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>MCX:</strong> {website}
        </p>
        <h2>Price: ${price}</h2>
        <h2>Quantity: {quantity}</h2>
        <button onClick={() => this.setState({ price: price + 1 })}>
          Increase Price
        </button>
        <button onClick={() => this.setState({ price: price - 1 })}>
          Decrease Price
        </button>
        <br />
        <button onClick={() => this.setState({ quantity: quantity + 1 })}>
          Increase Quantity
        </button>
        <button onClick={() => this.setState({ quantity: quantity - 1 })}>
          Decrease Quantity
        </button>

        {/* Display the status of the component */}
        <div className="status">
          <p>{status}</p>
        </div>
      </div>
    );
  }
}
