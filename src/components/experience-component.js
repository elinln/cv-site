import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const contactStyling = {
    color: "white",
    borderColor: "white",
    border: "solid white 2px",
    padding: "12px",
    marginBottom: "50px",
    backgroundColor: "#322a2a5e",
    marginTop: "4em",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row"
}

export default class ExperiencePage extends Component {

    render() {
        return (
            <div >
                <div style={{ color: "white", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <h1>Erfarenhet</h1>
                </div>
                <div >
                    <div style={contactStyling}>
                        <p>
                            <b>Grindstugan, Bar och Restaurang — 2016-2021</b>
                            <br></br>

                            Började jobba på Grindstugan den 1 maj 2016 och jobbade på helger när jag gick i skolan och sen hela sommarlovet på både dagar och kvällar (det har bara säsongsöppet så det stänger i september/oktober). Mina arbetsuppgifter var till en början att se till att restaurangen/ uteserveringen såg bra ut och arbeta som barback och diskare. Under 2017 hade jag jobbat mig upp till cafébiträde. Jag har lärt mig grunderna som barista genom detta och behärskar därför espressomaskinen. 2018 började jag pendla mellan att jobba i baren som bartender och cafebiträde. Sedan dess har jag bara jobbat i baren och även kört entré under pandemin när platserna varit begränsade. Jag har nu jobbat där 6 säsonger och nu håller vi även öppet under vintern 2021/2022, vilket leder till att vi behöver starta om med marknadsföring, fixa sociala medier, göra logga, planera öppningstider och planlösning bland annat.
                        </p>
                    </div>
                    <div style={contactStyling}>
                        <p>
                            <b>Enklare Ekonomi Sverige AB — 2018</b>
                            <br></br>
                            I januari 2018 började jag jobba som handläggare på företaget Enklare Ekonomi Sverige AB. Min position var som sagt lånehandläggare och jag jobbade med att få in ansökan om att hjälpa folk med att samla ihop deras lån, sänka räntan och/ eller sänka deras månadskostnad på lånen de kan ha. Man kunde även ta ett nylån genom tjänsten. Här lärde jag mig väldigt mycket om privatekonomi och om hur telefonförsäljning fungerade. Det var viktigt att kunna pitcha in tjänsten genom telefon och det gav mig kunskaperna att förstå, förklara och fortsätta med kunden.
                        </p>
                    </div>
                    <div style={contactStyling}>
                        <p>
                            <b>Tronum Group - Marbella, Spanien - 2018</b>
                            <br></br>

                            I slutet av September 2018 åkte jag till Marbella i Spanien för att jobba på ett företag som heter Tronum Group. Mitt arbete gick ut på att sälja Canal Digital till privatpersoner genom telefon (telefonförsäljning). Här stannade jag i 7 veckor och mina arbetstider var från 09-19, med en siesta (lunchpaus) mellan 13-15. Jag lärde mig allt från att handskas och sälja till människor via telefon och det mesta inom teknik, i form av TV och tv- lösningar.
                        </p>
                    </div>
                    <div style={contactStyling}>
                        <p>
                            <b>White and White Event — 2018</b>
                            <br></br>

                            Under hela 2018 jobbade jag någon gång i månaden på olika event och nattklubbar som tobaksvärdinna (ibland även som spritservis). Jag har varit på både Excet, Port Du Soleil, Clarion Hotel Post och Summerburst för att sälja tobak för Camel och LD (JTI). Där jobbade jag för att få in lite extra pengar och komma i kontakt med människor inom den branschen.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}