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
        if(this.props.currentUser){
            this.props.fetchTrees();
        }
    }
    
 
    handleClick(e){
        e.preventDefault()
        
    }

    render() {
        const trees = (this.props.trees)
        console.log(trees);

        if(!trees){
            return null
        }else{
            return (
        <div className="outer-forest">
            <div className="forest">
                {trees.map((tree, idx) => (

                    <div className="tree" 
                    onClick={this.handleClick} 
                    >  
                    <span key={idx}
                    >{tree.id} <img 
                    src="https://image.flaticon.com/icons/png/64/4319/4319580.png" 
                    onMouseEnter={() => this.setState({dataIsShown: true})}
                    onMouseLeave={() => this.setState({dataIsShown: false})}
                    /> 
                    {this.state.dataIsShown && (
                        <div> This will show up</div>
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
