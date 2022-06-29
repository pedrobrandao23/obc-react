import React, { useEffect, useState } from "react";
import DescriptionWithLink from "../shared/DescriptionWithLink";
import "./style.css"


async function getSatellites(id){
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data;
}

const Planet = (props) => {
    const [satellites, setSatellites] = useState([])

    useEffect(() => {
      getSatellites(props.id).then(data => {
      setSatellites(data['satellites'])
      })
    }, [])


    return (
      <div>
        <h4>{props.name}</h4>
        <div>
        <DescriptionWithLink description={props.description} link={props.link} />
        </div>
        <img src={props.img_url}></img>
        <h4>Satélites</h4>
        <ul>
        {satellites.map((satellite, index) =>
          <li key={index}>{satellite.name}</li>
        )}
        </ul>
      </div>
    );
  }



export default Planet
