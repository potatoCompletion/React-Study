import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });  // useState 파라미터는 초기값

    const nameInput = useRef();     //useRef 객체 생성

    const { name, nickname } = inputs; // 비구조화 할당 통해 값 추출 ( name = '', nickname = '')

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,     // 객체 복사       ...은 spread 문법 (javascript) interface 같은 느낌
            [name]: value  // name 키를 가진 값을 value로 설정             spread 문법 (javascript)
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
    }


    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />   // ref prop 값으로 설정하면 이벤트 실행시 포커스를 지정 값에 맞춤
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;