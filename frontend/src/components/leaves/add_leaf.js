import React from 'react';
import { Link } from 'react-router-dom';

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
            title: this.props.bookTitle,
            userId: this.props.session.user.id,
        };
     
        this.props.addLeaf(leaf);
        this.setState({ title: '' });
        // document.getElementsByClassName("btn")[0].value = '';
        // console.log(document.getElementsByClassName("input")[0].value);
        // console.log(document.getElementsByClassName("input")[1].value);
        document.getElementsByClassName("input")[0].value = '';
        // document.getElementsByClassName("input")[1].value = '';


    }

    update(field) {
        return ((e)=> console.log(e))
        // return (e => {
        //     this.setState({ [field]: e.currentTarget.value });
            
    }

    render() {
     
        return (
            <div>
                <h2>Add Leaf</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            className="input"
                            value={this.props.bookTitle}
                            onChange={this.update("title")}
                        />
                        <br/>
                        {/* <input type="text"
                            className="input"
                            value={this.props.data[0].volumeInfo.categories[0]}
                            onChange={this.update("category")}
                        /> */}
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
 
            </div>
        )
    }
}

export default AddLeaf;
