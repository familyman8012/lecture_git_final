import React, {useState, useRef} from 'react'

function Ftemplate() {
    const [Value, setValue] = useState('갑변경');
    const [Result, setResult] = useState('');
   //const inputRef = React.useRef(null);
    const ref = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        setResult(Value);
    }
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const resultBtn = () => {
        setResult(Value);
        ref.current.focus();
    }
    return (
        <div>
            <div>클래스 동작 원리</div>
            <form onSubmit={onSubmit}>
                <input ref={ref} type="text" onChange={onChange} />
                <button onClick={resultBtn}>결과버튼</button>
                <div>{Result}</div>
            </form>
        </div>
    )
}

export default Ftemplate
