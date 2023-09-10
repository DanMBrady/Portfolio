import { useRef } from "react"
import { useReducer } from "react"
import emailjs from '@emailjs/browser';
import "./Contact.css"


export const Conatct =()=>{
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rk4irkt', 'template_puc4mir', form.current, '5Lq98FnaTPv1r7VM6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return <div className="contactDiv">
        <h1 className="test">Contact</h1>

        <form  ref={form} 
        onSubmit={sendEmail}
        className="contactForm">
            <input
            type="text"
            className="contactInput"
            placeholder="Full Name"
            name="user_name" required
            ></input>
             <input
            type="email"
            className="contactInput"
            placeholder="Email"
            name="user_email" required
            ></input>
             <input
            type="text"
            className="contactInput"
            placeholder="Subject"
            name="subject" required
            ></input>
            <textarea 
             className="contactInput"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            ></textarea>
            <button className="contactButtonTwo" type="submit">Send Message</button>

        </form>
    </div>
}