/* eslint-disable no-useless-constructor */
import React from 'react';

class MyTree extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.curLeaf = '';
    }

    handleClick(leaf){
        return e => this.setState({curLeaf: leaf});
    }

    render(){

        let leaves_div = this.props.leaves.map((leaf)=>{
            let date = leaf.date.slice(0,10);
            return(
                <div className='tree-leaf' onClick={this.handleClick(leaf).bind(this)}>
                    <div>{leaf.title}</div>
                </div>
            )
        });

        let leaf_display = this.state.curLeaf === '' ? null : 
        (<div className='tree-leaf-info'>
            Title: {this.state.curLeaf.title}
            </div>)

        return(
            <div className='tree-container'>
                {leaves_div}
                {leaf_display}
            </div>
        )
    }
}

export default MyTree;