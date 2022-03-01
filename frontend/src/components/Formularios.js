import React, {useState} from "react";
import emailjs from "emailjs-com"
import SendIcon from '@mui/icons-material/Send';

export default function Formularios(){

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
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_xcwqbzo', 'template_zq3euc7', e.target , 'HAlDgSFUdblOZKWZj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <>
        <div className="form__container">
            <p>Contact me: </p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="subjet">
                   Subjet:
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
                    Full name:
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
                    Your e-mail:
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
                    Your mesagge:
                </label>
                <textarea 
                    id="message" 
                    type="text" 
                    name="message" 
                    value={values.name}
                    onChange={handleChange}
                    required
                />
                <button  type="submit" className="send-button">
                   SEND <SendIcon/>
                </button>
            </form>
        </div>
        </>
    )

}