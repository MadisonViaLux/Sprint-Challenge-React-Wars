import React from 'react';




const JediForm = props => {
    return(
        <form onSubmit={props.addJedi}>
            <input 
                placeholder='name'
                type='text'
                name='name'
                value={props.name}
                onChange={props.forcePush}
            />

            <input 
                placeholder='title'
                type='text'
                name='title'
                value={props.title}
                onChange={props.forcePush}
            />

            <input 
                placeholder='faction'
                type='text'
                name='faction'
                value={props.faction}
                onChange={props.forcePush}
            />

            <input 
                placeholder='img url'
                type='text'
                name='img'
                value={props.img}
                onChange={props.forcePush}
            />

            <input 
                placeholder='location'
                type='text'
                name='location'
                value={props.location}
                onChange={props.forcePush}
            />

            <input 
                placeholder='bio url'
                type='text'
                name='bio'
                value={props.bio}
                onChange={props.forcePush}
            />

            <button onClick={props.addJedi}>Upload Jedi</button>
        </form>
    );
};




export default JediForm;