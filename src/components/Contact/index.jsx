
import { useState } from 'react'
import { BsEnvelope, BsSearch } from 'react-icons/bs'

function Confirmacion() {
  return (
    <div className='sended'>
      Mensaje enviado!
    </div>
  )
}

function Contact() {
  const [sended, setSended] = useState(false)

  const enviar = () => {
    setSended(true)
  }

  return (
    <div className="contactPage">
      {
        sended ? <Confirmacion /> : 
      
        <form onSubmit={enviar}>
          <div className="formContainer">

            <h2 className="ContactForm" >Contact</h2>
            <p>Full Name*</p>
            <input type="text" name="nombre" autoComplete="off"></input>
            <p>Email*</p>
            <input type="email" name="email" autoComplete="off"></input>
            <p>Message*</p>
            <input type="text" name="email" autoComplete="off" className="mensaje"></input>
            <div className="buttonContainer">
              <button type="submit">Send</button>
            </div>
          
          </div >
        </form>
      }
    </div>
  )
}

export default Contact
