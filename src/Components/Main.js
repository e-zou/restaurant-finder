import React from "react";
import axios from "axios";
import { Table } from 'antd';
import 'antd/dist/antd.css';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [], // with {name, price, ratings} as elements
        }
    }

    componentDidMount() {
        // console.log(API_KEY);
        axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.029649,-78.476841&radius=50000&opennow&type=restaurant&key=" 
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

            // credit: https://stackoverflow.com/questions/5435228/sort-an-array-with-arrays-in-it-by-string
            // restaurants.sort(function(a, b) {
            //     return a.rating < b.rating ? 1 : -1;
            // })

            this.setState({restaurants: restaurants});

            console.log(res.data);
        })
    }
    sortByPrice() {
        const { restaurants } = this.state;
        restaurants.sort(function(a, b) {
            return a.price >= b.price ? 1 : -1;
        })
        this.setState({restaurants});
    }
    sortByRating() {
        const { restaurants } = this.state;
        restaurants.sort(function(a, b) {
            return a.rating <= b.rating ? 1 : -1;
        })
        this.setState({restaurants});
    }

    // performSearch(searchTerm) {
    //     console.log("performing search");
    //     const results = search
    // }

    render() {
        return (
            <div>
            <div className="filters">
                <button onClick={() => this.sortByPrice()}>Sort by Price</button>
                <button onClick={() => this.sortByRating()}>Sort by Rating</button>
            </div>
            <div className="restLayout">
                {this.state.restaurants.map(restaurant => (
                    // <li>{restaurant.name}</li>
                    <table className="restaurant">
                        <tbody>
                        {/* <tr>
                        <td><img alt="poster" width="200" src={restaurant.photo}/> {restaurant.photo} </td>
                        </tr> */}
                        <tr className="restaurantName">
                            <td key={restaurant.id}> Name: {restaurant.name}</td>
                        </tr>
                        <tr>
                            <td key={restaurant.id}>Price: {restaurant.price}</td>
                        </tr>
                        <tr>
                            <td key={restaurant.id}>Rating: {restaurant.rating}</td>
                        </tr>
                        </tbody>
                    </table>
                ))}
            </div>
            </div>
        );
    }
}
// Google key: AIzaSyDcsKmAZkn5SaIDu0qaSSNesfk086dptr8
// Google Search needs key, input, inputtype
// Note: If you omit the fields parameter from a Find Place request, only the place_id for the result will be returned.
// ReactDOM.render(<Table />, mountNode);