import React, { Component } from "react";
import money from "./item.json";

export default class ShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    console.log(money);
    this.setState({ data: money.data });
  }

  render() {
    return (
      <center>
        <div>
          {this.state.data.map(ele => {
            return (
              <div>
                <img src={ele.image}></img>
                <h3>{ele.name}</h3>
                <p>ราคา: {ele.price} บาท</p>
                {ele.in_stock && <p>สินค้าคงเหลือ: มี</p>}
                {!ele.in_stock && <p>สินค้าคงเหลือ: ไม่มี</p>}
                <button onClick={e => this.props.handleBuy(e, ele.price)}>
                  Buy
                </button>
                <br></br><br></br><br></br><br></br><br></br><br></br>
              </div>
              
            );
          })}
        </div>
      </center>
    );
  }
}
