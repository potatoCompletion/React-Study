import React, {useState} from 'react';

function InputSample() {
    const [kim, wan] = useState('');

    const onChange = (e) => {
        wan(e.target.value);
    }

    const onReset = () => {
        wan('');
    }

    return (
        <div>
            <input onChange={onChange} value={kim} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {kim}</b>
            </div>
        </div>
    )
}

export default InputSample;