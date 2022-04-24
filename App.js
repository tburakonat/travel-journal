import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cardElements = data.map(card => {
        return (
            <Card
                key={card.id}
                /*
                title={card.title}
                location={card.location}
                mapUrl={card.googleMapsUrl}
                start={card.startDate}
                end={card.endDate}
                desc={card.description}
                imgUrl={card.imageUrl}
                
                OR
                
                card={card}
                
                OR
                */
                {...card}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <section className="cards">
                {cardElements}
            </section>
        </div>
    )
}