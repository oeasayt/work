import './App.css';
import React from 'react';
import Block from "./components/Block";

const images = ['1.png', '2.png', '3.png', '4.png']

class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {image : ''}
  }

  changeImage = image =>
  {
      this.setState({image : this.state.image ? '' : image})
  }

  renderNorm = () =>
  {
    return (
        <div className={'wrapper large'}>
              {images.map(item => <Block size={'small'} image={item} 
              key={item} changeImage={this.changeImage}/>)}
        </div>
    );
  }

  renderLarge = () =>
  {
      return (
          <div className={'wrapper large'}>
              <Block size={'large'} image={this.state.image}  
                  changeImage={this.changeImage}/>
          </div>
      )
  }

  render() {
      if(this.state.image)
          return this.renderLarge()
      else
          return this.renderNorm()
  }
}

export default App;
