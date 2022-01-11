import React, { useState } from 'react';

function Counter() {
    const [num, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    const style = {
        fontSize: 40
    }

    return (
        <>
            <div style={style}>
                <h1>{num}</h1>
            </div>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </>
    )
}

export default Counter

// 1-8 input 상태 관리하기 부터 하면 됨 (2022, 01, 10)