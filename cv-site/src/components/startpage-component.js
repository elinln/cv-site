import React, { Component } from "react";


const nameStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginTop: "15%",
}



export default class StartPage extends Component {

    render() {
        return (
            <div style={nameStyle}>
                <h1 style={{ border: "solid white 2px", padding: "18px", fontSize: "80px" }}> Elin Nilsson </h1>
            </div>
        )
    }
}