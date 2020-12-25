import React, {memo} from 'react'

// const try = (props) => {
// 	return(
// 	<li>
//             <div>{props.tryInfo.try}</div>
//             <div>{props.tryInfo.result}</div>
//         	</li>
// 	);
// }

const Lifunction = memo(({onAlert, v, i, active, addOnParent}) => {
    const addOnChild = (i) => {
        addOnParent(i);
    };
    return (
        <li className={active == i ? "on" : ""}  onClick={() => addOnChild(i)}>
        {v}{i}
      </li>
    )
})

export default Lifunction
