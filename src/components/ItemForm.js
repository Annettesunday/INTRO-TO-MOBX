import React from "react";
import { inject } from "mobx-react";
import Button from "./Button";

@inject("store")
class ItemForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    const { text } = this.state;
    const { store } = this.props;
    event.preventDefault();
    store.addItem(text);

    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <div className=" ui form">
        <div className="field">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default ItemForm;
