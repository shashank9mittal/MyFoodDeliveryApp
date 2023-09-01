import React from "react";

class Contact extends React.Component {
  constructor(props) {
    console.log("component Constructor");

    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("component Mounted");
  }
  render() {
    const { propText } = this.props;
    const { count } = this.state;
    console.log("Render");

    const updateCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <div>
        <h1>Count: {count}</h1>
        <button type='button' className='' onClick={updateCount}>
          Button
        </button>
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button> */}
        <h1>This is Contact Component written in Class</h1>
        <h1>I come from Props {propText}</h1>
      </div>
    );
  }
}

export default Contact;
