import "../assets/Styles/card.css";

import { center } from "../utils/commonStyle";

const Card = ({
  name,
  position,
  des,
  job_profile,
  Followers,
  Following,
  Projects,
  profile_img,
  bg_img
}) => {
  return (
    <div className="card_container">
      <div className="card">
        <div className="front">
          <img src={bg_img} className="bg_img" />
          <div className="profile_img">
            <img src={profile_img} alt="" />
          </div>
          <div className="front_info">
            <h5 className="title">{name}</h5>
            <p className="position">{position}</p>
            <p className="des">{des}</p>
          </div>
        </div>
        <div className="back">
          <div className="head_info" style={{ ...center }}>
            <p>"To be or not to be, this is my awesome motto!"</p>
          </div>
          <div
            className="mid_info"
            style={{ ...center, flexDirection: "column" }}
          >
            <h5 className="title">Job Description</h5>
            <p className="des">{job_profile}</p>
          </div>
          <div style={{ ...center, margin: "50px 0" }} className="last_info">
            <div className="profile_info" style={{ ...center }}>
              <h5 className="count">{Followers}</h5>
              <p>Followers</p>
            </div>
            <div className="profile_info" style={{ ...center }}>
              <h5 className="count">{Following}</h5>
              <p>Following</p>
            </div>
            <div className="profile_info" style={{ ...center }}>
              <h5 className="count">{Projects}</h5>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
