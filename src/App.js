import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
class Color extends React.Component{

  render()
  {
    document.title="Random Colors using React";
    let style =
    {
      backgroundColor: this.props.hexCode
    }
    return(
    <div className="color" onClick={this.props.update.bind(this,this.props.index)} style={style}>
      <p className="hex">{this.props.hexCode}</p>
    </div>
    );
  }
}
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      num:4,
      colors:[]
    }
    for(let i=0; i<this.state.num; i=i+1)
    {
      this.state.colors.push({hexCode:this.generateHex()});
    }
  }
  generateHex()
  {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }
  updateDiv(index)
  {
    let colors= this.state.colors;
    let currentColor = this.generateHex();
    colors[index].hexCode=currentColor;
    this.setState({colors:colors});
  }
  render()
  {
    return(

      <div className="container">
        { this.state.colors.map((color, index) => <Color key={`color-${index}`} index={index} update={this.updateDiv.bind(this)} hexCode={color.hexCode}></Color>) }
      </div>
    )
  }
  
}

export default App;
