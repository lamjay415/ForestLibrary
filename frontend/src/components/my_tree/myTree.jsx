/* eslint-disable no-useless-constructor */
import React from 'react';

class MyTree extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        let leaves_div = this.props.leaves.map((leaf)=>{
            let date = leaf.date.slice(0,10);
            return(
                <div>
                    <div>Title: {leaf.title}</div>
                    <div>Date added: {date}</div>
                </div>
            )
        });

        return(
            <div className='tree-container'>
                {leaves_div}
            </div>
        )
    }
}

export default MyTree;