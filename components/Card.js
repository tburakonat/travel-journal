import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={props.imageUrl}/>
            <div className="card--info">
                    <img className="card--marker" src="https://scrimba.com/blobs/sha1:edd44595074c93fdba8b127c40b5b2f5b4e0594a.png" />
                    <span className="card--location">{props.location}</span>
                    <a href={props.googleMapsUrl} className="card--link">View on Google Maps</a>
                <h2 className="card--title">{props.title}</h2>
                <span className="card--time">{props.startDate} - {props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}