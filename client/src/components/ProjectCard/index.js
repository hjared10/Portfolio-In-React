import React from 'react';
import "./style.css";
import quizImage from "./quiz.PNG";
import Game from "./prooneimg.PNG";
import Op from "./opimg.PNG";
import Dragon from "./dragonimg.png";
import Gen from "./genimg.PNG";
import Calendar from "./calimg.PNG";

function ProjectCard() {
return (
  <div>
<div className="card">
<div className="container">
<h4><b>Accessible Calendar</b></h4>
                
<p>Intended to be a calendar app for a variety of people.  It gives verbal alerts about upcoming events.  Developed as a team. It isnt a hundred percent functional, but was a great learning experience.</p>
</div>
<div className="img-container">
<img alt="Calendar" src={Calendar} className='center'/>
</div>
</div>
            
<div className="card">
<div className="container">
<h4><b>Game of the Rings</b></h4>
                
<p>A short story generator with some random elements and a lot of adventure.  Developed as a collaborative effort, this app is simple but i'm quite found of it.</p>
</div>
<div className="img-container">
<img alt="Game" src={Game} className='center'/>
</div>
</div>

<div className="card">
<div className="container">
<h4><b>Management system</b></h4>
                
<p>This is a command line application in node that allows users to manage a mysql databse full of users.  Allows CRUD and to search by name, role, or department.</p>
</div>
<div className="img-container">
<img alt="Manager" src={Op} className='center'/>
</div>
</div>

<div className="card">
<div className="container">
<h4><b>Dragon Designer</b></h4>
                
<p>A fun little project to show off express and handelbars.</p>
</div>
<div className="img-container">
<img alt="dragon" src={Dragon} className='center'/>
</div>
</div>

<div className="card">
<div className="container">
<h4><b>Developer Profile</b></h4>
                
<p>A command line node app that gets information about a developer from a git hub user name.</p>
</div>
<div className="img-container">
<img alt="Gen" src={Gen} className='center' style={{ width: "200px", margin: "0 auto" }}/>
</div>
</div>

<div className="card">
<div className="container">
<h4><b>Javaquiz</b></h4>
                
<p>Three multiple choice quizes on various topics.</p>
</div>
<div className="img-container">
<img alt="Quiz" src={quizImage} className='center'/>
</div>
</div>

</div>
)
    }

export default ProjectCard;

//unused version of this file for state function in JSON.  I couldnt figure out how to make images display in this way.
// [
//   {
//       "id": 1,
//       "title": "Accessible calendar",
//       "description": "Intended to be a calendar app for a variety of people.  It gives verbal alerts about upcoming events.  Developed as a team. It isnt a hundred percent functional, but was a great learning experience.",
//       "image": "./src/assets/calimg.PNG"
//   },
//     {
//         "id": 2,
//         "title": "Game of the Rings",
//         "description": "A short story generator with some random elements and a lot of adventure.  Developed as a collaborative effort, this app is simple but i'm quite found of it.",
//         "image": "./src/assets/prooneimg.PNG"
//       },
//       {
//           "id": 3,
//           "title": "Management system",
//           "description": "This is a command line application in node that allows users to manage a mysql databse full of users.  Allows CRUD and to search by name, role, or department.",
//           "image": "./src/assets/opimg.PNG"
//       },
//       {
//           "id": 4,
//           "title": "Dragon Designer",
//           "description": "A fun little project to show off express and handelbars.",
//           "image": "./src/assets/dragonimg.PNG"
//       },
//       {
//           "id": 5,
//           "title": "Developer Profile",
//           "description": "A command line node app that gets information about a developer from a git hub user name.",
//           "image": "./src/assets/genimg.PNG"
//       },
//       {
//           "id":6,
//           "title": "Javaquiz",
//           "description": "Three multiple choice quizes on various topics.",
//           "image": "./assets/quiz.PNG"
//       }
//   ]