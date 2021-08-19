import React, { useState, useEffect } from "react";
import  ReactDOM  from "react-router-dom";
import axios from 'axios';
import  MetaTags  from 'react-meta-tags'



export default function () {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyB8uY1e1Cxe0tLz_rRJtjqjOGZb3Sw2ITA");
    useEffect(()=> {
        
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/platform.js'
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    
    function handleSubmit(e) {
        e.preventDefault();
      
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=' + apiKey)
            .then(response => response.json())
            .then(data => setResult(data.items));
    }
    function handleChange(e) {
        const book = e.target.value;
        setBook(book);
    }

    return (
        <div>
           
            <MetaTags>
                <meta name="google-signin-client_id" content="911098907499-qsvis5g9cis046r19e676hu1jlne0j3g.apps.googleusercontent.com"></meta>
            </MetaTags>
           
            <form onSubmit={handleSubmit}>
                <input type="text"
                    onChange={handleChange}
                    placeholder="Search for Books"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}