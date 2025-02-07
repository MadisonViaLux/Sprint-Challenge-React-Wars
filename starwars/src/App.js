import React, { useState, useEffect } from "react";

import JediList from './components/JediList'

import axios from 'axios';
import './App.css';





// describe('JediList', () => {
//   it('renders correctly', () => {
//     const wrapper = rtl.render(<JediList/>);
//     expectExport(wrapper.baseElement).toMatchSnapshot();
//   });
// });









export default function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     starwarsChars: []
  //   };
  // }

  // componentDidMount() {
  //   this.getCharacters('https://swapi.co/api/people/');
  // }


  const [starWars, setstarWars] = useState([]);


  useEffect(() => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    axios.get('https://swapi.co/api/people/?format=json')
      // .then(res => {
      //   return res.json();
      //   console.log(res.json())
      // })
      .then(res => {
        console.log(res)
        setstarWars(res.data.results);
      })
      // .catch(err => {
      //   throw new Error(err);
      // });
      
  }, []);


  // console.log(starWars)


 
    return (
      <div className="App">
        
        {/* <JediList {...starWars}/> */}

        {starWars.map(element => (
        <div>  {console.log(element)}
          <JediList {...element} /></div>
        ))}

       {/* {starWars.map(element => (
        <JediList jediInfo={element} />
      ))} */}

      </div>
    );
  
}

// props = {
//   hair: "blond", gender: "male", weight:"120lbs"
  
// }
// props.jediInfo.hair
// props.a