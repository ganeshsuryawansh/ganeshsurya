import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <section className=" px-5 py-20 " id="Contact">
      <h1 className="text-3xl font-bold text-center ">Contact Me</h1>
      <p className="text-center">Get in Touch</p>

      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div>
          <h1 className="text-xl">
            {" "}
            <PhoneIphoneIcon /> Call Me
          </h1>
          <p>+91 9309580827</p>

          <br />
          <h1 className="text-xl">
            {" "}
            <MailIcon /> Email
          </h1>
          <p>ganeshsuryawanshi594@gmail.com</p>
          <br />
          <h1 className="text-xl">
            {" "}
            <LocationOnIcon /> Location
          </h1>
          <p>Pune - Maharashtra</p>
        </div>

        <div className="sm:ml-10 flex flex-col sm:flex-row justify-center items-center">
          <form>
            <input
              className="bg-blue-200 p-2 rounded outline-none w-52 m-2"
              placeholder="Name"
              type="text"
            />
            <input
              className="bg-blue-200 p-2 rounded outline-none w-52 m-2"
              placeholder="Email"
              type="email"
            />
            <br />
            <textarea
              className="bg-blue-200 outline-none m-2 h-40 w-52 border p-2 rounded resize-none text-black"
              placeholder="Message"
            />
            <br />
            <div className="ml-3">
              <Button className="ml-5" variant="contained" endIcon={<SendIcon />}>
                Send Message
              </Button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
