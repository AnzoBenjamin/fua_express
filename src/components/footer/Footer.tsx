import {FaPhone} from 'react-icons/fa'
import {MdMailOutline} from 'react-icons/md'
import {TiSocialAtCircular} from 'react-icons/ti'
const Footer = () => {
  return (
    <section className="info_section ">
      <div className="container">
        <h4>Get In Touch</h4>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="info_items">
              <div className="row">
                <div className="col-md-4">
                  <a href="">
                    <div className="item ">
                      <div className="img-box ">
                        <TiSocialAtCircular/>
                      </div>
                      <p>@fua_express</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="">
                    <div className="item ">
                      <div className="img-box ">
                        <FaPhone/>
                      </div>
                      <p>0745884456</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="">
                    <div className="item ">
                      <div className="img-box">
                        <MdMailOutline/>
                      </div>
                      <p>fuaexpresstz@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
