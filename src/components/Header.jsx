import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { center } from "../utils/commonStyle";
import "../assets/Styles/header.css";

const Header = () => {
  return (
    <div>
      

      <Box
        className={"navBody"}
        width={"100%"}
        height={"90px"}
        sx={{ ...center, gap: "5%",flexWrap:'wrap' }}
      >
        <NavLink className="NavTitle" to="/">
          Home
        </NavLink>{" "}
        <NavLink className="NavTitle" to="/ContactUs">
          ContactUs
        </NavLink>{" "}
        <NavLink className="NavTitle" to="/Services">
          Services
        </NavLink>{" "}
        
      </Box>
    </div>
  );
};

export default Header;
