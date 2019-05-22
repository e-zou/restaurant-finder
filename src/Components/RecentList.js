import React from "react";

export default class RecentList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        let restaurants = this.props.restaurants;
        return (
            <div>
            {/* <div className="filters">
                <p className="noMargin">Filters: </p>
                <button onClick={() => this.sortByPrice()}>Sort by Price</button>
                <button onClick={() => this.sortByRating()}>Sort by Rating</button>
            </div> */}
            <div className="restLayout">
                {restaurants.map(restaurant => (
                    // <li>{restaurant.name}</li>
                    <table className="restaurant">
                        <tbody>
                        {/* <tr>
                        <td><img alt="poster" width="200" src={restaurant.photo}/> {restaurant.photo} </td>
                        </tr> */}
                        <tr className="restaurantName">
                            <td key={restaurant.id}> {restaurant.name}</td>
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
