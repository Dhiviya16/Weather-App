import axios from "axios";
import { useEffect, useState } from "react";

const Quote = () => {
    const [quote, setQuote] = useState('')
    useEffect(() => {
        async function getQuote() {
        try {
            const result = await axios.get('https://stoicquotesapi.com/v1/api/quotes/random')
            setQuote(result.data.body)
        }
        catch (err) {
            console.error(err)
        }
    }
    getQuote()
    }, [])

    return ( 
        <div className="quote">
        {quote && <p style={{padding: "20px"}}>"{quote}"</p>}
        </div>
     );
}
 
export default Quote;
