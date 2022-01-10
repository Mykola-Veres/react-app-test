import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };
  // show = () => {
  //   this.setState({visible: true})
  // }
  // hide = () => {
  //   this.setState({visible: false})
  // }

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {/* <button
        type="button"
        className="Dropdown__toggle"
        onClick={this.show}
      >Показать
      </button>
      <button
        type="button"
        className="Dropdown__toggle"
        onClick={this.hide}
      >Скрыть
      </button> */}

        {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
        {visible && <div className="">fhgtgrhnfghnfgf</div>}
      </div>
    );
  }
}

export default Dropdown;
