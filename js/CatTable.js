  import React from "react";

import CatsList from "./CatsList";
import SearchBar from "./SearchBar";

export default class CatTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: [
        { category: "male", age: "4", likesKids: true, name: "Fidel Catstro" },
        { category: "male", age: "9", likesKids: true, name: "Hairy Potter" },
        { category: "male", age: "2", likesKids: false, name: "Grumpy" },
        { category: "female", age: "1", likesKids: true, name: "Jude Paw" },
        { category: "female", age: "2", likesKids: false, name: "Lucifurr" },
        { category: "female", age: "3", likesKids: true, name: "Meowly Cyrus" }
      ],
      searchText: "",
      showOnlyLikeableCats: false
    };
  }

  render() {
    const filteredCats = this.state.cats
      .filter(cat => cat.name.toLowerCase().includes(this.state.searchText))
      .filter(cat => {
        if (this.state.showOnlyLikeableCats) {
          return cat.likesKids;
        } else {
          return true;
        }
      });

    const kocury = filteredCats.filter(cat => cat.category === "male");
    const kotki = filteredCats.filter(cat => cat.category === "female");

    console.log(this.state.showOnlyLikeableCats);
    return (
      <div>
        <h1>Cat table</h1>
        <SearchBar
          onInputChange={this.handleInputChange}
          searchText={this.state.searchText}
          onCheckboxChange={this.handleCheckboxChange}
          showOnlyLikeableCats={this.state.showOnlyLikeableCats}
        />
        <CatsList cats={kocury} title="male" />
        <CatsList cats={kotki} title="female" />
      </div>
    );
  }

  handleInputChange = event => {
    this.setState({ searchText: event.target.value.toLowerCase() });
  };

  handleCheckboxChange = event => {
    this.setState({ showOnlyLikeableCats: event.target.checked });
  };
}
