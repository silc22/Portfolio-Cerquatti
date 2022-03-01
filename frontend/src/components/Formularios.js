import React, {useState} from "react";
import emailjs from "emailjs-com"


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
        <div>
            <p>what do you gonna do?</p>
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
                />
                <label htmlFor="userName">
                    Full Name:
                </label>
                <input 
                    id="userName" 
                    type="text" 
                    name="userName" 
                    value={values.name}
                    onChange={handleChange}
                />
                <label htmlFor="userEmail">
                    Email
                </label>
                <input 
                    id="userEmail" 
                    type="Email" 
                    name="userEmail" 
                    value={values.name}
                    onChange={handleChange}
                />
                <label htmlFor="message">
                    Text:
                </label>
                <textarea 
                    id="message" 
                    type="text" 
                    name="message" 
                    value={values.name}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </div>
        </>
    )

}