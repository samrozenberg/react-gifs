import React, { Component } from "react";
import Gif from "./gif"
// import giphy from Giphy;
// var giphy = require('giphy')('put key here');

class GifList extends Component {


  renderList = () => {
    const gif_ids = this.props.gif_list
    return gif_ids.map(gif_id => {
      return <Gif id={gif_id} key={gif_id} updateGif={this.props.updateGif} />
    })
  }
  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
