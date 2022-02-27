import React,{useState} from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Cartoons(){

    const Cartoon = 
    [
    {name : "Dexter's Lab",
    image: require("../assets/dexter.png")},
    {name: "Coraje",
    image: require("../assets/perro-cobarde.png")},
    {name:"Bugs Bunny",
    image: require("../assets/bugs-bunny.png")},
    {name:"Chicas Super Poderosas",
    image: require("../assets/cartoon.png")},
    {name:"Tom & Jerry",
    image: require("../assets/tom-jerry.png")},
    {name:"Jhonmy Bravo",
    image: require("../assets/jhonny-bravo.png")}
    ]

    const [current, setCurrent] = useState(0)
    
    const length = Cartoon.length


    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    return(
        <div className="aboutMe__container-two">
                <h2>Born in the 90's</h2>
            <div className="slider__content">
                <div className="left-arrow--cartoon" >
                    <ArrowBackIosIcon onClick={()=>prevSlide()}/>
                </div>
                <div className="slider">
                    <div className="cartoons__container"  >
                        {Cartoon?.map((element, index)=>
                        <div key={index} className={index === current ? "slide_active--cartooon" : "slide_inactive--cartooon" }> 
                            { index === current && 
                                <img src={element.image} alt={element.name} key={index}>
                                </img>}
                        </div>)}
                    </div>
                </div>
                <div className="right-arrow--cartoon" >
                    <ArrowForwardIosIcon onClick={()=>nextSlide()}/>
                </div>
        </div>
        </div>


    )
}

