import React from "react";
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default class MapView extends React.Component {

    render() {
        let restaurants = this.props.restaurants;
        // let coordinates = restaurants.map(r => r.coordinates);
        return (
            <div className="map">
                 <Map
                    style={{ height: "200px", width: "100%" }}
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
                        // console.log(restaurant["coordinates"]["lat"]);
                        return (
                            // beware of how you call things in CircleMarker vs. regular html tags
                            <CircleMarker
                                center={[restaurant["coordinates"]["lat"], restaurant["coordinates"]["lng"]]}
                            />)
                    })
                    }
                </Map>
            </div>
        );
    }
}