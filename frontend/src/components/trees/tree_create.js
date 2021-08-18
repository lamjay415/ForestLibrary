import React from 'react';

class TreeCreate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          trunk: null,
          newTree: null
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newTree: nextProps.newTree});
  }

  handleSubmit(e) {
    e.preventDefault();
    let tree = {
       book: this.state.newTree
    };

    this.props.makeTree(tree); 
  }

  update() {
    return e => this.setState({
      book: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
          {/* <h1>{this.props.currentUser.username}'s Tree</h1> */}
                <div>
                    <input type="submit" value="Create Tree" />
                </div>
            </form>
        </div>
    )
  }
}

export default TreeCreate;