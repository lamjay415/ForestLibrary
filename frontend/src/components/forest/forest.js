import React from 'react';
import { Link } from 'react-router-dom';

import "./forest.css";

export class Forest extends React.Component {

    constructor(props){
        super(props)

        this.state= {
            dataIsShown: false,
            reload: false
        }
        
    }

    // getUsers(){
    //     setTimeout(this.props.fetchUsers(), 2000)
    // }

    componentDidMount() {
        this.props.fetchTrees();
        this.props.fetchUsers();
        // this.getUsers();

    //     window.onload = function() {
    //     if(!window.location.hash) {
    //         window.location = window.location + '#loaded';
    //         window.location.reload();
    //     }
    // }
    this.refreshPage()
    }

    refreshPage = () => {
        this.setState(
            {reload: true},
            () => this.setState({reload: false})
        )
    }
    
 
    render() {
        const trees = (this.props.trees)
        const {loggedIn} = this.props;

        if(!trees){
            return null
        }else{
            return (
        <div className="outer-forest">
            <div className="forest">
                {trees.map((tree, idx) => (
                    <div className="tree" key={idx}> 

                   <Link className="links"
                    to={`/users/${tree._id}`} >
                        <img className="tree-images"
                        src="https://image.flaticon.com/icons/png/64/4319/4319580.png" 
                        onMouseEnter={() => this.setState({dataIsShown: true})}
                        onMouseLeave={() => this.setState({dataIsShown: false})}
                        /> 
                    </Link> 
                        <span className="tree-username">{tree.username}</span>
                    </div>
                
                ))}
            </div>
        </div>
        );
        }
    }
}
export default Forest
