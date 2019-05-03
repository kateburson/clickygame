import React from "react";
import "./App.css";
import Header from "./components/header";
import images from "./images.json";
import Gallery from "./components/gallery";

class App extends React.Component {

  state = {
    clicked: false
  }

  handleClick = (id) => {
    let clicked = [];
    clicked.push(id);
  }

  shuffle = (array) => {
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
    return array;
  }

  render() {
    return (
      <div className="wrapper">
      <Header />
      {this.shuffle(images).map(i => <Gallery 
        src={i.src}
        key={i.id} 
        id={i.id}
        alt={i.alt}
        onClick={() => this.handleClick(i.id)}
      />)}
      </div>
    );
  }
}

export default App;
