import {FaTruckPickup, FaHandsWash} from "react-icons/fa"
import {TbIroning} from "react-icons/tb"


const Services = () => {
  return (
    <section className="service_section layout_padding">
    <div className="container ">
      <div className="heading_container heading_center">
        <h2> Our Services </h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 mx-auto">
          <div className="box ">
            <div className="img-box">
                <FaHandsWash/>
            </div>
            <div className="detail-box">
              <h5>
                Washing
              </h5>
              <p>
                when it comes to clean, we take it seriously. Let us fight off those stubborn stains without tearing apart the fabric.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mx-auto">
          <div className="box ">
            <div className="img-box">
                <TbIroning/>
            </div>
            <div className="detail-box">
              <h5>
                Electrical
              </h5>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mx-auto">
          <div className="box ">
            <div className="img-box">
                <FaTruckPickup/>
            </div>
            <div className="detail-box">
              <h5>
                Plumbing
              </h5>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>
  )
}

export default Services