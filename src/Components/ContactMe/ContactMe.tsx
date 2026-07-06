import "./ContactMe.css";
import email from "../../assets/images/email.png";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";

function ContactMe() {
  return (
    <>
      <div className="contactContainer">
        <a href="mailto:danielngira@uchicago.edu" target="_blank">
          <img src={email} alt="Email Icon" className="contactIcon" />
          <p>Email</p>
        </a>
        <a href="https://www.linkedin.com/in/danielngira" target="_blank">
          <img src={linkedin} alt="LinkedIn Icon" className="contactIcon" />
          <p>LinkedIn</p>
        </a>
        <a href="https://www.github.com/danielngira" target="_blank">
          <img src={github} alt="GitHub Icon" className="contactIcon" />
          <p>GitHub</p>
        </a>
      </div>
    </>
  );
}

export default ContactMe;
