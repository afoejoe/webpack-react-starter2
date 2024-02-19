import React from "react";
import Icon from './assets/check.png';

export default function App() {
    console.log("Hello World");
    return <h1>Hello World5
        <span>
            {new Date().toDateString()}
        </span>
        {/* <Icon /> */}
        <img src={Icon} alt="h" />
    </h1>;
}