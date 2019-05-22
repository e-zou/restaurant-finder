import React from "react";
import axios from "axios";
import RecentList from "./RecentList.js";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class RecentRestaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants : [],
            query : ''
        }
        this.updateQuery = this.updateQuery.bind(this);
        this.submitQuery = this.submitQuery.bind(this);
    }

    // credit: https://stackoverflow.com/questions/5435228/sort-an-array-with-arrays-in-it-by-string
    // restaurants.sort(function(a, b) {
    //     return a.rating < b.rating ? 1 : -1;
    // })
    sortByPrice() {
        const restaurants  = this.state.restaurants; // make the variable equal to what state it's already in
        restaurants.sort(function(a, b) { // sort this variable
            return a.price >= b.price ? 1 : -1;
        })
        this.setState({restaurants : restaurants}); // make the state into variable
    }

    sortByRating() {
        const restaurants = this.state.restaurants;
        restaurants.sort(function(a, b) {
            return a.rating <= b.rating ? 1 : -1;
        })
        this.setState({restaurants});
    }

    componentDidMount() {
        // console.log(API_KEY);
        axios.get("https://cors-anywhere-hclaunch.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.029649,-78.476841&radius=5000&opennow&name=" + this.state.query + "&type=restaurant&key=" 
        + API_KEY)
        
        .then( res => {
            const data = res.data.results;
            // let restaurants = Array(20);
            // for (let i = 0; i < restaurants.length; i++) {
            //     restaurants[i] = {name: data[i].name, price: data[i].price_level, ratings: data[i].rating};
            // }

            // Same thing as above
            const restaurants = [];
            const names = data.map(r => r.name);
            const prices = data.map(r => r.price_level);
            const ratings = data.map(r => r.rating);
            // const photos = data.map(r => r.photos.photo_reference);
            for (let i = 0; i < data.length; i++) {
                restaurants.push({ name: names[i], price: prices[i], rating: ratings[i], 
                    // photo: photos[i]
                });
            }

            this.setState({restaurants: restaurants});

            console.log(res.data);
        })
        console.log("Success");

    }

    updateQuery = (input) => {
        this.setState({query : input})
    }

    submitQuery = event => {
        event.preventDefault();
        this.updateQuery(this.state.query);
        this.componentDidMount();
    }
    
    //  className="searchterm"  type="search" id="site-search" name="q"/>

    render() {
        return (
            <div>
                <div className="searchbar">
                    <input onChange={(e) => {this.updateQuery(e.target.value)}} value={this.state.query} placeholder="Search..."/> 
                    <button onClick={this.submitQuery} type="submit">Go</button>
                </div>
                <div className="filters">
                    <p className="noMargin">Filters: </p>
                    <button onClick={() => this.sortByPrice()}>Sort by Price</button>
                    <button onClick={() => this.sortByRating()}>Sort by Rating</button>
                </div>
                {/* make a prop called restaraunts that passes in the RecentRestaurant's state's restaurant */}
                {/* const restaurants = this.state.restaurants; */}
                {/* <RecentList restaurants={restaurants}/> */}
                {/* this.state.restaurant is already a const from above */}
                <RecentList restaurants={this.state.restaurants}/> 
            </div>
        );
    }
}
