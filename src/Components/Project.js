import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import note from "./Static/note.jpeg";
import note2 from "./Static/note2.jpeg";
import movie from "./Static/movie.jpeg";
import movie2 from "./Static/movie2.jpeg";
import blog from "./Static/blog.jpeg";
import blog2 from "./Static/blog2.jpeg";
import ecom from "./Static/ecom.jpeg";
import ecom2 from "./Static/ecom2.jpeg";

const Project = () => {
  return (
    <>
      <div id="Project">
        <h1 className="text-3xl font-bold text-center ">Project</h1>
        <p className="text-center">Work Sample</p>

        <div className="container">
          <div
            id="carouselExampleControls"
            class="carousel slide flex justify-center"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active container text-center">
                <div className="sm:flex sm:flex-row w-full">
                  <div class=" sm:w-full flex sm:flex-row">
                    <span>
                      <img src={note} class="h-100" alt="" />
                    </span>
                    <span>
                      <img src={note2} class="h-50 mt-5" alt="" />
                    </span>
                  </div>
                  <div class="w-full text-left">
                    <h4>Note Writing JavaScript Based</h4>
                    <p>
                      Note Writing in online note taking platform with text
                      utility based on JavaScript technology
                    </p>
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      href="https://ganeshsuryawansh.github.io/OnlineNotes.github.io/"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>

              <div class="carousel-item container text-center">
                <div className="sm:flex sm:flex-row w-full">
                  <div class=" sm:w-full flex sm:flex-row">
                    <span>
                      <img src={movie} class="h-100" alt="" />
                    </span>
                    <span>
                      <img src={movie2} class="h-50 mt-5" alt="" />
                    </span>
                  </div>
                  <div class="w-full text-left">
                    <h4>Movies Review React Based</h4>
                    <p>
                      Movies Review is online Review system based on technology
                      react js , tailwind css
                    </p>
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      href="https://moviesreview-ten.vercel.app/"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>

              <div class="carousel-item container text-center">
                <div className="sm:flex sm:flex-row w-full">
                  <div class=" sm:w-full flex sm:flex-row">
                    <span>
                      <img src={ecom} class="h-100" alt="" />
                    </span>
                    <span>
                      <img src={ecom2} class="h-50 mt-5" alt="" />
                    </span>
                  </div>
                  <div class="w-full text-left">
                    <h4>MyCart-ecommerce online Shopping</h4>
                    <p>
                      MyCart online Shopping System based on technology PHP,
                      MYSQL, Bootstrap etc.
                    </p>
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      href="https://github.com/ganeshsuryawansh/ecommerce1"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>

              <div class="carousel-item container text-center">
                <div className="sm:flex sm:flex-row w-full">
                  <div class=" sm:w-full flex sm:flex-row">
                    <span>
                      <img src={blog} class="h-100" alt="" />
                    </span>
                    <span>
                      <img src={blog2} class="h-50 mt-5" alt="" />
                    </span>
                  </div>
                  <div class="w-full text-left">
                    <h4>Blog Website Based on Php</h4>
                    <p>
                      Blog website based on technology like php, JavaScript,
                      tailwind css etc.
                    </p>
                    <a className="btn btn-primary" target="_blank" href="#">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
