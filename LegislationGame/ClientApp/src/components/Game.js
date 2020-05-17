import React, { Component } from 'react';
import Law from './Law.js';
import Bill from './Bill.js';
import Player from './Player.js';
import Parameters from './Parameters.js'
import './Game.css';

export class Game extends Component {
    static displayName = Game.name;

    constructor(props) {
        super(props);
        this.state = {
            blueDeckSize: 8,
            playerCount: 3,
            billSize: 2,
            handSize: 4,
            MyLaw: new Law(),
            MyBill: new Bill()
        };
        this.handleVote = this.handleVote.bind(this)
    }

    handleVote() {
        var Slate = this.state.MyBill.state;
        if (Slate.Ayes + Slate.Nays < this.state.playerCount)
            return;
        alert("This happened");

        if (Slate.Ayes > Slate.Nays) {
            var newLaw = this.state.MyLaw;
            var PassedBill = this.state.MyBill.activeLaws;
            console.log("passed bills", PassedBill)
            for (var x = 0; x < PassedBill.length; x++) {
                newLaw.blueCards[newLaw.blueCards.length] = PassedBill[x];
                //TODO: Check for conflicting laws
            }
            this.setState({ MyLaw: newLaw });
            //TODO: Check victory conditions
       

        }

        this.setState({ MyBill: new Bill() });
    }

    render() {
        return (
            <div className="container-fluid">
                <Bill Slate={this.state.MyBill} blueDeckSize={this.state.blueDeckSize} playerCount={this.state.playerCount} billSize={this.state.billSize} handSize={this.state.handSize} onVote={this.handleVote}></Bill>
                <Player blueDeckSize={this.state.blueDeckSize} playerCount={this.state.playerCount} billSize={this.state.billSize} handSize={this.state.handSize}></Player>
            </div>
        );
    }
}