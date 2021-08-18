import React from 'react';

class LeafBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

export default LeafBox;