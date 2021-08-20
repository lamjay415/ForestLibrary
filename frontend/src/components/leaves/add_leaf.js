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
            title: this.props.data[0].volumeInfo.title,
            userId: this.props.session.user.id,
            category: this.props.data[0].volumeInfo.categories[0],    
        };
     
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
        console.log(this.props.data[0]);
        console.log(this.props.data[0].volumeInfo.infoLink);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            value={this.props.data[0].volumeInfo.title}
                            onChange={this.update("title")}
                        />
                        <br/>
                        <input type="text"
                            value={this.props.data[0].volumeInfo.categories[0]}
                            onChange={this.update("category")}
                        />
                        <input type="submit" value="Submit" />
                        <br/>
                        <Link to={this.props.data[0].volumeInfo.infoLink}>for more information</Link>
                    </div>
                </form>
                <br />
                {/* <LeafBox title={this.state.title} /> */}
            </div>
        )
    }
}

export default AddLeaf;
