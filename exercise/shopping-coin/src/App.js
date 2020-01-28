import React, { Component } from "react";
import ButtonCoin from "./button-coin";
import ShowItem from "./showItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ money: this.state.money + 1 });
  }
  handleClick2(e) {
    e.preventDefault();
    this.setState({ money: this.state.money + 2 });
  }
  handleClick3(e) {
    e.preventDefault();
    this.setState({ money: this.state.money + 5 });
  }
  handleClick4(e) {
    e.preventDefault();
    this.setState({ money: this.state.money + 10 });
  }
  clear(e) {
    e.preventDefault();
    this.setState({ money: this.state.money = 0 });
  }

  handleBuy(e, price) {
    if (this.state.money >= price) {
      e.preventDefault();
      let { money } = this.state;
      money -= price;
      this.setState({ money });
      let ten = Math.trunc(money / 10);
      money = money - ten * 10;
      let five = Math.trunc(money / 5);
      money = money - five * 5;
      let two = Math.trunc(money / 2);
      money = money - two * 2;
      let baht = Math.trunc(money / 1);
      alert(`
        ขอบคุณสำหรับการซื้อ
        
        เงินทอน
        เหรียญสิบ: ${ten}
        เหรียญห้า: ${five}
        เหรียญสองบาท: ${two}
        เหรียญบาท: ${baht}
    `);
    } else alert("จำนวนเงินไม่เพียงพอ");
  }

  render() {
    return (
      <>
        <table style={ {backgroundColor: '#000', color: 'white', display: 'block'} }>
          <tbody>
            <tr>
              <td>
                <img src={require('./logo.svg')} width="50"></img>
              </td>
              <td>
                Shopping Coin
              </td>
            </tr>
          </tbody>
        </table>
      <br></br>
        <center>จำนวนเงินของคุณ</center>
        <ButtonCoin
          money={this.state.money}
          handleClick={this.handleClick}
          handleClick2={this.handleClick2}
          handleClick3={this.handleClick3}
          handleClick4={this.handleClick4}
          clear={this.clear}
        />
        <br></br>
        <br></br>
        <ShowItem handleBuy={this.handleBuy} />
      </>
      
    );
  }
}

export default App;
