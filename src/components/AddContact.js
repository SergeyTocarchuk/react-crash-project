import React, { Component } from "react";

class AddContact extends Component {
  render() {
    return (
      <div className="">
        <form>
          <div>
            <label>Name</label>
            <input 
              type="text"
              name="name"
            />
          </div>
          <div>
            <label>e-mail</label>
            <input 
              type="text"
              name="email"
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;