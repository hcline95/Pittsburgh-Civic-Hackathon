import React, {Component} from 'react';
import BlueCard from './BlueCard.js';
import Law from './Law'

export default class Bill extends Component {
    static displayName = Bill.name;

    constructor(props) {
        super(props);
        this.state = {
            blueCards: this.createBlueCards(),
            Ayes: 0,
            Nays: 0,
            activeLaws: []
        }; 
        this.CastVote = this.CastVote.bind(this);
        this.createBlueCards = this.createBlueCards.bind(this);
        console.log(this.props)
    }

    createBlueCards(){
        const iconOptions = ["fas fa-handshake","fas fa-balance-scale-right", "fas fa-flag-usa", "fas fa-piggy-bank", "fas fa-dove"]
        return([                {
            key: Math.floor(Math.random() * 8) + 1,
            icon: iconOptions[Math.floor(Math.random() * 5)],
            impact: "+"
        }, {
            key: Math.floor(Math.random() * 8) + 1,
            icon: iconOptions[Math.floor(Math.random() * 5)],
            impact: "-"
        }]
        )
    }

    votes() {
        return this.state.Ayes + this.state.Nays;
    }

    deck() {
        return (
            <div className="col-md-3">
                <div className="card-container">
                    <div className="card item" data-name="Blue-Deck">
                        <div className="box white">
                            <p className="draw-a-card ">
                                DRAW A CARD
                            </p>
                        </div>
                        <div className="card-inner blue">
                            <p className="card-title white-text">
                                BLUE DECK
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    emptySpot() {
        return (
            <div className="col-md-4">
                <div className="card-container">
                    <div className="card item" data-name="card-3">
                        <div className="card-inner white empty">
                            <p className="card-title ">EMPTY
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    ThisBill(props) {
        const slate = props.issues;
        const slatePrint = slate.map((issue) => <BlueCard issue={issue}></BlueCard>);
        return (
            <div>{slatePrint}</div>
        );
    }

    CastVote(cast) {
        if (cast > 0){

    
            this.setState({ Ayes: this.state.Ayes + 1 });
            this.setState(state => {
                const activeLaws = state.activeLaws.concat(state.blueCards);
                return {activeLaws: activeLaws}})
            this.setState({blueCards: this.createBlueCards()});
        }else if (cast < 0){
            this.setState({ Nays: this.state.Nays + 1 });
            this.setState({blueCards: this.createBlueCards()});
        }
        this.props.onVote();
    }

    render() {
        return (
            <div class='row justify-content-center'>
            <div class='col-md-4'>
            <div class='row justify-content-center'>
            <div className="btn btn-group">
                <button className='btn-lg btn-success' onClick={() => this.CastVote(1)} > AYE ({this.state.Ayes})</button>
                <button className='btn-lg btn-danger' onClick={() => this.CastVote(-1)} > NAY ({this.state.Nays})</button>
                <button className='btn-lg btn-primary' disabled onClick={() => this.CastVote(0)} > PRESENT (0)</button>
            </div>
            </div>
            <div class='row justify-content-center'>
            <Law Laws={this.state.activeLaws}></Law>
            </div>
            </div>
            <div class='col-md-8'>
          <div className='row justify-content-center'>
                <div className="page-header">
                    <h1>LEGISLATION: THE GAME</h1>
                </div>
                </div>
                <div className="row blue-row">
                {this.deck()}
                <div className="col-md-9">
                    <div className="row users-cards">
                        {this.state.blueCards.map(law =>< BlueCard cardInfo = {law} > </BlueCard>)}
                        {this.emptySpot()}
                    </div>
                </div>
                </div>
            </div>
        </div>
        );
    }
}