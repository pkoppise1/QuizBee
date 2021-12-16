import React from 'react'

export default function Result({score,playAgain}) {
    return (
        <div>
            <div>You scored {score}/5 correct answers.</div>
            <button onClick={playAgain}>Play Again!</button>
            
        </div>
    )
}
