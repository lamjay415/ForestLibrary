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
            detailComponent: null,

            warning:false,
            submitted:false
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
                warning: true,
            })
        }else{
            this.setState({
                warning:false,
                submitted:false,
                detailComponent:null

            })
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.book + '&key=' + this.state.apiKey + "&maxResults=20")
            .then(response => response.json())
            .then((data) => {
                this.setState({ book: "", result: data.items, apiKey: "AIzaSyB8uY1e1Cxe0tLz_rRJtjqjOGZb3Sw2ITA" });
            }).catch(err=> console.log(err));
        
            if (!this.state.result) return null;
            if (this.state.result.length === 0) return null;
           
        }
        
       
      


    }
    handleChange(e) {
        this.setState({ book: e.target.value, apiKey: "AIzaSyB8uY1e1Cxe0tLz_rRJtjqjOGZb3Sw2ITA" , result: []});

    }

    setDetailComponent(){
        this.setState({
            detailComponent:null
        });
    }
   

    render () {
        if(!this.state.result) return null;
        if(this.state.result === 0) return null;
        if(this.state.warning) {
            return (
            <div>
                <h3 id="search-bar">Enter a book title</h3>
                <form className="form-search" onSubmit={this.handleSubmit}>
                    <input className="btn"
                    id="btn-submit"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Search for Books"
                        value={this.state.book}
                    />
                    <input className="btn" id="btn-submit" type="submit" value='search' />
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
                    <input className="btn" id="btn-submit" type="submit" value='search' />
                </form>


                {this.state.detailComponent}

                {!this.state.submitted ? 
                <ul>
                    {this.state.result.map((book, i) => (
                        <li key={i}>
                            <button onClick={(e) => {
                                const bookTitle = e.target.alt;
                                this.setState({
                                    
                                    detailComponent:(<div><AddLeaf setDetailComponent={()=>{this.setDetailComponent()}} bookTitle={bookTitle} bookAuthor={book.volumeInfo.authors.length <= 0 ? ["No Author"] :book.volumeInfo.authors }/></div>),
                                    submitted:true
                                })
                            }}>
                                
                                {book.volumeInfo.imageLinks!=null ?
                                    <img id="book-img" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                    :
                                    <img id="book-img" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt={book.volumeInfo.title} />

                                    }
                            </button>
                        </li>

                    ))}
                </ul>
                : null}

            </div>
        )
    }
    }
}
export default Search;
    