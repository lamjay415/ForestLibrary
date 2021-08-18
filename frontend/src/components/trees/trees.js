import React, { Component } from 'react';
import "./tree.css";

export class Trees extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            trees: []
        }
    }
    componentWillMount() {
    this.props.fetchTrees();
    }

    componentWillReceiveProps(newState) {
    this.setState({ trees: newState.trees });
   }


    render() {

        return (
        <div>
            <h2>All trees</h2>
        </div>
        );
    }
}
export default Trees
