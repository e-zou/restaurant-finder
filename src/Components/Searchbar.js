import React from "react";

export default class Searchbar extends React.Component {
    constructor() {
        super();
    }
    
      render() {
        return 
        <div>
            <label for="site-search">Search the site:</label>
            <input type="search" id="site-search" name="q" aria-label="Search through site content"/>
            <button>Search</button>
        </div>;
      }
}