import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Fill in all fields");
      return;
    }
    this.props.handleAddContact(this.state);
    this.setState({
      name: '',
      email: '',
    })
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input 
              type="text"
              name="name"
              value={this.state.name}
              onChange={ (e) => {this.setState({name: e.target.value})} }
            />
          </div>
          <div>
            <label>e-mail</label>
            <input 
              type="text"
              name="email"
              value={this.state.email}
              onChange={ (e) => {this.setState({email: e.target.value})} }
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;