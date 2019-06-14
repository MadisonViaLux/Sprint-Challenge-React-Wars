import React, { Component } from "react";
import ListForm from './ListForm';
import JediForm from './JediForm'


const forceUsers = [
    {
        name: 'Revan',
        title: 'Dark Lord, Jedi Master',
        faction: '*flexable*',
        img: 'https://cdn.shopify.com/s/files/1/2025/9623/products/product-image-309337603_1280x1280.jpg?v=1497464005',
        location: 'Star Forge',
        bio: 'https://starwars.fandom.com/wiki/Revan',
    },

    
    {
        name: 'Luke Skywalker',
        title: 'Grand Master',
        faction: 'Jedi',
        img: 'https://static.comicvine.com/uploads/scale_super/11133/111331671/6036040-1435381-luke_swarm_war.jpg',
        location: 'Yavin 4',
        bio: 'https://starwars.fandom.com/wiki/Luke_Skywalker/Legends'
    },

    {
        name: 'Anakin Skywalker',
        title: 'Darth',
        faction: 'Empire',
        img: 'https://www.artbybagci.com/wp-content/uploads/2017/05/darth-clean.jpg',
        location: 'Mustafar',
        bio: 'https://starwars.fandom.com/wiki/Anakin_Skywalker/Legends'
    },

    {
        name: 'Bastila Shan',
        title: 'Jedi Knight',
        faction: 'Jedi',
        img: 'https://i7.lisimg.com/15785517/411full.jpg',
        location: 'Dantooine',
        bio: 'https://starwars.fandom.com/wiki/Bastila_Shan'
    },
]



class List extends Component {


    state = {
        jediList: forceUsers,
        name: '',
        title: '',
        faction: '',
        img: '',
        location: '',
        bio: '',
    }
    
    
    
    forcePush = event => {
        console.log(event)
        // console.log(event.target.value)

        this.setState({
            [event.target.name]: event.target.value
        })
    }
    



    
    addJedi = event => {
        event.preventDefault();
        this.setState({
            jediList: [
                ...this.state.jediList,
                {
                    name: this.state.name,
                    title: this.state.title,
                    faction: this.state.faction,
                    img: this.state.img,
                    location: this.state.location,
                    bio: this.state.bio
                }
            ]
        });
    };




    render(){

        return(

            <>
                <div className='republic'>
                    <JediForm 
                    name={this.state.name}
                    title={this.state.title}
                    faction={this.state.faction}
                    img={this.state.img}
                    location={this.state.location}
                    bio={this.state.bio}
                    forcePush={this.forcePush}
                    addJedi={this.addJedi}
                    />
                </div>

                <div className='profiles'>
                    {this.state.jediList.map(element => (
                        <ListForm userObject={element} />
                        ))}
                </div>
            </>
        )
    }
}


export default List;