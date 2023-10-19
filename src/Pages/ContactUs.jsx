import { Box, Button, Typography } from "@mui/material";
import "../assets/Styles/contact.css";
import { center } from "../utils/commonStyle";
import { useState } from "react";
const ContactUs = () => {
  const initialFormData = {
    name: "",
    email: "",
    phoneNo: "",
    orderNo: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={center} className="contact">
      <div className="bg_img"></div>
      <Box className="inner_Container">
        <Typography variant="h4"> Contact Us..</Typography>

        <form action="/ContactUs" onSubmit={handleSubmit}>
          <div className="form-floating mb-3 input_area">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3 input_area">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email </label>
          </div>
          <div className="form-floating mb-3 input_area">
            <input
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Phone</label>
          </div>
          <div className="form-floating mb-3 input_area">
            <input
              name="orderNo"
              value={formData.orderNo}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Order Number </label>
          </div>
          <div className="form-floating mb-3 input_area">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              aria-label="With textarea"
            ></textarea>
            <label htmlFor="floatingInput">Your Message </label>
            <p>Please provide all the information about your issue you can.</p>
          </div>

          <Button className="sub_btn" type="submit">
            SUBMIT
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default ContactUs;
