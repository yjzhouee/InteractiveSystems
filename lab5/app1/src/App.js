import About from './About.js';

import logo from './logo.svg';
import './App.css';

//function name must be captal letter.

function TestingCom(){
  return (
    <button>click</button>
  ); 

}

function SignUp(){
  return (
    <button>SignUp</button>
  ); 

}

function Login(){
  return (
    <button>Login</button>
  ); 

}

let isNewUser = true;
let Content; 

/*
if(NewUser){
  Content = SignUp;
}
else{
  Content = Login;
}

    <Content/>

*/

function App() {
  return (
    <>
    <h1>hello to our first app</h1>
    <p>sdf</p>
    <TestingCom/>
    <About/>
    {isNewUser? <SignUp/>: <Login/>}
    </>
  );
}

export default App;
