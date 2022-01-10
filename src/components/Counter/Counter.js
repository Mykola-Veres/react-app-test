import React from 'react';
import './Counter.styled';
import Control from './Control';

export class Counter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 5,
  //     number: 10,
  // }}
  static defaultProps = {
    initValue: 55,
  };
  static propTypes = {};

  // состаяния
  state = {
    value: this.props.initValue,
    number: 10,
  };

  handelIncrement = event => {
    // console.log("click+")
    // console.log(this)
    console.log(event.target);
    const { target } = event;
    console.log(target);
    // const T = event.target
    // setTimeout (() => {
    //   console.log(T)
    // }, 1000)
    // this.setState ( {
    //   value: 5,
    //   number: 10101010101,
    // })
    // функция длЯ изменения актуального состояния
    this.setState(prevState => ({
      value: prevState.value + 5,
      number: prevState.number + 100,
    }));
  };
  handelReduction = event => {
    console.log('click-1');
    console.log(this);
  };
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Control
          onIncrement={this.handelIncrement}
          onReduction={this.handelReduction}
          value={this.state.value}
          number={this.state.number}
        />
      </div>
    );
  }
}
