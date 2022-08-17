
import { React } from "react";
require('./card.css')

function App() {
  return (
    <div className="main-container">
      <div className="card-container">
        <div className="banner-container">
          <img src={require("./resource/brown-texture.jpg")} alt="" />
        </div>
        <div className="profile-picture">
          <img src={require("./resource/james.png")} alt="" />
        </div>
        <div className="content">
          <span className="name-tag">Dr Moris Jackson</span>
          <span className="handle">@morisjack</span>
       
          <span className="info">Lorem ipsum, dolor sit amet 
          consectetur adipisicing elit. Unde tenetur impedit 
          at sit nihil dolore qui soluta dolor sunt incidunt. Sunt, 
          ab perspiciatis excepturi modi hic ipsum, distinctio 
          molestiae quidem reiciendis minima architecto perferendis 
          dolorum aspernatur non aliquam ratione!</span>
        </div>


      </div>
    </div>
  );
}

export default App;
