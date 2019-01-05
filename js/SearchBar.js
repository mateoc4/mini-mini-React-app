import React from "react";

export default function SearchBar(props) {
  return (
    <div>
      <div>
        <input
          type="text"
          value={props.searchText}
          placeholder="Cats name"
          onChange={props.onInputChange}
        />
        <div>
          <input
            type="checkbox"
            checked={props.showOnlyLikeableCats}
            onChange={props.onCheckboxChange}
          />
          <label for="horns">Show cats that like kids</label>
        </div>
      </div>
    </div>
  );
}
