import React from 'react'
import PlayerCard from '../components/PlayerCard';
import HouseCard from '../components/HouseCard';

function GameContainer(props) {
    console.log('Game Container Props:', props)
    let comparator = ">"
    return (
        <div>
            <h1>Your match</h1>
            <div className="game-container">
                <div className="house-card">
                    <h3>House's Card</h3>
                    <HouseCard
                        id={props.cards.AICard.id}
                        title={props.cards.AICard.title}
                    />
                </div>
                <div className="comparator">
                    <h1>{comparator}</h1>
                </div>
                <div className="player-card">
                    <h3>Player's Card</h3>
                    <PlayerCard
                        id={props.cards.playerCard.id}
                        title={props.cards.playerCard.title}
                        rating={props.cards.playerCard.rating}
                    />
                </div>
            </div>
        </div>
    )
}

export default GameContainer