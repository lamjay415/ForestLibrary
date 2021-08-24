import React from "react";
import AddLeaf from '../leaves/add_leaf_container';
import './search.css'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            book: "",
            apiKey: "AIzaSyB8uY1e1Cxe0tLz_rRJtjqjOGZb3Sw2ITA",
            result: [],
            detailComponent:(<div></div>),
            warning:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleBook = this.handleBook.bind(this);
    }
   


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.book.length <= 0){
            //uyari ver
            this.setState({
                warning:true
            })
        }else{
            this.setState({
                warning:false
            })
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.book + '&key=' + this.state.apiKey + "&maxResults=20")
            .then(response => response.json())
            .then((data) => {
                this.setState({ book: "", result: data.items, apiKey: "AIzaSyB8uY1e1Cxe0tLz_rRJtjqjOGZb3Sw2ITA" });
            }).catch(err=> console.log(err));
            if (!this.state.result) return null;
            if (this.state.result.length === 0) return null;
            console.log(this.state.result.length);
        }
        
       
      


    }
    handleChange(e) {
        this.setState({ book: e.target.value, apiKey: "AIzaSyB8uY1e1Cxe0tLz_rRJtjqjOGZb3Sw2ITA" , result: []});

    }
   

    render () {
        if(this.state.result === 0) return null;
        if(this.state.warning) {
            return (
            <div>
                <h3>Enter a book name</h3>
                <form className="form-search" onSubmit={this.handleSubmit}>
                    <input className="btn"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Search for Books"
                        value={this.state.book}
                    />
                    <input className="btn" type="submit" value='search' />
                </form>
            </div>
        ) } else {
            return (
            <div>
                <form className="form-search" onSubmit={this.handleSubmit}>
                    <input className="btn"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Search for Books"
                        value={this.state.book}
                    />
                    <input className="btn" type="submit" value='search' />
                </form>

                {this.state.detailComponent}
                <ul>
                    {this.state.result.map((book, i) => (
                        <li key={i}>
                            <button onClick={(e) => {
                                const bookTitle = e.target.alt;
                                console.log(bookTitle);
                                this.setState({
                                    
                                    detailComponent:(<div style={{postition:"absolute"}}><AddLeaf bookTitle={bookTitle}/></div>)
                                })
                            }}>
                                <img id="book-img" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            </button>
                        </li>

                    ))}
                </ul>

            </div>
        )
    }
    }
}
export default Search;
    