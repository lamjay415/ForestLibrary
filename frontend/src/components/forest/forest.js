import React from 'react';

import "./forest.css";

export class Forest extends React.Component {

    constructor(props){
        super(props)

        this.state= {
            dataIsShown: false
        }
    }
    componentDidMount() {
    this.props.fetchTrees();
    }

    handleClick(e){
        e.preventDefault() 
    }





    render() {

        const trees = (this.props.trees)
        console.log(trees);

        return (
        <div className="outer-forest">
            <div className="forest">
                {trees.map(tree => (

                    <div className="tree" 
                    onClick={this.handleClick} 
                    onMouseEnter={() => this.setState({dataIsShown: true})}
                    onMouseLeave={() => this.setState({dataIsShown: false})}
                    >  
                    <span>{tree.id} 🌳 {this.state.dataIsShown && (
                        <div> this will show up</div>
                    )}  </span>
                     
                    </div>
                    
                ))}
            </div>
        </div>
        );
    }
}
export default Forest
