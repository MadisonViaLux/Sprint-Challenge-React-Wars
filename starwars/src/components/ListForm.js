import React from 'react';

const ListForm = props => {

    console.log(props)

    return(
        <>

        <div className='userContainer'>

            <div className='imgContainer'>
                <img src={props.userObject.img} alt={props.userObject.name}></img>
            </div>

            <div className='userInfo'>
                <h1>{props.userObject.name}</h1>

                <p>
                    <strong>Name: </strong> {props.userObject.name}
                </p>

                <p>
                    <strong>Title: </strong> {props.userObject.title}
                </p>

                <p>
                    <strong>Faction: </strong> {props.userObject.faction}
                </p>

                <p>
                    <strong>Location: </strong> {props.userObject.location}
                </p>
            </div>
        </div>



        </>
    )
}

export default ListForm