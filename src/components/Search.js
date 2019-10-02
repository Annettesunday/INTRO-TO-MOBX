import React from "react";

class Search extends React.Component {
  state = {
    searchText: ""
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("I wanna search for something");
  };
  render() {
    return (
      <div className="ui form" style={{ margin: "10px" }}>
        <div className="field">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
