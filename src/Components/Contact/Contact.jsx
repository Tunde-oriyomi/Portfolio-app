import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="contact sections" id="contact">
            <h2 className="secondary-heading">contact me</h2>
            <p className="paragraph">Submit the form below to get in touch with me</p>

            <form action="/submit" method="post" className="form-container">
                <input type="text" id="name" name="name" placeholder="Enter your name" required/> <br />
                <input type="text" id="email" name="email" placeholder="Enter your email" required/> <br />
                <textarea rows="10" id="message" name="message" placeholder="Enter your message"></textarea> <br /><br />
                <button className="secondary-paragraph" type="submit">Let's talk</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
