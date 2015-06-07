
import React from 'react';

import styles from './accordion.css';


export default class Accordion extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.render = this.render.bind(this);
    this.state = {
      visible: false
    };
  }

  handleClick(ev) {
    ev.preventDefault();
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div className={ styles.base }>
        <header>
          <h4 className={ styles.h }>{ this.props.content.title }</h4>
          <a href="#" onClick={this.handleClick}>
            {this.state.visible ? String.fromCharCode(8613) :
              String.fromCharCode(8615) }
          </a>
        </header>
        <section className={!this.state.visible ? styles.hidden : ''}>
          <p>{ this.props.content.p }</p>
        </section>
      </div>
    );
  }
}
