import React, {useState, useCallback, useReducer} from 'react'
import Table from './Table'

const initialState = {
    winner: '',
    turn:'0',
    tableData : [
        ['','',''], 
        ['','',''], 
        ['','','']
    ]
}

const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL'

const reducer = (state, action) => {
    switch(action.type) {
        case SET_WINNER :
            // state.winner = action.winner 직접바꾸면 안됨. 이렇게 바꾸면 안된다.
            return {
                ...state,  // 얕게 복사를 하고.
                winner : action.winner // 바뀌는 부분만 이렇게 바꿈.
            }
        case CLICK_CELL : {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]]; //immer 라는 라이버러리로 가독성해결

            return {
                ...state,
            }
        }
    }
}



const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const onClickTable = useCallback(() => { 
        dispatch({type:'SET_WINNER', winner:'O'})
    }, [])
    return (
        <>
        <Table onClick={onClickTable} tableData={state.tableData}  />
        {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
}

export default TicTacToe
