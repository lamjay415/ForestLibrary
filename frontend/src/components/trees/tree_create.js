import React from 'react';

class TreeCreate extends React.Component {
  constructor(props) {
      super(props);

      // this.state = {
      //     text: "",
      //     newTree: ""
      // }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  // componentWillReceiveProps(nextProps) {
  //     this.setState({newTree: nextProps.newTree});
  // }

  handleSubmit(e) {
    e.preventDefault();
    let tree = {
      title: this.props.currentUser.username
    };
    this.props.makeTree(tree); 
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <h1>{this.props.currentUser.username}</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" />
                    <input className='links-container'   
                    type="submit" 
                    value="Create tree" />
                </div>
            </form>
        </div>
    )
  }
}

export default TreeCreate;