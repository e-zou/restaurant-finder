import React from "react";


export default class Searchbar extends React.Component {

      render() {
        return (
        <div className="searchbar">
            <form>
            <input className="searchterm" placeholder="Search..." type="search" id="site-search" name="q"/>
            <button type="submit">Go</button>
            </form>
        </div>

        );
      }
}