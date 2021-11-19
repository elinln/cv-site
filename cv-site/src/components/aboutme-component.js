import React, { Component } from "react";

const divStyle = {
    border: "solid white 2px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "22px",
    alignContent: "center",
    backgroundColor: "#322a2a5e",
    marginTop: "7em"
}

export default class AboutMe extends Component {

    render() {
        return (
            <div style={divStyle}>
                <h1>Lär känna mig!</h1>
                <p> Jag bor i nuläget med min mamma och bror i centrala Göteborg (Vasa) och varit stadsbarn sedan 2015. Nu har jag reducerat en del andra restauranger och platser jag jobbat på i mån om av vad som faktiskt är intressant, har till exempel jobbat på bland annat Levantine, Puta Madre, White & White och Seglarkorgen under tiden jag pluggat. Jag blir lätt uttråkad så på fritiden gillar jag att hänga med mina vänner, dricka Tom Collins och lyssna på bra musik! Jag gillar när det är full fart i arbetsmiljön jag jobbar i (är nog arbetsskadad från alla restauranger jag jobbat på, inte riktigt van med en lugn stund). Spontana aktiviteter är något jag aldrig tackar nej till, har alltid varit den personen som bokat resor någon dag innan flyget lyfter och får se under resan vad som händer. Jag söker alltid efter nya utmaningar och möjligheter, jag strävar hela tiden för att bli bättre.
                    <br></br>
                    <br></br>
                    Nu har jag även lite sidoprojekt på gång utöver skoltiden och jobbet. Främst att hjälpa företag med bland annat deras hemsidor.Det är något som jag dock precis startat med och inte hunnit utveckla riktigt än. Hoppas ni tycker jag verkar rolig och snäll!
                    <br></br>
                    <br></br>
                    Hör av er om ni har några mer frågor eller funderingar! </p>
            </div>
        )
    }
}