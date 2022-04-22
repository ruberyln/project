
import './App.css';
import Slider from "./Slider";
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
function App() {
  return (
    
    <><><><div className="App">
      <header className="App-header">
        <center><h1><b> RUBERYLN COUTURE</b> </h1> </center>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
        
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.ruberyln.ecwid.com">SHOP</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">RENT-A-DRESS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CONTACT US</a>
                </li>

              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>

            </div>
          </div>
        </nav>

      </header>
    </div><center><ImageSlider slides={SliderData} /></center></>

      <p></p>
      <center><button type="button" class="btn btn-dark">LAUNCHING SOON </button><p></p></center></>
      <center><h2 class="font-Garamond">OUR MISSION</h2></center>
      <p class="lh-lg">The Fashion world contributes to about 30% or more of the current environmental crisis, RUBERYLN as a brand 
      is focused on sustainable fashion. we will achieve this by engaging in slow fashion, creating minimum statement and long lasting pieces
  , making use of organic fabrics to create our pieces. We will also be recycling your used pieces you do not desire anymore which you have previously purchased from us.
  We are working hard to make the world a better place and we believe you will join and support us in making our world Green again</p>
      
      <center><h4 class="font-Garamond">JOIN THE WAITING LIST</h4></center>
      

      <form class="font-Garamond">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">EMAIL ADDRESS</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            <div id="emailHelp" class="form-text">Join the waiting list to receive updates when we launch </div>
            <div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">I consent to recieve emails regarding promotions for this brand </label>
  </div>
           <button type="submit" class="btn btn-dark">Submit</button></div>
 
      </form></>

      
  )
      
  
}

export default App;
