import React, { PureComponent } from 'react'

export default class LiClass extends PureComponent {
    render() {
        const {onAlert, v, i, active} = this.props;
        
        return (
            <li onClick={() => onAlert}>
                {v}{i}
            </li>
        )
    }
}
