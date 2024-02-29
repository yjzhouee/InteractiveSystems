// Capital letter as a component. 

'use strict';
class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {personName: "World"};
    }

    render(){
        return React.createElement('h1',null,'Hello, '+this.state.personName);
    }
}

const domContainer = document.querySelector('#app');
ReactDCM.render(React.createElement(Hello), domContainer); 

// Above p58 of the book 


// ___________Assignment___________ 

// Read the book: chapter 3 P77
// https://ebookcentral-proquest-com.ezproxy.tlu.ee/lib/tallinn-ebooks/reader.action?docID=6883629

// React ES6 & React jsx
// https://www.w3schools.com/react/react_es6.asp
// https://www.w3schools.com/react/react_jsx.asp

