import React, {useState} from "react";
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ufoImage from "../assets/ufo.png"

export default function Formularios(props){

    let language = props.language
    let [sending, setSend] =useState(false)

    const [values, setValues] = useState({
        subjet: "",
        userName: "",
        userEmail: "",
        message: ""
    });

    const handleChange = (e) =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const sendingOut = () => {
        setSend(!sending)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_xcwqbzo', 'template_zq3euc7', e.target , 'HAlDgSFUdblOZKWZj')
        .then((result) => {
            toast.success("Message sent! 😄", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }, (error) => {
            toast.error("Oops! try again 🤔", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
    });
        });
        e.target.reset()      
    }

    
    

    return(
        <>
        <div className="form__container">
            {
                language?
                <p>Contáctame:</p>
                :
                <p>Contact me:</p>
            }
            <form onSubmit={handleSubmit}>
            <label htmlFor="subjet">
            {
                language?
                "Asunto:"
                :
                "Subjet:"
            } 
                </label>
                <input 
                    id="subjet" 
                    type="text" 
                    name="subjet" 
                    value={values.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="userName">
                {
                language?
                "Nombre completo:"
                :
                "Full name:"
            } 
                </label>
                <input 
                    id="userName" 
                    type="text" 
                    name="userName" 
                    value={values.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="userEmail">
                {
                language?
                "Tu e-mail:"
                :
                "Your e-mail:"
            } 
                </label>
                <input 
                    id="userEmail" 
                    type="Email" 
                    name="userEmail" 
                    value={values.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">
                {
                language?
                "Tu mensaje:"
                :
                "Your message:"
                } 
                </label>
                <textarea 
                    id="message" 
                    type="text" 
                    name="message" 
                    value={values.name}
                    onChange={handleChange}
                    required
                />
                <button  type="submit" className="send-button" onClick={()=>sendingOut()}>
                {
                language?
                "ENVIAR" 
                :
                "SEND"
                } 
                <img src={ufoImage} className={sending ? "ufo-image-out" : "ufo-image"} alt="ovni"/>  
                </button>
            </form>
            <ToastContainer/>
        </div>
        </>
    )

}