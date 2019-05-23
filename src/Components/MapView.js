import React from "react";
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default class MapView extends React.Component {

    render() {
        let restaurants = this.props.restaurants;
        // let coordinates = restaurants.map(r => r.coordinates);
        return (
            <div className="map">
                 <Map
                    style={{ height: "400px", width: "100%", top: "0"}}
                    zoom={12}
                    // center={[x, y]}
                    center={[38.0401, -78.4850]}
                    >
        
                    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {/* {coordinates.map(coordinate => {
                        // let lats = coordinate.lat;
                        // let lngs = coordinate.lng;
                        console.log(coordinate.lat);
                        return (
                            // beware of how you call things in CircleMarker vs. regular html tags
                            <CircleMarker
                                center={[coordinate["lat"], coordinate["lng"]]}
                            />)
                    })
                    } */}
                    {restaurants.map(restaurant => {
                        console.log(restaurant);
                        return (
                            // beware of how you call things in CircleMarker vs. regular html tags
                            <CircleMarker
                                center={[restaurant["coordinates"]["lat"], restaurant["coordinates"]["lng"]]}
                            >
                                {/* offset={[-8, -2]} */}
                                <Tooltip direction="top" opacity={1}>
                                    <p>{restaurant["name"]}</p>
                                    <p>Price: {restaurant["price"]}</p>
                                    <p>Rating: {restaurant["rating"]}</p>
                                </Tooltip>
                            </CircleMarker>
                        )
                    })
                    }
                </Map>
            </div>
        );
    }
}