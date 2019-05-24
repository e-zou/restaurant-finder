import React from "react";

// const API_KEY = process.env.REACT_APP_API_KEY;

export default class RecentList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        // let changeColor = () => {
        //     document.getElementsByClassName('.leaflet-marker-icon').style.filter = "saturate(8);";
        // } 
        let restaurants = this.props.restaurants;
        
        
        // console.log(url);
        return (
            <div className="restLayout" >
                {restaurants.map(restaurant => (
                    // <li>{restaurant.name}</li>
                    <table className="restaurant">
                        <tbody>
                        <tr className="restaurantName">
                            <td key={restaurant.id}> {restaurant.name}</td>
                        </tr>
                        <tr>
                            <td key={restaurant.id}><img width="100%" height="100px"alt="restaraunt" src={restaurant.photo_ref}/></td>
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
        );
    }
}
