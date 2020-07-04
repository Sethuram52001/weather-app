import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="weather_info">
        {this.props.city && this.props.country && (
          <p className="weather_key">
            Location: {this.props.city}, {this.props.country}
          </p>
        )}

        {this.props.temperature && (
          <p className="weather_value">Temperature: {this.props.temperature}</p>
        )}
        {this.props.humidity && (
          <p className="weather_value">Humidity: {this.props.humidity}</p>
        )}
        {this.props.description && (
          <p className="weather_value">Conditions: {this.props.description}</p>
        )}
        {this.props.error && (
          <p className="weather_error">{this.props.error}</p>
        )}
      </div>
    );
  }
}

export default Weather;
