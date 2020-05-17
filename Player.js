import React, { Component } from 'react';
import RedCard from './RedCard.js';

export default class Bill extends Component {
    static displayName = Bill.name;

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            redCards: [
                {
                    key: Math.floor(Math.random() * 8) + 1,
                    icon: 'fas fa-piggy-bank',
                    impact: "+"
                }, {
                    key: Math.floor(Math.random() * 8) + 1,
                    icon: 'fas fa-flag-usa',
                    impact: "-"
                }, {
                    key: Math.floor(Math.random() * 8) + 1,
                    icon: "fas fa-handshake",
                    impact: "+"
                }, {
                    key: Math.floor(Math.random() * 8) + 1,
                    icon: 'fas fa-balance-scale-right',
                    impact: "-"
                },
                {
                    key: Math.floor(Math.random() * 8) + 1,
                    icon: 'fas fa-dove',
                    impact: "-"
                }
            ], //Red cards
            voted: false
        };
    }

    emptySpace(){
        return(
            <div className="col-md-2">
                <div className="card-container">
                    <div className="card item" data-name="card-3">
                        <div className="card-inner white empty">
                            <p className="card-title ">EMPTY</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }


    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <div className='col-md-8 offset-md-4'>
                <div className="row users-cards">
                        {this.state.redCards.map(law =>< RedCard cardInfo = {law} > </RedCard>)}
                        {this.emptySpace()}
                </div>
                </div>
            </div>

        );
    }
}