import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11010.04846282325!2d67.02028602081344!3d24.812995924853745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d3ca9c7bb6abeba!2sCafe%20Aylanto!5e0!3m2!1sen!2s!4v1644465574743!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div id="contact-us">
        <div className="section-tittle">
          <h2>Contact Us</h2>
        </div>
        {/* <!-- CONTACT FORM --> */}
        <form action="" method="post">
          <div id="email-name">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="form-control"
            />
            <input
              type="email"
              id="emal"
              placeholder="Email address"
              className="form-control"
            />
          </div>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="form-control"
          />
          <textarea
            class="form-control"
            id="textarea"
            rows="6"
            placeholder="Tell about your project"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
