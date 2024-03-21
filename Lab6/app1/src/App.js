import logo from './logo.svg';
import {useState} from 'react'; 
import About from './About';
import './App.css';
function TestingComponent({c, onClick})
{
  //cannot direct access the count variable. need to modify the function setCount

  return (
    <button onClick = {onClick}>Clicked Me {c}</button>
  );
}

function SignUp()
{
  return (
    <button>Sign up</button>
  );
}

function LogIn()
{
  return (
    <button>Log In</button>
  );
}

let isNewUser = false;
let content;
/*
if(isNewUser)
{
  content = <SignUp/>;
}
else
{
  content = <LogIn/>;
}
*/
function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    
    setCount(count + 1);
    //alert('the button has been clicked!');
  }

  return (
    <>
    <h1>Hello to our first app</h1>
    <p>This is a test for paragraph</p>
    <TestingComponent c={count} onClick = {handleClick}/> 
    <TestingComponent c={count} onClick = {handleClick}/>
    <About />
    {isNewUser? <SignUp/>: <LogIn/>}
    </>
  );
}

export default App;
