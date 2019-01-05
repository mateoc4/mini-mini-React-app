import React from "react";

import CatRow from "./CatRow";

export default class CatsList extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.cats.map(cat => (
            <CatRow cat={cat} />
          ))}
        </ul>
      </div>
    );
  }
}
