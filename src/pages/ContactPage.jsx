import React from "react";
import "../styles/contact.css";
import { FaPhone } from "react-icons/fa6";

function ContactPage() {
  return (
    <div className="contact">
      <div className="contact__headingTextAndIcon">
        <h1>Contact Us</h1>
        <FaPhone className="contact__phoneIcon" />
      </div>
      <div className="contact__details">
        <h3>
          Whatsapp: <span>+234 805 543 1383</span>
        </h3>
        <h3>
          Instagarm: <span>@margy.glow</span>
        </h3>
        <h3>
          Snapchat: <span>@chinyereo7599</span>
        </h3>
        <h3>
          Tiktok: <span>@lov_keeler</span>
        </h3>
        <h3>
          Account Number: <span>2198211680</span>
        </h3>
        <h3>
          Account Name: <span>Okeke Margareth Chinyere</span>
        </h3>
        <h3>
          Bank Name: <span>UBA</span>
        </h3>
      </div>
    </div>
  );
}

export default ContactPage;