import React from 'react';
import { Link } from 'react-router-dom';
import './tree.css';
class TreeCreate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          username: this.props.currentUser.username,
          title: '',
          author: '',
          year: '',
          img: '',
          link: '',
          review: ''
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  // DATA COMES FROM TREE FROM NOT FROM LEAVES.
  handleSubmit(e) {
    e.preventDefault();
    const tree = {
       username: this.props.currentUser.username,
       title: this.state.title,
       author: this.state.author,
       year: this.state.year,
       img: this.state.img
    };

    this.props.makeTree(tree); 
   }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
        <div className="tree-form-container">
          <div className="tree-form">
           <form onSubmit={this.handleSubmit}>
          {/* <h1>{this.props.currentUser.username}'s Tree</h1> */}
          
            <input type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                  placeholder="Book title"
              />
              <br />
              <input type="text"
                  value={this.state.author}
                  onChange={this.update("author")}
                  placeholder="Who wrote this book??"
              />
              <br />
              <input type="date"
                  value={this.state.year}
                  onChange={this.update("year")}
              />
              <br />
              <input type="file"
                  value={this.state.img}
                  onChange={this.update("img")}
              />
              <br />              
                <input className="btn-tree-form" type="submit" value="Create Tree" />
            </form>

          </div>
        </div>
    )
  }
}

export default TreeCreate;