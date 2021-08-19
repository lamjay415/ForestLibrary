import React from 'react';
import { HeartSpinner } from "react-spinners-kit";

import "./forest.css";

export class Forest extends React.Component {

    constructor(props){
        super(props)

        this.state= {
            dataIsShown: false,
            loading: true
        }
    }
    componentDidMount() {
        if(this.props.currentUser){
            this.props.fetchTrees();
        }
    }
    
 
    handleClick(e){
        e.preventDefault()
        
    }

    render() {
        const { loading } = this.state;
        const trees = (this.props.trees)
        console.log(trees);

        if(!trees){
            return null
        }else{
            return (
        <div className="outer-forest">
            <div className="forest">
                {trees.map(tree => (

                    <div className="tree" 
                    onClick={this.handleClick} 
                    onMouseEnter={() => this.setState({dataIsShown: true})}
                    onMouseLeave={() => this.setState({dataIsShown: false})}
                    >  
                    <span>{tree.id} <img src="https://image.flaticon.com/icons/png/64/740/740936.png" /> {this.state.dataIsShown && (
                        <div> this will show up</div>
                        )}  
                    </span>
                     
                    </div>
                ))}
            </div>
        </div>
        );
        }
    }
}
export default Forest
