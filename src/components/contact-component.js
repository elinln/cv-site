import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const contactStyling = {
    color: "white",
    borderColor: "white",
    border: "solid white 2px",
    padding: "12px",
    backgroundColor: "#322a2a5e",
    marginTop: "6em"
}

export default class ContactPage extends Component {

    render() {
        return (
            <div style={contactStyling}>
                <div style={{ borderColor: "white" }}>
                    <h2> Kontaktuppgifter </h2>
                    <dl>
                        <dt>Mail</dt>
                        <dd>linneaelinnilsson@gmail.com</dd>
                        <dd>elin.nilsson@medieinstitutet.se</dd>
                        <dt>Telefon</dt>
                        <dd>0738405840</dd>
                    </dl>
                </div>
            </div>
        )
    }
}