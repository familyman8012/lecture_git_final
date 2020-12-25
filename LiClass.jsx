import React, { PureComponent } from "react";

export default class LiClass extends PureComponent {
  addOnChild = (i) => {
    this.props.addOnParent(i);
  };
  render() {
    const { onAlert, v, i, active } = this.props;
    return (
      <li className={active == i ? "on" : ""}  onClick={() => this.addOnChild(i)}>
        {v}{i}
      </li>
    );
  }
}
