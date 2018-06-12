//@flow

import React, { Component } from "react";
import preload from "../data";
import ShowCard from "./ShowCard";
//standard es6 method but flow doesnt really understand it unlike the state ={} which is in stage 2 proposal
// constructor(props) {
//   super(props);
//   this.state = {
//     searchTerm: " debug statement"
//   };
//   // this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
// }
//you can name preload anything just reference right
//stringify--hack to know the kinda props coming in
export default class Search extends Component {
  state = {
    searchTerm: ""
  };
  handleSearchTermChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>Masun</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
          {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
          {preload.shows
            .filter(
              show =>
                `${show.title}${show.year}${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
    );
  }
}
