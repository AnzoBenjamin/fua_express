
const About = () => {
  return (
    <section className="about_section layout_padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="detail-box">
              <h2>About us</h2>
              <p>
                We are the UDSM Branch of Fua Express Tanzania. Fua Express is a company that aims to bring quality laundry services
                cater to university students and the entire general public.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="img-box">
              <img src="/about-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
