
//homework: 2nd May

//import logo from './logo.svg';
import {useState, useEffect} from 'react';
//import APIKey from './config';
import './App.css';
import Food from './Component/Food'; 
//const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
const APIURL = 'https://www.themealdb.com/api/json/v1/1/random.php' 



function App() {

  const [foodResults, setFoodResults] = useState([]); 
  const [areaResults, setAreaResults] = useState(); 

  //const movieResults = [1,2,3]; 

  useEffect( () => {
    fetch(APIURL)
    //fetch(APIURL + APIKey)
    .then( (resp) => resp.json() ) 
    .then( (data) => {
      console.log(data)
      setFoodResults(data.meals)
      console.log(data.meals)
      console.log(data.meals[0])

      setAreaResults(data.meals[0].strArea)
      console.log(data.meals[0].strArea)
      console.log(data.meals[0].strCategory)

    }
    )
  }
  ,[]) 


  return (

    <>
     
    {foodResults.map( (element,index) => (<Food key={index}/>))};


    </>
  );

}

export default App;


