import React, { useState, useEffect } from 'react';

export const Header = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId); // Clear interval to stop timer when component did unmount
        };
    }, []);

    return (
        <header className="container mt-3" style={{ "height": "50px", "flexShrink": "0" }}>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center"><h1>ToDo List</h1></div>
                <div className="col-3 d-flex flex-column justify-content-center"><h3>{date.toLocaleTimeString()}</h3></div>
            </div>
        </header>
    );
};
