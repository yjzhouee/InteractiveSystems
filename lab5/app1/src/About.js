import './About.css'
const someData = {
    Name: 'dsf',
    ImgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png',
    ImgSize: 190,
}

const products = [
    {title: 'banana', id: '1', isSpecial: false},
    {title: 'muffin', id: '2', isSpecial: true},
    {title: 'water', id: '3', isSpecial: false},
]

function ProductList(){
    const listItems = products.map(element => 
        <li key={element.id}>{element.title}</li>
        )

        return <ul>listItems</ul> 

}

function About(){
    return (
        <>
        <h1 className = 'myStyle'>This is the about component</h1>
        <img src = {someData.ImgURL} 
        alt = "This is an image"
        style = {
            {width: someData.ImgSize, height: someData.ImgSize}

        }
        ></img>
        </>
    );
}


export default About; 