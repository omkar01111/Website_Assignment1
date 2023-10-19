import "../assets/Styles/service.css";
import ServiceCard from "../components/ServiceCard";
import brandDesign from "../assets/img/brandsDesign.jpg";
import colud from "../assets/img/cloud.jpg";
import socialMedia from "../assets/img/socialMedia.jpg";
import websiteDev from "../assets/img/WebsiteDev.jpg";
import appDev from "../assets/img/appDev.jpg";

const Services = () => {
  return (
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row pricing_container">
            <div className="col-lg-4 my-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    Free
                  </h5>
                  <h6 className="card-price text-center">
                    ₹0<span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Single User
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      5GB Storage
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Community Access
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Unlimited Private Projects
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Dedicated Phone Support
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Free Subdomain
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Monthly Status Reports
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 my-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    Plus
                  </h5>
                  <h6 className="card-price text-center">
                    ₹9<span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <strong>5 Users</strong>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      50GB Storage
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Community Access
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Private Projects
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Dedicated Phone Support
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Free Subdomain
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Monthly Status Reports
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 my-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    Pro
                  </h5>
                  <h6 className="card-price text-center">
                    ₹49<span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <strong>Unlimited Users</strong>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      150GB Storage
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Community Access
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Private Projects
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Dedicated Phone Support
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <strong>Unlimited</strong> Free Subdomains
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Monthly Status Reports
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<div className="service_Container">
        <h1>Our Services</h1>
      <section className="service_card">
        <ServiceCard
          img={appDev}
          title={"Application Development"}
          des={`Our expert team designs and develops custom web applications that empower your business with enhanced functionality, scalability, and security, meeting the demands of a dynamic digital landscape.`}
        />
        <ServiceCard
          img={colud}
          title={"Cloud Storage Solutions"}
          des={`Streamline your data management with our tailored cloud storage solutions. We optimize your data storage infrastructure, providing secure, scalable, and efficient cloud-based storage options for your organization's needs.`}
        />

        <ServiceCard
          img={websiteDev}
          title={"Website Development"}
          des={`We specialize in creating visually stunning and functional websites tailored to your specific needs, ensuring a seamless user experience and a strong online presence for your business.`}
        />
        <ServiceCard
          img={socialMedia}
          title={"Social Media Management"}
          des={`Elevate your brand's online presence with our comprehensive social media management services. We strategize, create engaging content, and optimize your social media profiles to drive meaningful engagement and growth.`}
        />
        <ServiceCard
          img={brandDesign}
          title={"Branding Solutions"}
          des={`Crafting a distinct and memorable brand identity is our forte. Let us guide you through the process of brand strategy, logo design, and consistent brand messaging, ensuring your business stands out in the competitive market.`}
        />
      </section>

</div>
    </div>
  );
};

export default Services;
