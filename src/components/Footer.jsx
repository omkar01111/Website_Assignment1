import { Box, Divider, IconButton, Typography } from "@mui/material";
import { center } from "../utils/commonStyle";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import "../assets/Styles/footer.css";
const Footer = () => {
  const title = {
    fontSize: {xs:'16px',md:'20px'},
    color: "white",
    fontFamily: "'Josefin Sans', sans-serif",
    textTransform: "uppercase",
    fontWeight: "400",
  };

  const des = {
    fontSize:  {xs:'14px',md:'16px'},
    color: "gray",
    fontFamily: "'Josefin Sans', sans-serif",
    wordSpacing: "0.5px",
    letterSpacing: "0.5px",
  };
  return (
    <footer>

<div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
        <div className="wave" id="wave5"></div>
      </div>
      {" "}
      <Box
        sx={{
          ...center,
          flexDirection: "column",
          backgroundColor: "black",
          color: "white",
          
        }}
      >
        <Box
          sx={{
            ...center,
            justifyContent: "space-around",
            alignItems: "flex-start",
            flexDirection: "row",
            // gap:{xs:'20px',lg:'90px'},
            flexWrap: "wrap",
            paddingTop: "40px",
            width: "85%",
          }}
        >
          <Box
            width={"500px"}
            sx={{
              display: { sm: "flex" },
              flexDirection: "column",
              gap: "25px",
              flexWrap: "wrap",
              margin:'20px'
            }}
          >
            <Typography sx={{...title}}>About</Typography>
            <Typography sx={{ ...des }}>
              Motivated and innovative Frontend Developer with a passion for
              crafting responsive and visually appealing web experiences.
              Proficient in HTML, CSS, JavaScript and ReactJs. Committed
              continuous learning and collaborative teamwork. Seeking an
              opportunity to contribute creativity and technical skills to a
              dynamic development team.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" ,width:{xs:'100px',md:'180px'} ,marginY:'20px',marginX:{xs:'10px',md:'20px'}}}>
            <Typography sx={{...title}}>CATEGORIES</Typography>
            <Typography sx={{...des,}}>React JS</Typography>
            <Typography sx={{...des,}}>Javascript</Typography>
            <Typography sx={{...des,}}>NodeJS</Typography>
            <Typography sx={{...des,}}>MongoDb</Typography>
            <Typography sx={{...des,}}>Material Ui</Typography>
            <Typography sx={{...des,}}>HTML</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px",width:{xs:'100px',md:'180px'},marginY:'20px' ,marginX:{xs:'10px',md:'20px'}}}>
            <Typography sx={{...title}}>QUICK LINKS</Typography>
            <Typography sx={{...des}}>About Us</Typography>
            <Typography sx={{...des}}>Contribute</Typography>
            <Typography sx={{...des}}>Contact Us</Typography>
            <Typography sx={{...des}}>Privacy Policy</Typography>
            <Typography sx={{...des}}>Sitemap</Typography>
          </Box>
        </Box>
        <Divider sx={{ color: "red" }} />

        <Box
          sx={{
            ...center,
            flexDirection:{xs:'column-reverse',md:'row'},
            margin: {xs:'20px',md:'40px'},
            borderTop: "1px solid grey",
            width: "85%",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{fontSize:'0.9rem'}}>
            Copyright © 2023 All rights reserved | This template is made with by
            ORE
          </Typography>
          <Box sx={{ ...center, gap: "5px", justifyContent: "space-evenly" }}>
            <IconButton
              className="icon_Bg"
              sx={{"&:hover": { backgroundColor: "#0a66c2" } }}
            >
              <a href="#">
                <Linkedin className="icon" />
              </a>
            </IconButton>

            <IconButton
              className="icon_Bg"
              sx={{ "&:hover": { backgroundColor: "#ff5c5c" } }}
            >
              <a href="#">
                <Github className="icon"  />
              </a>
            </IconButton>

            <IconButton
              className="icon_Bg"
              sx={{"&:hover": { backgroundColor: "#0a66c2" } }}
            >
              <a href="#">
                <Twitter className="icon" />
              </a>
            </IconButton>

            <IconButton
              className="icon_Bg"
              sx={{  "&:hover": { backgroundColor: "#f831b3" } }}
            >
              <a>
                {" "}
                <Instagram className="icon"  />{" "}
              </a>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
