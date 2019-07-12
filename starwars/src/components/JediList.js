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

const DetailSpecs = styled.p`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`


const JediList = ({name,gender,eye_color,hair_color,height,skin_color,mass}) => {

    

    return(
        <InfoCard>

            <h3>{name}</h3>

            <JediSpecs>
                <DetailSpecs>Gender: {gender}</DetailSpecs>
                <DetailSpecs>Eye Color: {eye_color}</DetailSpecs>
                <DetailSpecs>Hair Color: {hair_color}</DetailSpecs>
                <DetailSpecs>Height: {height}</DetailSpecs>
                <DetailSpecs>Skin Color: {skin_color}</DetailSpecs>
                <DetailSpecs>Mass: {mass}</DetailSpecs>
            </JediSpecs>


        </InfoCard>
    )
}

export default JediList