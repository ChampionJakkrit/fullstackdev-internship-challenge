import React, { Component } from "react";
import "./App.css";

class ButtonCoin extends Component {
  render() {
    return (
        <center>
            <div>
                <p>{this.props.money}</p>
                <button onClick={e => this.props.handleClick(e)}>
                เหรียญบาท
                </button>
                <button onClick={e => this.props.handleClick2(e)}>
                เหรียญสองบาท
                </button>
                <button onClick={e => this.props.handleClick3(e)}>
                เหรียญห้าบาท
                </button>
                <button onClick={e => this.props.handleClick4(e)}>
                เหรียญสิบบาท
                </button>
                <button onClick={e => this.props.clear(e)}>
                รีเซ็ต
                </button>
            </div>
        </center>
    );
  }
}

export default ButtonCoin;
