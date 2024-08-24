import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import "./index.css"; //import CSS file

function App() {
  init("x5yjcbpnXXMnUbCjK");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_65uvlqr",
        "template_cu4s405",
        form.current,
        "x5yjcbpnXXMnUbCjK",{
          from_name: 'John',
          to_name: "V",
          reply_to: "john.tan@sh-cogent.com.sg",
        }
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} ref={form}>
        <h1 className="text-center">Automate Form</h1>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="First Name" className="black-text" First Name </label>
            <input type="text" className="form-control" name="firstname" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Last Name" className="black-text">Last Name</label>
            <input type="text" className="form-control" name="lastname" />
          </div>
          <div className="form-group col-12">
            <label htmlFor="inputEmail" className="dark-blue-text">Email</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              placeholder="name@email.com"
              name="user_email"
            />
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="message" className="dark-blue">message</label>
            <textarea
              type="text"
              className="form-control"
              id="inputmessage4"
              name="user_message"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
