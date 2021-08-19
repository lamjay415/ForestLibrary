import React from 'react';
import LeafBox from './leaf_box';

class AddLeaf extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.newLeaf;
       

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }
   

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newLeaf: nextProps.newLeaf.title });
    // }

    handleSubmit(e) {
        e.preventDefault();
        let leaf = {
            title: this.props.data[0].volumeInfo.title,
            userId: this.props.currentUser,
            category: this.props.data[0].volumeInfo.categories[0],    
        };
        console.log(leaf);
        this.props.addLeaf(leaf);
        this.setState({ title: '' });
    }

    update(field) {
        return (e => {
            this.setState({ [field]: e.currentTarget.value });
            
    })}

    render() {
        if(!this.props.data) return null;
        if(this.props.data.length === 0) return null;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            value={this.props.data[0].volumeInfo.title}
                            // value={this.state.title}
                            onChange={this.update("title")}
                        />
                        <br/>
                        <input type="text"
                            value={this.props.data[0].volumeInfo.categories[0]}
                            // value={this.state.title}
                            onChange={this.update("category")}
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                {/* <LeafBox title={this.state.title} /> */}
            </div>
        )
    }
}

export default AddLeaf;
