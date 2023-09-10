import React from "react";
import { HashLink } from "react-router-hash-link";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-500 w-full  flex flex-col sm:flex-row text-white lg:px-52 justify-center">
        <div className="pt-5 px-5">
          <h1>Ganesh</h1>
          <p>MERN Stack developer</p>
        </div>
        <div className="sm:ml-10">
          <ul className="flex flex-col sm:flex-row justify-between sm:pt-5">
            <li className="sm:flex mx-2 ">
              <HashLink
                className="text-decoration-none text-white"
                smooth
                to={"#"}
              >
                Home
              </HashLink>
            </li>
            <li className="sm:flex mx-2 ">
              <HashLink
                className="text-decoration-none text-white"
                smooth
                to={"#Project"}
              >
                Project
              </HashLink>
            </li>
            <li className="sm:flex mx-2 ">
              <HashLink
                className="text-decoration-none text-white"
                smooth
                to={"#About"}
              >
                About
              </HashLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row  sm:pt-5">
            <li className="sm:flex mx-2 ">
              <HashLink
                target="_blank"
                className="text-decoration-none text-white "
                smooth
                to={"https://www.instagram.com/theganeshsuryawanshi/"}
              >
                <InstagramIcon />
              </HashLink>
            </li>
            <li className="sm:flex mx-2 ">
              <HashLink
                target="_blank"
                className="text-decoration-none text-white flex sm:hidden"
                smooth
                to={
                  "https://api.whatsapp.com/send/?phone=+919309580827&text&type=phone_number&app_absent=0"
                }
              >
                <WhatsAppIcon />
              </HashLink>
              <HashLink
                target="_blank"
                className="text-decoration-none text-white hidden sm:block"
                smooth
                to={
                  "https://api.whatsapp.com/send/?phone=9309580827&text&type=phone_number&app_absent=0"
                }
              >
                <WhatsAppIcon />
              </HashLink>
            </li>
            <li className="sm:flex mx-2 ">
              <HashLink
                target="_blank"
                className="text-decoration-none text-white "
                smooth
                to={"https://linkedin.com/in/ganesh-suryawanshi-585701206"}
              >
                <LinkedInIcon />
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="bg-blue-500 w-full text-gray-100 text-center">© Ganesh Suryawanshi</p>
    </>
  );
};

export default Footer;
