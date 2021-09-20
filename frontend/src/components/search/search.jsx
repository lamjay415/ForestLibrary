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
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.book + '&key=' + this.state.apiKey + "&maxResults=40")
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
            <div className="search-div">
                <form className="form-search" onSubmit={this.handleSubmit}>
                        <input className="btn"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Search for Books"
                        value={this.state.book}
                        />
                    <input className="btn-submit" type="submit" value='search' />
                </form>
                <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1126130554%2F13-books-to-help-your-job-search%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D5472%26cropY1%3D547%26cropY2%3D3625'/>
            </div>
        ) } else {
            return (
            <div>
                <div className="search-div">
                    <form className="form-search" onSubmit={this.handleSubmit}>
                        <input className="btn"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Search for Books"
                            value={this.state.book}
                        />
                            <input className="btn-submit" type="submit" value='Search' />
                    </form>
            </div>


                {this.state.detailComponent}

                {!this.state.submitted ? 
                <div className="search-results">
                    <ul className="book-list">
                    {this.state.result.map((book, i) => (
                        <li key={i} class-name='book-list-item'
                            onClick={(e) => {
                            const bookTitle = e.target.alt;
                            this.setState({
                                    
                                    detailComponent:(<div><AddLeaf setDetailComponent={()=>{this.setDetailComponent()}} bookTitle={bookTitle} bookAuthor={!book.volumeInfo.authors.length ? ["No Author"] :book.volumeInfo.authors }/></div>),
                                    submitted:true
                                })
                            }}
                        >
                            <button >
                                
                                {book.volumeInfo.imageLinks!=null ?
                                    <img id="book-img" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                    :
                                    <img id="book-img" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt={book.volumeInfo.title} />

                                    }
                            </button>
                        </li>

                    ))}
                    </ul>
                </div>
                    : null}
                <img className='search-background'src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1126130554%2F13-books-to-help-your-job-search%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D5472%26cropY1%3D547%26cropY2%3D3625'/>
            </div>
            )
    }
    }
}
export default Search;
    