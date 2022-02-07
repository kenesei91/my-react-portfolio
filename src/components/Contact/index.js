import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";

// import { validateEmail } from "../../utils/helpers";

// function ContactForm() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");

//   const { name, email, message } = formState;

//   function handleChange(e) {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);

//       if (!isValid) {
//         setErrorMessage("please enter a valid email");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }

//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//   }

function Contact() {
  return (
    <section class="container contacts" id="contacts">
      <div class="contact">
        <div class="content">
          <h2 class="head top-title">Contact Me</h2>
        </div>
        <hr></hr>
        <div class="container">
          <div class="contactInfo">
            <div class="box">
              <div class="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div class="text">
                <h3>Address</h3>
                <ul>12410 W Litle York Rd, Houston
                  <li>Houston, Texas</li>
                  <li>77041</li>
                </ul>
              </div>
            </div>
            <div class="box">
              <div class="icon">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="text">
                <h3>Phone</h3>
                <p>318-243-9226</p>
              </div>
            </div>
            <div class="box">
              <div class="icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="text">
                <h3>Email</h3>
                <p>keneilo91@yahoo.com</p>
              </div>
            </div>
            <div class="box">
              <div class="icon">
                <i class="fab fa-github" aria-hidden="true"></i>
              </div>
              <div class="text">
                <h3>GitHub</h3>
                <p>
                  <a
                    class="contact-link"
                    href="https://github.com/kenesei91"
                    target="blank"
                  >
                    GitHub Repo
                  </a>
                </p>
              </div>
            </div>
            <div class="box boxer">
              <div class="icon">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </div>
              <div class="text">
                <h3>LinkedIn</h3>
                <p>
                  <a
                    class="contact-link"
                    href="https://www.linkedin.com/in/kilochonwu"
                    target="blank"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
