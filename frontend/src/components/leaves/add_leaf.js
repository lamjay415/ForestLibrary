import React from 'react';
import { Link } from 'react-router-dom';

class AddLeaf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leaf: {
                title: this.props.bookTitle,
                userId: this.props.session.user.id,
                author: this.props.bookAuthor, 
            }
          
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }
   

   

    handleSubmit(e) {
        e.preventDefault();
        
     
        this.props.addLeaf(this.state.leaf);
        this.setState({leaf: { title: '' }});
        // document.getElementsByClassName("btn")[0].value = '';
        // console.log(document.getElementsByClassName("input")[0].value);
        // console.log(document.getElementsByClassName("input")[1].value);
        document.getElementsByClassName("input")[0].value = '';
        document.getElementsByClassName("input")[1].value = '';


    }

    update(field) {
        return (e => {
            this.setState({ leaf: { [field]: e.currentTarget.value }});        
        } )  
    }

    render() {
        if(!this.state.leaf.author) return null;
        if(!this.state.leaf.title) return null;
        return (
            <div>
                <h2>Add Leaf</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            className="input"
                            value={this.state.leaf.title}
                            onChange={this.update("title")}
                        />
                        <br/>
                        <input type="text"
                            className="input"
                            value={this.state.leaf.author[0]}
                            onChange={this.update("author")}
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
 
            </div>
        )
    }
}

export default AddLeaf;
