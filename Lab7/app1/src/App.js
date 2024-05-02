//import logo from './logo.svg';
import {useState, useEffect} from 'react';
import APIKey from './config';
import './App.css';
import Movie from './Component/Movie'; 
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';



function App() {

  const [movieResults, setMovieResults] = useState([]); 
  //const movieResults = [1,2,3]; 

  useEffect( () => {
    fetch(APIURL + APIKey)
    .then( (resp) => resp.json() ) 
    .then( (data) => {
      console.log(data)
      setMovieResults(data.results)
      console.log(data.results)
    }
    )
  }
  ,[]) 


  return (
    <>
    {movieResults.map( (element,index) => (<Movie key={index}/>)

    )}
    </>
  );
}

export default App;


 // new app - cd \sdf\ - npx create-react-app app1
 //react + food exercise. - same stage. [result in array.]
 //plus: continue this class. 
