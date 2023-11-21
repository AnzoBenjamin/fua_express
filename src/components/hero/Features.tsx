import {FaTruckPickup, FaHandsWash} from "react-icons/fa"
import {TbIroning} from "react-icons/tb"

const Features = () => {
  return (

    <section className="feature_section">
    <div className="container">
      <div className="feature_container">
        <div className="box">
          <div className="img-box">
            <FaTruckPickup/>
          </div>
          <h5 className="name">
            Pickup
          </h5>
        </div>
        <div className="box active">
          <div className="img-box">
          <FaHandsWash/>

          </div>
          <h5 className="name">
            Wash
          </h5>
        </div>
        <div className="box">
          <div className="img-box">
            <TbIroning/>
          </div>
          <h5 className="name">
            Iron
          </h5>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features