import React from 'react';
import LeafBox from './leaf_box';

class AddLeaf extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            newLeaf: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newLeaf: nextProps.newLeaf.title });
    }

    handleSubmit(e) {
        e.preventDefault();
        let leaf = {
            title: this.state.title
        };

        this.props.addLeaf(leaf);
        this.setState({ title: '' })
    }

    update() {
        return e => this.setState({
            title: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update()}
                            placeholder="Add a Book..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                <LeafBox title={this.state.newTweet} />
            </div>
        )
    }
}

export default AddLeaf;
