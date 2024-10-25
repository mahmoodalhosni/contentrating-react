
import React, { Component } from 'react';
import './ContentRating.css';

// ContentRating is actually the web component that is currently the main web content that is called from the "App.jsx"
class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,

      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      },

      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
      }

    };
  }
  render() {
    return (
     <>
<div className='content-rating'>
  <p>
    React is an intuitive javascript library that handles the DOM efficiently and makes it reliably interactive and responsive.
    </p>
    
  <div className='rating-buttons'>
    <button className='like-button' onClick={this.state.handleLike}>
      Like ({this.state.likes})
    </button>

    <button className='dislike-button' onClick={this.state.handleDislike}>
      Dislike ({this.state.dislikes})
    </button>
  </div>
    </div>     
    </>
    );
  }
}

export default ContentRating;
