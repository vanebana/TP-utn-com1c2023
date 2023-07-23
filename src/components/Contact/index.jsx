

function Contact() {

  return (
    <>

      <form onSubmit={addEventListener => console.log(addEventListener.target.search.value)}>
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


    </>
  )
}

export default Contact
