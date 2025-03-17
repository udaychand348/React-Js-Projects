import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation
import InfoContext from './cont';

const Fir = () => {
    const { second, setSecond } = useContext(InfoContext);
    const [str1, setStr1] = useState("");
    const navigate = useNavigate(); // ✅ Hook for navigation

    const chandler = (e) => {
        setStr1(e.target.value);
    };

    const bhandler = (e) => {
        e.preventDefault();
        setSecond(str1);
    };

    // ✅ Navigate to third page after first is updated
    useEffect(() => {
        if (second !== "2") { // Ensure it updates from default value
            navigate("/3");
        }
    }, [second, navigate]); // Runs when first changes

    return (
        <div>
            <center>
                <h1>Hello, this is the first page. I am going to share a variable with the third page.</h1>
                <form onSubmit={bhandler}>
                    <h2>Enter the value:</h2>
                    <input type="text" placeholder="Please enter value" value={str1} onChange={chandler} />
                    <br /><br />
                    <button type="submit">Enter</button>
                </form>
                <h3>Current first value: {second}</h3>
            </center>
        </div>
    );
};

export default Fir;
