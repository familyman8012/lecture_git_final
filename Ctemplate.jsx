import React, { Component, useCallback } from "react";
import LiClass from "./LiClass";
import Countbtn from "./Countbtn";

// this 를 쓸 일 없을 것 같은 함수는 밖으로 뺀다.
function CalculationTest() {
    const array = [1,2,3,4,5];
    // 계산식 생략...
    return array;
}

class Ctemplate extends Component {
  state = {
    value: "값병경",
    value2: "값병경",
    result: [],
    result2: [],
    active: null,
    cardCont : [1,2,3,4,5],
    cardResult : 0,
    calculation : CalculationTest()
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ result: this.state.value });
  };
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  resultBtn = () => {
    this.setState({ result: this.state.value });
    this.input.focus();
  };
  onChange2 = (e) => {
    this.setState({ value2: e.target.value });
  };
  resultBtn2 = () => {
    const { value2 } = this.state;
    this.setState((prevState) => {
      return {
        result2: [...prevState.result2, value2],
      };
    });
    this.input2.value = "";
    this.input2.focus();
  };
  // input;
  // onRefInput = (c) => {this.input = c;}
  addOnParent = (getState) => {
    this.setState((prevState) => {
      return { active: getState };
    });
  };

  //<div onClick={() => this.Alam('asasdf')}>sdfasdfda</div> 
  // <div onClick={this.Alam('asasdf')}>sdfasdfda</div>
  Alam = (string1) => () => {
    alert(string1)
  }

  render() {
    const { result, result2, active, cardCont, calculation  } = this.state;
    return (
      <div>
        <div>클래스 동작 원리</div>
        <h1>테스트폼1</h1>
        <form onSubmit={this.onSubmit}>
          <input
            ref={(ref) => (this.input = ref)}
            type="text"
            onChange={this.onChange}
          />
          <button onClick={this.resultBtn}>결과버튼</button>
        </form>
        <div>{result}</div>

        <h1>테스트폼2</h1>
        <input
          ref={(ref) => (this.input2 = ref)}
          type="text"
          onChange={this.onChange2}
        />
        <button onClick={this.resultBtn2}>추가</button>
        <ul>          
          {result2.map((v, i) => {
            return (
              <LiClass key={i} v={v} i={i} active={active} addOnParent={this.addOnParent} />
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
        <div onClick={this.Alam('asasdf')}>sdfasdfda</div>
        {calculation.map((cal, i) => <div key={i}>{cal}</div>)}
      </div>
    );
  }
}
export default Ctemplate;

// 추가 내용
// constructor -> render -> ref -> componentDidMount -> (setState/Props) 바뀔때 -> shouldComponent -> render -> componentDidupdate -> 
//부모가 나를 없앴을때 componentWillUnmount

// componentDidMount() { // 컴포넌트가 첫 렌더링 된 후, 여기에 비동기 요청을 많이.
//     this.interval = setInterval(() => {
//         console.log('asdf');
//     }, 1000)
// }
// componentDidUpdate() { // 리랜더링 후

// }
// componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청정리를 많이 해요.
//     clearInterval(this.interval);
// }