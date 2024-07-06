import React, { useEffect, useState } from 'react';
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/api/shorten', {
            method: 'POST', // or 'GET' if your backend expects a GET request
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: inputValue }), // Send the inputValue as part of the request body if needed
        })
        .then(response => response.json()) // Assuming the response is JSON
        .then(data => {
            setShortenLink(data.shortenedUrl); // This line uses setShortenLink
        })
        .catch(err => {
            setError(err);
            console.error('Error fetching data:', err)
        });
    }, [inputValue]); // This effect depends on inputValue and will re-run when inputValue changes
    useEffect(() => {
        const timer = setTimeout(() => {
          setCopied(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [copied]);
    if(error) {
        return <p className="noData">Something went wrong :(</p>
    }
    return (
        <>
          {shortenLink && (
            <div className="result">
              <p>{shortenLink}</p>
              <CopyToClipboard
                text={shortenLink}
                onCopy={() => setCopied(true)}
              >
                <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
              </CopyToClipboard>
            </div>
          )}
        </>
    );
}

export default LinkResult;