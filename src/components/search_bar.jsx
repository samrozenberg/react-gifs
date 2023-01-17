import React, { Component } from "react";

class SearchBar extends Component {
  handleClick = (e) => {
    this.props.searchFunction(e.target.value);
  }
  render() {
    return (
      <div>
        <input type="text" className="form-search form-control" onChange ={this.handleClick}/>
      </div>
    );
  }
}

export default SearchBar;
