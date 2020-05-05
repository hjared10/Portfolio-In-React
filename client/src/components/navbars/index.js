import React from "react";

function Navbars() {
  //i could not figure out how to make react serve a pdf.
  return (
    
                  <div>
                    <a className="dropdown-item" href="https://github.com/hjared10">GitHub</a>
                    <a className="dropdown-item" href="https://www.linkedin.com/in/jared-higgins-46479317a/">LinkedIn</a>
                    <div className="dropdown-divider"></div>
                    <div className={'resume-container'}>
                      
                {/* <div id={'resume-pdf'}>You can view, download and print my résumé in pdf format in <a
                    href={'./Jared_Higgins.pdf'}>English</a></div> */}
            </div>
                    {/* <a className="dropdown-item" href="./Jared_Higgins.pdf">Resume</a> */}
                  </div>
                
  );
};

export default Navbars;

//unused version of this component that was supposed to be a navbars, but i was unable to get bootstrap to work with react.
/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id ='nav'>
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Links
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="https://github.com/hjared10">GitHub</a>
                    <a className="dropdown-item" href="https://www.linkedin.com/in/jared-higgins-46479317a/">LinkedIn</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="./assets/Jared_Higgins.pdf">Resume</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav> */