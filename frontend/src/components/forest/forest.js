import React from 'react';
import { Link } from 'react-router-dom';

import "./forest.css";

export class Forest extends React.Component {

    constructor(props){
        super(props)

        this.state= {
            dataIsShown: false
        }

        console.log(props);
    }

    componentDidMount() {
        
        if(this.props.currentUser){
            this.props.fetchTrees();
            this.props.fetchUsers();
        }
    }
    
 
    render() {
        const trees = (this.props.trees)

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
                        <span className="tree-username">{tree.username}</span>
                        {this.state.dataIsShown && (
                            <div className="tree-info">Hello</div>
                        )}  
                    </Link>
                    </div>
                ))}
            </div>
        </div>
        );
        }
    }
}
export default Forest
