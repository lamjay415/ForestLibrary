import React, { useState } from "react";
import  ReactDOM  from "react-router-dom";
import axios from 'axios';
import { get } from "mongoose";


export default function () {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyDQabk_IpaQPQbgX2a2Yes2QQiiUHxPC50");

    function handleSubmit(e) {
        e.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=' + apiKey)
            .then(data=> {
                setResult(data.data.items)
            })
    }
    function handleChange(e) {
        const book = e.target.value;
        setBook(book);
    }

    return (
        <div>
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