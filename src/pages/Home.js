import React, { useState, useEffect } from 'react';
import Button from "../components/Button";
import '../styles/DisplayDiv.css';

export default function Home() {
    const [quote, setQuote] = useState('Getting the quote');
    const [author, setAuthor] = useState('');
    
    async function getQuote() {
        setQuote("Getting the quote")
        const apiKey = process.env.REACT_APP_API_KEY;
        if (!apiKey) {
          throw new Error('API key not found in environment variables');
        }
        try {
            const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
                headers: {
                    'X-Api-Key': apiKey
                }
            });
      
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
      
            const data = await response.json();
            var quoteData = data[0];
            setQuote(quoteData['quote']);
            setAuthor(quoteData['author'])
        } catch (error) {
          console.error('Error fetching quote:', error);
          throw error;
        }
    }
    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className='root-content'>
            <div className="display-quote-div">
                <h2 className={`display-quote-area ${quote === 'Getting the quote' ? 'loading' : ''}`}>
                    “ {quote} ”
                </h2>
                <h4> ~ {author}</h4>
            </div>
            <div className='root-button'>
                <Button onClick={getQuote} />
            </div>
        </div>
    );
}