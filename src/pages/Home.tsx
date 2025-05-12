import React from 'react'
import '../styles/home.css'
import abc from '../assets/letter.png'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
type imgArray = {
  bgImg:string,
  text:string,
  link:string
}
const imagesText:imgArray[]=[
  {bgImg:'https://t3.ftcdn.net/jpg/04/52/55/40/360_F_452554046_OysDdSJkAjzouEUv5E1NKvbrSmmS9FAw.jpg',text:'Әріптерді үйрену', link:'/letters'},
  {bgImg:'https://i.ytimg.com/vi/-muJXtxciDg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2A2a5Tknj_aI3xxFGVOLkEhxkxA',text:'Әріптер практика', link:'/letterGame'},
  {bgImg:'https://gamedata.britishcouncil.org/sites/default/files/attachment/number-1.jpg',text:'Сандарды үйрену', link:'/numberScreen'},
  {bgImg:'https://i.ytimg.com/vi/WjvXKMVkCms/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgHFFCIiHMyZoBQt6qhoCyNJR3OQ',text:'Сандар практика', link:'/numberPractice'}
]
const Home = () => {
  return (
    <div><Header></Header>
    <div className="home">
      <h1 className='engTitle'>Ағылшын тілі</h1>
      <div className="homeInner">
        
        <div className="leftSide">
          <div className="hi">
            🖐 Сәлем, балақай!
          </div>
             <div className="hi">
           🧒 3 - 6 жас  
          </div>
             <div className="hi2">
            Ағылшын тілі әлеміне қош келдің!
          </div>
        </div>
        <div className="middle">
   
{
  imagesText.map(item => (
    <Link to={item.link} key={item.text} style={{ textDecoration: 'none' }}>
      <div
        className="middleDiv"
        style={{
          backgroundImage: `url(${item.bgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <h2 className="middleText">{item.text}</h2>
      </div>
    </Link>
  ))
}
        </div>
        <div className="rightSide">
          <div className="hi">
            🖐 Hi, little friend!
          </div>
          <div className="hi">
          🧒 Ages 3–6
          </div>
              <div className="hi2">
            Welcome to the world of English!
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home