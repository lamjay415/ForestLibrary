import React, { useState, useEffect } from "react";
import AddLeaf from '../leaves/add_leaf_container';
import './search.css'

export default function () {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyB8uY1e1Cxe0tLz_rRJtjqjOGZb3Sw2ITA");
    
    
    function handleSubmit(e) {
        e.preventDefault();
      
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=' + apiKey)
            .then(response => response.json())
            .then((data) => {
                setResult(data.items);

            });
            if(!result) return null;
            if(result.length === 0) return null;
           
            console.log(result[0]);
            console.log(result[0].volumeInfo.title);
        
    }
    function handleChange(e) {
        const book = e.target.value;
        setBook(book);
      
    }

    return (
        <div>
            <form className="form-search" onSubmit={handleSubmit}>
                <input className="btn"
                 type="text"
                    onChange={handleChange}
                    placeholder="Search for Books"
                />
                <button className="btn" type="submit">Search</button>
            </form>
            
            <AddLeaf data={result}/>
        </div>
    )
}