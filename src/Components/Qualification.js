import React from "react";

const Qualification = () => {
  return (
    <section className="my-32 flex flex-col items-center justify-center text-sm ">
      <h1 className="text-3xl font-bold text-center ">Qualification</h1>
      <div className="bg-blue-500 w-1 flex flex-col items-center justify-center h-10 "></div>
      <div className="h-60 w-60 bg-blue-500 p-10 text-white">
        <h1 className="text-xl">MERN STACK COURSE</h1>
        <h3 className="text-sm">
          TechRel Training Insttute Pune <br /> Duration - 6 Month <br /> Aug
          2023 - Jan 2024
        </h3>
        <div className=" h-14 w-14"> </div>
      </div>
      <div className="bg-blue-500 w-1 flex flex-col items-center justify-center h-32 ">
        <div className="bg-blue-500 p-2 rounded-full">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="25px"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="h-60 w-60 bg-blue-500 p-10 text-white">
        <h1 className="text-xl">Bachelor Of Computer Application</h1>
        <h3 className="text-sm">
          Pune University <br /> 8.46 CGPA <br />
          2020 - 2023
        </h3>
      </div>
      <div className="bg-blue-500 w-1 flex flex-col items-center justify-center h-32">
        <div className="bg-blue-500 p-2 rounded-full">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 640 512"
            height="25px"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
          </svg>
        </div>
      </div>
      <div className="h-60 w-60 bg-blue-500 p-10 text-white">
        <h1 className="text-xl">HSC - Science</h1>
        <h3 className="text-sm">
          Maharashtra - State Borad <br /> 62.00% <br />
          2018 - 2020
        </h3>
      </div>
      <div className="bg-blue-500 w-1 flex flex-col items-center justify-center h-32 ">
        <div className="bg-blue-500 p-2 rounded-full">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 640 512"
            height="25px"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </div>
      </div>
      <div className="h-60 w-60 bg-blue-500 p-10 text-white">
        <h1 className="text-xl">SSC</h1>
        <h3 className="text-sm">
          Maharashtra - State Borad
          <br /> 72.00 % <br /> March 2018
        </h3>
      </div>
      <div className="bg-blue-500 w-1 flex flex-col items-center justify-center h-10 "></div>
    </section>
  );
};

export default Qualification;
