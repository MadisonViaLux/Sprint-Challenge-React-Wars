import React from 'react'
import './StarWars.css'
import styled from 'styled-components'
// import { Card } from 'semantic-ui-react'



const InfoCard = styled.div`
    border: 2px dashed purple;
    border-radius: 15%;
    background-color: rgba(250, 235, 215, 0.753);
    margin: 3rem auto;
    width: 30rem;
`;



const JediSpecs = styled.div`
    display: flex;
    justify-content: space-evenly;
`;




const JediList = props => {

    console.log(props)

    return(
        <InfoCard>

            <h3>{props.jediInfo.name}</h3>

            <JediSpecs>
                <p>Gender: {props.jediInfo.gender}</p>
                <p>Eye Color: {props.jediInfo.eye_color}</p>
                <p>HAir Color: {props.jediInfo.hair_color}</p>
                <p>Height: {props.jediInfo.height}</p>
                <p>Skin Color: {props.jediInfo.skin_color}</p>
                <p>Mass: {props.jediInfo.mass}</p>
            </JediSpecs>


        </InfoCard>
    )
}

export default JediList