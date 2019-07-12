import React from 'react'
import { Card } from 'semantic-ui-react'

const JediList = props => {

    console.log(props)

    return(
        <div className='infoCard'>
            <h3>{props.jediInfo.name}</h3>
            

            <div className='jediSpecs'>
                <p>Gender: {props.jediInfo.gender}</p>
                <p>Eye Color: {props.jediInfo.eye_color}</p>
                <p>HAir Color: {props.jediInfo.hair_color}</p>
                <p>Height: {props.jediInfo.height}</p>
                <p>Skin Color: {props.jediInfo.skin_color}</p>
                <p>Mass: {props.jediInfo.mass}</p>
            </div>


        </div>
    )
}

export default JediList