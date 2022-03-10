import React,{useState} from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Cartoons(props){

    let language = props.language


    const CartoonSpanish = 
    [
    {name: "Coraje",
    image: require("../assets/perro-cobarde.png"),
    taught: "Enfrentar cualquier miedo para proteger a nuestros seres queridos."},
    {name : "El laboratorio de Dexter",
    image: require("../assets/dexter.png"),
    taught: "A pesar de las discusiones, amamos a nuestros hermanos/as."},
    {name:"Bugs Bunny",
    image: require("../assets/bugs-bunny.png"),
    taught: "La inteligencia y astucia pueden ayudarnos a sortear muchos problemas."},
    {name:"Chicas Superpoderosas",
    image: require("../assets/cartoon.png"),
    taught: "Nosotras también podemos salvar al mundo."},
    {name:"Tom & Jerry",
    image: require("../assets/tom-jerry.png"),
    taught: "Ser amigos más allá de las diferencias."},
    {name:"Jhonny Bravo",
    image: require("../assets/jhonny-bravo.png"),
    taught: "Tener respeto y empatía por las mujeres."},
    {name:"Bob Esponja",
    image: require("../assets/sponge-bob.png"),
    taught: "Ser positivo y nunca olvidar de ser amable con los demás."},
    {name:"Hey! Arnold",
    image: require("../assets/hey-arnold.png"),
    taught: "Somos capaces de hacer cualquier cosa por amor y por los amigos."}
    ]

    const CartoonEnglish = 
    [
    {name: "Courage",
    image: require("../assets/perro-cobarde.png"),
    taught: "To face any fear in order to protect my loved ones."},
    {name : "Dexter's Lab",
    image: require("../assets/dexter.png"),
    taught: "Having older brothers it’s complicated, but it’s also rewarding."},
    {name:"Bugs Bunny",
    image: require("../assets/bugs-bunny.png"),
    taught: "Intelligence and sharpness can help you to deal effectively with many situations."},
    {name:"Powerpuff Girls",
    image: require("../assets/cartoon.png"),
    taught: "Women can also save the world."},
    {name:"Tom & Jerry",
    image: require("../assets/tom-jerry.png"),
    taught: "To remain friends beyond any difference."},
    {name:"Jhonny Bravo",
    image: require("../assets/jhonny-bravo.png"),
    taught: "To have respect and empathy for women."},
    {name:"Sponge Bob",
    image: require("../assets/sponge-bob.png"),
    taught: "To stay positive and never forget to be kind with everyone else."},
    {name:"Hey! Arnold",
    image: require("../assets/hey-arnold.png"),
    taught: "We are capable of doing anything for love and for our friends."}
    ]

    const [current, setCurrent] = useState(0)
    
    const length = CartoonSpanish ? CartoonSpanish.length : CartoonEnglish.length
    


    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    return(
        <div className="aboutMe__container-two">
                {
                    language?
                    <h2>Nacer en los 90's significa:</h2>
                    :
                    <h2>Born in the 90's means:</h2>
                }
            <div className="slider__content--cartoon">
                <div className="left-arrow--cartoon" >
                    <ArrowBackIosIcon onClick={()=>prevSlide()}/>
                </div>
                <div className="cartoons__slider">
                    <div className="cartoons__container"  >
                        {language?
                        CartoonSpanish?.map((element, index)=>
                        <div key={index} className={index === current ? "slide_active--cartooon" : "slide_inactive--cartooon" }> 
                            { index === current && 
                            <>
                                <div className="card__container">
                                    <img src={element.image} alt={element.name} key={index}>
                                    </img>
                                    <div className="cartoon__text">
                                        <p className="cartoon__tittle">¿Qué me enseñó <b>{element.name}</b>?</p>
                                        <p className="cartoon__bodyText">{element.taught}</p>
                                    </div>
                                </div>
                            </>
                            }
                         </div>)
                        :
                        CartoonEnglish?.map((element, index)=>
                        <div key={index} className={index === current ? "slide_active--cartooon" : "slide_inactive--cartooon" }> 
                            { index === current && 
                            <>
                                <div className="card__container">
                                    <img src={element.image} alt={element.name} key={index}>
                                    </img>
                                    <div className="cartoon__text">
                                        <p className="cartoon__tittle">What <b>{element.name}</b> taught me?</p>
                                        <p className="cartoon__bodyText">{element.taught}</p>
                                    </div>
                                </div>
                            </>
                            }
                         </div>)
                        }
                    </div>
                </div>
                <div className="right-arrow--cartoon" >
                    <ArrowForwardIosIcon onClick={()=>nextSlide()}/>
                </div>
        </div>
        
        </div>


    )
}

