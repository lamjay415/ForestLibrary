import React from 'react';
import LeafBox from './leaf_box';

class AddLeaf extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.newLeaf;
        // this.state = {
        //     title: "",
        //     // newLeaf: ""
        //     author: "",
        //     tree: this.props.params.treeId
        // };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }
   

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newLeaf: nextProps.newLeaf.title });
    // }

    handleSubmit(e) {
        e.preventDefault();
        let leaf = {
            title: this.state.title
        };

        this.props.addLeaf(leaf);
        this.setState({ title: '' });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update("title")}
                            placeholder="Add a Book..."
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
