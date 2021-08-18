import React from 'react';
import { withRouter } from 'react-router-dom';
import LeafBox from './leaf_box';
import { Link } from "react-router-dom";

class Leaf extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leaves: []
        };
    }

    componentDidMount() {
        this.props.fetchLeaves();
    }

    componentWillReceiveProps(newState) {
        this.setState({ leaves: newState.leaves });
    }

    render() {
        
        if(!this.state.leaves) return null;
        if (this.state.leaves.length === 0) {
            return (
                <div>
                    <h3>There are no leaves</h3>
                    <Link to="/leaves/new_leaf">Add a Leaf</Link>
                </div>)
        } 
        console.log(this.state.leaves);
            return (
                <div>
                    <h2>All leaves</h2>
                    <Link to="/leaves/new_leaf">Add a Leaf</Link>

                    {this.state.leaves.map((leaf, idx) => (
                        <li key={idx}> <LeafBox title={leaf.title}/> </li>
                    ))}
                </div>
            );
        }
}


export default withRouter(Leaf);
