import React, { useState, useEffect } from "react";
import Planet from "../planet";

async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
    setPlanets(data['planets'])
    })
  }, [])

    return (
      <>
        <h1>Planetas</h1>
        {planets.map((planet, index) =>
          <Planet
          id={planet.id}
          name={planet.name}
          description={planet.description}
          link={planet.link}
          img_url={planet.img_url}
          key={index}
          />
        )}       
      </>
    );



}

export default Planets;