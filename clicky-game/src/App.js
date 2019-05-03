import React from "react";
import "./App.css";
import Header from "./components/header";
import images from "./images.json";
import Gallery from "./components/gallery";

class App extends React.Component {

  state = {
    images: images,
    // selected: [], // indexes which have been selected
    score: 0
  };

  shuffleImages = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({images: array}); 
  }


  render() {
    return (
      <div className="wrapper">
      <Header 
        score={this.state.score}
      />
      {this.state.images.map(i => <Gallery 
        src={i.src}
        key={i.id} 
        id={i.id}
        alt={i.alt}
        onClick={() => this.shuffleImages(images)}
      />)}
      </div>
    );
  }
}

export default App;