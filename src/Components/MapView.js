import React from "react";
import { Map, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import icon from "../images/marker.png";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default class MapView extends React.Component {



    render() {
        let restaurants = this.props.restaurants;
        // let coordinates = restaurants.map(r => r.coordinates);
        return (
            <div className="map">
                 <Map
                    style={{ height: "400px", width: "100%"}}
                    zoom={12}
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
                            <Marker
                                position={[restaurant["coordinates"]["lat"], restaurant["coordinates"]["lng"]]}
                            >
                                {/* offset={[-8, -2]} */}
                                <Tooltip direction="top" opacity={1}>
                                    <p>{restaurant["name"]}</p>
                                    <p>Price: {restaurant["price"]}</p>
                                    <p>Rating: {restaurant["rating"]}</p>
                                </Tooltip>
                            </Marker>
                        )
                    })
                    }
                </Map>
            </div>
        );
    }
}