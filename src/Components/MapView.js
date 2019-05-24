import React from "react";
import { Map, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import icon from "../images/marker.png";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({ // Gets proper URL for markers to appear
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default class MapView extends React.Component {
    render() {
        let restaurants = this.props.restaurants;
        
        return (
            <div className="map">
                 <Map
                    style={{ height: "400px", width: "100%"}}
                    zoom={12}
                    center={[38.0401, -78.4850]}
                    >
        
                    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {restaurants.map(restaurant => {
                        return (
                            // beware of how you call things in CircleMarker vs. regular html tags
                            <Marker
                                position={[restaurant["coordinates"]["lat"], restaurant["coordinates"]["lng"]]}
                                riseOnHover={true}
                                bubblingMouseEvents={true}
                            >
                                {/* offset={[-8, -2]} */}
                                <Tooltip direction="top" opacity={1} offset={[0, -22]}>
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