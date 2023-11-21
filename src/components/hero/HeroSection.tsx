const HeroSection = () => {
  return (
    <section className="slider_section ">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="detail-box">
              <h1>
                Laundry Services <br/>
                Free pickup <br/>
                Included
              </h1>
              <p>
                If you find yourself tired or without enough time to handle that increasing pile of laundry, let us at fua express handle all that for you.
                With a free pickup and quality service guaranteed, why not?
              </p>
              <a href="">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="/hero-img.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>  
    )
}

export default HeroSection