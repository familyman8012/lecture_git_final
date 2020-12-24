import React, { Component, useCallback 
 } from 'react'
import LiClass from './LiClass'

class Ctemplate extends Component {
    state = {
            value : '값병경',
            value2 : '값병경',
            result : [],
            result2 : [],
            active : null            
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({result:this.state.value});
    }
    onChange = (e) => {
        this.setState({value:e.target.value})
    }    
    resultBtn = () => {
        this.setState({result:this.state.value});
        this.input.focus();
    }
    onChange2 = (e) => {
        this.setState({value2:e.target.value})
    }
    resultBtn2 = () => {
        const {value2} = this.state;
        this.setState((prevState) => {
            return {                
                result2:[...prevState.result2, value2]
            }
        });
        this.input2.value = '';
        this.input2.focus();
    }
    // input;
    // onRefInput = (c) => {this.input = c;}
   alertIndex = (i) =>{
       alert(i);
    //  this.setState({
    //      active : i
    //  });
   }
   addON = (i) => {
    this.state.active == i ? 'on' : ''
   }
   onAlert = () => {alert('aa')}
  
    render() {
        const {result, result2} = this.state;
        return (
            <div>
                <div>클래스 동작 원리</div>
                <h1>테스트폼1</h1>
                <form onSubmit={this.onSubmit}>
                    <input ref={(ref) => this.input=ref} type="text" onChange={this.onChange} />
                    <button onClick={this.resultBtn}>결과버튼</button>                    
                </form>
                <div>{result}</div>


                <h1>테스트폼2</h1>
                <input ref={(ref) => this.input2=ref} type="text" onChange={this.onChange2} />
                <button onClick={this.resultBtn2}>추가</button>  
                <ul>
                {/* {result2.map((v,i) => {
                    return (
                    <li className={this.state.active == i ? 'on' : ''} key={i} onClick={() => this.alertIndex(i)}>
                        {v}{i}
                    </li>)})
                } */}
                {
                    result2.map((v,i) => {return ( <LiClass  key={i} v={v} i={i} onAlert={this.onAlert}  />) })
                }
                </ul>


            </div>

        )
    }
}
export default Ctemplate;