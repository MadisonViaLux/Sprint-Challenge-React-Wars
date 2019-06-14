import React from 'react';
import ListForm from './ListForm';


const forceUsers = [
    {
        name: 'Revan',
        title: 'Darth',
        faction: '*flexable*',
        img: 'https://cdn.shopify.com/s/files/1/2025/9623/products/product-image-309337603_1280x1280.jpg?v=1497464005',
        location: 'Star Forge',
    },

    
    {
        name: 'Luke Skywalker',
        title: 'Grand Master',
        faction: 'Jedi',
        img: 'https://static.comicvine.com/uploads/scale_super/11133/111331671/6036040-1435381-luke_swarm_war.jpg',
        location: 'Yavin 4',
    },

    {
        name: 'Anakin Skywalker',
        title: 'Darth',
        faction: 'Empire',
        img: 'https://www.artbybagci.com/wp-content/uploads/2017/05/darth-clean.jpg',
        location: 'Mustafar',
    },

    {
        name: 'Bastila Shan',
        title: 'Jedi Knight',
        faction: 'Jedi',
        img: 'https://i7.lisimg.com/15785517/411full.jpg',
        location: 'Dantooine',
    },
]





const List = () => {
    return(
        <div className='profiles'>
            {forceUsers.map(element => (
                <ListForm userObject={element} />
            ))}

        </div>
    )
}


export default List;