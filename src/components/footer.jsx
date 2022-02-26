const Footer = () => {
  return (
    <footer id="footer">
      <div className="section-tittle">
        <h2>Find Us</h2>
        <address>
          <p>
            123 nulla a cursus rhoncus,
            <br />
            augue sem viverra 10870
            <br />
            id ultricies sapien
          </p>
        </address>
      </div>
      <div className="section-tittle">
        <h2>Reservation</h2>
        <address>
          <p>090-080-0650 | 090-070-0430</p>
          <p>
            <a href="mailto:info@company.com">info@company.com</a>
          </p>
          <p>LINE: eatery247</p>
        </address>
      </div>
      <div className="section-tittle">
        <div className="section-card">
          <div className="card-context">
            <h2>Our Hours</h2>
            <p>Monday: Closed</p>
            <div>
              <strong>Tuesday to Friday</strong>
              <p>7:00 AM - 9:00 PM</p>
            </div>
            <div>
              <strong>Saturday - Sunday</strong>
              <p>11:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
