import React, { useState, useEffect } from 'react';
import Button from "../components/Button";
import '../styles/DisplayDiv.css';

export default function Home() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    async function getQuote() {
        try {
            const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes/random");
            const myJson = await response.json();
            const quoteToDisplay = myJson["data"][0]["quoteText"];
            const authorName = myJson["data"][0]["quoteAuthor"];
            setQuote(quoteToDisplay);
            setAuthor(authorName);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    useEffect(() => {
        // Fetch the initial quote when the component mounts
        getQuote();
    }, []);

    return (
        <div className="display-quote-div">
            <h1 className='display-quote-area'>
                “ {quote} ”
            </h1>
            <h2> ~ {author}</h2>
            <Button onClick={getQuote} />
        </div>
    );
}