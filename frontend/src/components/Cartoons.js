import React,{useState} from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Cartoons(props){

    let state = props.state

    const Cartoon = 
    [
    {name : "Dexter's Lab",
    image: require("../assets/dexter.png"),
    taught: "no importa cuan molesto sea una hermano, siempre en el fondo lo queremos"},
    {name: "Courage",
    image: require("../assets/perro-cobarde.png"),
    taught: "Siempre enfrentaremos nuestros peores miedos para salvar a un ser querido"},
    {name:"Bugs Bunny",
    image: require("../assets/bugs-bunny.png"),
    taught: "Siempre enfrentaremos nuestros peores miedos para salvar a un ser querido"},
    {name:"Powerpuff Girls",
    image: require("../assets/cartoon.png"),
    taught: "Siempre enfrentaremos nuestros peores miedos para salvar a un ser querido"},
    {name:"Tom & Jerry",
    image: require("../assets/tom-jerry.png"),
    taught: "Siempre enfrentaremos nuestros peores miedos para salvar a un ser querido"},
    {name:"Jhonny Bravo",
    image: require("../assets/jhonny-bravo.png"),
    taught: "Siempre enfrentaremos nuestros peores miedos para salvar a un ser querido"},
    {name:"Sponge Bob",
    image: require("../assets/sponge-bob.png"),
    taught: "Siempre enfrentaremos nuestros peores miedos para salvar a un ser querido"},
    {name:"Hey! Arnold",
    image: require("../assets/hey-arnold-dos.png"),
    taught: "Siempre enfrentaremos nuestros peores miedos para salvar a un ser querido"}
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
        <div className={state? "aboutMe__container-two" : "aboutMe__container-two toc"}>
                <h2>Born in the 90's means:</h2>
            <div className="slider__content--cartoon">
                <div className="left-arrow--cartoon" >
                    <ArrowBackIosIcon onClick={()=>prevSlide()}/>
                </div>
                <div className="cartoons__slider">
                    <div className="cartoons__container"  >
                        {Cartoon?.map((element, index)=>
                        <div key={index} className={index === current ? "slide_active--cartooon" : "slide_inactive--cartooon" }> 
                            { index === current && 
                            <>
                                <div className="card__container">
                                    <img src={element.image} alt={element.name} key={index}>
                                    </img>
                                    <div className="cartoon__text">
                                        <p className="cartoon__tittle">What <span>{element.name}</span> taught me?</p>
                                        <p className="cartoon__bodyText">{element.taught}</p>
                                    </div>
                                </div>
                            </>}
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

