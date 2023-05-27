import React, { useState } from "react";

const Categories = ({ categories, filterItems }) => {
  const [track, setTrack] = useState(0);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        console.log(category);
        return (
          <button
            type="button"
            className={`${index === track ? "bg" : "filter-btn"}`}
            key={index}
            onClick={() => {
              filterItems(category);
              setTrack(index);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
