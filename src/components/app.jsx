import React, {Component} from "react";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";
import giphy from "giphy-api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gif_ids: [],
      selected_gif_id: "4Lyd8tJk410iI"
    };
  };

  search = (query) => {
    giphy("NQGW0aXG9eGdnMruyqdB4slm9YY9QyFI").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const id_list = []
      res.data.map(gif => {
        id_list.push(gif.id)
      })
      this.setState({
        gif_ids: id_list
      });
    });
  }

  updateGif = (gif_id) => {
    this.setState({
      selected_gif_id: gif_id
    });
  }

  render(){
    const ids = ["4Lyd8tJk410iI", "FaHOtxa23Tb4wtygMg"]
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selected_gif_id} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gif_list={this.state.gif_ids} updateGif={this.updateGif} />
        </div>
      </div>
    );
  }
}

export default App;
