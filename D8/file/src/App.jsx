// import { useState } from 'react'
// import './App.css'

// function App(){
//   const [count,setCount]=useState(0)
//   const handleClick = () =>{
//     setCount(count + 1);
//   };
//   return(
//     <>
//  <header>
//     <nav class="container nav">
//       <div class="brand">Saurab <span>Khanal</span></div>
//       <ul class="nav-links">
//         <li><a href="#hero">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#education">Education</a></li>
//         <li><a href="#experience">Experience</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact" class="btn-nav">Contact</a></li>
//       </ul>
//     </nav>
//   </header>

//   <section id="hero" class="hero container">
//     <div class="hero-text">
//       <h1>Hi — I'm <span class="highlight">Saurab Khanal</span></h1>
//       <p>BSc CSIT student & aspiring developer focused on web projects, and learning modern technologies.</p>
//       <a href="#projects" class="btn-primary">View Projects</a>
//       <a href="#contact" class="btn-outline">Contact Me</a>
//     </div>
//     <div class="hero-image"></div>
//   </section>

//   <section id="about" class="container section">
//     <h2>About Me</h2>
//     <p>
//       I am a BSc CSIT student at Bernhardt College, currently building real-world projects in HTML, CSS, PHP, and MySQL. I love creating clean, responsive web designs and continuously improving my technical skills.
//     </p>
//   </section>

//   <section id="education" class="container section">
//     <h2>Education</h2>
//     <div class="card">
//       <h3>BSc CSIT</h3>
//       <p>Bernhardt College • 2023 – Present</p>
//     </div>
//     <div class="card">
//       <h3>Higher Secondary (Science)</h3>
//       <p>2021 – 2023</p>
//     </div>
//   </section>


//   <section id="experience" class="container section">
//     <h2>Experience</h2>
//     <div class="card">
//       <h3>Frontend Developer (Personal Projects)</h3>
//       <p>Built responsive websites using HTML, CSS</p>
//     </div>
//   </section>

//   <section id="projects" class="container section">
//     <h2>Projects</h2>
//     <div class="projects-grid">
//       <div class="project-card">
//         <div class="project-img"></div>
//         <h3>Portfolio Website</h3>
//         <p>HTML & CSS — Fully responsive design.</p>
//       </div>
//       <div class="project-card">
//         <div class="project-img"></div>
//         <h3>Anime Catalog</h3>
//         <p>PHP + MySQL beginner CRUD project.</p>
//       </div>
//     </div>
//   </section>

  

//   <footer>
//     <p> &copy; <span id="year"></span> Saurab Khanal. All rights reserved.</p>
//   </footer>
//     </>
//   );
// }
// export default App;
// import React from "react";
// import Post from "./components/post";
// function App(){
//   return<Post/>;
// }
// export default App;


// import "./App.css";

// function App()
// {
//   return <AppRouter />;
// }
// export default App;

// import { useState } from "react";
// import "./App.css";
// import AppRouter from "./router";

// function App() {
//   return <AppRouter />;
// }

// export default App;






import { useState } from "react";
import "./App.css";
import AppRouter from "./router";
import { ThemeProvider} from "./contexts/ThemeContent";
function App()
{
  // const userInfo = {
  //   name: "Saurab Khanal",
  //   role:"Supervisor",
  // };
  // return <Approuter />;
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}
export default App;


