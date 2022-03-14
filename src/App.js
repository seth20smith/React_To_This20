import './App.css';
import React from 'react';
// import { Route, Switch, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div class="App">
<div>
  <header id="headerImg">
    <nav>
      <h1>
        Portfolio-For-Pros
      </h1>
    </nav>
    <nav>
      <ul>
        <li>
          <a href="#About Me">About Me</a>
        </li>
        <li>
          <a href="#Work">Work</a>
        </li>
        <li>
          <a href="#GitHub">Resume</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul> 
    </nav>
  </header>
  {/* Header ends */}
  {/* Body Starts here formatt */}
  {/* About me*/}
  <section class="About Me">
    <h3 id="About Me">About Me</h3>
    <div class="About-Me-Block-1">
    </div>
  </section>
  <div class="container">
    <section class="building-blocks">
      <div class="building-block-1 left-side">
        <h3>Student Coder</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ea at omnis asperiores, voluptas veniam voluptatem temporibus quaerat deleniti dolore, magnam fuga quae animi iste quis sed ipsa autem accusantium.</p>
      </div>
      <div class="building-block-1 left-side">
        <h3>Goals</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ducimus veniam eius, sapiente ipsam nobis excepturi labore odio nihil et laborum vel quis provident perspiciatis. Repellendus, sapiente impedit! Tempore, natus.</p>
      </div>
      <div class="building-block-1 left-side">
        <h3>Highlights</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ea at omnis asperiores, voluptas veniam voluptatem temporibus quaerat deleniti dolore, magnam fuga quae animi iste quis sed ipsa autem accusantium.</p>
      </div>
    </section>
  </div>
  {/* work*/}
  <section class="Work">
    <h3 id="Work">Work</h3>
    <div class="container2">
      <div class="box1">
        <a href="https://seth20smith.github.io/weather-dashboard-wk-6/"> <h3>Weather Dashboard</h3></a>
        <img src={require('./Images/Screen Shot 2021-11-14 at 2.37.41 PM.png')} height={200} width={200} alt="img"/>
      </div>
      <div class="box2">
        <a href="https://seth20smith.github.io/typical9to5/">        <h3> Work Day Planner</h3>
        </a>
        <img src={require('./Images/Screen Shot 2021-11-06 at 11.37.44 AM.png')} height={200} width={200} alt="img"/>
      </div> 
      <div class="box3">
        <a href="https://guarded-wildwood-06188.herokuapp.com/"><h3> Note Taker</h3></a>
        <img src={require('./Images/Screen Shot 2021-12-17 at 7.53.36 PM.png')} height={200} width={200} alt="img"/>
      </div>
    </div>
    {/* resume*/}
    <section class="Social">
    <div class = "icon"> </div>
      <h3 id="GitHub">GitHub</h3>
      <div class="container">
        <section class="building-blocks">
          <div class="building-block-2">
            <a href="https://github.com/seth20smith"> GitHub </a> <br />
            <div class="fab fa-linkedin"></div>
            <a href="https://www.linkedin.com/in/seth20smith"> LinkedIn </a>
          </div>

        </section>
      </div>
      {/*Contact*/}
      <footer>
        <div>
          <section class="Contact">
            <h3 id="Contact">Contact</h3>
          </section>
          <hr />
          Seth Smith <br />
          Sacramento, Ca <br />
          Phone: (510.282.7693)<br />
          Email: <a href="seth20smith@gmail.com">seth20smith@gmail.com</a>
        </div>
      </footer>
    </section></section></div>

 </div>

  );
}

export default App;
