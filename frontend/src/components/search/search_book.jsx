import React, { useState, useEffect } from "react";
import AddLeaf from '../leaves/add_leaf_container';
import './search.css'

export default function Search() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyB8uY1e1Cxe0tLz_rRJtjqjOGZb3Sw2ITA");
    
    
    function handleSubmit(e) {
        e.preventDefault();
      
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=' + apiKey +"&maxResults=20")
            .then(response => response.json())
            .then((data) => {
                setResult(data.items);
            });
        if(!result) return null;
        if(result.length === 0) return null;
        console.log(result.length);
        // console.log(result[0].volumeInfo.imageLinks.thumbnail);
        // document.getElementsByClassName("btn")[0].value = "";
        // setBook("");

        
    }
    function handleChange(e) {
        setBook(e.target.value);
      
    }
    function handleBook(element){
        const book = element.target.alt;
        console.log(book);
        // return <AddLeaf bookTitle={book} />
        return <div><h3>Heyyy</h3></div>
        
      
    }
    

    return (
        <div>
            <form className="form-search" onSubmit={handleSubmit}>
                <input className="btn"
                 type="text"
                    onChange={handleChange}
                    placeholder="Search for Books"
                />
                <input className="btn" type="submit" value='search'/>
            </form>
            
            
            <ul>
                {result.map((book, i) => (
                    <li key={i}>
                        <button onClick={handleBook}>
                            <img id="book-img" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                        </button>
                    </li>
                    
                ))}
            </ul>
           
        </div>
    )
}