import React from "react";
import 'antd/dist/antd.css';
import RecentRestaurants from "./RecentRestaurants.js";

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <RecentRestaurants/>
            </div>
        );
    }
}
