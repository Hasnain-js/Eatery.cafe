import aboutimage from "../../../assets/about-image.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="section-column">
        <div className="about-info">
          <h4>Read our story</h4>
          <h2>We've been Making The Delicious Foods Since 1999</h2>
          <p>
            Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae
            malesuada. Proin scelerisque risus et ipsum semper molestie sed in
            nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.
          </p>
          <p>
            Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin
            eu nibh ac, posuere tristique magna. You can use this template for
            your cafe or restaurant website. Please tell your friends about{" "}
            <a href="https://plus.google.com/+templatemo" target="_parent">
              templatemo
            </a>
            . Thank you.
          </p>
        </div>
      </div>
      <div className="section-column">
        <img src={aboutimage} alt="" srcset="" />
      </div>
    </section>
  );
};
export default About;
