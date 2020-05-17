import React, { Component } from 'react';
import './Law.css'

export default class Law extends Component {
    static displayName = Law.name;

    constructor(props) {
        super(props);
        this.state = {
       
        };
    }

    render() {
        return (
            <div id="LAWS" className='page-header'>
                <h1>ACTIVE LAWS</h1>
                <ul className='activeLaws'>
                    {this.props.Laws.map(item =>
                        <li>{item.key}:  <i class={item.icon}></i> : {item.impact}</li>
                    )}
                </ul>
            </div>
        );
}
}