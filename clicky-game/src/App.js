import React from "react";
import "./App.css";
import Header from "./components/header";
import images from "./images.json";
import Gallery from "./components/gallery";

// state = {
//   images: images
// }

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      {images.map(i => <Gallery 
        src={window.location.origin + i.src}
        key={i.id} 
      />)}
      </div>
    );
  }
}

export default App;
