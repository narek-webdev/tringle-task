import React, { useState } from "react";

import Dashboard from "./Dashboard";

const Main = () => {
    const [num, setNum] = useState(0);

    const [reverse, setReverse] = useState(0)

    const handleChange = val => {
        if (isNaN(+val)) return;

        setNum(val)
    }

    return (
        <div className="main">
            <input 
                className="main__input" 
                value={num} 
                onChange={e => handleChange(e.target.value)} 
            />

            <Dashboard num={num} reverse={reverse} />

            <button className="main__btn" onClick={() => setReverse(!reverse)}>Reverse</button>
        </div>
    )
}

export default Main;