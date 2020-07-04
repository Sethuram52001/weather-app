import React from "react";

class Forms extends React.Component {
  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City"></input>
          <input type="text" name="country" placeholder="Country"></input>
          <button className="formContainer_button">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Forms;
