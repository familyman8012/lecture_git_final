import React, {useState, useRef, useCallback} from 'react'
import Lifunction from './Lifunction'
import Countbtn from './Countbtn'

function CalculationTest() {
    const array = [1,2,3,4,5];
    // 계산식 생략... 만약, 이게 30초걸리는 함수라면, 리랜더링시, 다시 시작하면 안됨. 이걸 react 에서 지원해줌.
    return array;
}

function Ftemplate() {    
    const [Value, setValue] = useState('갑변경');
    const [Value2, setValue2] = useState('갑변경');
    const [Result, setResult] = useState([]);
    const [Result2, setResult2] = useState([]);
    const [active, setActive] = useState(null);
    const [cardCont, setCardCont] = useState([1,2,3,4,5]);
    const [cardResult, setCardResult] = useState(0);
    // const [calculation, setCalculation] = useState(CalculationTest()); // -> 예를 들면, 이렇게 하면, 계속 함수를 다시 실행함.

    const fastCalc = useMemo(() => CalculationTest(),[]); // -> 리턴값 기억.
    const [calculation, setCalculation] = useState(fastCalc());


   //const inputRef = React.useRef(null);
    const ref = useRef(null);
    const ref2 = useRef(null);

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
    const onChange2 = (e) => {
        setValue2(e.target.value);
    };
    
    const resultBtn2 = () => {
        setResult2((prevState) => [...prevState, Value2]);
        ref2.current.value = "";
        ref2.current.focus();
    }
    const addOnParent = useCallback((getState) => {
        setActive((prevState) =>  getState);
    }, []);


    return (
        <div>
            <div>함수형 동작 원리</div>
            <h1>테스트폼1</h1>
            <form onSubmit={onSubmit}>
            <input
                ref={ref}
                type="text"
                onChange={onChange}
            />
            <button onClick={resultBtn}>결과버튼</button>
            </form>
            <div>{Result}</div>

            <h1>테스트폼2</h1>
            <input
            ref={ref2}
            type="text"
            onChange={onChange2}
            />
            <button onClick={resultBtn2}>추가</button>
            <ul>          
            {Result2.map((v, i) => {
                return (
                <Lifunction key={i} v={v} i={i} active={active} addOnParent={addOnParent} />
                );
            })}
            </ul>
            <div class="cardWrap">
                {cardCont.map((cont,i) => (
                        <div key={i} className={"card"}>
                            {cont}
                            <Countbtn />
                        </div>
                    )
                )}
            </div>
            {/* <div onClick={Alam('asasdf')}>sdfasdfda</div> */}
            {calculation.map((cal, i) => <div key={i}>{cal}</div>)}
        </div>
    )
}

export default Ftemplate
// 그외 개념
// const timeOut = useRef(null);
// const startTime = useRef();
// const endTime = useRef();

// timeout.current = setTimeout(()=>{
//                 setState('now');
//                 setMessage('지금 클릭');
//                 startTime.current = new Date();               
//             }, Math.floor(Math.random() * 1000) + 2000)

// endTime.current = new Date();

// useState 를 쓰는 순간, return 부분이 다시 동작.
// 리랜더링되지 않도록 해야하기때문에,

// 불필요한 랜더링은 막아야함. 
// 랜더링 안할 변수는 이렇게 useRef 로 함.
// 값이 바껴도 랜더링하고 싶지 않을때사용\

// 화면이 안바뀌고, 기록됨.

// 보통 timeout 이나 interval 

// 화면을 바꾸고 싶지는 않지만, 값이 바뀌는 거. 


// const [winNumbers, setWinNumbers] = useState(getWinNumbers());

// => function 컴포넌트는 전체가 다시 시작되기때문에, 밖에 함수인 getWinNumbers() 도 다시 시작됨.

// 만약, getWinNumbers() 가 90초 이상 걸리는 함수라면, 같은 함수가 반복되면서 시작되기때문에.
// 문제가 생기는데

// const lottoNumbers = useMemo(() => getWinNumbers(),[]);
// const [winNumbers, setWinNumbers] = useState(lottoNumbers());

// 이렇게 useMemo 를 해두면, 1번 캐싱하고 끝나기때문에, 괜춘.


// const onClickRedo = () => {
//         setWinNumbers(getWinNumbers());
//         setWinBalls([]);
//         setBonus(null);
//         setRedo(false);
       
//         timeouts.current = [];
//     }


// const onClickRedo = useCallback(() => {
//         setWinNumbers(getWinNumbers());
//         setWinBalls([]);
//         setBonus(null);
//         setRedo(false);
       
//         timeouts.current = [];
//     }, []);
    

// 이렇게 useCallback 으로 감싸면, 함수자체를 기억해서, 다시 구성하지 않음. 메모리제이션
// 문제는 재 실행시에도 
// console.log(winNumbers); 이랬을때
// 값이 계속 똑같은게 찍힘.


//  const onClickRedo = useCallback(() => {
//         console.log(winNumbers);
//         setWinNumbers(getWinNumbers());
//         setWinBalls([]);
//         setBonus(null);
//         setRedo(false);
       
//         timeouts.current = [];
//     }, [winNumbers]);

// 이럼됨.


// 필수적으로 useCallback 을 해야할때는,
// 자식컴포넌트에게 함수를 넘길때다.


//  {winBalls.map((v) => <Ball key={v} number={v} onClick={onClickRedo} />)}

// useMemo는 리턴값을 기억한다.
// useCallback 는 함수를 기억