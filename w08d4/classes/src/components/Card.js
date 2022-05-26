// 1
import React, {Component} from 'react';

// 2
class Card extends Component {

  constructor(props) {
    super(props); //
    console.log('this.props',this.props);
    this.state = {
        likes: 0, 
        dislikes: 0,
        intervalReference: null
      }; //
      // this.handleClick = this.handleClick.bind(this);
  };

  handleClick = () => {
  //    setLikes(prev => prev + 1);
      this.setState({likes: this.state.likes + 1});
    };

// LIFE CYCLES

  componentDidMount(){
    console.log('componentDidMount');
    // const intRef = setInterval(() => {console.log('i am alive'), 500});
    // this.setState({intervalReference: intRef});
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
    document.title = `Likes: ${this.state.likes}`;
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.state.intervalReference);
  }

  render(){

    return (
      <div>
        <h1>{this.props.name}</h1>
        <img
          src={this.props.img}
        />
        <div>Likes: {this.state.likes}</div>
        <button onClick={this.handleClick}>Like</button>
      </div>
    );
  }

}

//3
export default Card;