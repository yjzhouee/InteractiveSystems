//import logo from './logo.svg';
import {useState, useEffect} from 'react';
import APIKey from './config';
import './App.css';
import Movie from './Component/Movie'; 
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
const SearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=';



function App() {

  const [movieResults, setMovieResults] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleOnSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
      fetch(SearchURL + APIKey + "&query=" +searchTerm)
      .then( (resp) => resp.json() ) 
      .then( (data) => {
        console.log(data)
        setMovieResults(data.results)      
    })
    }
    }

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }
  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input className='search' type='search' placeholder='Search' value={searchTerm} onChange={handleOnChange}></input>

      </form>

    </header>

    <div className='movie-container'>
    {movieResults.map( (element) => (<Movie key={element.id} {...element}/>)

    )}
    
    </div>
    </>
  );
}

export default App;


 //homework 

 //1
 //conditional rendering - if value of certain item is missing, change the content.
 //if..else -> the value is 'null' (picture not shown), change another picture:  
 //save the extra image in an extra folder. 
 //syntax (alike): <poster_path?> <poster_path:> <sth_else> 

 //2
 //rating number above 7 > green; below 7 > yellow, below 5> red. 

 //3 
 /* header should make its own component. like a navigation. 
 <header>
 <form onSubmit={handleOnSubmit}>
   <input className='search' type='search' placeholder='Search' value={searchTerm} onChange={handleOnChange}></input>

 </form>

 */